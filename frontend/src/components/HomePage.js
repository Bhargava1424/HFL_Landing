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
import OurServiceHomePage from './OurServiceHomePage';
import CustomerForm from './CustomerForm';
import RbiComponent from './RbiComponent';



const HomePage = () => {
  return (
    
    <div>
    
      
  
        <NavBar/>  
        <CurrencyScroll />
        
      
      
      <ImageSlider/>
      <div className='pl-3 pr-3 md:pl-12 md:pr-12'>
        <CustomerForm/>
        <OurServiceHomePage />
        <RbiComponent/>
        <StatsDisplay/>
        <Testimony/>
        </div>
        <BanksScroll/>
        <FAQ/>
        <div className='pl-3 pr-3 md:pl-0 md:pr-0'>
          <PromoBanner/>
        </div>
      <Footer/>

        
        {/* Rest of the home page content */}
      
    </div>
  );
};

export default HomePage;