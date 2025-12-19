import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import SobreMi from "./pages/SobreMi";
import Experiencia from "./pages/Experiencia";
import Proyectos from "./pages/Proyectos";
import CVs from "./pages/CVs";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";

const queryClient = new QueryClient();

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: 'blur(10px)',
  },
  in: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
  out: {
    opacity: 0,
    y: -20,
    filter: 'blur(5px)',
  },
};

const pageTransition = {
  type: 'tween' as const,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  duration: 0.5,
};

// Animated Routes component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      {/* Transition overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`overlay-${location.key}`}
          className="fixed inset-0 z-[100] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5 origin-bottom"
            initial={{ scaleY: 0 }}
            animate={{ 
              scaleY: [0, 1, 1, 0],
            }}
            transition={{ 
              duration: 0.7, 
              times: [0, 0.35, 0.65, 1],
              ease: [0.22, 1, 0.36, 1]
            }}
            style={{ transformOrigin: 'bottom' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Page content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Routes location={location}>
            <Route path="/" element={<Index />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/cvs" element={<CVs />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

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
              <CustomCursor />
              <Toaster />
              <Sonner />
              <HashRouter>
                <AnimatedRoutes />
              </HashRouter>
            </motion.div>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
