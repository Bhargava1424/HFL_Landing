import React, { useState, useEffect, useRef } from 'react';
import rbiIcon from '../assets/AboutUs/rbi.png';

// Custom hook for animating numbers
const useCounter = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!shouldStart) return;

    let start = 0;
    const increment = end / (duration / 1000 * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
        setCompleted(true); // Signal that counting is finished
      }
      setCount(Math.floor(start));
    }, 1000 / 40);

    return () => clearInterval(timer);
  }, [end, duration, shouldStart]);

  return [count, completed];
};

const StatsDisplay = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [count1, completed1] = useCounter(20, 2000, isVisible);
  const [count2, completed2] = useCounter(20000, 2000, isVisible);
  const [count3, completed3] = useCounter(30, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it is visible
        }
      },
      {
        threshold: 1.0 // Trigger when the element is fully visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Style for the "+" animation
  const animatePlus = (completed) => ({
    transform: completed ? 'scale(1)' : 'scale(1.5)', // Scaling animation
    opacity: completed ? 1 : 0, // Control visibility through opacity
    transition: 'transform 1s ease-in-out, opacity 0.3s ease-in', // Add opacity to the transition
    display: 'inline-block'
  });

  return (
    <div ref={ref} className="px-1 sm:px-0">
      <div className="bg-gray-300 rounded-2xl overflow-hidden px-3 sm:px-5 sm:py-5 my-2">
        <div className="text-center">
          <div className="flex flex-row justify-between items-center text-sm sm:text-lg">
            <div className="flex-1 mb-1 sm:mb-0">
              <div className="font-bold text-lg sm:text-xl">{count1}<span style={animatePlus(completed1)}>+</span></div>
            </div>
            <div className="border-l border-gray-800 h-8 sm:h-12 hidden sm:block"></div>
            <div className="flex-1 mb-1 sm:mb-0">
              <div className="font-bold text-lg sm:text-xl">{count2}<span style={animatePlus(completed2)}>+</span></div>
            </div>
            <div className="border-l border-gray-800 h-8 sm:h-12 hidden sm:block"></div>
            <div className="flex-1 mb-1 sm:mb-0">
              <div className="font-bold text-lg sm:text-xl">{count3}<span style={animatePlus(completed3)}>+</span></div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center text-sm sm:text-lg">
            <div className="flex-1 text-center mb-1 sm:mb-0">
              <div>Years Of Forex Experience</div>
            </div>
            <div className="border-l border-gray-800 h-8 sm:h-12 hidden sm:block"></div>
            <div className="flex-1 text-center mb-1 sm:mb-0">
              <div>Happy Customers</div>
            </div>
            <div className="border-l border-gray-800 h-8 sm:h-12 hidden sm:block"></div>
            <div className="flex-1 text-center mb-1 sm:mb-0">
              <div>Currencies Exchanged Everyday</div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center bg-[#F4A242] h-auto lg:h-48 mt-2 rounded-2xl">
        <div className="flex flex-row items-center lg:mb-0 pl-4 lg:pl-0">
            <img src={rbiIcon} alt="RBI Logo" className="w-20 h-20 sm:w-40 sm:h-40" style={{ height: 'auto' }} />
            <div className="text-xl sm:text-xl lg:text-4xl font-semibold text-black sm:ml-4 lg:ml-24 sm:mt-0 mb-2 md:mb-12 lg:mt-14">
                RBI Authorized <br className="lg:hidden" /> Money Changer
            </div>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-start px-4 py-2 lg:px-6 lg:py-4" style={{ overflow: 'hidden' }}>
            <div className="flex-1 bg-white rounded-2xl lg:ml-auto" style={{ width: '100%', maxWidth: '30rem', overflow: 'hidden' }}>
                <div className="text-sm sm:text-md md:text-lg lg:text-xl p-2 md:p-4 text-justify">
                    To deliver Forex Services in a transparent and hassle-free manner. Hyderabad Forex, as a company, is known for its integrity, innovation, empathy, and passion for delivering the best forex services.
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default StatsDisplay;
