import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";

const Contacto = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-2xl animate-fade-up opacity-0">
            <p className="text-taupe text-sm tracking-wide mb-3">Hablemos</p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight mb-4">
              Contacto
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Si quieres conversar sobre alguna oportunidad, proyecto o simplemente conectar, aquí me puedes encontrar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="pb-20">
        <div className="section-container">
          <div className="max-w-xl space-y-0">
            <a
              href="mailto:vicentebeizas@gmail.com"
              className="flex items-center justify-between py-6 border-t border-border group"
            >
              <div>
                <p className="text-xs text-taupe uppercase tracking-widest mb-1">Email</p>
                <p className="font-display text-lg text-foreground group-hover:underline underline-offset-4">
                  vicentebeizas@gmail.com
                </p>
              </div>
              <ArrowUpRight size={18} className="text-taupe group-hover:text-foreground transition-colors" />
            </a>

            <a
              href="tel:+56944000657"
              className="flex items-center justify-between py-6 border-t border-border group"
            >
              <div>
                <p className="text-xs text-taupe uppercase tracking-widest mb-1">Teléfono</p>
                <p className="font-display text-lg text-foreground group-hover:underline underline-offset-4">
                  +56 9 4400 0657
                </p>
              </div>
              <ArrowUpRight size={18} className="text-taupe group-hover:text-foreground transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/vicentebeizas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-6 border-t border-border group"
            >
              <div>
                <p className="text-xs text-taupe uppercase tracking-widest mb-1">LinkedIn</p>
                <p className="font-display text-lg text-foreground group-hover:underline underline-offset-4">
                  linkedin.com/in/vicentebeizas
                </p>
              </div>
              <ArrowUpRight size={18} className="text-taupe group-hover:text-foreground transition-colors" />
            </a>

            <div className="py-6 border-t border-b border-border">
              <p className="text-xs text-taupe uppercase tracking-widest mb-1">Ubicación</p>
              <p className="font-display text-lg text-foreground">
                Santiago, Chile
              </p>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mt-12 max-w-md">
            Respondo rápido, así que no dudes en escribirme.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;