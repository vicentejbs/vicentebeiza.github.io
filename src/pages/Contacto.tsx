import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import RevealText from "@/components/RevealText";
import GlitchText from "@/components/GlitchText";
import OrganicShape from "@/components/OrganicShape";
import MagneticButton from "@/components/MagneticButton";
import BotanicalFlowers from "@/components/BotanicalFlowers";

const contactLinks = [
  {
    label: "Email",
    value: "vicentebeizas@gmail.com",
    href: "mailto:vicentebeizas@gmail.com"
  },
  {
    label: "Teléfono",
    value: "+56 9 4400 0657",
    href: "tel:+56944000657"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vicentebeizas",
    href: "https://www.linkedin.com/in/vicentebeizas",
    external: true
  }
];

const Contacto = () => {
  return (
    <Layout>
      {/* Full page contact section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20">
        {/* Botanical flowers */}
        <BotanicalFlowers variant="minimal" />
        
        <OrganicShape 
          className="-top-40 -right-40 opacity-25" 
          color="primary" 
          size={500} 
          morphDuration={25}
        />
        <OrganicShape 
          className="bottom-0 -left-60 opacity-20" 
          color="accent" 
          size={400} 
          morphDuration={30}
        />

        <div className="section-container flex-1 flex flex-col justify-center">
          {/* Header */}
          <div className="mb-16">
            <RevealText delay={0.1}>
              <div className="flex items-center gap-2 text-primary mb-4">
                <motion.span 
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-sm tracking-[0.2em] uppercase font-medium animate-shimmer">Hablemos</p>
              </div>
            </RevealText>

            <RevealText delay={0.2}>
              <h1 className="font-display text-5xl md:text-7xl font-medium text-foreground leading-tight">
                <GlitchText>Contacto</GlitchText>
              </h1>
            </RevealText>
          </div>

          {/* Contact Info - Full width */}
          <div className="w-full space-y-0">
            {contactLinks.map((contact, index) => (
              <MagneticButton key={index} strength={0.2} className="w-full">
                <motion.a
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -30, filter: 'blur(5px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ x: 10, backgroundColor: 'hsl(var(--primary) / 0.03)' }}
                  className="flex items-center justify-between py-8 md:py-10 border-t border-border group relative overflow-hidden rounded-lg w-full"
                >
                  {/* Animated gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className="relative z-10">
                    <motion.p 
                      className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest mb-2"
                      whileHover={{ color: 'hsl(var(--primary))' }}
                    >
                      {contact.label}
                    </motion.p>
                    <motion.p 
                      className="font-display text-xl md:text-2xl lg:text-3xl text-foreground relative inline-block"
                      whileHover={{ color: 'hsl(var(--primary))' }}
                    >
                      {contact.value}
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-px bg-primary"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ originX: 0 }}
                      />
                    </motion.p>
                  </div>
                  <motion.div
                    className="relative z-10"
                    whileHover={{ rotate: 45, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                </motion.a>
              </MagneticButton>
            ))}

            {/* Location - non-clickable */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ x: 10 }}
              className="py-8 md:py-10 border-t border-b border-border group relative overflow-hidden rounded-lg w-full"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.4 }}
              />
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest mb-2 relative z-10">Ubicación</p>
              <p className="font-display text-xl md:text-2xl lg:text-3xl text-foreground relative z-10 group-hover:text-accent transition-colors">
                Santiago, Chile
              </p>
            </motion.div>
          </div>

          <RevealText delay={0.5}>
            <motion.p 
              className="text-muted-foreground text-base mt-12"
              whileHover={{ color: 'hsl(var(--foreground))' }}
            >
              Respondo rápido, así que no dudes en escribirme.
            </motion.p>
          </RevealText>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
