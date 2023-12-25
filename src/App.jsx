import GlobalStyle from './globalStyles';
import { useThemeContext } from './providers/ThemeProvider';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import { lightTheme, darkTheme } from './themes/theme';
import { THEMES } from './lib/constants';
import { AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';
import { useMusicContext } from './providers/MusicProvider';

const App = () => {
  const { isPlaying } = useMusicContext();
  const { theme } = useThemeContext();
  const location = useLocation();

  return (
    <StyledThemeProvider
      theme={theme === THEMES.light ? lightTheme : darkTheme}
    >
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
    </StyledThemeProvider>
  );
};

export default App;
