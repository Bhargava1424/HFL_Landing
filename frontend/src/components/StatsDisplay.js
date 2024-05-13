import React, { useState, useEffect, useRef } from 'react';
import rbiIcon from  '../assets/AboutUs/rbi.png' ;

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
          observer.disconnect();  // Stop observing once it is visible
        }
      },
      {
        threshold: 1.0  // Trigger when the element is fully visible
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
  const animatePlus = completed => ({
    transform: completed ? 'scale(1)' : 'scale(1.5)', // Scaling animation
    opacity: completed ? 1 : 0,  // Control visibility through opacity
    transition: 'transform 1s ease-in-out, opacity 0.3s ease-in', // Add opacity to the transition
    display: 'inline-block'
  });

  return (
    <div ref={ref} className='pl-4 pr-4'>
      <div className="bg-gray-300 rounded-2xl overflow-hidden">
        <div className="flex justify-between items-center text-lg p-5">
          <div className="flex-1 text-center">
            <div className="font-bold text-2xl">{count1}<span style={animatePlus(completed1)}>+</span></div>
            <div>Years Of Forex Experience</div>
          </div>
          <div className="border-l border-gray-800 h-12"></div>
          <div className="flex-1 text-center">
            <div className="font-bold text-2xl">{count2}<span style={animatePlus(completed2)}>+</span></div>
            <div>Happy Customers</div>
          </div>
          <div className="border-l border-gray-800 h-12"></div>
          <div className="flex-1 text-center">
            <div className="font-bold text-2xl">{count3}<span style={animatePlus(completed3)}>+</span></div>
            <div>Currencies Exchanged Everyday</div>
          </div>
        </div>
      </div>
      
      <div className="flex w-full items-center bg-[#F4A242] h-48 mt-6 rounded-2xl pl-16">
      <div className="flex-none flex items-center">
      <img src={rbiIcon} alt="RBI Logo" className='w-30' style={{ height: '12rem' }}/>
      </div>
      <div className="flex-1 flex pl-4">
        <div className="flex flex-col justify-center ml- mr-30">
          <div className="text-4xl font-semibold text-black">
            RBI Authorized <br/> Money Changer
          </div>
        </div>
        <div className="flex p-4 ml-72 bg-white rounded-2xl" style={{width:'30rem'}}>
          <div className="text-black text-xl">
            To deliver Forex Services in a transparent and hassle-free manner. Hyderabad Forex, as a company, is known for its integrity, innovation, empathy, and passion for delivering the best forex services.
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default StatsDisplay;
