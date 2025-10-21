import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const MENU_ITEMS = [
  { label: "Services", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
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
  <div className={`flex flex-col gap-2 md:flex-row md:gap-1 ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
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
          className="w-full md:w-auto h-12 md:h-10 text-base md:text-sm justify-start md:justify-center"
        >
          {label}
        </Button>
      </a>
    ))}
  </div>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4">
      <div className="relative container m-auto flex justify-between items-center px-6 md:gap-6">
        <a href="/" className="shrink-0">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end items-center gap-5 md:flex">
          <NavMenuItems />
          <a
            href="#pricing"
            onClick={(e) => handleSmoothScroll(e, '#pricing')}
          >
            <Button
              className="h-12 px-8 text-base font-medium focus:ring-4 focus:ring-orange-cta/50 focus:outline-none transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--orange-cta)', color: 'white' }}
            >
              Book Now
            </Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-11 w-11"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <div className="flex flex-col gap-6 mt-8">
              <NavMenuItems onItemClick={closeMenu} />
              <a
                href="#pricing"
                onClick={(e) => {
                  handleSmoothScroll(e, '#pricing');
                  closeMenu();
                }}
              >
                <Button
                  className="w-full h-12 px-8 text-base font-medium focus:ring-4 focus:ring-orange-cta/50 focus:outline-none transition-all hover:opacity-90"
                  style={{ backgroundColor: 'var(--orange-cta)', color: 'white' }}
                >
                  Book Now
                </Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
