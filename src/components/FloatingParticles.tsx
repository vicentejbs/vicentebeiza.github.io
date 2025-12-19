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

  const particles = useRef(generateParticles(8)).current; // Reduced from 20 to 8 for performance

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
      {/* Organic gradient blobs - optimized with will-change */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 will-change-transform"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.25), transparent 70%)',
          left: '10%',
          top: '20%',
          x: useTransform(smoothMouseX, (v) => v * -1.5),
          y: useTransform(smoothMouseY, (v) => v * -1.5),
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 will-change-transform"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.2), transparent 70%)',
          right: '5%',
          bottom: '10%',
          x: useTransform(smoothMouseX, (v) => v * 1),
          y: useTransform(smoothMouseY, (v) => v * 1),
        }}
      />

      {/* Simplified floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30 will-change-transform"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [0, -80],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}

    </div>
  );
};

export default FloatingParticles;
