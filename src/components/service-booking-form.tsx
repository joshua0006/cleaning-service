"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"

export function ServiceBookingForm() {
  const [date, setDate] = useState<Date>()
  const [serviceType, setServiceType] = useState<string>("")

  const handleGetStarted = () => {
    if (serviceType && date) {
      console.log("Service:", serviceType, "Date:", date)
      // Handle booking logic here
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Hero Image */}
      <img
        src="/cleaning-tools.png"
        alt="Professional cleaning tools and supplies"
        className="w-3/5 mx-auto h-64 object-contain rounded-t-lg"
      />

      <Card className="bg-white shadow-lg rounded-t-none" role="form" aria-label="Service booking form">
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            {/* Service Type Selection */}
            <div className="flex-1 w-full">
              <label htmlFor="service-type" className="text-sm font-medium text-foreground mb-2 block">
                Get Our Service
              </label>
              <Select value={serviceType} onValueChange={setServiceType}>
                <SelectTrigger id="service-type" className="w-full !h-12 bg-background focus:ring-2 focus:ring-purple-primary" aria-label="Select service type">
                  <SelectValue placeholder="Service Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
                  <SelectItem value="regular-cleaning">Regular Cleaning</SelectItem>
                  <SelectItem value="move-in-out">Move In/Out Cleaning</SelectItem>
                  <SelectItem value="office-cleaning">Office Cleaning</SelectItem>
                  <SelectItem value="window-cleaning">Window Cleaning</SelectItem>
                  <SelectItem value="carpet-cleaning">Carpet Cleaning</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date Selection */}
            <div className="flex-1 w-full">
              <label htmlFor="date-picker" className="text-sm font-medium text-foreground mb-2 block">
                Select Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date-picker"
                    variant="outline"
                    className="w-full !h-12 justify-start text-left font-normal bg-background focus:ring-2 focus:ring-purple-primary"
                    aria-label={date ? `Selected date: ${format(date, "PPP")}` : "Pick a date"}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* CTA Button */}
            <div className="w-full md:w-auto">
              <Button
                onClick={handleGetStarted}
                className="w-full md:w-auto h-12 px-8 text-base font-medium focus:ring-4 focus:ring-orange-cta/50 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: 'var(--orange-cta)', color: 'white' }}
                disabled={!serviceType || !date}
                aria-label="Submit booking request"
                aria-disabled={!serviceType || !date}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
