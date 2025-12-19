import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'circle' | 'ring' | 'dot';
}

const generateParticles = (count: number): Particle[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 2,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
    type: ['circle', 'ring', 'dot'][Math.floor(Math.random() * 3)] as Particle['type'],
  }));
};

const FloatingParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const particles = useRef(generateParticles(20)).current;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x * 30);
        mouseY.set(y * 30);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Organic gradient blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.3), transparent 70%)',
          left: '10%',
          top: '20%',
          x: useTransform(smoothMouseX, (v) => v * -2),
          y: useTransform(smoothMouseY, (v) => v * -2),
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-25"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.25), transparent 70%)',
          right: '5%',
          bottom: '10%',
          x: useTransform(smoothMouseX, (v) => v * 1.5),
          y: useTransform(smoothMouseY, (v) => v * 1.5),
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            x: useTransform(smoothMouseX, (v) => v * (particle.id % 2 === 0 ? 1 : -1) * 0.5),
            y: useTransform(smoothMouseY, (v) => v * (particle.id % 2 === 0 ? 1 : -1) * 0.5),
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -100, -200],
            x: [0, (particle.id % 2 === 0 ? 20 : -20), 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        >
          {particle.type === 'circle' && (
            <div
              className="rounded-full bg-primary/40"
              style={{ width: particle.size, height: particle.size }}
            />
          )}
          {particle.type === 'ring' && (
            <div
              className="rounded-full border border-accent/30"
              style={{ width: particle.size * 2, height: particle.size * 2 }}
            />
          )}
          {particle.type === 'dot' && (
            <div
              className="rounded-full bg-foreground/20"
              style={{ width: particle.size / 2, height: particle.size / 2 }}
            />
          )}
        </motion.div>
      ))}

      {/* Neural connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.path
          d="M0,50 Q25,30 50,50 T100,50"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          fill="none"
          className="transform scale-x-[3]"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
};

export default FloatingParticles;
