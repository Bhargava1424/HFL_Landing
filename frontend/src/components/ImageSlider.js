import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';


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
      
    </div>
    
  );
};

export default ImageSlider;
