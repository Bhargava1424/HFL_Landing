import React from 'react';
import { isMobile } from 'react-device-detect';

const PromoBanner = () => {
  const handleContactUs = () => {
    const phoneNumber = '9876543210';

    if (isMobile) {
      // Redirect to the call app with the phone number
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Show a popup with the phone number
      alert(`Please call ${phoneNumber}`);
    }
  };

  return (
    <div className="bg-[#f5e8d3] p-8 flex flex-col md:flex-row justify-between items-center rounded-lg shadow-2xl">
      <div className="text-center md:text-left mb-4 md:mb-0 flex-1">
        <h1 className="text-xl md:text-4xl  font-bold  mb-4">Enjoy Hassle-Free Forex with Convenient Door Delivery</h1>
        <p className="text-sm md:text-lg text-[#e3a734] font-bold mb-4">Planning your next trip? Secure the best forex rates with Hyderabad Forex now!</p>
        <button 
          className="bg-[#e3a734] text-white py-2 px-4 rounded-md text-sm md:text-base shadow-md"
          onClick={handleContactUs}
        >
          Call Now
        </button>
      </div>
      <div className="flex flex-col md:flex-col items-center md:items-start">
        <div className="flex flex-col items-center mb-4 md:mb-8">
          <img src={require('../assets/rbilogo.png')} alt="RBI Logo" className="w-16 md:w-24 mb-2" />
          <p className="text-gray-700 text-sm md:text-base">RBI Authorised Money Changer</p>
        </div>
        <div className="flex flex-col items-center ">
          <img src={require('../assets/deliverylogo.png')} alt="Delivery Icon" className="w-12 md:w-24 mb-2" />
          <p className="text-gray-700 text-sm md:text-base">Fast & Secure Delivery!</p>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
