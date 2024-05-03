// src/components/Homepage.js

import React from 'react';
import ImageSlider from './ImageSlider';

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen"> 
    <ImageSlider/>
    </div>
  );
};

export default Homepage;