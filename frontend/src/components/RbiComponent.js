import React from 'react';
import rbiIcon from '../assets/AboutUs/rbi.png'; // replace with the actual path to your RBI logo

const RbiComponent = () => {
  return (
    <div className="relative flex flex-col md:flex-row  bg-[#FFB72B] h-auto md:h-48 mt-2 rounded-t-2xl md:gap-x-12">
      <div className="flex items-center pl-4 md:pl-0 flex-1 md:basis-3/5 ">
        <img src={rbiIcon} alt="RBI Logo" className="w-12 h-12 md:w-48 md:h-48" />
        <div className="ml-4 md:ml-8">
          <div className="text-md md:text-4xl text-black">
            RBI Authorized Money Changer
          </div>
          <div className="text-xxs md:text-xl text-black mt-0 md:mt-4">
            <button>Know what RBI says ➔</button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 md:basis-1/4 h-full pr-4">
        <div className="dot-pattern hidden md:block w-full h-20"></div>
      </div>
    </div>
  );
};

export default RbiComponent;