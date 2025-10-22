import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function ThankYou() {
  const navigate = useNavigate()

  useEffect(() => {
    // Get session_id from URL
    const urlParams = new URLSearchParams(window.location.search)
    const sessionId = urlParams.get('session_id')

    if (sessionId) {
      console.log("Payment successful! Session ID:", sessionId)
    }
  }, [])

  return (
    <main>
      <LpNavbar1 />

      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-6">
                <div
                  className="rounded-full p-3"
                  style={{ backgroundColor: "var(--purple-primary)" }}
                >
                  <CheckCircle2 className="h-16 w-16 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Thank You for Your Booking!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg text-muted-foreground">
                Your payment has been processed successfully.
              </div>

              <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                <p className="font-medium">What happens next?</p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>✓ You'll receive a confirmation email shortly</li>
                  <li>✓ Our team will contact you to confirm the cleaning schedule</li>
                  <li>✓ A cleaner will be assigned to your booking</li>
                </ul>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => navigate("/")}
                  className="w-full md:w-auto px-8"
                  style={{
                    backgroundColor: "var(--purple-primary)",
                    color: "white",
                  }}
                >
                  Return to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer1 />
    </main>
  )
}
