import { useCallback, useRef, useEffect } from 'react';

type SoundType = 'hover' | 'click' | 'success' | 'transition' | 'toggle';

interface UseSoundOptions {
  enabled?: boolean;
  volume?: number;
}

const useSounds = (options: UseSoundOptions = {}) => {
  const { enabled = true, volume = 0.15 } = options;
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize audio context on first user interaction
  const initAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  // Create a subtle hover sound - soft high-frequency ping
  const playHover = useCallback(() => {
    if (!enabled) return;
    
    const ctx = initAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);
    
    gainNode.gain.setValueAtTime(volume * 0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.08);
  }, [enabled, volume, initAudioContext]);

  // Create a click sound - soft pop
  const playClick = useCallback(() => {
    if (!enabled) return;
    
    const ctx = initAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(400, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(volume * 0.5, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.15);
  }, [enabled, volume, initAudioContext]);

  // Create a success sound - ascending tones
  const playSuccess = useCallback(() => {
    if (!enabled) return;
    
    const ctx = initAudioContext();
    
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
      
      gainNode.gain.setValueAtTime(0, ctx.currentTime + i * 0.08);
      gainNode.gain.linearRampToValueAtTime(volume * 0.4, ctx.currentTime + i * 0.08 + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.15);
      
      oscillator.start(ctx.currentTime + i * 0.08);
      oscillator.stop(ctx.currentTime + i * 0.08 + 0.15);
    });
  }, [enabled, volume, initAudioContext]);

  // Create a transition sound - swoosh
  const playTransition = useCallback(() => {
    if (!enabled) return;
    
    const ctx = initAudioContext();
    
    // White noise swoosh
    const bufferSize = ctx.sampleRate * 0.2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    
    const noise = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const gainNode = ctx.createGain();
    
    noise.buffer = buffer;
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1000, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(3000, ctx.currentTime + 0.1);
    filter.Q.value = 0.5;
    
    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    gainNode.gain.setValueAtTime(volume * 0.2, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    
    noise.start(ctx.currentTime);
  }, [enabled, volume, initAudioContext]);

  // Create a toggle sound - two-tone click
  const playToggle = useCallback((isOn: boolean) => {
    if (!enabled) return;
    
    const ctx = initAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.type = 'sine';
    const baseFreq = isOn ? 600 : 400;
    oscillator.frequency.setValueAtTime(baseFreq, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(baseFreq * (isOn ? 1.5 : 0.8), ctx.currentTime + 0.08);
    
    gainNode.gain.setValueAtTime(volume * 0.4, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.1);
  }, [enabled, volume, initAudioContext]);

  // Generic play function
  const play = useCallback((type: SoundType, params?: any) => {
    switch (type) {
      case 'hover':
        playHover();
        break;
      case 'click':
        playClick();
        break;
      case 'success':
        playSuccess();
        break;
      case 'transition':
        playTransition();
        break;
      case 'toggle':
        playToggle(params?.isOn ?? true);
        break;
    }
  }, [playHover, playClick, playSuccess, playTransition, playToggle]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return {
    play,
    playHover,
    playClick,
    playSuccess,
    playTransition,
    playToggle,
  };
};

export default useSounds;
