import React, { useState, useEffect } from 'react';

const Testimony = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: require('../assets/Testimony/1.png'),
      profilePic: require('../assets/Testimony/profile1.jpg'),
    },
    {
      image: require('../assets/Testimony/2.png'),
      profilePic: require('../assets/Testimony/profile2.jpg'),
    },
    {
      image: require('../assets/Testimony/3.png'),
      profilePic: require('../assets/Testimony/profile3.jpg'),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
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
    <div className="p-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say ?</h2>
        <p className="text-gray-600">
          Our client's delightful smiles are a testament to the exceptional services we provide.
        </p>
      </div>
      <div className="relative mt-12 mx-16 py-8">
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
        {/* Adjust the top property to move the profile pictures higher */}
        <div className="absolute -top-8 left-0 w-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center">
              <div className="relative">
                <img
                  src={slide.profilePic}
                  alt={`Profile ${index + 1}`}
                  className="rounded-full border-4 border-white w-36 h-36"
                />
                <div className="absolute inset-0 bg-white opacity-0"></div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-black border-none text-2xl p-2 rounded-full focus:outline-none"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-black border-none text-2xl p-2 rounded-full focus:outline-none"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimony;