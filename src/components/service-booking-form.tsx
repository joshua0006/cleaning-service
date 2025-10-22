"use client"

import { useState, useRef, useLayoutEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverAnchor,
} from "@/components/ui/popover"

export function ServiceBookingForm() {
  const [postalCode, setPostalCode] = useState<string>("")
  const [error, setError] = useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus lock - prevent focus loss when error state changes
  useLayoutEffect(() => {
    if (postalCode.length > 0 && inputRef.current) {
      inputRef.current.focus()
    }
  }, [error, postalCode.length])

  // Validate Singapore postal code
  const validatePostalCode = (code: string): boolean => {
    // Must be exactly 6 digits
    if (!/^\d{6}$/.test(code)) {
      if (code.length > 0 && code.length < 6) {
        setError("Postal code must be exactly 6 digits")
      } else if (code.length === 6 && !/^\d+$/.test(code)) {
        setError("Postal code must contain only numbers")
      } else {
        setError("")
      }
      return false
    }

    // Check if first 2 digits are within valid Singapore range (01-82 or 91)
    const sector = parseInt(code.substring(0, 2))
    if (!((sector >= 1 && sector <= 82) || sector === 91)) {
      setError("Invalid Singapore postal code")
      return false
    }

    setError("")
    return true
  }

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6) // Only allow digits, max 6
    setPostalCode(value)
    if (value.length === 6) {
      validatePostalCode(value)
    } else if (value.length > 0) {
      setError("Postal code must be exactly 6 digits")
    } else {
      setError("")
    }

    // Immediate focus restoration after state update
    requestAnimationFrame(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    })
  }

  const handleBookNow = () => {
    if (postalCode && validatePostalCode(postalCode)) {
      console.log("Postal Code:", postalCode)
      // Handle booking logic here
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Hero Image */}
      <img
        src="/cleaning-tools.png"
        alt="Professional cleaning tools and supplies"
        className="w-3/5 mx-auto h-auto max-h-56 object-contain rounded-t-lg"
      />

      <Card className="bg-white shadow-lg rounded-t-none" role="form" aria-label="Service booking form">
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            {/* Postal Code Input */}
            <div className="flex-1 w-full">
              <label htmlFor="postal-code" className="text-sm font-medium text-foreground mb-2 block">
                Enter Your Postal Code
              </label>
              <Popover open={!!error} modal={false} onOpenChange={() => {}}>
                <PopoverAnchor asChild>
                  <Input
                    ref={inputRef}
                    id="postal-code"
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength={6}
                    value={postalCode}
                    onChange={handlePostalCodeChange}
                    placeholder="6-digit postal code"
                    className="w-full !h-12 bg-background focus:ring-2 focus:ring-[var(--purple-primary)]"
                    aria-label="Enter Singapore postal code"
                    aria-invalid={!!error}
                    aria-describedby={error ? "postal-code-error" : undefined}
                  />
                </PopoverAnchor>
                <PopoverContent
                  side="bottom"
                  align="start"
                  className="w-auto max-w-xs bg-white text-destructive border-destructive p-3 shadow-lg"
                  role="alert"
                  id="postal-code-error"
                >
                  <p className="text-sm font-medium">{error}</p>
                </PopoverContent>
              </Popover>
            </div>

            {/* CTA Button */}
            <div className="w-full md:w-auto">
              <Button
                onClick={handleBookNow}
                className="w-full md:w-auto h-12 px-8 text-base font-medium focus:ring-4 focus:ring-orange-cta/50 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: 'var(--orange-cta)', color: 'white' }}
                disabled={!postalCode || !!error || postalCode.length !== 6}
                aria-label="Book now with entered postal code"
                aria-disabled={!postalCode || !!error || postalCode.length !== 6}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
