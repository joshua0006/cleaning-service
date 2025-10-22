import { useNavigate } from "react-router-dom"
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"

export default function Cancelled() {
  const navigate = useNavigate()

  return (
    <main>
      <LpNavbar1 />

      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-red-100 p-3">
                  <XCircle className="h-16 w-16 text-red-600" />
                </div>
              </div>
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Payment Cancelled
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg text-muted-foreground">
                Your payment was cancelled and no charges were made.
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-sm text-muted-foreground">
                  Don't worry! Your booking details are still saved.
                  You can complete your booking whenever you're ready.
                </p>
              </div>

              <div className="pt-4 flex flex-col md:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate("/checkout")}
                  style={{
                    backgroundColor: "var(--orange-cta)",
                    color: "white",
                  }}
                >
                  Return to Checkout
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/")}
                >
                  Go to Home
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
