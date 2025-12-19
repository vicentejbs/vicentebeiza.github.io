import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Sobre mí", path: "/sobre-mi" },
  { name: "Experiencia", path: "/experiencia" },
  { name: "Proyectos", path: "/proyectos" },
  { name: "CVs", path: "/cvs" },
  { name: "Contacto", path: "/contacto" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-tight hover:text-primary transition-colors"
          >
            Vicente Beiza
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "nav-link text-sm font-medium uppercase tracking-wider",
                  location.pathname === item.path && "text-foreground active"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2",
                  location.pathname === item.path && "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
