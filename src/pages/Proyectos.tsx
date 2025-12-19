import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";

const proyectos = [
  {
    titulo: "Software y Simulaciones",
    categoria: "Desarrollo",
    descripcion:
      "Desarrollo de software y simulaciones de circuitos usando múltiples lenguajes para resolver problemas de ingeniería.",
    tecnologias: ["C", "C++", "Python", "MATLAB"],
  },
  {
    titulo: "Sistemas Embebidos",
    categoria: "Hardware",
    descripcion:
      "Trabajo con placas de desarrollo para proyectos de sistemas embebidos y procesamiento de señales digitales.",
    tecnologias: ["Arduino", "Nexys A7 (FPGA)", "C++"],
  },
  {
    titulo: "Telecomunicaciones",
    categoria: "Comunicaciones",
    descripcion:
      "Aplicaciones de telecomunicaciones usando software especializado para radio definido por software.",
    tecnologias: ["GNU Radio", "Linux", "Python"],
  },
  {
    titulo: "Redes y Sistemas",
    categoria: "Infraestructura",
    descripcion:
      "Configuración y administración de dispositivos de red, protocolos y técnicas de troubleshooting.",
    tecnologias: ["Cisco IOS", "Cisco Packet Tracer", "Linux"],
  },
];

const Proyectos = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-2xl animate-fade-up opacity-0">
            <p className="text-taupe text-sm tracking-wide mb-3">Portfolio</p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight mb-4">
              Proyectos
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Proyectos académicos y personales que reflejan lo que he aprendido en distintas áreas de la ingeniería.
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="pb-16">
        <div className="section-container">
          <div className="space-y-0">
            {proyectos.map((proyecto, index) => (
              <div
                key={index}
                className="py-10 border-t border-border animate-fade-up opacity-0 group cursor-pointer hover:bg-card/30 -mx-6 px-6 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-4 flex items-start justify-between">
                    <div>
                      <span className="text-xs text-taupe uppercase tracking-widest">
                        {proyecto.categoria}
                      </span>
                      <h3 className="font-display text-2xl text-foreground mt-1 group-hover:underline underline-offset-4">
                        {proyecto.titulo}
                      </h3>
                    </div>
                    <ArrowUpRight 
                      size={20} 
                      className="text-taupe group-hover:text-foreground transition-colors mt-1 md:hidden" 
                    />
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {proyecto.descripcion}
                    </p>
                  </div>
                  <div className="md:col-span-2 flex items-start justify-end">
                    <ArrowUpRight 
                      size={20} 
                      className="text-taupe group-hover:text-foreground transition-colors hidden md:block" 
                    />
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {proyecto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-taupe border border-border rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 border-t border-border">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl text-foreground mb-4">
              ¿Qué sigue?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Estos proyectos me han dado una base sólida en distintas áreas de la ingeniería. Ahora estoy buscando oportunidades donde pueda seguir aprendiendo, aportar lo que sé, y trabajar en cosas que tengan un impacto real. Estoy abierto a todo tipo de desafíos.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Proyectos;