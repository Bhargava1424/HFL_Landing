import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import { motion } from "framer-motion"
import Buy from "../assets/Buy.png"
import Sell from "../assets/Receive Cash.png"
import Card from "../assets/Card Security.png"
import Scholarship from "../assets/Scholarship.png"

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    require('../assets/ImageSlider/1.jpg'),
    require('../assets/ImageSlider/2.jpg'),
    require('../assets/ImageSlider/3.jpg'),
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleContactUs = () => {
    const phoneNumber = '9876543210';

    if (isMobile) {
        // Redirect to the call app with the phone number
        window.location.href = `tel:${phoneNumber}`;
    } else {
        // Show a popup with the phone number
        alert(`Please call ${phoneNumber}`);
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  },);

  return (
    <div>
      
      <div className="p-1">
        <div className="relative w-full h-64 sm:h-96 overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-none w-full h-64 sm:h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide})` }}
              ></div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none text-xl sm:text-2xl p-2 cursor-pointer"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none text-xl sm:text-2xl p-2 cursor-pointer"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className='px-1 py-1'>
      <div className="bg-orange-500 rounded-xl text-white px-4 py-3 sm:px-8 sm:py-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:border-r sm:border-white sm:w-1/2 sm:pr-4 mb-4 sm:mb-0"> 
              <h1 className="text-lg sm:text-4xl font-bold">Experience seamless currency exchange with best price in HFL</h1>
            </div>
            <div className="w-full sm:w-1/2 sm:pl-4">
              <div className="mb-4">
                <p className="text-sm">RBI Authorized Money changer</p>
                <p className="text-sm">2 Decades of seamless service</p>
                <p className="text-sm">Expert team ensures quick, secure and hassle free services</p>
              </div>
              <button 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded border border-white"
                    onClick={handleContactUs}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      
      </div>
      <div className='py-1 px-1'>
      <div className="bg-[#FBF8F1] rounded-xl px-4 py-8 sm:px-8 sm:py-4 ">
        <div className='sm:relative'>
        <div className='flex flex-col sm:flex-row mt-4 '>
        <h1 className="text-black text-5xl font-semibold md:text-5xl">Always Provide The</h1>
        </div>
        <div className='flex flex-col sm:flex-row'>
        <h1 className="text-black text-5xl font-semibold md:text-5xl">Best Service</h1>
        </div>
        
        <div className="sm:absolute top-0 right-0 mt-4 w-full sm:w-1/2 pr-8">
  <div className="mb-4">
    <h1 className="text-[#D69009] font-bold text-2xl sm:text-3xl">Our Services</h1>
    <p className="font-semibold text-[#333539] text-poppins text-xs sm:text-sm mt-2">Hyderabad Forex offers secure, convenient forex</p>
    <p className="font-semibold text-[#333539] text-poppins text-xs sm:text-sm">solutions as buy/sell currency, forex cards for travel, and</p>
    <p className="font-semibold text-[#333539] text-poppins text-xs sm:text-sm">hassle-free tuition fee remittances</p>
  </div>
</div>
</div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 justify-center mt-10">
    <div className="text-center mb-4">
      <motion.div 
      whileHover={{ scale: 1.1 }}
      className="bg-[#FBF8F1] hover: py-2 px-4 hover:bg-white hover:shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg p-1 sm:p-6 max-w-xs mx-1">
        <img
          src={Buy}
          alt="Director 1"
          className="w-12 h-12 sm:w-40 sm:h-40 object-cover mx-auto mb-2 sm:mb-4"
        />
        <h3 className="text-poppins text-xs sm:text-xl font-bold text-[#343434]">We Buy</h3>
        <p className="text-poppins text-xs sm:text-base text-[#333539]">Purchase foreign currency at competitive rates with seamless transactions</p>
        
      </motion.div>
    </div>
    <div className="text-center mb-4">
      <motion.div 
      whileHover={{ scale: 1.1 }}
      className="bg-[#FBF8F1] hover: py-2 px-4 hover:bg-white hover:shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg p-1 sm:p-6 max-w-xs mx-1">
        <img
          src={Sell}
          alt="Director 1"
          className="w-12 h-12 sm:w-40 sm:h-40 object-cover mx-auto mb-2 sm:mb-4"
        />
        <h3 className="text-poppins text-xs sm:text-xl font-bold text-[#343434]">We Sell</h3>
        <p className="text-poppins text-xs sm:text-base text-[#333539]">Sell your foreign currency easily and get the best rates</p>
        
      </motion.div>
    </div>
    <div className="text-center mb-4">
      <motion.div 
      whileHover={{ scale: 1.1 }}
      className=" bg-[#FBF8F1] hover: py-2 px-4 hover:bg-white hover:shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg p-1  sm:p-6 max-w-xs mx-1">
        <img
          src={Card}
          alt="Director 1"
          className="w-12 h-12 sm:w-40 sm:h-40 object-cover mx-auto mb-2 sm:mb-4"
        />
        <h3 className="text-poppins text-xs sm:text-xl font-bold text-[#343434]">Forex Cards</h3>
        <p className="text-poppins text-xs sm:text-base text-[#333539]">Convenient and secure forex cards for all your travel needs</p>
       
      </motion.div>
    </div>
    <div className="text-center mb-4">
      <motion.div 
      whileHover={{ scale: 1.1 }}
      className="bg-[#FBF8F1] hover: py-2 px-4 hover:bg-white hover:shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg  sm:p-6 max-w-xs mx-1">
        <img
          src={Scholarship}
          alt="Director 1"
          className="w-12 h-12 sm:w-40 sm:h-40 object-cover mx-auto mb-2 sm:mb-4"
        />
        <h3 className="text-poppins text-xs sm:text-xl font-bold text-[#343434]">Tution Fees</h3>
        <p className="text-poppins text-xs sm:text-base text-[#333539]">Effortlessly transfer tuition fees and other remittances abroad with Hyderabad Forex</p>
        
      </motion.div>
    </div>
    
  </div>
      </div>
    </div>
    </div>
    
  );
};

export default ImageSlider;
