import { createContext, useContext, useState } from 'react';

const MusicContext = createContext();

const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleIsPlaying = () => setIsPlaying(!isPlaying);

  return (
    <MusicContext.Provider value={{ isPlaying, toggleIsPlaying }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => useContext(MusicContext);
export default MusicProvider;
