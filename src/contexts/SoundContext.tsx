import { createContext, useContext, useState, ReactNode } from 'react';
import useSounds from '@/hooks/useSounds';

interface SoundContextType {
  play: (type: 'hover' | 'click' | 'success' | 'transition' | 'toggle', params?: any) => void;
  playHover: () => void;
  playClick: () => void;
  playSuccess: () => void;
  playTransition: () => void;
  playToggle: (isOn: boolean) => void;
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
}

const SoundContext = createContext<SoundContextType | null>(null);

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [enabled, setEnabled] = useState(true);
  const sounds = useSounds({ enabled, volume: 0.12 });

  return (
    <SoundContext.Provider value={{ ...sounds, enabled, setEnabled }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    // Return no-op functions if used outside provider
    return {
      play: () => {},
      playHover: () => {},
      playClick: () => {},
      playSuccess: () => {},
      playTransition: () => {},
      playToggle: () => {},
      enabled: false,
      setEnabled: () => {},
    };
  }
  return context;
};
