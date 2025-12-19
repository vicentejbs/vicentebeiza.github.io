import Layout from "@/components/Layout";
import profileImage from "@/assets/vicente-profile.jpg";
import { motion } from "framer-motion";

const SobreMi = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image - Styled */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10" />
                  <img
                    src={profileImage}
                    alt="Vicente Beiza Silva"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <p className="text-white/60 text-sm font-mono tracking-wider">ID: 21253558-3</p>
                    <p className="text-white text-lg font-medium">UTFSM · Chile</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 text-primary mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-sm tracking-[0.2em] uppercase font-medium">Sobre mi historia</p>
                </div>
                <h1 className="font-display text-5xl md:text-6xl font-medium text-foreground leading-tight mb-6">
                  Ingenyiería con <br />
                  <span className="text-zinc-600">propósito humano.</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light"
              >
                <p>
                  Soy <span className="text-foreground font-medium">Vicente Beiza Silva</span>, estudiante de Ingeniería Civil Telemática en la UTFSM. Mi curiosidad siempre ha estado en la intersección de los sistemas: desde desarmar cosas para ver sus circuitos, hasta entender la máquina más compleja de todas: el cuerpo humano.
                </p>
                <p>
                  El <span className="text-foreground font-medium">fútbol de alto rendimiento</span> me enseñó disciplina y biomecánica en la práctica; la ingeniería me da las herramientas para optimizarla. Me apasiona leer sobre neurociencia y buscar formas de aplicar tecnología para mejorar la salud y el rendimiento.
                </p>
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                  <p className="text-foreground italic font-display text-xl">
                    "Mi objetivo es claro: fusionar la potencia de los datos y el hardware con la biología para crear soluciones que mejoren vidas."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 border-t border-white/5">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {[
              {
                icon: "🧠",
                title: "Neurociencia & Tech",
                desc: "Explorando interfaces cerebro-computadora y análisis de señales biológicas."
              },
              {
                icon: "⚡",
                title: "Deporte & Alto Rendimiento",
                desc: "Entendiendo la fisiología y la mente para romper barreras físicas."
              },
              {
                icon: "🤝",
                title: "Liderazgo & Equipo",
                desc: "Ex-Delegado de Deportes, construyendo comunidades y gestionando talento."
              },
              {
                icon: "📚",
                title: "Aprendizaje Continuo",
                desc: "Devorador de libros, desde papers técnicos hasta filosofía y novelas."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-default"
              >
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-2xl pt-1 opacity-80">{item.icon}</span>
                  <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-[3.25rem] border-l border-white/10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SobreMi;
