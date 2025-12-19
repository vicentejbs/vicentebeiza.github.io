import Layout from "@/components/Layout";
import profileImage from "@/assets/vicente-profile.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealText from "@/components/RevealText";
import GlitchText from "@/components/GlitchText";
import OrganicShape from "@/components/OrganicShape";
import MagneticButton from "@/components/MagneticButton";

const SobreMi = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={containerRef} className="py-24 relative overflow-hidden">
        {/* Organic shapes */}
        <OrganicShape 
          className="-top-40 -right-40 opacity-30" 
          color="primary" 
          size={600} 
          morphDuration={25}
        />
        <OrganicShape 
          className="bottom-0 -left-60 opacity-20" 
          color="accent" 
          size={500} 
          morphDuration={30}
        />

        {/* Animated grid background */}
        <div className="absolute inset-0 -z-5 pointer-events-none">
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image - Styled with parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: imageY, rotate: imageRotate }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <MagneticButton strength={0.1}>
                <div className="relative group">
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute inset-0 bg-primary/30 rounded-2xl blur-2xl"
                    animate={{ 
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    />
                    <motion.img
                      src={profileImage}
                      alt="Vicente Beiza Silva"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div 
                      className="absolute bottom-6 left-6 z-20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <p className="text-white/60 text-sm font-mono tracking-wider">ID: 21253558-3</p>
                      <p className="text-white text-lg font-medium">UTFSM · Chile</p>
                    </motion.div>
                  </div>
                </div>
              </MagneticButton>
            </motion.div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
              <RevealText delay={0.1}>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <motion.span 
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <p className="text-sm tracking-[0.2em] uppercase font-medium animate-shimmer">Sobre mi historia</p>
                </div>
              </RevealText>

              <RevealText delay={0.2}>
                <h1 className="font-display text-5xl md:text-6xl font-medium text-foreground leading-tight mb-6">
                  <GlitchText>Ingeniería</GlitchText> con <br />
                  <span className="text-zinc-600">
                    <GlitchText>propósito humano.</GlitchText>
                  </span>
                </h1>
              </RevealText>

              <RevealText delay={0.3}>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                  <p>
                    Soy <motion.span 
                      className="text-foreground font-medium inline-block"
                      whileHover={{ scale: 1.05, color: 'hsl(var(--primary))' }}
                    >Vicente Beiza Silva</motion.span>, estudiante de Ingeniería Civil Telemática en la UTFSM. Mi curiosidad siempre ha estado en la intersección de los sistemas: desde desarmar cosas para ver sus circuitos, hasta entender la máquina más compleja de todas: el cuerpo humano.
                  </p>
                  <p>
                    El <motion.span 
                      className="text-foreground font-medium inline-block"
                      whileHover={{ scale: 1.05, color: 'hsl(var(--accent))' }}
                    >fútbol de alto rendimiento</motion.span> me enseñó disciplina y biomecánica en la práctica; la ingeniería me da las herramientas para optimizarla. Me apasiona leer sobre neurociencia y buscar formas de aplicar tecnología para mejorar la salud y el rendimiento.
                  </p>
                </div>
              </RevealText>

              <RevealText delay={0.4}>
                <motion.div 
                  className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm relative overflow-hidden"
                  whileHover={{ borderColor: 'hsl(var(--primary) / 0.3)' }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                  <p className="text-foreground italic font-display text-xl relative z-10">
                    "Mi objetivo es claro: fusionar la potencia de los datos y el hardware con la biología para crear soluciones que mejoren vidas."
                  </p>
                </motion.div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] animate-pulse-glow" />
        </motion.div>

        <div className="section-container relative z-10">
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
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group cursor-default"
              >
                <div className="flex items-start gap-4 mb-3">
                  <motion.span 
                    className="text-2xl pt-1"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {item.icon}
                  </motion.span>
                  <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-[3.25rem] border-l border-white/10 group-hover:border-primary/30 transition-colors">
                  {item.desc}
                </p>
                <motion.div 
                  className="h-px bg-gradient-to-r from-primary/50 to-transparent mt-4 ml-[3.25rem]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SobreMi;
