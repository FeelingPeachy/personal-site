import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext(); // create the contect
export const useTheme = () => useContext(ThemeContext); // allows us to acces context states using usesTheme
const initTheme = localStorage.getItem('screenMode') || 'True'; // retrieve init value for scrren mode, else if not defined just return true so default is light

// theme provider
// this allows components to share data by passing states across children components
export const ThemeProvider = ({ children }) => { 
  const [screenMode, setScreenMode] = useState(true);  

  // useEffect(() => {
  //   localStorage.setItem('screenMode', screenMode);
  // }, [theme]);

  return (



    // all children have access to valeues provided by theme context
    <ThemeContext.Provider value={{ screenMode, setScreenMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
