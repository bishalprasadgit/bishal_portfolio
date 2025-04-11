import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import { Route, Routes } from 'react-router-dom';
import { Box, Grid } from '@mui/material';

export default function BaseLayout() {
   const [darkMode, setDarkMode] = useState(false);

   function handleToggleDarkMode() {
      const oppositeOfCurrentDarkMode = !darkMode;
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
      setDarkMode(oppositeOfCurrentDarkMode);
   }

   useEffect(() => {
      const detectedDarkMode = localStorage.getItem('darkMode') === 'true';

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode);
      } else {
         localStorage.setItem('darkMode', 'false');
      }
   }, []);

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display="flex" flexDirection="column" minHeight="100vh" justifyContent="space-between">
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/portfolio" element={<Portfolio />} />
               </Routes>
            </Grid>
            <Grid item>
               <Box component="footer" fontSize="16px" display="flex" flexDirection="column" alignItems="center" py="1.5rem" sx={{ opacity: 0.7 }} width="100%">
                  <p>&copy; {new Date().getFullYear()}{' '}Developed by Bishal Prasad</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
}
