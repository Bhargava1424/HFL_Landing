import React, { useState, useEffect } from 'react';

const Testimony = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: require('../assets/Testimony/testimony-6.png'),
     
    },
    {
      image: require('../assets/Testimony/Testimony-2.png'),
      
    },
    {
      image: require('../assets/Testimony/Testimony-3.png'),
      
    },
    {
      image: require('../assets/Testimony/Testimony-4.png'),
      
    },
    {
      image: require('../assets/Testimony/Testimony-5.png'),
    
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  },);

  return (
    <div className="py-4 sm:p-6 overflow-x-hidden m-1">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">What Our Clients Say?</h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Our client's delightful smiles are a testament to the exceptional services we provide.
        </p>
      </div>
      <div className="relative mt-8 sm:mt-12 sm:mx-16 pt-4 sm:pt-8">
        <div className="overflow-hidden border-solid border-4 border-black">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img src={slide.image} alt={`Testimonial ${index + 1}`} className="w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -top-6 sm:-top-8 left-0 w-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center">
              
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black border-none text-xl p-1 sm:text-2xl sm:p-2 rounded-full focus:outline-none"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black border-none text-xl p-1 sm:text-2xl sm:p-2 rounded-full focus:outline-none"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>

    </div>
  );
};

export default Testimony;
