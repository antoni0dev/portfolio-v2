import { createContext, useContext, useState } from 'react';
import { THEMES } from '../lib/constants';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.light);

  const toggleTheme = () =>
    setTheme(theme === THEMES.light ? THEMES.dark : THEMES.light);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
export default ThemeProvider;
