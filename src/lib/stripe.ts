import { loadStripe } from '@stripe/stripe-js'

// Initialize Stripe with publishable key from environment variable
// Fallback to test key for local development
const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ||
  'pk_test_51RjtFRFxXhubDLxSRutMd8T9eGUlQbn1T491IEon3Q3VgGeDnKtz11LV1n1Kn4w8x0ShINPXPuGnRvwlxpNRevb900UCVmsGYo'

export const stripePromise = loadStripe(publishableKey)
