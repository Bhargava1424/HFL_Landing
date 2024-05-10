// src/components/Homepage.js

import React from 'react';
import CurrencyScroll from './CurrencyScroll';
import NavBar from './NavBar'
import ImageSlider from './ImageSlider'
import StatsDisplay from './StatsDisplay';
import Testimony from './Testimony';



const HomePage = () => {
  return (
    
    <div>
      <header>
      
        
        <NavBar/>  
        
        <CurrencyScroll />
      </header>
      <ImageSlider/>
      <StatsDisplay/>
      <Testimony/>
        
        {/* Rest of the home page content */}
      
    </div>
  );
};

export default HomePage;