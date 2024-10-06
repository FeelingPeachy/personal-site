import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home.jsx';
import Resume from './pages/Resume.jsx';
import { ThemeProvider } from "./contexts/themecontext.jsx"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </ThemeProvider> 
  </StrictMode>
);
