import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <a key={label} href={href}>
        <Button variant="ghost" className="w-full md:w-auto">
          {label}
        </Button>
      </a>
    ))}
  </div>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <a href="/">
            <Logo />
          </a>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end items-center gap-5 md:flex">
          <NavMenuItems />
          <a href="#pricing">
            <Button
              className="h-12 px-8 text-base font-medium focus:ring-4 focus:ring-orange-cta/50 focus:outline-none transition-all"
              style={{ backgroundColor: 'var(--orange-cta)', color: 'white' }}
            >
              Book Now
            </Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <NavMenuItems />
            <a href="#pricing">
              <Button
                className="w-full h-12 px-8 text-base font-medium focus:ring-4 focus:ring-orange-cta/50 focus:outline-none transition-all"
                style={{ backgroundColor: 'var(--orange-cta)', color: 'white' }}
              >
                Book Now
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
