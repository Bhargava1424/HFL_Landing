// src/components/Homepage.js

import React from 'react';
import CurrencyScroll from './CurrencyScroll';
import NavBar from './NavBar'
import ImageSlider from './ImageSlider'
import StatsDisplay from './StatsDisplay';
import Testimony from './Testimony';
import BanksScroll from './BanksScroll';
import FAQ from './Faq';
import Footer from './Footer';
import PromoBanner from './PromoBanner';




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
      <BanksScroll/>
      <FAQ/>
      <PromoBanner/>
      <Footer/>

        
        {/* Rest of the home page content */}
      
    </div>
  );
};

export default HomePage;