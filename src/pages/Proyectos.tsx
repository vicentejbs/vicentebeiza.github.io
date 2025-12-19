import { ArrowUpRight, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealText from "@/components/RevealText";
import GlitchText from "@/components/GlitchText";
import OrganicShape from "@/components/OrganicShape";
import MagneticButton from "@/components/MagneticButton";
import BotanicalFlowers from "@/components/BotanicalFlowers";

const proyectos = [
  {
    titulo: "Ingeniería Beiza y Beiza",
    categoria: "Desarrollo & IA",
    descripcion:
      "Plataforma corporativa moderna para empresa de ingeniería, desarrollada en colaboración con Inteligencia Artificial. Enfocada en funcionalidad real, SEO y presencia digital profesional.",
    tecnologias: ["React", "Tailwind CSS", "Vite", "AI-Assisted"],
    color: "from-indigo-500/20 to-purple-500/20",
    link: "https://beizaybeiza.cl"
  },
  {
    titulo: "Software y Simulaciones",
    categoria: "Desarrollo",
    descripcion:
      "Desarrollo de software y simulaciones de circuitos usando múltiples lenguajes para resolver problemas de ingeniería complejos.",
    tecnologias: ["C", "C++", "Python", "MATLAB"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    titulo: "Sistemas Embebidos",
    categoria: "Hardware",
    descripcion:
      "Diseño y programación de sistemas embebidos y procesamiento de señales digitales en tiempo real.",
    tecnologias: ["Arduino", "Nexys A7 (FPGA)", "C++"],
    color: "from-emerald-500/20 to-lime-500/20"
  },
  {
    titulo: "Telecomunicaciones",
    categoria: "Comunicaciones",
    descripcion:
      "Implementación de sistemas de radio definido por software (SDR) y protocolos de comunicación avanzados.",
    tecnologias: ["GNU Radio", "Linux", "Python"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    titulo: "Redes y Sistemas",
    categoria: "Infraestructura",
    descripcion:
      "Configuración robusta y administración de topologías de red, seguridad y troubleshooting avanzado.",
    tecnologias: ["Cisco IOS", "Cisco Packet Tracer", "Linux"],
    color: "from-orange-500/20 to-red-500/20"
  },
];

const Proyectos = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <Layout>
      <section ref={containerRef} className="pt-24 pb-12 relative overflow-hidden">
        {/* Botanical flowers */}
        <BotanicalFlowers variant="minimal" />
        
        {/* Organic background shapes */}
        <OrganicShape 
          className="-top-20 -right-40 opacity-25" 
          color="accent" 
          size={500} 
          morphDuration={20}
        />
        <OrganicShape 
          className="bottom-20 -left-60 opacity-20" 
          color="primary" 
          size={400} 
          morphDuration={25}
        />

        {/* Animated grid */}
        <div className="absolute inset-0 -z-5 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-5">
            <defs>
              <pattern id="projectGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#projectGrid)" />
          </svg>
        </div>

        <div className="section-container">
          <motion.div
            style={{ y: headerY, opacity: headerOpacity }}
            className="mb-16 max-w-2xl"
          >
            <RevealText delay={0.1}>
              <div className="flex items-center gap-2 text-primary mb-4">
                <motion.span 
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-sm tracking-[0.2em] uppercase font-medium animate-shimmer">Portafolio</p>
              </div>
            </RevealText>

            <RevealText delay={0.2}>
              <h1 className="font-display text-5xl md:text-6xl font-medium text-foreground leading-tight mb-6">
                <GlitchText>Laboratorio</GlitchText> de <br />
                <span className="text-muted-foreground">
                  <GlitchText>Ideas.</GlitchText>
                </span>
              </h1>
            </RevealText>

            <RevealText delay={0.3}>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Explorando la ingeniería a través de la práctica. Cada proyecto es un experimento para entender mejor el mundo digital y físico.
              </p>
            </RevealText>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {proyectos.map((proyecto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ scale: 1.01, y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 hover:bg-card transition-all duration-500"
              >
                {/* Link Overlay */}
                {proyecto.link && (
                  <a
                    href={proyecto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20"
                    aria-label={`Ver proyecto ${proyecto.titulo}`}
                  />
                )}

                {/* Animated Hover Gradient Background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${proyecto.color} blur-xl`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Scan line effect on hover */}
                <motion.div
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ top: '0%' }}
                  whileHover={{ top: ['0%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />

                <div className="relative p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
                  {/* Category & Title */}
                  <div className="md:col-span-5 space-y-2">
                    <motion.span 
                      className="text-xs font-mono text-primary/80 uppercase tracking-widest border border-primary/20 px-2 py-1 rounded inline-block"
                      whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
                    >
                      {proyecto.categoria}
                    </motion.span>
                    <motion.h3 
                      className="font-display text-3xl md:text-4xl text-foreground mt-2 flex items-center gap-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {proyecto.titulo}
                      {proyecto.link && (
                        <motion.div
                          initial={{ opacity: 0.5, rotate: 0 }}
                          whileHover={{ opacity: 1, rotate: 45 }}
                        >
                          <ExternalLink size={20} className="text-primary" />
                        </motion.div>
                      )}
                    </motion.h3>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-4">
                    <p className="text-muted-foreground font-light leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                      {proyecto.descripcion}
                    </p>
                  </div>

                  {/* Tech Stack & Arrow */}
                  <div className="md:col-span-3 flex flex-col items-end gap-6 justify-between h-full">
                    <MagneticButton strength={0.5}>
                      <motion.div 
                        className="p-3 rounded-full border border-border text-foreground relative overflow-hidden"
                        whileHover={{ 
                          borderColor: 'hsl(var(--primary))',
                          rotate: -45
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-primary"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ borderRadius: '50%' }}
                        />
                        <ArrowUpRight size={24} className="relative z-10 group-hover:text-primary-foreground transition-colors" />
                      </motion.div>
                    </MagneticButton>
                  </div>

                  {/* Tags */}
                  <div className="col-span-12 md:col-span-12 flex flex-wrap gap-2 mt-4 md:mt-0">
                    {proyecto.tecnologias.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary) / 0.2)' }}
                        className="text-xs text-muted-foreground bg-secondary/50 border border-border rounded-full px-3 py-1 backdrop-blur-sm transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Proyectos;
