import React, { createContext, useContext, useState, useEffect } from 'react'; // Import necessary hooks

export const ThemeContext = createContext(); // Create the context

export const useTheme = () => useContext(ThemeContext); // Allows us to access context states using useTheme

const initTheme = localStorage.getItem('screenMode') === 'True'; // if defined True else False

// Theme provider
// This allows components to share data by passing states across children components
export const ThemeProvider = ({ children }) => { 


  const [screenMode, setScreenMode] = useState(initTheme);  

  // Every time screenMode state changes, save in local storage
  useEffect(() => {
    window.localStorage.setItem('screenMode', screenMode ? 'True' : 'False');
  }, [screenMode]);

  
  return (
    // All children have access to values provided by theme context
    <ThemeContext.Provider value={{ screenMode, setScreenMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
