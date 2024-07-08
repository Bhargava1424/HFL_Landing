import React from 'react';
import rbiIcon from '../assets/AboutUs/rbi.png';
import { useNavigate } from 'react-router-dom'; // replace with the actual path to your RBI logo

const RbiComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col md:flex-row bg-[#FFB72B] h-auto md:h-48 mt-2 rounded-t-2xl md:gap-x-12">
      <div className="flex items-center flex-1 pl-4 md:pl-0 md:basis-3/5 ">
        <img src={rbiIcon} alt="RBI Logo" className="w-12 h-12 md:w-48 md:h-48" />
        <div className="ml-4 md:ml-8">
          <div className="text-black text-md md:text-4xl">
            RBI Authorized Money Changer
          </div>
          <div className="mt-0 text-sm text-black md:text-xl md:mt-4">
            <button onClick={() => navigate('/infoRbi')}>Know what RBI says ➔</button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 h-full pr-4 md:basis-1/4">
        <div className="hidden w-full h-20 dot-pattern md:block"></div>
      </div>
    </div>
  );
};

export default RbiComponent;