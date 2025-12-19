import { Calendar } from "lucide-react";
import Layout from "@/components/Layout";

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
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-2xl animate-fade-up opacity-0">
            <p className="text-taupe text-sm tracking-wide mb-3">Trayectoria</p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight mb-4">
              Experiencia
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Un poco de todo: organización de eventos, liderazgo estudiantil, emprendimiento familiar y proyectos universitarios. Cada experiencia me ha dejado algo valioso.
            </p>
          </div>
        </div>
      </section>

      {/* Experience List */}
      <section className="pb-16">
        <div className="section-container">
          <h2 className="text-sm text-taupe uppercase tracking-widest mb-8">Trabajo</h2>
          
          <div className="space-y-0">
            {experiencias.map((exp, index) => (
              <div
                key={index}
                className="py-8 border-t border-border animate-fade-up opacity-0 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-3">
                    <p className="text-sm text-taupe flex items-center gap-2">
                      <Calendar size={14} />
                      {exp.periodo}
                    </p>
                  </div>
                  <div className="md:col-span-9 space-y-3">
                    <div>
                      <h3 className="font-display text-xl text-foreground">
                        {exp.titulo}
                      </h3>
                      <p className="text-muted-foreground text-sm">{exp.empresa}</p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                      {exp.descripcion}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {exp.habilidades.map((hab) => (
                        <span
                          key={hab}
                          className="text-xs text-taupe"
                        >
                          {hab}
                          {exp.habilidades.indexOf(hab) !== exp.habilidades.length - 1 && " ·"}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 border-t border-border">
        <div className="section-container">
          <h2 className="text-sm text-taupe uppercase tracking-widest mb-8">Educación</h2>

          <div className="space-y-0">
            {educacion.map((edu, index) => (
              <div
                key={index}
                className="py-8 border-t border-border first:border-t-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-3">
                    <p className="text-sm text-taupe">{edu.periodo}</p>
                  </div>
                  <div className="md:col-span-9 space-y-2">
                    <h3 className="font-display text-xl text-foreground">
                      {edu.titulo}
                    </h3>
                    <p className="text-muted-foreground text-sm">{edu.institucion}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                      {edu.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills - Simple inline */}
      <section className="py-16 border-t border-border">
        <div className="section-container">
          <h2 className="text-sm text-taupe uppercase tracking-widest mb-8">Habilidades</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div>
              <h3 className="font-display text-lg text-foreground mb-3">Programación</h3>
              <p className="text-muted-foreground text-sm">
                Python, C, C++, Java, JavaScript, SQL, MATLAB, HTML
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-foreground mb-3">Herramientas</h3>
              <p className="text-muted-foreground text-sm">
                Git, Linux, Arduino, GNU Radio, Nexys A7, Cisco IOS
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-foreground mb-3">Competencias</h3>
              <p className="text-muted-foreground text-sm">
                Liderazgo, Trabajo en Equipo, Resolución de Problemas, Comunicación
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experiencia;