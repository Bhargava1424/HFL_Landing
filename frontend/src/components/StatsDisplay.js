import React, { useState, useEffect, useRef } from 'react';

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
  const [count2, completed2] = useCounter(50000, 2000, isVisible);
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
      <div className="bg-[#FBF8F1] rounded-b-2xl overflow-hidden px-3 sm:px-5 sm:py-8 shadow-md">
        <div className="text-center">
          {/* For larger devices */}
          <div className="hidden sm:flex flex-row justify-between items-center text-sm sm:text-lg">
            <div className="flex-1 flex flex-col items-center mb-1 sm:mb-0">
              <div className="flex items-center gap-x-2">
                <div className="font-bold text-lg sm:text-4xl">{count1}<span style={animatePlus(completed1)}>+</span></div>
                <div className="">Years Of Forex <br/> Experience</div>
              </div>
            </div>
            <div className="border-l border-gray-800 h-8 sm:h-16 hidden sm:block"></div>
            <div className="flex-1 flex flex-col items-center mb-1 sm:mb-0">
              <div className="flex items-center gap-x-2">
                <div className="font-bold text-lg sm:text-4xl">{count2}<span style={animatePlus(completed2)}>+</span></div>
                <div className="">Happy<br/> Customers</div>
              </div>
            </div>
            <div className="border-l border-gray-800 h-8 sm:h-16 hidden sm:block"></div>
            <div className="flex-1 flex flex-col items-center mb-1 sm:mb-0">
              <div className="flex items-center gap-x-2">
                <div className="font-bold text-lg sm:text-4xl">{count3}<span style={animatePlus(completed3)}>+</span></div>
                <div className="">Destination Currencies<br/> Exchanged Everyday</div>
              </div>
            </div>
          </div>

          {/* For smaller devices */}
          <div className="sm:hidden flex flex-col items-center text-sm sm:text-lg">
            <div className="flex flex-row justify-between w-full mb-2">
              <div className="flex-1 text-center font-bold text-lg">{count1}<span style={animatePlus(completed1)}>+</span></div>
              <div className="flex-1 text-center font-bold text-lg">{count2}<span style={animatePlus(completed2)}>+</span></div>
              <div className="flex-1 text-center font-bold text-lg">{count3}<span style={animatePlus(completed3)}>+</span></div>
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex-1 text-center text-xs">Years Of Forex Experience</div>
              <div className="flex-1 text-center text-xs">Happy Customers</div>
              <div className="flex-1 text-center text-xs">Destination Currencies Exchanged Everyday</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsDisplay;
