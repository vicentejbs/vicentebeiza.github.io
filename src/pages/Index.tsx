import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import profileImage from "@/assets/vicente-profile.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Asymmetric layout */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Content - Takes more space */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="space-y-2">
                <p className="text-taupe text-sm tracking-wide animate-fade-up opacity-0 stagger-1">
                  Ingeniería Civil Telemática · UTFSM
                </p>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-foreground leading-[1.05] animate-fade-up opacity-0 stagger-2">
                  Vicente
                  <br />
                  Beiza Silva
                </h1>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed max-w-md animate-fade-up opacity-0 stagger-3">
                Me encanta entender cómo funcionan las cosas y buscar formas de mejorarlas. Estudio ingeniería, juego fútbol, leo bastante, y siempre ando buscando nuevos desafíos donde pueda aprender y aportar.
              </p>

              <div className="flex items-center gap-6 pt-2 animate-fade-up opacity-0 stagger-4">
                <Link
                  to="/sobre-mi"
                  className="inline-flex items-center gap-2 text-foreground font-medium border-b-2 border-foreground pb-1 hover:gap-3 transition-all duration-300"
                >
                  Conoce mi historia
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contacto"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contacto
                </Link>
              </div>
            </div>

            {/* Profile Image - Circular with decorative elements */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in opacity-0 stagger-2">
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-sand-dark/30 shadow-elevated">
                  <img
                    src={profileImage}
                    alt="Vicente Beiza Silva"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-sand-dark/50 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple values - horizontal, minimal */}
      <section className="py-20 border-t border-border">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="space-y-3">
              <span className="text-xs text-taupe uppercase tracking-widest">01</span>
              <h3 className="font-display text-2xl text-foreground">Curiosidad</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Siempre preguntándome el porqué de las cosas. Me gusta investigar, probar ideas nuevas y aprender de cada proyecto.
              </p>
            </div>
            <div className="space-y-3">
              <span className="text-xs text-taupe uppercase tracking-widest">02</span>
              <h3 className="font-display text-2xl text-foreground">Personas</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Al final del día, lo que más me motiva es trabajar en cosas que tengan un impacto real en la vida de las personas.
              </p>
            </div>
            <div className="space-y-3">
              <span className="text-xs text-taupe uppercase tracking-widest">03</span>
              <h3 className="font-display text-2xl text-foreground">Acción</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Prefiero hacer que solo planear. Me gusta involucrarme, probar cosas y aprender sobre la marcha.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean and simple */}
      <section className="py-24">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              ¿Conversamos?
            </h2>
            <p className="text-muted-foreground mb-6">
              Estoy abierto a todo: trabajo, prácticas, proyectos, lo que sea. Si además tiene que ver con salud o bienestar, mejor aún, pero no me cierro a nada.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 text-foreground font-medium border-b-2 border-foreground pb-1 hover:gap-3 transition-all duration-300"
            >
              Escríbeme
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;