"use client"

import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { format } from "date-fns"
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Check, Minus, Plus, Bed, Bath, Shirt, PawPrint, Clock, Languages } from "lucide-react"
import { stripePromise } from "@/lib/stripe"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar as CalendarIcon } from "lucide-react"

interface BookingData {
  postalCode: string
  cleaningPlan: string
  frequency: string
  firstCleanDate: Date | undefined
  bedrooms: number
  bathrooms: number
  duration: string
  startTime: string
  language: string
  needIroning: boolean
  hasPet: boolean
}

export default function Checkout() {
  const location = useLocation()
  const navigate = useNavigate()
  const postalCode = location.state?.postalCode || ""

  // Redirect if no postal code
  if (!postalCode) {
    navigate("/")
    return null
  }

  const [bookingData, setBookingData] = useState<BookingData>({
    postalCode,
    cleaningPlan: "",
    frequency: "",
    firstCleanDate: undefined,
    bedrooms: 0,
    bathrooms: 0,
    duration: "",
    startTime: "",
    language: "",
    needIroning: false,
    hasPet: false,
  })

  const [isProcessing, setIsProcessing] = useState(false)

  // Calculate total price based on selections
  const calculatePrice = () => {
    let basePrice = 0

    // Cleaning plan pricing
    const planPrices: Record<string, number> = {
      "deep-cleaning": 150,
      "regular-cleaning": 80,
      "move-in-out": 200,
      "office-cleaning": 120,
    }
    basePrice += planPrices[bookingData.cleaningPlan] || 0

    // Duration multiplier
    const durationMultiplier: Record<string, number> = {
      "2-hours": 1,
      "3-hours": 1.4,
      "4-hours": 1.8,
      "5-hours": 2.2,
    }
    basePrice *= durationMultiplier[bookingData.duration] || 1

    // Additional services
    if (bookingData.needIroning) basePrice += 30

    // Frequency discount
    if (bookingData.frequency === "weekly") basePrice *= 0.9
    if (bookingData.frequency === "bi-weekly") basePrice *= 0.95

    return basePrice.toFixed(2)
  }

  const handleConfirmBooking = async () => {
    setIsProcessing(true)

    try {
      const stripe = await stripePromise

      if (!stripe) {
        alert("Stripe failed to load. Please refresh the page.")
        setIsProcessing(false)
        return
      }

      // Call backend to create checkout session
      const response = await fetch("http://localhost:8000/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      })

      if (!response.ok) {
        throw new Error("Failed to create checkout session")
      }

      const { sessionId } = await response.json()

      // Redirect to Stripe Checkout using session ID
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      })

      if (error) {
        console.error("Stripe checkout error:", error)
        alert("Failed to redirect to payment. Please try again.")
      }
    } catch (error) {
      console.error("Error creating checkout session:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  const isFormValid = () => {
    return (
      bookingData.cleaningPlan &&
      bookingData.frequency &&
      bookingData.firstCleanDate &&
      bookingData.duration &&
      bookingData.startTime
    )
  }

  return (
    <main>
      <LpNavbar1 />

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Complete Your Booking
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Form Sections */}
            <div className="lg:col-span-2 space-y-6">

              {/* Section 1: Cleaning Plan - Pricing Tiers */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Choose your cleaning plan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Regular Cleaning - Basic Tier */}
                  <Card
                    className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg h-full flex flex-col ${
                      bookingData.cleaningPlan === "regular-cleaning"
                        ? "ring-2 ring-purple-primary shadow-lg"
                        : "hover:scale-105"
                    }`}
                    onClick={() =>
                      setBookingData({ ...bookingData, cleaningPlan: "regular-cleaning" })
                    }
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs">
                          Basic
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">Regular Cleaning</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$80</span>
                        <span className="text-muted-foreground text-sm ml-1">base</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-3 flex-1">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Standard maintenance cleaning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Dusting and vacuuming</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Kitchen and bathroom cleaning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Floor mopping</span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <Button
                          variant={
                            bookingData.cleaningPlan === "regular-cleaning"
                              ? "default"
                              : "outline"
                          }
                          className="w-full"
                          style={
                            bookingData.cleaningPlan === "regular-cleaning"
                              ? {
                                  backgroundColor: "var(--purple-primary)",
                                  color: "white",
                                }
                              : undefined
                          }
                          onClick={(e) => {
                            e.stopPropagation()
                            setBookingData({ ...bookingData, cleaningPlan: "regular-cleaning" })
                          }}
                        >
                          {bookingData.cleaningPlan === "regular-cleaning" ? "✓ Selected" : "Select Plan"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Deep Cleaning - Featured/Recommended Tier */}
                  <Card
                    className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg h-full flex flex-col ${
                      bookingData.cleaningPlan === "deep-cleaning"
                        ? "ring-2 ring-purple-primary shadow-lg"
                        : "hover:scale-105"
                    }`}
                    onClick={() =>
                      setBookingData({ ...bookingData, cleaningPlan: "deep-cleaning" })
                    }
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="mb-2">
                        <Badge
                          className="text-xs"
                          style={{
                            backgroundColor: "var(--purple-primary)",
                            color: "white",
                          }}
                        >
                          ⭐ Recommended
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">Deep Cleaning</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$150</span>
                        <span className="text-muted-foreground text-sm ml-1">base</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-3 flex-1">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium">Everything in Regular</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Thorough cleaning of all areas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Behind appliances cleaning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Detailed scrubbing and sanitizing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Window cleaning (interior)</span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <Button
                          variant={
                            bookingData.cleaningPlan === "deep-cleaning"
                              ? "default"
                              : "outline"
                          }
                          className="w-full"
                          style={
                            bookingData.cleaningPlan === "deep-cleaning"
                              ? {
                                  backgroundColor: "var(--purple-primary)",
                                  color: "white",
                                }
                              : undefined
                          }
                          onClick={(e) => {
                            e.stopPropagation()
                            setBookingData({ ...bookingData, cleaningPlan: "deep-cleaning" })
                          }}
                        >
                          {bookingData.cleaningPlan === "deep-cleaning" ? "✓ Selected" : "Select Plan"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Move In/Out - Premium Tier */}
                  <Card
                    className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg h-full flex flex-col ${
                      bookingData.cleaningPlan === "move-in-out"
                        ? "ring-2 ring-purple-primary shadow-lg"
                        : "hover:scale-105"
                    }`}
                    onClick={() =>
                      setBookingData({ ...bookingData, cleaningPlan: "move-in-out" })
                    }
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs">
                          Premium
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">Move In/Out</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$200</span>
                        <span className="text-muted-foreground text-sm ml-1">base</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-3 flex-1">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium">Everything in Deep Cleaning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Complete empty space cleaning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Inside cabinets and drawers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Wall and baseboard cleaning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Move-in/out ready condition</span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <Button
                          variant={
                            bookingData.cleaningPlan === "move-in-out" ? "default" : "outline"
                          }
                          className="w-full"
                          style={
                            bookingData.cleaningPlan === "move-in-out"
                              ? {
                                  backgroundColor: "var(--purple-primary)",
                                  color: "white",
                                }
                              : undefined
                          }
                          onClick={(e) => {
                            e.stopPropagation()
                            setBookingData({ ...bookingData, cleaningPlan: "move-in-out" })
                          }}
                        >
                          {bookingData.cleaningPlan === "move-in-out" ? "✓ Selected" : "Select Plan"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Section 2: Frequency */}
              <div>
                <h3 className="text-xl font-semibold mb-4">How often do you need your cleaner?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

                  {/* One-time */}
                  <button
                    type="button"
                    onClick={() => setBookingData({ ...bookingData, frequency: "one-time" })}
                    className={`relative p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                      bookingData.frequency === "one-time"
                        ? "border-purple-primary bg-purple-primary/5"
                        : "border-border hover:border-purple-primary/50"
                    }`}
                    style={
                      bookingData.frequency === "one-time"
                        ? { borderColor: "var(--purple-primary)" }
                        : undefined
                    }
                  >
                    <div className="text-center">
                      <div className="font-semibold">One-time</div>
                      <div className="text-sm text-muted-foreground mt-1">Single service</div>
                    </div>
                  </button>

                  {/* Weekly */}
                  <button
                    type="button"
                    onClick={() => setBookingData({ ...bookingData, frequency: "weekly" })}
                    className={`relative p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                      bookingData.frequency === "weekly"
                        ? "border-purple-primary bg-purple-primary/5"
                        : "border-border hover:border-purple-primary/50"
                    }`}
                    style={
                      bookingData.frequency === "weekly"
                        ? { borderColor: "var(--purple-primary)" }
                        : undefined
                    }
                  >
                    <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs">
                      Save 10%
                    </Badge>
                    <div className="text-center mt-2">
                      <div className="font-semibold">Weekly</div>
                      <div className="text-sm text-muted-foreground mt-1">Best value</div>
                    </div>
                  </button>

                  {/* Bi-weekly */}
                  <button
                    type="button"
                    onClick={() => setBookingData({ ...bookingData, frequency: "bi-weekly" })}
                    className={`relative p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                      bookingData.frequency === "bi-weekly"
                        ? "border-purple-primary bg-purple-primary/5"
                        : "border-border hover:border-purple-primary/50"
                    }`}
                    style={
                      bookingData.frequency === "bi-weekly"
                        ? { borderColor: "var(--purple-primary)" }
                        : undefined
                    }
                  >
                    <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs">
                      Save 5%
                    </Badge>
                    <div className="text-center mt-2">
                      <div className="font-semibold">Bi-weekly</div>
                      <div className="text-sm text-muted-foreground mt-1">Every 2 weeks</div>
                    </div>
                  </button>

                  {/* Monthly */}
                  <button
                    type="button"
                    onClick={() => setBookingData({ ...bookingData, frequency: "monthly" })}
                    className={`relative p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                      bookingData.frequency === "monthly"
                        ? "border-purple-primary bg-purple-primary/5"
                        : "border-border hover:border-purple-primary/50"
                    }`}
                    style={
                      bookingData.frequency === "monthly"
                        ? { borderColor: "var(--purple-primary)" }
                        : undefined
                    }
                  >
                    <div className="text-center">
                      <div className="font-semibold">Monthly</div>
                      <div className="text-sm text-muted-foreground mt-1">Once a month</div>
                    </div>
                  </button>

                </div>
              </div>

              {/* Section 3: First Clean Date */}
              <Card>
                <CardHeader>
                  <CardTitle>When do you want your first clean?</CardTitle>
                </CardHeader>
                <CardContent>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {bookingData.firstCleanDate ? (
                          format(bookingData.firstCleanDate, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0"
                      style={{
                        "--primary": "var(--purple-primary)",
                        "--primary-foreground": "white"
                      } as React.CSSProperties}
                    >
                      <Calendar
                        mode="single"
                        selected={bookingData.firstCleanDate}
                        onSelect={(date) =>
                          setBookingData({ ...bookingData, firstCleanDate: date })
                        }
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </CardContent>
              </Card>

              {/* Section 4: Home Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Tell us about your home (optional)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Bedrooms Card */}
                    <Card>
                      <CardContent className="pt-4 pb-4 px-3">
                        <div className="flex flex-col items-center space-y-3">
                          <div className="flex items-center gap-2">
                            <Bed className="h-5 w-5" style={{ color: "var(--purple-primary)" }} />
                            <Label className="text-base font-medium">Bedrooms</Label>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="h-10 w-10"
                              onClick={() =>
                                setBookingData({
                                  ...bookingData,
                                  bedrooms: Math.max(0, bookingData.bedrooms - 1),
                                })
                              }
                              disabled={bookingData.bedrooms === 0}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-2xl font-semibold w-12 text-center">
                              {bookingData.bedrooms}
                            </span>
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="h-10 w-10"
                              onClick={() =>
                                setBookingData({
                                  ...bookingData,
                                  bedrooms: Math.min(10, bookingData.bedrooms + 1),
                                })
                              }
                              disabled={bookingData.bedrooms === 10}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Bathrooms Card */}
                    <Card>
                      <CardContent className="pt-4 pb-4 px-3">
                        <div className="flex flex-col items-center space-y-3">
                          <div className="flex items-center gap-2">
                            <Bath className="h-5 w-5" style={{ color: "var(--purple-primary)" }} />
                            <Label className="text-base font-medium">Bathrooms</Label>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="h-10 w-10"
                              onClick={() =>
                                setBookingData({
                                  ...bookingData,
                                  bathrooms: Math.max(0, bookingData.bathrooms - 1),
                                })
                              }
                              disabled={bookingData.bathrooms === 0}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-2xl font-semibold w-12 text-center">
                              {bookingData.bathrooms}
                            </span>
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="h-10 w-10"
                              onClick={() =>
                                setBookingData({
                                  ...bookingData,
                                  bathrooms: Math.min(10, bookingData.bathrooms + 1),
                                })
                              }
                              disabled={bookingData.bathrooms === 10}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Ironing Service Card */}
                    <Card
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        bookingData.needIroning
                          ? "border-2 border-purple-primary"
                          : "hover:border-purple-primary/50"
                      }`}
                      style={
                        bookingData.needIroning
                          ? { borderColor: "var(--purple-primary)" }
                          : undefined
                      }
                      onClick={() =>
                        setBookingData({
                          ...bookingData,
                          needIroning: !bookingData.needIroning,
                        })
                      }
                    >
                      <CardContent className="pt-4 pb-4 px-3">
                        <div className="flex flex-col items-center space-y-3">
                          <div className="flex items-center gap-2">
                            <Shirt className="h-5 w-5" style={{ color: "var(--purple-primary)" }} />
                            <Label className="text-base font-medium">Ironing</Label>
                          </div>
                          <Label className="text-sm text-center">
                            I need ironing
                          </Label>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Pet Card */}
                    <Card
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        bookingData.hasPet
                          ? "border-2 border-purple-primary"
                          : "hover:border-purple-primary/50"
                      }`}
                      style={
                        bookingData.hasPet
                          ? { borderColor: "var(--purple-primary)" }
                          : undefined
                      }
                      onClick={() =>
                        setBookingData({
                          ...bookingData,
                          hasPet: !bookingData.hasPet,
                        })
                      }
                    >
                      <CardContent className="pt-4 pb-4 px-3">
                        <div className="flex flex-col items-center space-y-3">
                          <div className="flex items-center gap-2">
                            <PawPrint className="h-5 w-5" style={{ color: "var(--purple-primary)" }} />
                            <Label className="text-base font-medium">Pet</Label>
                          </div>
                          <Label className="text-sm text-center">
                            I have a pet
                          </Label>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* Section 5: Cleaning Duration */}
              <Card>
                <CardHeader>
                  <CardTitle>Select your cleaning duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select
                    value={bookingData.duration}
                    onValueChange={(value) =>
                      setBookingData({ ...bookingData, duration: value })
                    }
                  >
                    <SelectTrigger className="h-14 border-2 hover:border-purple-primary/50 transition-all">
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5" style={{ color: "var(--purple-primary)" }} />
                        <SelectValue placeholder="Select duration" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2-hours">2 hours</SelectItem>
                      <SelectItem value="3-hours">3 hours</SelectItem>
                      <SelectItem value="4-hours">4 hours</SelectItem>
                      <SelectItem value="5-hours">5+ hours</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Section 6: Preferred Start Time */}
              <Card>
                <CardHeader>
                  <CardTitle>Select preferred start time</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select
                    value={bookingData.startTime}
                    onValueChange={(value) =>
                      setBookingData({ ...bookingData, startTime: value })
                    }
                  >
                    <SelectTrigger className="h-14 border-2 hover:border-purple-primary/50 transition-all">
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5" style={{ color: "var(--purple-primary)" }} />
                        <SelectValue placeholder="Select time" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="08:00">8:00 AM</SelectItem>
                      <SelectItem value="09:00">9:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                      <SelectItem value="13:00">1:00 PM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                      <SelectItem value="18:00">6:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Section 7: Language Preference (Optional) */}
              <Card>
                <CardHeader>
                  <CardTitle>Any preferred language? (optional)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select
                    value={bookingData.language}
                    onValueChange={(value) =>
                      setBookingData({ ...bookingData, language: value })
                    }
                  >
                    <SelectTrigger className="h-14 border-2 hover:border-purple-primary/50 transition-all">
                      <div className="flex items-center gap-3">
                        <Languages className="h-5 w-5" style={{ color: "var(--purple-primary)" }} />
                        <SelectValue placeholder="Select language" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="mandarin">Mandarin</SelectItem>
                      <SelectItem value="malay">Malay</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Postal Code
                    </div>
                    <div className="text-lg font-semibold">{postalCode}</div>
                  </div>

                  {bookingData.cleaningPlan && (
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Cleaning Plan
                      </div>
                      <div className="capitalize">
                        {bookingData.cleaningPlan.replace("-", " ")}
                      </div>
                    </div>
                  )}

                  {bookingData.frequency && (
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Frequency
                      </div>
                      <div className="capitalize">
                        {bookingData.frequency.replace("-", " ")}
                      </div>
                    </div>
                  )}

                  {bookingData.firstCleanDate && (
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        First Clean
                      </div>
                      <div>{format(bookingData.firstCleanDate, "PPP")}</div>
                    </div>
                  )}

                  {bookingData.duration && (
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Duration
                      </div>
                      <div className="capitalize">
                        {bookingData.duration.replace("-", " ")}
                      </div>
                    </div>
                  )}

                  {bookingData.startTime && (
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Start Time
                      </div>
                      <div>{bookingData.startTime}</div>
                    </div>
                  )}

                  {bookingData.language && (
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Language Preference
                      </div>
                      <div className="capitalize">{bookingData.language}</div>
                    </div>
                  )}

                  {(bookingData.bedrooms > 0 || bookingData.bathrooms > 0) && (
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Home Details
                      </div>
                      <div className="space-y-1">
                        {bookingData.bedrooms > 0 && <div>• {bookingData.bedrooms} bedroom(s)</div>}
                        {bookingData.bathrooms > 0 && <div>• {bookingData.bathrooms} bathroom(s)</div>}
                      </div>
                    </div>
                  )}

                  {(bookingData.needIroning || bookingData.hasPet) && (
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Additional Information
                      </div>
                      <div className="space-y-1">
                        {bookingData.needIroning && <div>• Ironing (+$30)</div>}
                        {bookingData.hasPet && <div>• Has pet</div>}
                      </div>
                    </div>
                  )}

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span style={{ color: "var(--orange-cta)" }}>
                        ${calculatePrice()}
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={handleConfirmBooking}
                    disabled={!isFormValid() || isProcessing}
                    className="w-full h-12 text-base font-medium"
                    style={{
                      backgroundColor: "var(--orange-cta)",
                      color: "white",
                    }}
                  >
                    {isProcessing ? "Processing..." : "Confirm Booking"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer1 />
    </main>
  )
}
