import { Download, FileText, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";

const cvs = [
  {
    titulo: "CV Completo",
    descripcion: "Currículum detallado con toda mi experiencia académica y profesional.",
    archivo: "/documents/CV_VICENTE_BEIZA.pdf",
  },
  {
    titulo: "Resumen Ejecutivo",
    descripcion: "Versión resumida de una página con los puntos más relevantes.",
    archivo: "/documents/Summary_VicenteBeiza.pdf",
  },
];

const CVs = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-2xl animate-fade-up opacity-0">
            <p className="text-taupe text-sm tracking-wide mb-3">Documentos</p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight mb-4">
              Currículum
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Descarga mi currículum en el formato que prefieras.
            </p>
          </div>
        </div>
      </section>

      {/* CVs List */}
      <section className="pb-20">
        <div className="section-container">
          <div className="max-w-xl space-y-0">
            {cvs.map((cv, index) => (
              <a
                key={index}
                href={cv.archivo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-6 border-t border-border group first:border-t"
              >
                <div className="flex items-start gap-4">
                  <FileText size={18} className="text-taupe mt-0.5" />
                  <div>
                    <h3 className="font-display text-lg text-foreground group-hover:underline underline-offset-4">
                      {cv.titulo}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {cv.descripcion}
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-taupe group-hover:text-foreground transition-colors flex-shrink-0 ml-4" />
              </a>
            ))}
            <div className="border-b border-border" />
          </div>

          {/* Quick info */}
          <div className="mt-16 max-w-xl">
            <h2 className="text-sm text-taupe uppercase tracking-widest mb-6">Datos rápidos</h2>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
              <div>
                <p className="text-muted-foreground">Nombre</p>
                <p className="text-foreground">Vicente Jesús Beiza Silva</p>
              </div>
              <div>
                <p className="text-muted-foreground">Ubicación</p>
                <p className="text-foreground">Santiago, Chile</p>
              </div>
              <div>
                <p className="text-muted-foreground">Carrera</p>
                <p className="text-foreground">Ingeniería Civil Telemática</p>
              </div>
              <div>
                <p className="text-muted-foreground">Universidad</p>
                <p className="text-foreground">UTFSM</p>
              </div>
              <div>
                <p className="text-muted-foreground">Español</p>
                <p className="text-foreground">Nativo</p>
              </div>
              <div>
                <p className="text-muted-foreground">Inglés</p>
                <p className="text-foreground">Intermedio (B1)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CVs;