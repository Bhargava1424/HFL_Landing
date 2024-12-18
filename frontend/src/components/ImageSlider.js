import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('left');
  const slidesLarge = [
    require('../assets/ImageSlider/sliderimg1.jpg'),
    require('../assets/ImageSlider/sliderimg2.jpg'),
    require('../assets/ImageSlider/sliderimg3.jpg'),
    require('../assets/ImageSlider/sliderimg4.jpg'),
    require('../assets/ImageSlider/sliderimg5.jpg'),
    // Add more slides as needed
  ];
  const slidesSmall = [
    require('../assets/ImageSlider/sliderimg6.jpg'),
    require('../assets/ImageSlider/sliderimg7.jpg'),
    require('../assets/ImageSlider/sliderimg8.jpg'),
    require('../assets/ImageSlider/sliderimg9.jpg'),
    require('../assets/ImageSlider/sliderimg10.jpg'),
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setDirection('left');
    setCurrentSlide((prevSlide) => (prevSlide === slidesLarge.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setDirection('right');
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slidesLarge.length - 1 : prevSlide - 1));
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
      if (currentSlide === slidesLarge.length - 1) {
        setDirection('right');
      } else {
        setDirection('left');
      }
      setCurrentSlide((prevSlide) => (prevSlide === slidesLarge.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide, slidesLarge.length]);

  return (
    <div>
<div>
  {/* Section for small breakpoints and above */}
  <div className="hidden p-1 ml-3 mr-3 sm:block">
    <div className="relative w-full overflow-hidden h-[18.75vw] rounded-2xl">
      <div
        className={`flex transition-transform duration-1000 ease-in-out ${
          direction === 'left' ? 'transform translate-x-5' : 'transform -translate-x-full'
        }`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slidesLarge.map((slide, index) => (
          <div
            key={index}
            className="flex-none w-full h-[18.75vw] bg-center md:bg-contain md:bg-no-repeat xl:bg-cover"
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

  {/* Section for smaller breakpoints */}
  <div className="block p-1 ml-3 mr-3 sm:hidden">
    <div className="relative w-full overflow-hidden h-[19.5vw] rounded-2xl">
      <div
        className={`flex transition-transform duration-1000 ease-in-out ${
          direction === 'left' ? 'transform translate-x-5' : 'transform -translate-x-full'
        }`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slidesSmall.map((slide, index) => (
          <div
            key={index}
            className="flex-none w-full h-[19.5vw] bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${slide})`}}
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
