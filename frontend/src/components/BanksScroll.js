import React from 'react';
import Marquee from 'react-fast-marquee';

// Import bank logo images
import bankLogo1 from '../assets/banks/bankLogo1.png';
import bankLogo2 from '../assets/banks/bankLogo2.png';
import bankLogo3 from '../assets/banks/bankLogo3.png';
import bankLogo4 from '../assets/banks/bankLogo4.png';
import bankLogo5 from '../assets/banks/bankLogo5.png';
import bankLogo6 from '../assets/banks/bankLogo6.png';
import bankLogo7 from '../assets/banks/bankLogo7.png';
import bankLogo8 from '../assets/banks/bankLogo8.png';
import bankLogo9 from '../assets/banks/bankLogo9.png';
import bankLogo10 from '../assets/banks/bankLogo10.png';
import bankLogo11 from '../assets/banks/bankLogo11.png'
// import bankLogo12 from '../assets/bankLogo.png';
// Import other bank logos similarly
import buyIcon from "../assets/checkout.png" ; 
import sellIcon from "../assets/payment-method.png";
import forexIcon from "../assets/credit-card.png";
import tuitionIcon from "../assets/school.png";
import cashIcon from '../assets/euros.png';

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
    // bankLogo12,
    // Add other bank logos here
  ];

  return (
    <div className="flex flex-col items-center">
      
      <div className="w-full overflow-hidden">
      <div className="bg-[#ffd686] py-3 m-1 px-4 md:px-0 rounded-2xl">
        <h1 className="text-2xl md:text-5xl font-bold text-center mb-5">We are associated with</h1>
        <Marquee speed={100} pauseOnHover loop={0} className="mb-5">
          {bankLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Bank Logo ${index + 1}`}
              className="h-12 md:h-20 mx-6 md:mx-20 grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </Marquee>
      </div>
        <div className="flex flex-col items-center w-full px-4 md:px-10 py-5 bg-white">
          <h1 className="text-3xl md:text-6xl text-center mb-10">Services at HFL AnyMoney</h1>
          <div className="flex flex-wrap justify-between items-stretch w-full pl-4 pr-4 md:pl-8 md:pr-8">
            <div className="text-center flex flex-col items-center mb-4 md:mb-0 flex-1">
              <img src={buyIcon} alt="We Buy" className="mb-2 h-8 md:h-20 w-8 md:w-20 mx-auto" />
              <p className='text-xs md:text-xl font-bold'>We BUY</p>
            </div>
            <div className="text-center flex flex-col items-center mb-4 md:mb-0 flex-1">
              <img src={sellIcon} alt="We Sell" className="mb-2 h-8 md:h-20 w-8 md:w-20 mx-auto" />
              <p className='text-xs md:text-xl font-bold'>We SELL</p>
            </div>
            <div className="text-center flex flex-col items-center mb-4 md:mb-0 flex-1">
              <img src={forexIcon} alt="Forex Card" className="mb-2 h-8 md:h-20 w-8 md:w-20 mx-auto" />
              <p className='text-xs md:text-xl font-bold'>Forex Card</p>
            </div>
            <div className="text-center flex flex-col items-center flex-1">
              <img src={tuitionIcon} alt="Tuition Fees" className="mb-2 h-8 md:h-20 w-8 md:w-20 mx-auto" />
              <p className='text-xs md:text-xl font-bold'>Tuition Fees</p>
            </div>
          </div>
        </div> 

        <div className="bg-[#FFD686] p-4 my-4 mx-1 rounded-2xl">
          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="bg-white p-2 md:p-6 rounded-xl shadow-md flex flex-col items-center">
                <div className="flex items-center mb-1 md:mb-2">
                  <img
                    src={cashIcon}
                    alt="Currency Notes"
                    className="w-5 h-5 md:w-16 md:h-16 mr-1 md:mr-2"
                  />
                  <h3 className="text-xs font-bold text-center md:text-xl">
                    Currency Notes
                  </h3>
                </div>
                <p className="text-xs md:text-base mb-1 md:mb-4 text-center">
                  A sufficient amount of foreign currency notes can always come in handy.
                </p>
                <button className="bg-orange-500 text-white text-xs md:text-md px-2 md:px-4 py-1 md:py-2 rounded-md mt-auto hover:bg-orange-600 transition-colors duration-300">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>



      </div>
    </div>
  );
  
};

export default BankScroll;