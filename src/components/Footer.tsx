import { Mail, Phone, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold text-foreground">
              Vicente Beiza Silva
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Ingeniería, innovación y bienestar humano. Construyendo el futuro de la tecnología aplicada a la salud y el deporte.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-medium text-foreground">
              Navegación
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: "Inicio", path: "/" },
                { name: "Sobre mí", path: "/sobre-mi" },
                { name: "Experiencia", path: "/experiencia" },
                { name: "Proyectos", path: "/proyectos" },
                { name: "Contacto", path: "/contacto" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm w-fit"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-medium text-foreground">
              Contacto
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:vicentebeizas@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Mail size={16} />
                vicentebeizas@gmail.com
              </a>
              <a
                href="tel:+56944000657"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Phone size={16} />
                +56 9 4400 0657
              </a>
              <a
                href="https://www.linkedin.com/in/vicentebeizas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Vicente Beiza Silva. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
