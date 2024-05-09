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
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold mt-5 mb-5">We are associated with</h1>
      <div className="w-full overflow-hidden">
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
      </div>
    </div>
  );
};

export default BankScroll;