import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Sparkles, ListChecks, CreditCard, Star, HelpCircle, type LucideIcon } from "lucide-react";
import { useState } from "react";

const MENU_ITEMS: ReadonlyArray<{ label: string; href: string; icon: LucideIcon }> = [
  { label: "Services", href: "#features", icon: Sparkles },
  { label: "How it works", href: "#how-it-works", icon: ListChecks },
  { label: "Pricing", href: "#pricing", icon: CreditCard },
  { label: "Reviews", href: "#testimonials", icon: Star },
  { label: "FAQ", href: "#faq", icon: HelpCircle },
] as const;

interface NavMenuItemsProps {
  className?: string;
  onItemClick?: () => void;
}

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const targetId = href.replace('#', '');
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const NavMenuItems = ({ className, onItemClick }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-3 md:flex-row md:gap-1 ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href, icon: Icon }) => (
      <a
        key={label}
        href={href}
        onClick={(e) => {
          handleSmoothScroll(e, href);
          onItemClick?.();
        }}
      >
        <Button
          variant="ghost"
          className="relative w-full md:w-auto h-14 md:h-10 text-base md:text-sm justify-start md:justify-center px-4 md:px-3 transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 hover:shadow-md overflow-hidden group"
        >
          {/* Glass shine effect */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-teal-light/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          <span className="relative z-10 flex items-center gap-3 w-full md:gap-2">
            <Icon className="h-5 w-5 md:h-4 md:w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--teal-primary)' }} />
            <span className="flex-1 text-left md:flex-none">{label}</span>
          </span>
        </Button>
      </a>
    ))}
  </div>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-4 isolate z-50 px-4 md:px-6">
      <div className="relative container mx-auto">
        {/* Glassmorphism container with gradient border */}
        <div className="relative bg-white/10 dark:bg-teal-dark/20 backdrop-blur-xl backdrop-saturate-150 rounded-2xl border border-white/20 shadow-lg shadow-teal-primary/5 overflow-hidden">
          {/* Gradient border overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-light/30 via-transparent to-teal-primary/30 pointer-events-none" style={{ padding: '1px' }} />

          {/* Main content */}
          <div className="relative flex justify-between items-center px-6 py-4 md:px-8 md:py-5">
            <a href="/" className="shrink-0 relative z-10 transition-transform hover:scale-105">
              <Logo />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden w-full flex-row justify-end items-center gap-6 md:flex">
              <NavMenuItems />
              <a
                href="#pricing"
                onClick={(e) => handleSmoothScroll(e, '#pricing')}
              >
                <Button
                  className="relative h-12 px-8 text-base font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-teal-primary/30 hover:scale-105"
                  style={{ backgroundColor: 'var(--teal-primary)', color: 'white' }}
                >
                  {/* Glass shine effect on hover */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10">Book Now</span>
                </Button>
              </a>
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden h-11 w-11 hover:bg-white/10 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[320px] sm:w-[380px] border-l-0 p-0 overflow-hidden"
              >
                {/* Glassmorphism container with gradient border */}
                <div className="relative h-full bg-white/10 dark:bg-teal-dark/20 backdrop-blur-xl backdrop-saturate-150">
                  {/* Gradient border overlay - left edge only */}
                  <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-teal-light/50 via-teal-primary/50 to-teal-light/50" />

                  {/* Content with proper spacing */}
                  <div className="relative h-full flex flex-col p-6">
                    {/* Logo/Brand Section */}
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/20">
                      <Logo />
                    </div>

                    {/* Navigation Menu */}
                    <nav className="flex-1 overflow-y-auto">
                      <NavMenuItems onItemClick={closeMenu} />
                    </nav>

                    {/* CTA Section */}
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <a
                        href="#pricing"
                        onClick={(e) => {
                          handleSmoothScroll(e, '#pricing');
                          closeMenu();
                        }}
                      >
                        <Button
                          className="relative w-full h-14 px-8 text-base font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-teal-primary/30 hover:scale-[1.02]"
                          style={{ backgroundColor: 'var(--teal-primary)', color: 'white' }}
                        >
                          {/* Glass shine effect */}
                          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <Sparkles className="h-5 w-5" />
                            Book Now
                          </span>
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
