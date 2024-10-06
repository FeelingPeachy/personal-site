import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext(); // create the contect
export const useTheme = () => useContext(ThemeContext); 

// theme provider
// this allows components to share data by passing states across children components
export const ThemeProvider = ({ children }) => { 
  const [screenMode, setScreenMode] = useState(true);  

  return (


    // all children have access to valeues provided by theme context
    <ThemeContext.Provider value={{ screenMode, setScreenMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
