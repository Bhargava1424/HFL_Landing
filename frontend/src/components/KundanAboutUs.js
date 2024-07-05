import React from 'react';
import rbiIcon from '../assets/AboutUs/rbi-icon.svg';
import deliveryIcon from '../assets/AboutUs/delivery-icon.svg';
import './KundanAboutUsCss.css';
import centerImage from '../assets/AboutUs/rbi-icon.svg'; // Adjust the path as necessary
import StatsDisplay from './StatsDisplay';
import locationIcon from '../assets/AboutUs/location.png';
import messageIcon from '../assets/AboutUs/whatsapp.png';
import phoneIcon from '../assets/AboutUs/telephone.png'


const KundanAboutUs = () => {
    return (
        <div>
            <StatsDisplay/>
        <div className="flex flex-col justify-center items-center w-full bg-white rounded-2xl mt-10">
            <h1 className="text-4xl font-semibold text-black mb-2">Why Buy Forex via HFL AnyMoney?</h1>
            <div className="flex items-center justify-center w-full mb-5">
                <div className="flex items-center gap-2 mr-20">
                    <img src={rbiIcon} alt="RBI Authorized" className="h-16 w-16" />
                    <p className="flex items-center text-lg font-medium text-black text-4xl">
                        RBI Authorised<br /> Money Changer <span className="text-green-500 text-8xl ml-4">✓</span>
                    </p>
                </div>
                <div className="flex items-center gap-2 ml-20">
                    <img src={deliveryIcon} alt="Fast Delivery" className="h-16 w-16" />
                    <p className="flex items-center text-lg font-medium text-black text-4xl">
                        Fast Delivery! <span className="text-green-500 text-8xl ml-4">✓</span>
                    </p>
                </div>
            </div>

            <div className="text-xl font-medium text-black">
                <div className="peak-background flex flex-col items-center px-4 py-2 relative">
                    <img src={centerImage} className="blurred-image" alt="Background" />  
                    <h1 className='text-4xl text-center w-full'>Corporate Practices</h1>
                    <div className="flex justify-between w-full">
                        <ul className="list-disc space-y-2 ml-40 mt-4">
                            <li className='p-8' >Corporate Governance Practices</li>
                            <li className='p-8' >Continuous Improvement in Governance</li>
                            <li className='p-8' >Internal Control Systems</li>
                        </ul>
                        <ul className="list-disc space-y-2 mr-40 mt-4">
                            <li className='p-8' >Integration of Operational, Financial, Legal Systems</li>
                            <li className='p-8' >Anti-Money Laundering Policy</li>
                            <li className='p-8' >Monitoring and Review of Controls</li>
                        </ul>
                    </div>
                </div>

                <div className="background-image-list list-disc space-y-2 pl-20 pr-20">
                    <li className='p-6' >Corporate Governance practices, Internal Control Systems and Anti-Money Laundering Policy are some of the ongoing practices within Hyderabad Forex.</li>
                    <li className='p-6' >Hyderabad Forex has implemented the principles of good Corporate Governance by adopting standard Corporate Governance practices through continuous improvement of internal systems to ensure customer satisfaction.</li>
                    <li className='p-6' >At Hyderabad Forex, Internal Control Systems that include Operational, Financial and Legal systems have been integrated to ensure that the Company meets its business objectives. These systems are continuously monitored, reviewed, and modified when necessary for better efficiency and effectiveness.</li>
                    <li className='p-6' >Hyderabad Forex has implemented Anti-Money Laundering Policy which provides detailed guidelines and procedures to be followed while undertaking foreign exchange transactions.</li>
                </div>
            </div>
        </div>
        <div>
        <div className="flex flex-col justify-center items-center mt-8">
        <h1 className='text-4xl text-center w-full'>Our Branches in Hyderabad</h1>
      <div className="flex justify-between items-center w-4/5">
        <div className="flex flex-col items-center w-1/2">
      
          <div className="flex items-center space-x-2 mt-8 pb-16">
            <img src={phoneIcon} alt="Phone" className="h-10 w-10" />
            <p>NUMBER</p>
          </div>
          <div className="flex items-center space-x-2 pb-16">
            <img src={messageIcon} alt="Message" className="h-10 w-10" />
            <p>NUMBER</p>
          </div>
          <div className="flex items-center space-x-2 pb-16">
            <img src={locationIcon} alt="Location" className="h-10 w-10" />
            <p>ADDRESS</p>
          </div>
        </div>
        <div className="w-1 bg-gray-800 h-56"></div>
        <div className="flex flex-col items-center w-1/2">
          <div className="flex items-center space-x-2 mt-8 pb-16">
            <img src={phoneIcon} alt="Phone" className="h-10 w-10" />
            <p>NUMBER</p>
          </div>
          <div className="flex items-center space-x-2 pb-16">
            <img src={messageIcon} alt="Message" className="h-10 w-10" />
            <p>NUMBER</p>
          </div>
          <div className="flex items-center space-x-2 pb-16">
            <img src={locationIcon} alt="Location" className="h-10 w-10" />
            <p>ADDRESS</p>
          </div>
        </div>
      </div>
    </div>
        </div>
        </div>
    );
};

export default KundanAboutUs;
