import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  blur?: boolean;
}

const RevealText = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  blur = true,
}: RevealTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 40 };
      case 'down':
        return { y: -40 };
      case 'left':
        return { x: 40 };
      case 'right':
        return { x: -40 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        filter: blur ? 'blur(10px)' : 'blur(0px)',
        ...getInitialPosition(),
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              filter: 'blur(0px)',
              x: 0,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealText;
