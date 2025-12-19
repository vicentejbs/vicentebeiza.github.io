import { Download, FileText, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

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
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10" />

        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 text-primary mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-sm tracking-[0.2em] uppercase font-medium">Documentación</p>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-medium text-foreground leading-tight mb-6">
              Currículum <br />
              <span className="text-zinc-600">Vitae.</span>
            </h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Respaldo formal de mi trayectoria. Descarga la versión que mejor se ajuste a lo que buscas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CVs List */}
      <section className="pb-20">
        <div className="section-container">
          <div className="max-w-3xl space-y-4">
            {cvs.map((cv, index) => (
              <motion.a
                key={index}
                href={cv.archivo}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="flex items-center justify-between p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-lg bg-white/5 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                    <FileText size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                        {cv.titulo}
                      </h3>
                      <span className="text-[10px] font-mono border border-white/10 px-2 py-0.5 rounded text-zinc-500 group-hover:border-primary/30 group-hover:text-primary/70 transition-colors">
                        {cv.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2 font-light max-w-sm">
                      {cv.descripcion}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-2 text-zinc-500 group-hover:text-foreground transition-colors pr-4">
                  <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">Descargar</span>
                  <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Quick info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 max-w-3xl border-t border-white/5 pt-12"
          >
            <h2 className="text-sm text-zinc-500 uppercase tracking-widest mb-8">Datos Rápidos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12">
              <div className="space-y-1">
                <p className="text-xs text-zinc-500 uppercase tracking-wider">Ubicación</p>
                <p className="text-foreground font-medium">Santiago, Chile</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-zinc-500 uppercase tracking-wider">Formación</p>
                <p className="text-foreground font-medium">Ingeniería Civil Telemática</p>
                <p className="text-sm text-zinc-500">UTFSM</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-zinc-500 uppercase tracking-wider">Idiomas</p>
                <div className="flex gap-4">
                  <div>
                    <p className="text-foreground font-medium">Español</p>
                    <p className="text-sm text-zinc-500">Nativo</p>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Inglés</p>
                    <p className="text-sm text-zinc-500">B1</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CVs;