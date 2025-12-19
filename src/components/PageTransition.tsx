import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.98,
    filter: 'blur(10px)',
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
  out: {
    opacity: 0,
    y: -30,
    scale: 1.02,
    filter: 'blur(5px)',
  },
};

const pageTransition = {
  type: 'tween' as const,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  duration: 0.6,
};

// Overlay animation for page transitions
const overlayVariants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: [0, 1, 1, 0],
  },
  exit: {
    scaleY: 0,
  },
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();

  return (
    <div className="relative">
      {/* Page transition overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`overlay-${location.pathname}`}
          className="fixed inset-0 z-[100] bg-primary/10 origin-bottom pointer-events-none"
          initial={{ scaleY: 0 }}
          animate={{ 
            scaleY: [0, 1, 1, 0],
            originY: [1, 1, 0, 0]
          }}
          transition={{ 
            duration: 0.8, 
            times: [0, 0.4, 0.6, 1],
            ease: [0.22, 1, 0.36, 1]
          }}
        />
      </AnimatePresence>

      {/* Main content transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
