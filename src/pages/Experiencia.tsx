import { Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import RevealText from "@/components/RevealText";
import GlitchText from "@/components/GlitchText";
import OrganicShape from "@/components/OrganicShape";
import BotanicalFlowers from "@/components/BotanicalFlowers";

const experiencias = [
  {
    titulo: "Co-Fundador y Organizador",
    empresa: "Muestra Tech (Feria Académica)",
    periodo: "Ago 2024 – Presente",
    descripcion:
      "Co-fundé y lideré la organización de una feria de innovación para conectar estudiantes con empresas tecnológicas. Gestión de logística, patrocinios y coordinación de presentaciones.",
    habilidades: ["Gestión de Proyectos", "Liderazgo", "Networking"],
  },
  {
    titulo: "Delegado de Deportes",
    empresa: "Centro de Alumnos UTFSM",
    periodo: "Mar 2024 – Presente",
    descripcion:
      "Coordino las actividades deportivas del Departamento de Telemática. Enlace entre estudiantes y administración para eventos interdepartamentales.",
    habilidades: ["Comunicación", "Coordinación", "Liderazgo Estudiantil"],
  },
  {
    titulo: "Marketing Digital y Operaciones",
    empresa: "Beiza & Beiza (Emprendimiento Familiar)",
    periodo: "2023 – Presente",
    descripcion:
      "Optimización de logística interna y desarrollo de la presencia digital de la empresa familiar. Estrategias de captación de clientes y posicionamiento de marca.",
    habilidades: ["Marketing Digital", "Gestión de Operaciones", "Emprendimiento"],
  },
  {
    titulo: "Tutor Particular",
    empresa: "Matemáticas y Física",
    periodo: "2022 – Presente",
    descripcion:
      "Apoyo académico personalizado a estudiantes de educación media y básica. Desarrollo de metodologías de enseñanza adaptativas.",
    habilidades: ["Enseñanza", "Comunicación", "Paciencia"],
  },
];

const educacion = [
  {
    titulo: "Ingeniería Civil Telemática",
    institucion: "Universidad Técnica Federico Santa María",
    periodo: "2022 – Presente",
    descripcion:
      "Formación en telecomunicaciones, redes, programación y sistemas. Seleccionado de fútbol universitario.",
  },
  {
    titulo: "Educación Media Técnico-Profesional",
    institucion: "Liceo Industrial Eliodoro García Zegers A20",
    periodo: "2018 – 2021",
    descripcion: "Especialidad Eléctrica. Formación técnica y práctica para resolver problemas.",
  },
];

const Experiencia = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Botanical flowers */}
        <BotanicalFlowers variant="scattered" />
        
        <OrganicShape 
          className="-top-40 -right-60 opacity-25" 
          color="primary" 
          size={500} 
          morphDuration={25}
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
                <p className="text-sm tracking-[0.2em] uppercase font-medium animate-shimmer">Trayectoria</p>
              </div>
            </RevealText>

            <RevealText delay={0.2}>
              <h1 className="font-display text-5xl md:text-6xl font-medium text-foreground leading-tight mb-6">
                <GlitchText>Experiencia</GlitchText>
              </h1>
            </RevealText>

            <RevealText delay={0.3}>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Un poco de todo: organización de eventos, liderazgo estudiantil, emprendimiento familiar y proyectos universitarios. Cada experiencia me ha dejado algo valioso.
              </p>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Experience List */}
      <section className="pb-16 relative">
        <div className="section-container">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-sm text-primary uppercase tracking-widest mb-8"
          >
            Trabajo
          </motion.h2>
          
          <div className="space-y-0">
            {experiencias.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ x: 10, backgroundColor: 'hsl(var(--primary) / 0.02)' }}
                className="py-8 border-t border-border group cursor-default transition-colors rounded-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-3">
                    <motion.p 
                      className="text-sm text-muted-foreground flex items-center gap-2"
                      whileHover={{ color: 'hsl(var(--primary))' }}
                    >
                      <Calendar size={14} className="group-hover:text-primary transition-colors" />
                      {exp.periodo}
                    </motion.p>
                  </div>
                  <div className="md:col-span-9 space-y-3">
                    <div>
                      <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                        {exp.titulo}
                      </h3>
                      <p className="text-muted-foreground text-sm">{exp.empresa}</p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xl group-hover:text-zinc-400 transition-colors">
                      {exp.descripcion}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {exp.habilidades.map((hab, habIndex) => (
                        <motion.span
                          key={hab}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + habIndex * 0.05 }}
                          className="text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                          {hab}
                          {habIndex !== exp.habilidades.length - 1 && " ·"}
                        </motion.span>
                      ))}
                    </div>
                    <motion.div 
                      className="h-px bg-gradient-to-r from-primary/30 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                      style={{ originX: 0 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 border-t border-border relative overflow-hidden">
        <OrganicShape 
          className="bottom-0 -left-40 opacity-15" 
          color="accent" 
          size={400} 
          morphDuration={30}
        />

        <div className="section-container relative z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-sm text-primary uppercase tracking-widest mb-8"
          >
            Educación
          </motion.h2>

          <div className="space-y-0">
            {educacion.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ x: 10 }}
                className="py-8 border-t border-border first:border-t-0 group"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-3">
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{edu.periodo}</p>
                  </div>
                  <div className="md:col-span-9 space-y-2">
                    <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                      {edu.titulo}
                    </h3>
                    <p className="text-muted-foreground text-sm">{edu.institucion}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                      {edu.descripcion}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 border-t border-border relative overflow-hidden">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] animate-pulse-glow" />
        </motion.div>

        <div className="section-container relative z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-sm text-primary uppercase tracking-widest mb-8"
          >
            Habilidades
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {[
              { title: "Programación", skills: "Python, C, C++, Java, JavaScript, SQL, MATLAB, HTML" },
              { title: "Herramientas", skills: "Git, Linux, Arduino, GNU Radio, Nexys A7, Cisco IOS" },
              { title: "Competencias", skills: "Liderazgo, Trabajo en Equipo, Resolución de Problemas, Comunicación" }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <h3 className="font-display text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm group-hover:text-zinc-400 transition-colors">
                  {category.skills}
                </p>
                <motion.div 
                  className="h-px bg-gradient-to-r from-primary/30 to-transparent mt-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
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

export default Experiencia;
