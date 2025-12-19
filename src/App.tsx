import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import SobreMi from "./pages/SobreMi";
import Experiencia from "./pages/Experiencia";
import Proyectos from "./pages/Proyectos";
import CVs from "./pages/CVs";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import Loader from "@/components/Loader";

const queryClient = new QueryClient();

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Loader */}
        <Loader onComplete={() => setIsLoaded(true)} />
        
        {/* Main content with entrance animation */}
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              
              <Toaster />
              <Sonner />
              <HashRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/sobre-mi" element={<SobreMi />} />
                  <Route path="/experiencia" element={<Experiencia />} />
                  <Route path="/proyectos" element={<Proyectos />} />
                  <Route path="/cvs" element={<CVs />} />
                  <Route path="/contacto" element={<Contacto />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </HashRouter>
            </motion.div>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
