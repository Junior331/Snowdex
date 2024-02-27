import { ReactNode, createContext, useMemo, useState } from 'react';

type IThemeProps = {
  isDarkMode: boolean;
  toggleTheme: (item: boolean) => void;
};

const defaultTheme: IThemeProps = {
  isDarkMode: true,
  toggleTheme: () => {}
};

export const ThemeContext = createContext<IThemeProps>(
  defaultTheme as IThemeProps
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const value = useMemo(
    () => ({ isDarkMode, toggleTheme }),
    [isDarkMode, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
