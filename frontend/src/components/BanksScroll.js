import React from 'react';
import Marquee from 'react-fast-marquee';

// Import bank logo images
import bankLogo1 from '../assets/HFLlogo.jpg';
import bankLogo2 from '../assets/HFLlogo.jpg';
import bankLogo3 from '../assets/HFLlogo.jpg';
import bankLogo4 from '../assets/HFLlogo.jpg';
import bankLogo5 from '../assets/HFLlogo.jpg';
// import bankLogo6 from '../assets/HFLlogo.jpg';
// import bankLogo7 from '../assets/HFLlogo.jpg';
// import bankLogo8 from '../assets/HFLlogo.jpg';
// import bankLogo9 from '../assets/HFLlogo.jpg';
// import bankLogo10 from '../assets/HFLlogo.jpg';
// import bankLogo11 from '../assets/HFLlogo.jpg';
// import bankLogo12 from '../assets/HFLlogo.jpg';
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
    // bankLogo6,
    // bankLogo7,
    // bankLogo8,
    // bankLogo9,
    // bankLogo10,
    // bankLogo11,
    // bankLogo12,
    // Add other bank logos here
  ];

  return (
    // <div className="flex flex-col items-center">
    //   <h1 className="text-5xl font-bold mt-5 mb-5">We are associated with</h1>
    //   <div className="w-full overflow-hidden">
        <div>
        <Marquee speed={20} pauseOnHover loop={0} className="mt-5 mb-5">
          {bankLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Bank Logo ${index + 1}`}
              className="h-20 mx-20 grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </Marquee>
        <div className="flex flex-col items-center w-full px-10 py-5 bg-white">
          <h1 className="text-6xl text-center mb-10">Services at HFL AnyMoney</h1>
          <div className="flex justify-between items-center w-full pl-8 pr-8">
            <div className="text-center flex flex-col items-center">
              <img src={buyIcon} alt="We Buy" className="mb-2 h-20 w-20" />
              <p className='text-xl font-bold'>We BUY</p>   
            </div>
            <div className="text-center flex flex-col items-center">
              <img src={sellIcon} alt="We Sell" className="mb-2 h-20 w-20" />
              <p className='text-xl font-bold'>We SELL</p>    
            </div>
            <div className="text-center flex flex-col items-center">
              <img src={forexIcon} alt="Forex Card" className="mb-2 h-20 w-20" />
              <p className='text-xl font-bold'>Forex Card</p>       
            </div>
            <div className="text-center flex flex-col items-center">
              <img src={tuitionIcon} alt="Tuition Fees" className="mb-2 h-20 w-20" />
              <p className='text-xl font-bold'>Tuition Fees</p>
            </div>
          </div>
        </div>

        <div className='bg-[#FFD686] p-4 m-4 rounded-2xl'>
            <div className="flex space-x-12">
              {[1, 2, 3].map((num) => (
                <div key={num} className="bg-white p-6 rounded-xl shadow-md flex-1">
                  <img
                    src={cashIcon}
                    alt="Currency Notes"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-center">Currency Notes</h3>
                  <p className="text-black mb-4 text-center">
                    A sufficient amount of foreign currency notes can always come in handy, especially when you are making your first trip to your college abroad.
                  </p>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-md block mx-auto hover:bg-orange-600 transition-colors duration-300">
                    Read More
                  </button>
                </div>
              ))}
            </div>
        </div>
      
    </div>
  );
};

export default BankScroll;