import { createContext, useState } from 'react';

const DarkModeContext = createContext();

function DarkModeProvider(props) {

  const [darkMode, setDarkMode] = useState('light');
  const switchDarkMode = () => {
    setDarkMode(darkMode === 'light' ? 'dark' : 'light');
  }

  return (
    <DarkModeContext.Provider value={{darkMode, switchDarkMode}}>
      {props.children}
    </DarkModeContext.Provider>
  );
}

export {DarkModeContext, DarkModeProvider};
