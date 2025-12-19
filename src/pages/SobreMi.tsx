import { BookOpen, Dumbbell, Users, Target } from "lucide-react";
import Layout from "@/components/Layout";
import profileImage from "@/assets/vicente-profile.jpg";

const SobreMi = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="animate-fade-up opacity-0">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={profileImage}
                    alt="Vicente Beiza Silva"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl -z-10" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-fade-up opacity-0 stagger-2">
              <p className="text-muted-foreground uppercase tracking-[0.2em] text-sm font-medium">
                Sobre mí
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
                Construyendo puentes entre tecnología y humanidad
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Soy <span className="text-foreground font-medium">Vicente Beiza Silva</span>, estudiante de Ingeniería Civil Telemática en la Universidad Técnica Federico Santa María. Desde pequeño, me ha fascinado comprender cómo funcionan las cosas y cómo la tecnología puede transformar vidas.
                </p>
                <p>
                  Mi camino ha sido moldeado por dos grandes pasiones: el <span className="text-foreground font-medium">fútbol</span>, donde he aprendido sobre trabajo en equipo, disciplina y superación personal, y la <span className="text-foreground font-medium">lectura</span>, que ha expandido mi comprensión del mundo y alimentado mi curiosidad intelectual.
                </p>
                <p>
                  Mi visión es clara: quiero dedicar mi carrera a la <span className="text-foreground font-medium">bioingeniería y la neurociencia aplicadas al deporte de alto rendimiento</span>. Creo firmemente que la tecnología, cuando se aplica con propósito humano, puede ayudar a las personas a alcanzar su máximo potencial mientras cuidan su salud y bienestar integral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Interests */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Lo que me define
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Valores, intereses y motivaciones que guían mi camino
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Dumbbell,
                title: "Pasión por el Deporte",
                description:
                  "El fútbol me ha enseñado sobre liderazgo, resiliencia y la importancia del trabajo en equipo. Como seleccionado universitario, entiendo de primera mano los desafíos físicos y mentales del deporte de alto nivel, lo que me motiva a desarrollar tecnologías que apoyen a los atletas.",
              },
              {
                icon: BookOpen,
                title: "Curiosidad Intelectual",
                description:
                  "La lectura es mi forma de explorar nuevas ideas y perspectivas. Desde neurociencia hasta filosofía, busco constantemente expandir mi conocimiento para encontrar soluciones innovadoras a problemas complejos.",
              },
              {
                icon: Users,
                title: "Liderazgo Colaborativo",
                description:
                  "Mi experiencia como Delegado de Deportes y co-fundador de Muestra Tech me ha demostrado el poder de unir personas en torno a objetivos comunes. Creo en el liderazgo que inspira y empodera a otros.",
              },
              {
                icon: Target,
                title: "Visión de Impacto",
                description:
                  "No me interesa la tecnología por sí misma, sino por su capacidad de mejorar vidas. Mi objetivo es contribuir al bienestar humano, especialmente en contextos donde la ciencia y el deporte se encuentran.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-8 hover:shadow-elevated transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed mb-6">
              "Mi propósito es utilizar la ingeniería y la tecnología como herramientas para el bienestar humano, especialmente en el deporte de alto rendimiento, donde la ciencia puede marcar la diferencia entre lo ordinario y lo extraordinario."
            </blockquote>
            <cite className="text-muted-foreground not-italic">— Vicente Beiza Silva</cite>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SobreMi;
