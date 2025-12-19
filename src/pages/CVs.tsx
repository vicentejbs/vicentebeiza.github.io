import { FileText, Download, Eye, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const documentos = [
  {
    titulo: "Currículum Vitae Completo",
    descripcion:
      "CV detallado con toda mi experiencia profesional, formación académica, habilidades técnicas y logros. Ideal para postulaciones laborales y pasantías.",
    archivo: "/documents/CV_VICENTE_BEIZA.pdf",
    tipo: "Profesional",
    actualizacion: "Diciembre 2025",
  },
  {
    titulo: "Resumen Ejecutivo",
    descripcion:
      "Versión resumida de mi perfil profesional, enfocada en los aspectos más relevantes para oportunidades académicas y de investigación.",
    archivo: "/documents/Summary_VicenteBeiza.pdf",
    tipo: "Académico",
    actualizacion: "Diciembre 2025",
  },
];

const CVs = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl animate-fade-up opacity-0">
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Documentos
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Currículum Vitae
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Descarga mis documentos profesionales actualizados. Disponibles en formato PDF para facilitar su visualización y descarga.
            </p>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-8 md:py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {documentos.map((doc, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="bg-accent/50 p-6">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 bg-background rounded-xl flex items-center justify-center">
                      <FileText size={28} className="text-foreground" />
                    </div>
                    <span className="px-3 py-1 bg-background rounded-full text-xs font-medium text-foreground">
                      {doc.tipo}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {doc.titulo}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {doc.descripcion}
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Última actualización: {doc.actualizacion}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={doc.archivo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-all duration-300"
                    >
                      <Eye size={16} />
                      Ver documento
                    </a>
                    <a
                      href={doc.archivo}
                      download
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-border text-foreground rounded-lg font-medium text-sm hover:bg-card transition-all duration-300"
                    >
                      <Download size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
                Información Adicional
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground mb-4">
                    Datos Personales
                  </h3>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li><span className="text-foreground font-medium">Nombre:</span> Vicente Jesús Beiza Silva</li>
                    <li><span className="text-foreground font-medium">Ubicación:</span> Santiago, Chile</li>
                    <li><span className="text-foreground font-medium">Carrera:</span> Ingeniería Civil Telemática</li>
                    <li><span className="text-foreground font-medium">Universidad:</span> UTFSM</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground mb-4">
                    Idiomas
                  </h3>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex justify-between">
                      <span className="text-foreground font-medium">Español</span>
                      <span>Nativo</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-foreground font-medium">Inglés</span>
                      <span>Intermedio (B1)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-display text-lg font-medium text-foreground mb-4">
                  Áreas de Interés
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Bioingeniería",
                    "Neurociencia",
                    "Tecnología Deportiva",
                    "Innovación en Salud",
                    "Alto Rendimiento",
                    "Inteligencia Artificial",
                    "Telecomunicaciones",
                    "Wearables",
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CVs;
