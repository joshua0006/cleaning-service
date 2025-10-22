
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface TestimonialsSection1Props {
  quote?: string;
  authorName?: string;
  authorRole?: string;
  avatarSrc?: string;
}

export default function TestimonialsSection1({
  quote = "Athena transformed our home! The team is professional, thorough, and uses eco-friendly products. We finally have time for what matters most.",
  authorName = "Sarah Martinez",
  authorRole = "Homeowner, Sydney",
  avatarSrc = "/DavidPark.png",
}: TestimonialsSection1Props) {
  return (
    <section
      className="container-padding-x section-padding-y flex flex-col items-center border-b bg-gradient-to-b from-teal-light/5 to-white"
      aria-labelledby="testimonial-title"
    >
      {/* Content Container */}
      <div className="flex max-w-2xl flex-col items-center gap-8">
        {/* Testimonial Quote */}
        <blockquote
          id="testimonial-title"
          className="text-center text-xl font-medium text-foreground md:text-3xl"
        >
          &quot;{quote}&quot;
        </blockquote>

        {/* Author Information */}
        <div className="flex flex-col items-center gap-4">
          {/* Author Avatar */}
          <Avatar className="h-12 w-12 rounded-xl ring-2 ring-teal-primary md:h-14 md:w-14">
            <AvatarImage src={avatarSrc} alt={authorName} />
          </Avatar>

          {/* Author Details */}
          <div className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
            <span className="text-base font-medium text-foreground">
              {authorName}
            </span>
            <span className="hidden text-muted-foreground md:inline-block">
              •
            </span>
            <span className="text-base text-foreground/70">{authorRole}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
