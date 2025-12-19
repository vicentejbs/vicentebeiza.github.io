import Layout from "@/components/Layout";
import profileImage from "@/assets/vicente-profile.jpg";

const SobreMi = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Image - Smaller and to the side */}
            <div className="lg:col-span-4 animate-fade-up opacity-0">
              <div className="relative">
                <div className="aspect-[3/4] rounded-xl overflow-hidden max-w-xs">
                  <img
                    src={profileImage}
                    alt="Vicente Beiza Silva"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-8 space-y-8 animate-fade-up opacity-0 stagger-2">
              <div>
                <p className="text-taupe text-sm tracking-wide mb-3">Sobre mí</p>
                <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight">
                  Un poco de mi historia
                </h1>
              </div>
              
              <div className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  Soy <span className="text-foreground">Vicente Beiza Silva</span>, estudiante de Ingeniería Civil Telemática en la Universidad Técnica Federico Santa María. Desde chico me gustó desarmar cosas para ver cómo funcionaban por dentro, y esa curiosidad sigue intacta.
                </p>
                <p>
                  Fuera de la universidad, el <span className="text-foreground">fútbol</span> ha sido parte importante de mi vida. Me enseñó a trabajar en equipo, a levantarme después de perder y a disfrutar el proceso. También me gusta mucho <span className="text-foreground">leer</span>, de todo un poco: desde neurociencia hasta novelas.
                </p>
                <p>
                  Todavía estoy descubriendo exactamente qué quiero hacer con mi carrera, pero sé que quiero trabajar en cosas que importen. Me interesa la tecnología aplicada a la salud, el deporte y el bienestar, aunque honestamente estoy abierto a explorar cualquier camino que me permita aprender y crecer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Simple list style */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="section-container">
          <h2 className="font-display text-2xl text-foreground mb-12">
            Lo que me mueve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl">
            <div className="space-y-3 border-l-2 border-taupe/30 pl-6">
              <h3 className="font-display text-xl text-foreground">Deporte</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                El fútbol me enseñó sobre liderazgo, resiliencia y trabajo en equipo. Como seleccionado universitario, entiendo los desafíos del deporte de alto nivel.
              </p>
            </div>
            
            <div className="space-y-3 border-l-2 border-taupe/30 pl-6">
              <h3 className="font-display text-xl text-foreground">Lectura</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Leo de todo: neurociencia, filosofía, novelas. Es mi forma de explorar ideas y perspectivas que no encontraría de otra manera.
              </p>
            </div>
            
            <div className="space-y-3 border-l-2 border-taupe/30 pl-6">
              <h3 className="font-display text-xl text-foreground">Liderazgo</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Como Delegado de Deportes y co-fundador de Muestra Tech, aprendí que liderar es más sobre escuchar y empoderar que sobre dar órdenes.
              </p>
            </div>
            
            <div className="space-y-3 border-l-2 border-taupe/30 pl-6">
              <h3 className="font-display text-xl text-foreground">Impacto</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No me interesa la tecnología por sí misma, sino por lo que puede lograr. Quiero trabajar en cosas que mejoren la vida de las personas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section - Simpler */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed">
              "No tengo todo claro todavía, pero sí sé que quiero hacer cosas que valgan la pena. Y para eso, hay que empezar por algún lado."
            </blockquote>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SobreMi;