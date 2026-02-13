import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md py-4 border-border/50 shadow-sm" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-primary">
          Minimal.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  e.preventDefault();
                  handleNavClick(link.href);
                }
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <Button 
            size="sm" 
            className="rounded-full px-6 font-medium"
            onClick={() => handleNavClick("#contact")}
          >
            Get in Touch
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              if (link.href.startsWith("#")) {
                e.preventDefault();
                handleNavClick(link.href);
              } else {
                setIsMobileMenuOpen(false);
              }
            }}
            className="font-serif text-3xl font-medium hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}
