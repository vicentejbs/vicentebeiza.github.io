import { ArrowRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "@/components/MagneticButton";
import RevealText from "@/components/RevealText";
import GlitchText from "@/components/GlitchText";
import OrganicShape from "@/components/OrganicShape";
import BotanicalFlowers from "@/components/BotanicalFlowers";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <Layout>
      {/* Hero Section - Bio-Tech Experimental */}
      <section ref={containerRef} className="min-h-screen flex items-center relative overflow-hidden">
        {/* Botanical flowers decoration */}
        <BotanicalFlowers variant="elegant" />
        
        {/* Organic morphing shapes */}
        <OrganicShape 
          className="-top-20 -right-20 opacity-40" 
          color="primary" 
          size={500} 
          morphDuration={25}
        />
        <OrganicShape 
          className="bottom-0 -left-40 opacity-30" 
          color="accent" 
          size={400} 
          morphDuration={30}
        />

        {/* Animated grid lines */}
        <div className="absolute inset-0 -z-5 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-5">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          
          {/* Animated scan line */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            animate={{
              top: ['0%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>


        <motion.div 
          className="section-container relative z-10"
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        >
          <div className="flex flex-col justify-center h-full max-w-4xl pt-20">
            {/* Tagline */}
            <RevealText delay={0.1}>
              <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-6 animate-shimmer inline-block">
                Ingeniería Civil Telemática · Bioingeniería
              </p>
            </RevealText>

            {/* Main Headline with Glitch Effect */}
            <RevealText delay={0.2}>
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-[0.9] tracking-tight mb-8">
                <GlitchText>Vicente</GlitchText> <br />
                <span className="text-muted-foreground">
                  <GlitchText>Beiza.</GlitchText>
                </span>
              </h1>
            </RevealText>

            {/* Introduction with staggered reveal */}
            <RevealText delay={0.3}>
              <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed max-w-2xl mb-12 font-light">
                Fusionando{" "}
                <motion.span 
                  className="text-foreground font-medium inline-block"
                  whileHover={{ scale: 1.05, color: 'hsl(var(--primary))' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Neurociencia
                </motion.span>{" "}
                y{" "}
                <motion.span 
                  className="text-foreground font-medium inline-block"
                  whileHover={{ scale: 1.05, color: 'hsl(var(--accent))' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Tecnología
                </motion.span>{" "}
                para expandir los límites del rendimiento humano y la salud.
              </p>
            </RevealText>

            {/* Interactive Links with Magnetic Effect */}
            <RevealText delay={0.4}>
              <div className="flex flex-wrap items-center gap-8">
                <MagneticButton strength={0.4}>
                  <Link
                    to="/proyectos"
                    className="group flex items-center gap-4 text-foreground text-lg font-medium"
                  >
                    <motion.div 
                      className="w-14 h-14 rounded-full border border-border flex items-center justify-center relative overflow-hidden"
                      whileHover={{ 
                        borderColor: 'hsl(var(--primary))',
                        backgroundColor: 'hsl(var(--primary) / 0.1)',
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-primary/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 2, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        style={{ borderRadius: '50%' }}
                      />
                      <ArrowRight size={20} className="relative z-10 group-hover:text-primary transition-colors" />
                    </motion.div>
                    <motion.span 
                      className="relative"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      Ver Proyectos
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-px bg-primary origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.span>
                  </Link>
                </MagneticButton>

                <MagneticButton strength={0.3}>
                  <Link
                    to="/sobre-mi"
                    className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <motion.span
                      whileHover={{ x: -3 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      Sobre mí
                    </motion.span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <MoveRight size={16} />
                    </motion.div>
                  </Link>
                </MagneticButton>
              </div>
            </RevealText>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-border flex justify-center p-2"
            animate={{ 
              borderColor: ['hsl(var(--border))', 'hsl(var(--primary) / 0.5)', 'hsl(var(--border))']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section - Minimal Grid */}
      <section className="py-32 border-t border-border relative overflow-hidden">
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px] animate-pulse-glow" />
        </motion.div>

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {[
              { num: "01", title: "Bioingeniería", desc: "Aplicando principios de ingeniería para descifrar y potenciar sistemas biológicos." },
              { num: "02", title: "Neurociencia", desc: "Explorando la intersección entre mente, cerebro y tecnología digital." },
              { num: "03", title: "Rendimiento", desc: "Optimizando la salud y el deporte a través de datos y soluciones innovadoras." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: i * 0.15, 
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -10 }}
                className="space-y-4 group cursor-default"
              >
                <motion.span 
                  className="text-xs text-primary font-mono tracking-widest block"
                  whileHover={{ x: 5, color: 'hsl(var(--accent))' }}
                >
                  [{item.num}]
                </motion.span>
                <h3 className="font-display text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light group-hover:text-foreground/70 transition-colors duration-300">
                  {item.desc}
                </p>
                <motion.div 
                  className="h-px bg-gradient-to-r from-primary/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.5, duration: 0.8 }}
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

export default Index;
