import GlobalStyle from './globalStyles';
import { theme } from './themes/theme';
import { ThemeProvider } from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';
import { useMusicContext } from './providers/MusicProvider';

const App = () => {
  const { isPlaying } = useMusicContext();
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=55rQV21_-RE&ab_channel=EpidemicPop"
        playing={isPlaying}
        width="0"
        height="0"
        volume={0.5}
      />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
