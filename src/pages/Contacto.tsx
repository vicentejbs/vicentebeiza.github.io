import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Te responderé pronto.",
    });

    // Reset form after delay
    setTimeout(() => {
      setFormData({ nombre: "", email: "", mensaje: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl animate-fade-up opacity-0">
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Conectemos
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Contacto
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Estoy abierto a conversaciones sobre oportunidades de colaboración, proyectos de investigación, pasantías o simplemente para intercambiar ideas sobre tecnología y bienestar humano.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 md:py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-up opacity-0">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Información de Contacto
                </h2>
                <div className="space-y-5">
                  <a
                    href="mailto:vicentebeizas@gmail.com"
                    className="flex items-center gap-4 p-4 glass-card rounded-xl hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail size={22} className="text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">vicentebeizas@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+56944000657"
                    className="flex items-center gap-4 p-4 glass-card rounded-xl hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone size={22} className="text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Teléfono</p>
                      <p className="font-medium text-foreground">+56 9 4400 0657</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/vicentebeizas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass-card rounded-xl hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Linkedin size={22} className="text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium text-foreground">linkedin.com/in/vicentebeizas</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <MapPin size={22} className="text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Ubicación</p>
                      <p className="font-medium text-foreground">Santiago, Chile</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Disponibilidad
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Actualmente me encuentro disponible para:
                </p>
                <ul className="space-y-2">
                  {[
                    "Pasantías en bioingeniería o tecnología deportiva",
                    "Proyectos de investigación académica",
                    "Colaboraciones en innovación tecnológica",
                    "Networking y mentoría profesional",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <CheckCircle size={14} className="text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-up opacity-0 stagger-2">
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Envíame un mensaje
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="¿En qué puedo ayudarte?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle size={18} />
                        ¡Mensaje enviado!
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
