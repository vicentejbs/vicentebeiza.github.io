import { ArrowRight, Brain, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import profileImage from "@/assets/vicente-profile.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-sand-dark/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <p className="text-muted-foreground uppercase tracking-[0.2em] text-sm font-medium animate-fade-up opacity-0 stagger-1">
                  Estudiante de Ingeniería Civil Telemática
                </p>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1] animate-fade-up opacity-0 stagger-2">
                  Vicente Beiza
                  <span className="block text-taupe">Silva</span>
                </h1>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg animate-fade-up opacity-0 stagger-3">
                Me encanta entender cómo funcionan las cosas y buscar formas de mejorarlas. Estudio ingeniería, juego fútbol, leo bastante, y siempre ando buscando nuevos desafíos donde pueda aprender y aportar.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 stagger-4">
                <Link
                  to="/sobre-mi"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-all duration-300 hover:translate-x-1"
                >
                  Conoce mi historia
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium text-sm hover:bg-card transition-all duration-300"
                >
                  Contáctame
                </Link>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in opacity-0 stagger-2">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-sand-dark/30 shadow-elevated">
                  <img
                    src={profileImage}
                    alt="Vicente Beiza Silva"
                    className="w-full h-full object-cover"
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

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Mi Enfoque
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combinando ingeniería, innovación y pasión por el bienestar humano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Curiosidad",
                description:
                  "Siempre preguntándome el porqué de las cosas. Me gusta investigar, probar ideas nuevas y aprender de cada proyecto.",
              },
              {
                icon: Heart,
                title: "Personas",
                description:
                  "Al final del día, lo que más me motiva es trabajar en cosas que tengan un impacto real en la vida de las personas.",
              },
              {
                icon: Zap,
                title: "Acción",
                description:
                  "Prefiero hacer que solo planear. Me gusta involucrarme, probar cosas y aprender sobre la marcha.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-8 text-center hover:shadow-elevated transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-6 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={28} className="text-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              ¿Listo para colaborar?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Si tienes alguna oportunidad, proyecto o idea en mente, me encantaría conversarlo. Estoy abierto a todo tipo de colaboraciones.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300"
            >
              Iniciar conversación
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
