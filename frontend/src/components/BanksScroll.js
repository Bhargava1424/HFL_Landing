import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

// Import bank logo images
import bankLogo1 from '../assets/banks/bankLogo1.svg';
import bankLogo2 from '../assets/banks/bankLogo2.png';
import bankLogo3 from '../assets/banks/bankLogo3.png';
import bankLogo4 from '../assets/banks/bankLogo4.png';
import bankLogo5 from '../assets/banks/bankLogo5.png';
import bankLogo6 from '../assets/banks/bankLogo6.png';
import bankLogo7 from '../assets/banks/bankLogo7.png';
import bankLogo8 from '../assets/banks/bankLogo8.png';
import bankLogo9 from '../assets/banks/bankLogo9.png';
import bankLogo10 from '../assets/banks/bankLogo10.png';
import bankLogo11 from '../assets/banks/bankLogo11.png';
import buyIcon from "../assets/checkout.png";
import sellIcon from "../assets/payment-method.png";
import forexIcon from "../assets/credit-card.png";
import tuitionIcon from "../assets/school.png";
import MAP from "../assets/banks/map.jpg";

const BankScroll = () => {
  const bankLogos = [
    bankLogo1,
    bankLogo2,
    bankLogo3,
    bankLogo4,
    bankLogo5,
    bankLogo6,
    bankLogo7,
    bankLogo8,
    bankLogo9,
    bankLogo10,
    bankLogo11,
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="w-full overflow-hidden">
        <div className="px-4 py-3 m-1 md:px-0 rounded-2xl">
          <h1 className="mb-5 text-2xl font-bold text-center md:text-5xl">Our Bankers</h1>
          <Marquee speed={100} pauseOnHover loop={0} className="mb-5">
            {bankLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Bank Logo ${index + 1}`}
                className="h-12 mx-6 mb-5 transition-all duration-300 md:h-20 md:mx-20 hover:grayscale-0"
              />
            ))}
          </Marquee>

          <h1 className="text-xl font-bold text-center md:mb-5 md:text-5xl">Plan Your Trip Today with Hyderabad Forex</h1>
          <h1 className="text-xl font-bold text-center md:mb-5 md:text-5xl">
            Excellence in <span className='text-orange-500'>Any Money</span> Exchange
          </h1>
          <div className="flex justify-center">
            <img src={MAP} alt="Map" className='w-3/4 h-auto mt-2 ml-10 mr-10 md:mt-8' />
          </div>
        </div>

        <div className="flex flex-col items-center w-full px-4 py-5 bg-white md:px-10">
          <h1 className="mb-10 text-3xl text-center md:text-6xl">Services at HFL AnyMoney</h1>
          <div className="flex flex-wrap items-stretch justify-between w-full pl-4 pr-4 md:pl-8 md:pr-8">
            <div className="flex flex-col items-center flex-1 text-center md:mb-4">
              <img src={buyIcon} alt="We Buy" className="w-8 h-8 mx-auto mb-2 md:h-20 md:w-20" />
              <p className='text-xs font-bold md:text-xl'>We BUY</p>
            </div>
            <div className="flex flex-col items-center flex-1 text-center md:mb-4">
              <img src={sellIcon} alt="We Sell" className="w-8 h-8 mx-auto mb-2 md:h-20 md:w-20" />
              <p className='text-xs font-bold md:text-xl'>We SELL</p>
            </div>
            <div className="flex flex-col items-center flex-1 text-center md:mb-4">
              <img src={forexIcon} alt="Forex Card" className="w-8 h-8 mx-auto mb-2 md:h-20 md:w-20" />
              <p className='text-xs font-bold md:text-xl'>Forex Card</p>
            </div>
            <div className="flex flex-col items-center flex-1 text-center">
              <img src={tuitionIcon} alt="Tuition Fees" className="w-8 h-8 mx-auto mb-2 md:h-20 md:w-20" />
              <p className='text-xs font-bold md:text-xl'>Outward Remittance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankScroll;