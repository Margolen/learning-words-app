import { useState, createContext } from 'react';

export const ThemeContext = createContext();

//создание компонента, который будет редактировать хранилище
export function ThemeContextProvider({ children }) {
  //создание состояния для хранлища или контекста
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    //оборачиваем children в контекст и передаем объекст с состоянием и функцией
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
