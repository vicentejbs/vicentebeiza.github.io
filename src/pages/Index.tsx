import { ArrowRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Bio-Tech Experimental */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background Elements - Abstract Bio/Neuro */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        <div className="section-container relative z-10">
          <div className="flex flex-col justify-center h-full max-w-4xl pt-20">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-6"
            >
              Ingeniería Civil Telemática · Bioingeniería
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-[0.9] tracking-tight mb-8"
            >
              Vicente <br />
              <span className="text-zinc-600">Beiza.</span>
            </motion.h1>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-xl md:text-2xl leading-relaxed max-w-2xl mb-12 font-light"
            >
              Fusionando <span className="text-foreground font-medium">Neurociencia</span> y <span className="text-foreground font-medium">Tecnología</span> para expandir los límites del rendimiento humano y la salud.
            </motion.p>

            {/* Interactive Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-8"
            >
              <Link
                to="/proyectos"
                className="group flex items-center gap-4 text-foreground text-lg font-medium"
              >
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                  <ArrowRight size={20} className="group-hover:text-primary transition-colors" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform">Ver Proyectos</span>
              </Link>

              <Link
                to="/sobre-mi"
                className="group flex items-center gap-2 text-zinc-500 hover:text-foreground transition-colors"
              >
                <span>Sobre mí</span>
                <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Minimal Grid */}
      <section className="py-32 border-t border-zinc-900">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {[
              { num: "01", title: "Bioingeniería", desc: "Aplicando principios de ingeniería para descifrar y potenciar sistemas biológicos." },
              { num: "02", title: "Neurociencia", desc: "Explorando la intersección entre mente, cerebro y tecnología digital." },
              { num: "03", title: "Rendimiento", desc: "Optimizando la salud y el deporte a través de datos y soluciones innovadoras." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <span className="text-xs text-primary font-mono tracking-widest">[{item.num}]</span>
                <h3 className="font-display text-3xl text-foreground">{item.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-light">
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

export default Index;
