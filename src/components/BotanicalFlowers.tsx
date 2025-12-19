import { motion } from 'framer-motion';

interface FlowerProps {
  className?: string;
  delay?: number;
  scale?: number;
}

// Simple botanical line flower
const LineFlower = ({ className = '', delay = 0, scale = 1 }: FlowerProps) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`${className}`}
    style={{ width: 80 * scale, height: 80 * scale }}
    initial={{ opacity: 0, pathLength: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay }}
  >
    {/* Stem */}
    <motion.path
      d="M50 95 Q48 70 50 50"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay }}
    />
    {/* Petals */}
    <motion.path
      d="M50 50 Q35 35 50 20 Q65 35 50 50"
      stroke="currentColor"
      strokeWidth="0.8"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: delay + 0.3 }}
    />
    <motion.path
      d="M50 50 Q30 45 25 35 Q35 25 50 50"
      stroke="currentColor"
      strokeWidth="0.8"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: delay + 0.4 }}
    />
    <motion.path
      d="M50 50 Q70 45 75 35 Q65 25 50 50"
      stroke="currentColor"
      strokeWidth="0.8"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: delay + 0.5 }}
    />
    {/* Center */}
    <motion.circle
      cx="50"
      cy="48"
      r="4"
      stroke="currentColor"
      strokeWidth="0.8"
      fill="none"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: delay + 0.8 }}
    />
  </motion.svg>
);

// Leaf element
const LineLeaf = ({ className = '', delay = 0, scale = 1 }: FlowerProps) => (
  <motion.svg
    viewBox="0 0 60 100"
    className={`${className}`}
    style={{ width: 40 * scale, height: 70 * scale }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay }}
  >
    <motion.path
      d="M30 95 Q28 60 30 30 Q45 50 55 25 Q40 55 30 30"
      stroke="currentColor"
      strokeWidth="0.8"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay }}
    />
    <motion.path
      d="M30 30 Q15 50 5 25 Q20 55 30 30"
      stroke="currentColor"
      strokeWidth="0.8"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay: delay + 0.3 }}
    />
  </motion.svg>
);

// Rose style flower
const LineRose = ({ className = '', delay = 0, scale = 1 }: FlowerProps) => (
  <motion.svg
    viewBox="0 0 100 120"
    className={`${className}`}
    style={{ width: 70 * scale, height: 90 * scale }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay }}
  >
    {/* Stem */}
    <motion.path
      d="M50 115 Q48 85 50 60"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay }}
    />
    {/* Spiral petals */}
    <motion.path
      d="M50 55 Q40 45 45 35 Q55 30 60 40 Q65 50 50 55"
      stroke="currentColor"
      strokeWidth="0.7"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: delay + 0.2 }}
    />
    <motion.path
      d="M50 55 Q35 50 30 40 Q35 25 50 30 Q65 25 70 40 Q65 55 50 55"
      stroke="currentColor"
      strokeWidth="0.7"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay: delay + 0.4 }}
    />
    <motion.path
      d="M50 55 Q25 55 20 35 Q25 15 50 20 Q75 15 80 35 Q75 55 50 55"
      stroke="currentColor"
      strokeWidth="0.7"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.4, delay: delay + 0.6 }}
    />
  </motion.svg>
);

// Small simple flower
const SimpleBlossom = ({ className = '', delay = 0, scale = 1 }: FlowerProps) => (
  <motion.svg
    viewBox="0 0 50 50"
    className={`${className}`}
    style={{ width: 35 * scale, height: 35 * scale }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay }}
  >
    {[0, 72, 144, 216, 288].map((angle, i) => (
      <motion.ellipse
        key={i}
        cx="25"
        cy="15"
        rx="6"
        ry="12"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
        transform={`rotate(${angle} 25 25)`}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: delay + i * 0.1 }}
      />
    ))}
    <motion.circle
      cx="25"
      cy="25"
      r="5"
      stroke="currentColor"
      strokeWidth="0.7"
      fill="none"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: delay + 0.5 }}
    />
  </motion.svg>
);

interface BotanicalFlowersProps {
  variant?: 'corner' | 'scattered' | 'border';
  className?: string;
}

const BotanicalFlowers = ({ variant = 'corner', className = '' }: BotanicalFlowersProps) => {
  if (variant === 'corner') {
    return (
      <div className={`absolute pointer-events-none text-primary/50 ${className}`}>
        {/* Top right corner */}
        <div className="absolute -top-10 -right-10 rotate-45">
          <LineFlower delay={0.2} scale={1.2} />
        </div>
        <div className="absolute top-20 -right-5 rotate-12">
          <LineLeaf delay={0.4} />
        </div>
        <div className="absolute top-5 right-20 -rotate-30">
          <SimpleBlossom delay={0.6} scale={0.8} />
        </div>
        
        {/* Bottom left corner */}
        <div className="absolute -bottom-10 -left-10 -rotate-45">
          <LineRose delay={0.3} scale={1.1} />
        </div>
        <div className="absolute bottom-20 -left-5 -rotate-12">
          <LineLeaf delay={0.5} />
        </div>
      </div>
    );
  }

  if (variant === 'scattered') {
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden text-primary/40 ${className}`}>
        <div className="absolute top-[10%] right-[5%] rotate-12">
          <LineFlower delay={0.2} scale={0.9} />
        </div>
        <div className="absolute top-[30%] left-[3%] -rotate-20">
          <SimpleBlossom delay={0.4} scale={0.7} />
        </div>
        <div className="absolute bottom-[20%] right-[8%] rotate-45">
          <LineLeaf delay={0.3} scale={1.1} />
        </div>
        <div className="absolute bottom-[10%] left-[10%] -rotate-15">
          <LineRose delay={0.5} scale={0.8} />
        </div>
        <div className="absolute top-[60%] right-[15%] rotate-30">
          <SimpleBlossom delay={0.6} scale={0.6} />
        </div>
      </div>
    );
  }

  // Border variant
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden text-primary/45 ${className}`}>
      {/* Top border */}
      <div className="absolute top-0 left-1/4">
        <SimpleBlossom delay={0.2} scale={0.6} />
      </div>
      <div className="absolute top-2 left-1/2">
        <LineLeaf delay={0.3} scale={0.7} className="rotate-180" />
      </div>
      <div className="absolute top-0 right-1/4">
        <SimpleBlossom delay={0.4} scale={0.5} />
      </div>
      
      {/* Side accents */}
      <div className="absolute top-1/3 -left-4 rotate-90">
        <LineFlower delay={0.5} scale={0.8} />
      </div>
      <div className="absolute top-1/3 -right-4 -rotate-90">
        <LineFlower delay={0.6} scale={0.8} />
      </div>
    </div>
  );
};

export default BotanicalFlowers;
