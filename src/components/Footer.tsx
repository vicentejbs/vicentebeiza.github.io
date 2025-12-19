import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Name */}
          <div>
            <p className="font-display text-lg text-foreground">
              Vicente Beiza Silva
            </p>
            <p className="text-sm text-muted-foreground">
              Ingeniería Civil Telemática · UTFSM
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link to="/sobre-mi" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre mí
            </Link>
            <Link to="/experiencia" className="text-muted-foreground hover:text-foreground transition-colors">
              Experiencia
            </Link>
            <Link to="/proyectos" className="text-muted-foreground hover:text-foreground transition-colors">
              Proyectos
            </Link>
            <Link to="/contacto" className="text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Contact */}
          <div className="flex gap-6 text-sm">
            <a
              href="mailto:vicentebeizas@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/vicentebeizas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-taupe">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;