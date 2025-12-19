import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoaderProps {
  onComplete?: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            onComplete?.();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -40, 0],
                y: [0, 40, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </motion.div>

          {/* Floating particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.id % 3 === 0 
                  ? 'hsl(var(--primary))' 
                  : particle.id % 3 === 1 
                    ? 'hsl(var(--accent))' 
                    : 'hsl(var(--foreground) / 0.3)',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                y: [0, -100, -200],
                x: [0, particle.id % 2 === 0 ? 20 : -20, 0],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}

          {/* Neural connection lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${20 + i * 15}%`}
                y1="50%"
                x2={`${30 + i * 15}%`}
                y2={`${40 + (i % 2) * 20}%`}
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </svg>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo / Initials with morphing effect */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                style={{ width: 120, height: 120, margin: -20 }}
                animate={{ 
                  rotate: 360,
                  borderColor: ['hsl(var(--primary) / 0.3)', 'hsl(var(--accent) / 0.3)', 'hsl(var(--primary) / 0.3)']
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Inner morphing shape */}
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm flex items-center justify-center"
                animate={{
                  borderRadius: [
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                    '30% 60% 70% 40% / 50% 60% 30% 60%',
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.span
                  className="font-display text-3xl font-bold text-foreground"
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [0.95, 1, 0.95]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  VB
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.p
                className="text-sm text-muted-foreground tracking-[0.3em] uppercase mb-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Cargando
              </motion.p>

              {/* Progress bar */}
              <div className="w-48 h-px bg-border relative overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '300%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              {/* Progress percentage */}
              <motion.p
                className="text-xs text-muted-foreground mt-3 font-mono"
                key={Math.floor(progress)}
              >
                {Math.min(Math.floor(progress), 100)}%
              </motion.p>
            </motion.div>
          </div>

          {/* Corner decorations */}
          <motion.div
            className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-accent/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          />

          {/* Exit animation overlay */}
          <motion.div
            className="absolute inset-0 bg-background origin-bottom"
            initial={{ scaleY: 0 }}
            animate={progress >= 100 ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
