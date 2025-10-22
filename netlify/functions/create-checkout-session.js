import Stripe from 'stripe';

// Initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Calculate total price based on booking details
function calculatePrice(booking) {
  let basePrice = 0;

  // Cleaning plan pricing
  const planPrices = {
    'deep-cleaning': 150,
    'regular-cleaning': 80,
    'move-in-out': 200,
    'office-cleaning': 120,
  };
  basePrice = planPrices[booking.cleaningPlan] || 0;

  // Duration multiplier
  const durationMultiplier = {
    '2-hours': 1,
    '3-hours': 1.4,
    '4-hours': 1.8,
    '5-hours': 2.2,
  };
  basePrice *= durationMultiplier[booking.duration] || 1;

  // Additional services
  if (booking.needIroning) {
    basePrice += 30;
  }

  // Frequency discount
  if (booking.frequency === 'weekly') {
    basePrice *= 0.9;
  } else if (booking.frequency === 'bi-weekly') {
    basePrice *= 0.95;
  }

  return Math.round(basePrice * 100) / 100;
}

export const handler = async (event) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse booking data
    const booking = JSON.parse(event.body);

    // Calculate total price
    const totalPrice = calculatePrice(booking);
    const amountCents = Math.round(totalPrice * 100);

    // Determine URLs based on environment
    const isProduction = process.env.CONTEXT === 'production';
    const baseUrl = isProduction
      ? process.env.URL || 'https://athena-cleaning.netlify.app'
      : 'http://localhost:3001';

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'sgd',
            product_data: {
              name: `${booking.cleaningPlan.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - ${booking.duration.replace(/-/g, ' ')}`,
              description: `Cleaning service for postal code ${booking.postalCode}`,
            },
            unit_amount: amountCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancelled`,
      metadata: {
        postal_code: booking.postalCode,
        cleaning_plan: booking.cleaningPlan,
        frequency: booking.frequency,
        duration: booking.duration,
      },
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
