import React, { useState, useEffect } from 'react';
import background from '../assets/testimony.png';
import image1 from '../assets/Testimony/image1.jpg';
import image2 from '../assets/Testimony/image2.jpg';
import image3 from '../assets/Testimony/image3.jpg';
import image4 from '../assets/Testimony/image4.jpg';
import image5 from '../assets/Testimony/image5.jpg';
import image6 from '../assets/Testimony/image6.jpg';

const testimonials = [
  {
    name: 'Sharan Khandavilli',
    feedback: 'I had a really good and seamless experience with them, the exchange rates were lower than multiple places and banks I have visited. I recommend them for your future travel.',
    image: image1,
    rating: 5
  },
  {
    name: 'ravi kumar gandham',
    feedback: 'They provide excellent service with very competitive rates of forex. Highly reliable and dependable. Availing their services for the last 16 years.',
    image: image2,
    rating: 5
  },
  {
    name: 'Akash M',
    feedback: 'Highly recommended, fast and efficient they provide home delivery all across Hyderabad as well, the rates offered are also very competitive.',
    image: image3,
    rating: 5
  },
  {
    name: 'Sandeep Singh',
    feedback: 'Wow... I\'ve never seen a service so fast.. Totally reliable and trustworthy. Money got transferred within 20 mins.',
    image: image4,
    rating: 5
  },
  {
    name: 'Vedaprakash Badimi',
    feedback: 'Hyderabad Forex Limited (HFL), one of the oldest foreign exchange services in Hyderabad. The owner\'s extensive experience in the field is evident in the professionalism and efficiency with which they operate. Their offer exchange rates are also very reasonable.',
    image: image5,
    rating: 5
  },
  {
    name: 'Satish Lenka',
    feedback: 'Really impressed with service. Quickly arranged Singapore dollars in short time with home delivery and before my departure. Very much professional behavior over call and in personal contact as well.',
    image: image6,
    rating: 5
  },
  {
    name: 'abhilash reddy',
    feedback: 'forex guy was really friendly and nice guy and exchange rate is very genuine. prefer this if this is near to you. RBI approved center too.',
    image: image1,
    rating: 5
  },
  {
    name: 'Bhukya Srikanth',
    feedback: 'Hyderabad Forex Ltd provides excellent service with multilingual assistance and timely reservations. Their experienced staff ensures top-notch service, and they accept various payment methods including cash, G Pay, and bank transfers.',
    image: image2,
    rating: 5
  },
  {
    name: 'Surya',
    feedback: 'Good service provided by "Hyderabad Forex Ltd., Somajiguda (Raghunath M)" to exchange IND rupee to Taiwan dollar. It was genuine service provider and they took within an hour, the charges were also reasonable so I am totally satisfied with their service.',
    image: image3,
    rating: 5
  },
  {
    name: 'K Shiva Prasad',
    feedback: 'This is the Forex from where I purchased 8000 Us dollars. they charged me around Rs2.50 per dollar as service charge. They were quick and I\'m delighted with their service.',
    image: image4,
    rating: 5
  },
  {
    name: 'MD MUSTAFA',
    feedback: 'I converted Dollars into Indian money at Hyderabad forex and the transaction taken place soon , the service was good and I felt contented.',
    image: image5,
    rating: 5
  },
  {
    name: 'Narsaiah',
    feedback: 'The Canadian currency has been converted by me in to Indian money at the Hyderabad forex the service was decent and they have rendered a neat job.',
    image: image6,
    rating: 5
  }
];

const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(3);
      }
    };
    window.addEventListener('resize', updateItemsPerSlide);
    updateItemsPerSlide();
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsPerSlide]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerSlide + testimonials.length) % testimonials.length);
  };

  const getTotalSlides = () => {
    return Math.ceil(testimonials.length / itemsPerSlide);
  };

  const getCurrentSlideIndex = () => {
    return Math.floor(currentIndex / itemsPerSlide);
  };

  return (
    <div className="container mx-auto my-4 py-2 px-2 md:py-4 md:px-4 relative bg-cover bg-center bg-[#ffefd6]" style={{ backgroundImage: `url(${background})` }}>
      <h2 className="text-lg md:text-2xl lg:text-5xl font-bold mb-1 md:mb-10">Testimonials</h2>
        
      <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 overflow-hidden h-48 md:h-64">
        {testimonials.slice(currentIndex, currentIndex + itemsPerSlide).map((testimonial, index) => (
          <div
            className={`flex flex-col w-full md:max-w-sm rounded overflow-hidden shadow-lg border p-2 md:p-4 transition-transform duration-500 ease-in-out`}
            key={index}
          >
            <div className="flex items-center mb-2 md:mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-8 h-8 md:w-12 md:h-12 rounded-full mr-2 md:mr-4" />
              <div className="flex items-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-3 h-3 md:w-5 md:h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.07c.969 0 1.371 1.24.588 1.81l-3.293 2.4a1 1 0 00-.363 1.118l1.287 3.95c.3.921-.755 1.688-1.54 1.118l-3.293-2.4a1 1 0 00-1.175 0l-3.293 2.4c-.784.57-1.838-.197-1.54-1.118l1.287-3.95a1 1 0 00-.363-1.118l-3.293-2.4c-.783-.57-.381-1.81.588-1.81h4.07a1 1 0 00.95-.69l1.286-3.95z"/>
                  </svg>
                ))}
              </div>
            </div>
            <h3 className="font-bold text-sm md:text-lg">{testimonial.name}</h3>
            <p className="text-gray-600 flex-grow text-xs md:text-base">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-1 md:mt-4 space-x-2 py-4">
        
        {Array.from({ length: getTotalSlides() }, (_, i) => (
          <div
            key={i}
            className={`h-1 w-1 md:h-2 md:w-2 rounded-full ${i === getCurrentSlideIndex() ? 'bg-orange-400' : 'bg-gray-300'}`}
          ></div>
        ))}
        <div className="md:hidden absolute inset-x-0 bottom-7 m-4 mt-2 flex justify-center space-x-2 md:mt-4 mb-2 md:mb-0">
          <button className="border rounded px-1 py-0.5 text-xs md:block md:px-4 md:py-2 md:text-base" onClick={prevSlide}>Previous</button>
          <button className="border rounded px-1 py-0.5 text-xs md:block md:px-4 md:py-2 md:text-base" onClick={nextSlide}>Next</button>
        </div>
      </div>
      <div className="hidden md:flex absolute top-0 right-0 mt-4 mr-4 space-x-2">
        <button className="border rounded px-4 py-2 text-base" onClick={prevSlide}>Previous</button>
        <button className="border rounded px-4 py-2 text-base" onClick={nextSlide}>Next</button>
      </div>

      
    </div>
  );
};

export default Testimony;
