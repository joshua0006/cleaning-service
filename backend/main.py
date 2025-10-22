from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import stripe
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS setup for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")


class BookingData(BaseModel):
    postalCode: str
    cleaningPlan: str
    frequency: str
    firstCleanDate: Optional[str] = None
    bedrooms: int = 0
    bathrooms: int = 0
    duration: str
    startTime: str
    language: Optional[str] = None
    needIroning: bool = False
    hasPet: bool = False


def calculate_price(booking: BookingData) -> float:
    """Calculate total price based on booking details"""
    base_price = 0

    # Cleaning plan pricing
    plan_prices = {
        "deep-cleaning": 150,
        "regular-cleaning": 80,
        "move-in-out": 200,
        "office-cleaning": 120,
    }
    base_price = plan_prices.get(booking.cleaningPlan, 0)

    # Duration multiplier
    duration_multiplier = {
        "2-hours": 1,
        "3-hours": 1.4,
        "4-hours": 1.8,
        "5-hours": 2.2,
    }
    base_price *= duration_multiplier.get(booking.duration, 1)

    # Additional services
    if booking.needIroning:
        base_price += 30

    # Frequency discount
    if booking.frequency == "weekly":
        base_price *= 0.9
    elif booking.frequency == "bi-weekly":
        base_price *= 0.95

    return round(base_price, 2)


@app.post("/api/create-checkout-session")
async def create_checkout_session(booking: BookingData):
    try:
        # Calculate total price
        total_price = calculate_price(booking)

        # Convert to cents for Stripe
        amount_cents = int(total_price * 100)

        # Create Stripe checkout session
        session = stripe.checkout.Session.create(
            payment_method_types=["card"],
            line_items=[
                {
                    "price_data": {
                        "currency": "sgd",
                        "product_data": {
                            "name": f"{booking.cleaningPlan.replace('-', ' ').title()} - {booking.duration.replace('-', ' ')}",
                            "description": f"Cleaning service for postal code {booking.postalCode}",
                        },
                        "unit_amount": amount_cents,
                    },
                    "quantity": 1,
                }
            ],
            mode="payment",
            success_url=os.getenv("SUCCESS_URL", "http://localhost:3001/thank-you?session_id={CHECKOUT_SESSION_ID}"),
            cancel_url=os.getenv("CANCEL_URL", "http://localhost:3001/cancelled"),
            metadata={
                "postal_code": booking.postalCode,
                "cleaning_plan": booking.cleaningPlan,
                "frequency": booking.frequency,
                "duration": booking.duration,
            }
        )

        return {"sessionId": session.id}

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.get("/health")
async def health_check():
    return {"status": "ok"}
