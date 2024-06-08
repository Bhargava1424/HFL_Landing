import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('left');
  const slides = [
    require('../assets/ImageSlider/imageslider1.png'),
    require('../assets/ImageSlider/Imageslider2.jpg'),
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setDirection('left');
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setDirection('right');
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
      if (currentSlide === slides.length - 1) {
        setDirection('right');
      } else {
        setDirection('left');
      }
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide, slides.length]);

  return (
    <div>
      <div className="p-1">
        <div className="relative w-full overflow-hidden h-[380px] rounded-2xl">
          <div
            className={`flex transition-transform duration-700 ease-in-out ${
              direction === 'left' ? 'transform translate-x-0' : 'transform -translate-x-full'
            }`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-none w-full h-[380px] bg-center bg-cover"
                style={{ backgroundImage: `url(${slide})` }}
              ></div>
            ))}
          </div>
          <button
            className="absolute p-2 text-xl text-white transform -translate-y-1/2 bg-black bg-opacity-50 border-none cursor-pointer top-1/2 left-2 sm:left-4 sm:text-2xl"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <button
            className="absolute p-2 text-xl text-white transform -translate-y-1/2 bg-black bg-opacity-50 border-none cursor-pointer top-1/2 right-2 sm:right-4 sm:text-2xl"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
      
      {/* SVG Example */}
      <div className="absolute top-0 left-0 w-16 h-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      </div>
    </div>
  );
};

export default ImageSlider;