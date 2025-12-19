import { Code, Cpu, Network, Radio, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const proyectos = [
  {
    icon: Code,
    titulo: "Software y Simulaciones",
    categoria: "Desarrollo",
    descripcion:
      "Desarrollo de software y simulaciones de circuitos utilizando múltiples lenguajes de programación para resolver problemas complejos de ingeniería.",
    tecnologias: ["C", "C++", "Python", "MATLAB"],
    aprendizajes: [
      "Programación orientada a objetos",
      "Algoritmos de optimización",
      "Modelado matemático",
      "Simulación de sistemas",
    ],
  },
  {
    icon: Cpu,
    titulo: "Sistemas Embebidos",
    categoria: "Hardware",
    descripcion:
      "Trabajo con placas de desarrollo para proyectos de sistemas embebidos y procesamiento de señales digitales.",
    tecnologias: ["Arduino", "Nexys A7 (FPGA)", "C++"],
    aprendizajes: [
      "Diseño de circuitos digitales",
      "Procesamiento de señales",
      "Interfaces hardware-software",
      "Prototipado rápido",
    ],
  },
  {
    icon: Radio,
    titulo: "Telecomunicaciones",
    categoria: "Comunicaciones",
    descripcion:
      "Aplicaciones de telecomunicaciones utilizando software especializado para radio definido por software y análisis de señales.",
    tecnologias: ["GNU Radio", "Linux", "Python"],
    aprendizajes: [
      "Radio definido por software (SDR)",
      "Procesamiento digital de señales",
      "Protocolos de comunicación",
      "Análisis espectral",
    ],
  },
  {
    icon: Network,
    titulo: "Redes y Sistemas",
    categoria: "Infraestructura",
    descripcion:
      "Configuración y administración de dispositivos de red, aplicando protocolos reales y técnicas de resolución de fallas en entornos simulados y físicos.",
    tecnologias: ["Cisco IOS", "Cisco Packet Tracer", "Linux"],
    aprendizajes: [
      "Configuración de routers y switches",
      "Protocolos de enrutamiento",
      "Seguridad de redes",
      "Troubleshooting",
    ],
  },
];

const Proyectos = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl animate-fade-up opacity-0">
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Portfolio
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Proyectos
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Una selección de proyectos académicos y personales que reflejan mi interés en la tecnología, las telecomunicaciones y la innovación aplicada.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 md:py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {proyectos.map((proyecto, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 group animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="bg-accent/50 p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <proyecto.icon size={24} className="text-foreground" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        {proyecto.categoria}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {proyecto.titulo}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-5">
                  <p className="text-muted-foreground leading-relaxed">
                    {proyecto.descripcion}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Tecnologías utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {proyecto.tecnologias.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learnings */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Aprendizajes clave
                    </h4>
                    <ul className="space-y-2">
                      {proyecto.aprendizajes.map((aprendizaje) => (
                        <li
                          key={aprendizaje}
                          className="flex items-center gap-2 text-muted-foreground text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {aprendizaje}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              ¿Qué sigue?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Estos proyectos me han dado una base sólida en distintas áreas de la ingeniería. Ahora estoy buscando oportunidades donde pueda seguir aprendiendo, aportar lo que sé, y trabajar en cosas que tengan un impacto real. Estoy abierto a todo tipo de desafíos.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Proyectos;
