import { FileText, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import RevealText from "@/components/RevealText";
import GlitchText from "@/components/GlitchText";
import OrganicShape from "@/components/OrganicShape";
import MagneticButton from "@/components/MagneticButton";

const cvs = [
  {
    titulo: "CV Completo",
    descripcion: "Currículum detallado con toda mi experiencia académica y profesional.",
    archivo: "/vicentebeiza.github.io/documents/CV_VICENTE_BEIZA.pdf",
    type: "PDF"
  },
  {
    titulo: "Resumen Ejecutivo",
    descripcion: "Versión resumida de una página con los puntos más relevantes.",
    archivo: "/vicentebeiza.github.io/documents/Summary_VicenteBeiza.pdf",
    type: "PDF"
  },
];

const CVs = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        {/* Organic Background Shapes */}
        <OrganicShape 
          className="-top-40 -left-40 opacity-25" 
          color="primary" 
          size={500} 
          morphDuration={25}
        />
        <OrganicShape 
          className="bottom-0 -right-60 opacity-20" 
          color="accent" 
          size={400} 
          morphDuration={30}
        />

        <div className="section-container">
          <div className="max-w-2xl">
            <RevealText delay={0.1}>
              <div className="flex items-center gap-2 text-primary mb-4">
                <motion.span 
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-sm tracking-[0.2em] uppercase font-medium animate-shimmer">Documentación</p>
              </div>
            </RevealText>

            <RevealText delay={0.2}>
              <h1 className="font-display text-5xl md:text-6xl font-medium text-foreground leading-tight mb-6">
                <GlitchText>Currículum</GlitchText> <br />
                <span className="text-zinc-600">
                  <GlitchText>Vitae.</GlitchText>
                </span>
              </h1>
            </RevealText>

            <RevealText delay={0.3}>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Respaldo formal de mi trayectoria. Descarga la versión que mejor se ajuste a lo que buscas.
              </p>
            </RevealText>
          </div>
        </div>
      </section>

      {/* CVs List */}
      <section className="pb-20 relative">
        <div className="section-container">
          <div className="max-w-3xl space-y-4">
            {cvs.map((cv, index) => (
              <MagneticButton key={index} strength={0.15} className="w-full">
                <motion.a
                  href={cv.archivo}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ 
                    delay: index * 0.15 + 0.2,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex items-center justify-between p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Scan line */}
                  <motion.div
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ top: '0%' }}
                    whileHover={{ top: ['0%', '100%'] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />

                  <div className="flex items-start gap-5 relative z-10">
                    <motion.div 
                      className="p-3 rounded-lg bg-white/5 text-primary relative overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-primary"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ borderRadius: '8px' }}
                      />
                      <FileText size={24} className="relative z-10 group-hover:text-black transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                          {cv.titulo}
                        </h3>
                        <motion.span 
                          className="text-[10px] font-mono border border-white/10 px-2 py-0.5 rounded text-zinc-500"
                          whileHover={{ borderColor: 'hsl(var(--primary))', color: 'hsl(var(--primary))' }}
                        >
                          {cv.type}
                        </motion.span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-2 font-light max-w-sm group-hover:text-zinc-400 transition-colors">
                        {cv.descripcion}
                      </p>
                    </div>
                  </div>

                  <motion.div 
                    className="hidden md:flex items-center gap-2 text-zinc-500 group-hover:text-foreground transition-colors pr-4 relative z-10"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="text-sm font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Descargar
                    </motion.span>
                    <motion.div
                      whileHover={{ rotate: 45, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight size={20} />
                    </motion.div>
                  </motion.div>
                </motion.a>
              </MagneticButton>
            ))}
          </div>

          {/* Quick info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-20 max-w-3xl border-t border-white/5 pt-12 relative"
          >
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] animate-pulse-glow" />
            </motion.div>

            <h2 className="text-sm text-primary uppercase tracking-widest mb-8">Datos Rápidos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12 relative z-10">
              {[
                { label: "Ubicación", value: "Santiago, Chile" },
                { label: "Formación", value: "Ingeniería Civil Telemática", sub: "UTFSM" },
                { label: "Idiomas", values: [{ lang: "Español", level: "Nativo" }, { lang: "Inglés", level: "B1" }] }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="space-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">{item.label}</p>
                  {item.value && <p className="text-foreground font-medium">{item.value}</p>}
                  {item.sub && <p className="text-sm text-zinc-500">{item.sub}</p>}
                  {item.values && (
                    <div className="flex gap-4">
                      {item.values.map((v, i) => (
                        <div key={i}>
                          <p className="text-foreground font-medium">{v.lang}</p>
                          <p className="text-sm text-zinc-500">{v.level}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CVs;
