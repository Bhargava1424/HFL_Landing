// src/components/Homepage.js

import React from 'react';
import CurrencyScroll from './CurrencyScroll';
import NavBar from './NavBar'
import ImageSlider from './ImageSlider'
import StatsDisplay from './StatsDisplay';

const Homepage = () => {
  return (
    <div>
      <header>
        {/* Navigation bar here */}
        <NavBar/>
        <CurrencyScroll />
      </header>
      <ImageSlider/>
      <ImageSlider/>
      <StatsDisplay/>
        
        {/* Rest of the home page content */}
      
    </div>
  );
};

export default Homepage;