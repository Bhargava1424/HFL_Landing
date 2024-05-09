// src/components/Homepage.js

import React from 'react';
import CurrencyScroll from './CurrencyScroll';
import NavBar from './NavBar'
import ImageSlider from './ImageSlider'
import StatsDisplay from './StatsDisplay';
import Testimony from './Testimony';
import BanksScroll from './BanksScroll';


const Homepage = () => {
  return (
    <div>
      <header>
        {/* Navigation bar here */}
        <NavBar/>
        <CurrencyScroll />
      </header>
      <ImageSlider/>
      <StatsDisplay/>
      <Testimony/>
      <BanksScroll/>
        
        {/* Rest of the home page content */}
      
    </div>
  );
};

export default Homepage;