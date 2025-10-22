import { loadStripe } from '@stripe/stripe-js'

// Initialize Stripe with your publishable key
export const stripePromise = loadStripe(
  'pk_test_51RjtFRFxXhubDLxSRutMd8T9eGUlQbn1T491IEon3Q3VgGeDnKtz11LV1n1Kn4w8x0ShINPXPuGnRvwlxpNRevb900UCVmsGYo'
)
