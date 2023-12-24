import GlobalStyle from './globalStyles';
import { useThemeContext } from './providers/ThemeProvider';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';
import { lightTheme, darkTheme } from './themes/theme';
import { THEMES } from './lib/constants';

const App = () => {
  const { theme } = useThemeContext();

  return (
    <StyledThemeProvider
      theme={theme === THEMES.light ? lightTheme : darkTheme}
    >
      <Outlet />
      <GlobalStyle />
    </StyledThemeProvider>
  );
};

export default App;
