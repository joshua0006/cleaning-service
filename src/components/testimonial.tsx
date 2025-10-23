interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  highlighted?: string;
}

export function Testimonial({
  quote,
  author,
  role,
  avatar,
  highlighted,
}: TestimonialProps) {
  return (
    <div className="flex flex-col gap-4 max-w-xl">
      {/* Quote */}
      <blockquote className="text-sm md:text-base text-foreground/80 italic leading-relaxed">
        &ldquo;{quote}&rdquo;
        {highlighted && (
          <span className="block mt-2 not-italic text-foreground font-medium">
            {highlighted}
          </span>
        )}
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        {avatar && (
          <div className="w-12 h-12 rounded-full overflow-hidden bg-muted border-2 border-border/30">
            <img
              src={avatar}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex flex-col">
          <cite className="text-sm font-semibold text-foreground not-italic">
            — {author}
          </cite>
          {role && (
            <span className="text-xs text-muted-foreground">{role}</span>
          )}
        </div>
      </div>
    </div>
  );
}
