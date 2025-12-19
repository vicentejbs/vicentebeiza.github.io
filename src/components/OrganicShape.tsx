import { motion } from 'framer-motion';

interface OrganicShapeProps {
  className?: string;
  color?: string;
  size?: number;
  morphDuration?: number;
}

const OrganicShape = ({
  className = '',
  color = 'primary',
  size = 300,
  morphDuration = 20,
}: OrganicShapeProps) => {
  const paths = [
    'M44.1,-76.4C58.6,-69.2,72.8,-59.5,81.3,-45.8C89.8,-32.1,92.6,-14.4,90.3,2.2C88,18.7,80.6,34.1,70.5,47.2C60.4,60.3,47.6,71.1,33.1,77.3C18.6,83.5,2.4,85.1,-13.1,82.1C-28.6,79.1,-43.4,71.5,-56.3,61.1C-69.2,50.7,-80.2,37.5,-85.4,22.1C-90.6,6.7,-90,-10.9,-84.3,-26.5C-78.6,-42.1,-67.8,-55.7,-54.3,-63.5C-40.8,-71.3,-24.6,-73.3,-9,-69.4C6.6,-65.5,29.6,-83.6,44.1,-76.4Z',
    'M42.5,-73.2C56.8,-67.3,71.1,-58.4,79.8,-45.5C88.5,-32.6,91.6,-15.7,89.4,-0.3C87.2,15.1,79.7,28.9,70.5,41.3C61.3,53.7,50.4,64.7,37.4,71.5C24.4,78.3,9.3,81,-5.8,79.3C-20.9,77.6,-36,71.5,-49.2,62.5C-62.4,53.5,-73.7,41.6,-80.4,27.3C-87.1,13,-89.2,-3.7,-85.3,-18.9C-81.4,-34.1,-71.5,-47.8,-58.8,-54.2C-46.1,-60.6,-30.6,-59.7,-17.1,-64.8C-3.6,-69.9,8,-81.1,21.6,-82.4C35.2,-83.7,28.2,-79.1,42.5,-73.2Z',
    'M39.4,-67.8C52.8,-62.3,67,-55.5,76.2,-44.1C85.4,-32.7,89.6,-16.7,88.3,-1.2C87,14.3,80.2,29.3,70.6,41.9C61,54.5,48.6,64.7,34.8,71.3C21,77.9,5.8,80.9,-9.5,79.7C-24.8,78.5,-40.2,73.1,-53.5,64.1C-66.8,55.1,-78,42.5,-83.4,27.8C-88.8,13.1,-88.4,-3.7,-83.6,-18.9C-78.8,-34.1,-69.6,-47.7,-57.2,-53.8C-44.8,-59.9,-29.2,-58.5,-15.8,-62.7C-2.4,-66.9,8.8,-76.7,21.8,-78.9C34.8,-81.1,26,-73.3,39.4,-67.8Z',
  ];

  return (
    <motion.svg
      viewBox="-100 -100 200 200"
      className={`absolute ${className}`}
      style={{ width: size, height: size }}
    >
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={`hsl(var(--${color}))`} stopOpacity="0.3" />
          <stop offset="100%" stopColor={`hsl(var(--${color}))`} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <motion.path
        fill={`url(#gradient-${color})`}
        initial={{ d: paths[0] }}
        animate={{
          d: paths,
        }}
        transition={{
          duration: morphDuration,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
  );
};

export default OrganicShape;
