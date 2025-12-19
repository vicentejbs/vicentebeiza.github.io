import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
}

const GlitchText = ({ children, className = '' }: GlitchTextProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main text */}
      <motion.span
        className="relative z-10"
        animate={
          isHovered
            ? {
                x: [0, -2, 2, -2, 0],
              }
            : {}
        }
        transition={{
          duration: 0.3,
          repeat: isHovered ? Infinity : 0,
          repeatType: 'mirror',
        }}
      >
        {children}
      </motion.span>

      {/* Glitch layers */}
      {isHovered && (
        <>
          <motion.span
            className="absolute inset-0 text-primary/80 z-0"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
            animate={{
              x: [0, 3, -3, 3, 0],
              opacity: [0.8, 0.4, 0.8, 0.4, 0.8],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute inset-0 text-accent/80 z-0"
            style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
            animate={{
              x: [0, -3, 3, -3, 0],
              opacity: [0.8, 0.4, 0.8, 0.4, 0.8],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatType: 'mirror',
              delay: 0.05,
            }}
          >
            {children}
          </motion.span>
        </>
      )}
    </motion.span>
  );
};

export default GlitchText;
