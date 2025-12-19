import { ArrowUpRight, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

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
  return (
    <Layout>
      <section className="pt-24 pb-12">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 max-w-2xl"
          >
            <div className="flex items-center gap-2 text-primary mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-sm tracking-[0.2em] uppercase font-medium">Portafolio</p>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-medium text-foreground leading-tight mb-6">
              Laboratorio de <br />
              <span className="text-zinc-600">Ideas.</span>
            </h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Explorando la ingeniería a través de la práctica. Cada proyecto es un experimento para entender mejor el mundo digital y físico.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {proyectos.map((proyecto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
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

                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${proyecto.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl`} />

                <div className="relative p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
                  {/* Category & Title */}
                  <div className="md:col-span-5 space-y-2">
                    <span className="text-xs font-mono text-primary/80 uppercase tracking-widest border border-primary/20 px-2 py-1 rounded">
                      {proyecto.categoria}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl text-foreground mt-2 group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                      {proyecto.titulo}
                      {proyecto.link && <ExternalLink size={20} className="text-muted-foreground opacity-50 group-hover:text-primary group-hover:opacity-100 transition-all" />}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-4">
                    <p className="text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {proyecto.descripcion}
                    </p>
                  </div>

                  {/* Tech Stack & Arrow */}
                  <div className="md:col-span-3 flex flex-col items-end gap-6 justify-between h-full">
                    <div className="p-3 rounded-full border border-white/10 group-hover:bg-white text-white group-hover:text-black transition-all duration-300 transform group-hover:-rotate-45">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>

                  {/* Tags positioned absolutely or in flow depending on mobile */}
                  <div className="col-span-12 md:col-span-12 flex flex-wrap gap-2 mt-4 md:mt-0">
                    {proyecto.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-zinc-500 bg-black/40 border border-white/5 rounded-full px-3 py-1 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
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