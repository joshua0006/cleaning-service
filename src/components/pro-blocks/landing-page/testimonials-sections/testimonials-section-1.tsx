
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Michael T.",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    quote: "Their deep cleaning service completely transformed my kitchen. It feels like brand new again worth every penny!",
    service: "Booked Cleanora's Deep Cleaning Service",
  },
  {
    name: "Sara L.",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    quote: "Booking was super easy, and the team were so polite. I'll definitely use their weekly service!",
    service: "Booked Cleanora's Home Cleaning",
  },
  {
    name: "David P.",
    avatar: "https://i.pravatar.cc/150?img=33",
    rating: 5,
    quote: "I loved how eco-friendly their products were. My house smells fresh, and I didn't have to worry about harsh chemicals.",
    service: "Booked Cleanora's Office Cleaning Service",
  },
  {
    name: "Amelia R.",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    quote: "I've never seen my apartment this clean before! The Cleanora team was punctual, friendly, and incredibly thorough.",
    service: "Booked Cleanora's Deep Cleaning Service",
  },
];

export default function TestimonialsSection1() {
  return (
    <section
      className="py-8 bg-gradient-to-b from-white to-teal-light/5"
      aria-labelledby="testimonial-heading"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          {/* Section Header */}
          <div className="section-title-gap-lg mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2
              id="testimonial-heading"
              className="heading-lg"
              style={{ color: 'var(--teal-dark)' }}
            >
              Stories From Happy Homes
            </h2>
            <p className="text-foreground/70 text-base leading-relaxed">
              Our customers love how Cleanora makes their homes shine with professional care, friendly service, and spotless attention to every detail.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                    <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                      <CardContent className="px-6 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          </Avatar>
                          <div className="flex flex-col gap-1">
                            <span className="font-semibold text-sm" style={{ color: 'var(--teal-dark)' }}>
                              {testimonial.name}
                            </span>
                            <div className="flex gap-0.5">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-foreground/80 text-base leading-relaxed">
                          {testimonial.quote}
                        </p>
                        <p className="text-xs text-foreground/60">
                          — {testimonial.service}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className="hidden md:flex"
                style={{
                  backgroundColor: 'var(--teal-primary)',
                  borderColor: 'var(--teal-primary)',
                  color: 'white'
                }}
              />
              <CarouselNext
                className="hidden md:flex"
                style={{
                  backgroundColor: 'var(--teal-primary)',
                  borderColor: 'var(--teal-primary)',
                  color: 'white'
                }}
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
