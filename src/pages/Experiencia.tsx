import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";
import Layout from "@/components/Layout";

const experiencias = [
  {
    tipo: "trabajo",
    titulo: "Co-Fundador y Organizador",
    empresa: "Muestra Tech (Feria Académica)",
    periodo: "Ago 2024 – Presente",
    descripcion:
      "Co-fundé y lideré la organización de una feria de innovación clave para conectar al estudiantado con empresas tecnológicas. Gestioné la logística integral del evento, la negociación de patrocinios y la coordinación de las presentaciones estudiantiles, fomentando el networking profesional.",
    habilidades: ["Gestión de Proyectos", "Liderazgo", "Networking", "Organización de Eventos"],
  },
  {
    tipo: "trabajo",
    titulo: "Delegado de Deportes",
    empresa: "Centro de Alumnos UTFSM",
    periodo: "Mar 2024 – Presente",
    descripcion:
      "Coordino y represento las actividades deportivas del Departamento de Telemática. Actúo como enlace principal entre el alumnado y la administración para la gestión de eventos interdepartamentales, fomentando el trabajo en equipo y aumentando la participación estudiantil.",
    habilidades: ["Comunicación", "Coordinación", "Liderazgo Estudiantil", "Gestión Deportiva"],
  },
  {
    tipo: "trabajo",
    titulo: "Encargado de Marketing Digital y Operaciones",
    empresa: "Beiza & Beiza (Emprendimiento Familiar)",
    periodo: "2023 – Presente",
    descripcion:
      "Optimicé la logística interna mediante categorización, control de inventario y gestión de activos técnicos. Actualmente lidero la presencia digital y publicidad de la empresa, desarrollando estrategias online para captación de clientes y posicionamiento de marca.",
    habilidades: ["Marketing Digital", "Gestión de Operaciones", "Estrategia", "Emprendimiento"],
  },
  {
    tipo: "trabajo",
    titulo: "Tutor Particular",
    empresa: "Matemáticas y Física",
    periodo: "2022 – Presente",
    descripcion:
      "Brindo apoyo académico personalizado a estudiantes de educación media y básica. He desarrollado metodologías de enseñanza adaptativas que han logrado mejorar significativamente la comprensión de conceptos complejos y el rendimiento escolar.",
    habilidades: ["Enseñanza", "Comunicación", "Paciencia", "Metodología Adaptativa"],
  },
];

const educacion = [
  {
    titulo: "Ingeniería Civil Telemática",
    institucion: "Universidad Técnica Federico Santa María",
    periodo: "2022 – Presente",
    descripcion:
      "Formación integral en telecomunicaciones, redes, programación y sistemas. Seleccionado de fútbol universitario y participante activo en actividades de liderazgo estudiantil.",
  },
  {
    titulo: "Educación Media Técnico-Profesional",
    institucion: "Liceo Industrial Eliodoro García Zegers A20",
    periodo: "2018 – 2021",
    descripcion:
      "Especialidad Eléctrica. Formación técnica que desarrolló mi capacidad analítica y práctica para resolver problemas.",
  },
];

const reconocimientos = [
  {
    titulo: "Mejor Compañero 2025",
    organizacion: "Relaciones Estudiantiles Ceetel - UTFSM",
    descripcion: "Reconocimiento por compañerismo y apoyo a la comunidad estudiantil.",
  },
  {
    titulo: "Participación en Centro de Estudiantes",
    organizacion: "UTFSM 2025",
    descripcion: "Contribución activa al desarrollo de la comunidad universitaria.",
  },
];

const Experiencia = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl animate-fade-up opacity-0">
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Trayectoria
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Mi Experiencia
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Un poco de todo: organización de eventos, liderazgo estudiantil, emprendimiento familiar y proyectos universitarios. Cada experiencia me ha dejado algo valioso.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-8 md:py-12">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Briefcase size={20} className="text-foreground" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Experiencia Profesional
            </h2>
          </div>

          <div className="space-y-6">
            {experiencias.map((exp, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-elevated transition-all duration-300 animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {exp.titulo}
                    </h3>
                    <p className="text-primary font-medium">{exp.empresa}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar size={14} />
                    {exp.periodo}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {exp.descripcion}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.habilidades.map((hab) => (
                    <span
                      key={hab}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium"
                    >
                      {hab}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-12 md:py-16 bg-card/50">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <GraduationCap size={20} className="text-foreground" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Formación Académica
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educacion.map((edu, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Calendar size={14} />
                  {edu.periodo}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {edu.titulo}
                </h3>
                <p className="text-primary font-medium mb-3">{edu.institucion}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {edu.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Award size={20} className="text-foreground" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Reconocimientos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reconocimientos.map((rec, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-elevated transition-all duration-300"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {rec.titulo}
                </h3>
                <p className="text-primary font-medium mb-3">{rec.organizacion}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {rec.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 md:py-16 bg-card/50">
        <div className="section-container">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-10 text-center">
            Habilidades Técnicas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="font-display text-lg font-medium text-foreground mb-4">
                Programación
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["Python", "C", "C++", "Java", "JavaScript", "SQL", "MATLAB", "HTML"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-accent rounded-full text-xs font-medium text-accent-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-display text-lg font-medium text-foreground mb-4">
                Herramientas
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["Git", "Linux", "Arduino", "GNU Radio", "Nexys A7", "Cisco IOS"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-accent rounded-full text-xs font-medium text-accent-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-display text-lg font-medium text-foreground mb-4">
                Competencias
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["Liderazgo", "Trabajo en Equipo", "Resolución de Problemas", "Comunicación"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-accent rounded-full text-xs font-medium text-accent-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experiencia;
