import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const Contacto = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl animate-fade-up opacity-0">
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Hablemos
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Contacto
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Si quieres conversar sobre alguna oportunidad, proyecto o simplemente conectar, aquí me puedes encontrar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 md:py-16">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-5 animate-fade-up opacity-0">
              <a
                href="mailto:vicentebeizas@gmail.com"
                className="flex items-center gap-4 p-5 glass-card rounded-xl hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={22} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">vicentebeizas@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+56944000657"
                className="flex items-center gap-4 p-5 glass-card rounded-xl hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={22} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="font-medium text-foreground">+56 9 4400 0657</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/vicentebeizas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 glass-card rounded-xl hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Linkedin size={22} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-foreground">linkedin.com/in/vicentebeizas</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 glass-card rounded-xl">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <MapPin size={22} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="font-medium text-foreground">Santiago, Chile</p>
                </div>
              </div>
            </div>

            {/* Simple message */}
            <div className="mt-12 text-center animate-fade-up opacity-0 stagger-2">
              <p className="text-muted-foreground">
                Respondo rápido, así que no dudes en escribirme.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;