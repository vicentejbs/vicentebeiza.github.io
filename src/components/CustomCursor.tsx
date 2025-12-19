import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const trailRef = useRef<{ x: number; y: number }[]>([]);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Slower spring for outer ring
  const ringSpringConfig = { damping: 35, stiffness: 200 };
  const ringX = useSpring(cursorX, ringSpringConfig);
  const ringY = useSpring(cursorY, ringSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      // Update trail
      trailRef.current.push({ x: e.clientX, y: e.clientY });
      if (trailRef.current.length > 10) {
        trailRef.current.shift();
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for special cursor text
      const cursorTextAttr = target.getAttribute('data-cursor-text') || 
                             target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
      setCursorText(cursorTextAttr || '');
      
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  // Hide on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer ring with trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border pointer-events-none z-[9999] mix-blend-difference"
        style={{
          translateX: ringX,
          translateY: ringY,
          x: -4,
          y: -4,
        }}
        animate={{
          scale: isHovered ? 2 : isClicking ? 0.8 : 1,
          borderColor: isHovered ? 'hsl(var(--primary))' : 'rgba(255, 255, 255, 0.8)',
          backgroundColor: isHovered ? 'hsl(var(--primary) / 0.1)' : 'transparent',
        }}
        transition={{
          scale: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
          borderColor: { duration: 0.2 },
          backgroundColor: { duration: 0.2 },
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: 12,
          y: 12,
        }}
        animate={{
          scale: isClicking ? 0.5 : 1,
          backgroundColor: isHovered ? 'hsl(var(--primary))' : 'rgba(255, 255, 255, 1)',
        }}
        transition={{
          scale: { duration: 0.15 },
          backgroundColor: { duration: 0.2 },
        }}
      />

      {/* Cursor text label */}
      {cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] text-xs font-medium text-primary bg-background/80 px-2 py-1 rounded-full backdrop-blur-sm"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
            x: 30,
            y: 30,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
