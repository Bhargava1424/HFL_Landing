import React from 'react';
import NavBar from './NavBar'; // Import Navbar component
import GBLI from "../assets/officeGBLI.jpg";
import SMGD from "../assets/officeSMGD.jpg"; // Import the second image
import JustDialLogo from "../assets/justdial-seeklogo.svg"; // Import Just Dial logo
import GoogleLogo from "../assets/social.png"; // Import Another logo
import Checkout from "../assets/checkout.png"
import Payment from "../assets/payment-method.png"
import School from "../assets/school.png"
import Card from "../assets/credit-card.png"
import Company from "../assets/company.png"
import { isMobile } from 'react-device-detect';
import Network from "../assets/networking.png"
import Avatar from "../assets/undraw_male_avatar_g98d (1).svg"
import rbiIcon from '../assets/AboutUs/rbi-icon.svg';
import deliveryIcon from '../assets/AboutUs/delivery-icon.svg';
import './KundanAboutUsCss.css';
import centerImage from '../assets/AboutUs/rbi-icon.svg'; // Adjust the path as necessary
import StatsDisplay from './StatsDisplay';
import locationIcon from '../assets/AboutUs/location.png';
import messageIcon from '../assets/AboutUs/whatsapp.png';
import phoneIcon from '../assets/AboutUs/telephone.png'
import Footer from './Footer';
import image from '../assets/AboutUs/image.png'
import alternative from '../assets/AboutUs/Alternative.jpg'

const AboutUs = () => {
  const handleContactUs = () => {
    const phoneNumber = '9440626779';

    if (isMobile) {
        // Redirect to the call app with the phone number
        window.location.href = `tel:${phoneNumber}`;
    } else {
        // Show a popup with the phone number
        alert(`Please call ${phoneNumber}`);
    }
  };


  const handleContactUs2 = () => {
    const phoneNumber = '9848131798';

    if (isMobile) {
        // Redirect to the call app with the phone number
        window.location.href = `tel:${phoneNumber}`;
    } else {
        // Show a popup with the phone number
        alert(`Please call ${phoneNumber}`);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("I Need Anymoney Now !!"); 
    const whatsappUrl = `https://wa.me/919440626779?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsApp2 = () => {
    const message = encodeURIComponent("I Need Anymoney Now !!");
    const whatsappUrl = `https://wa.me/919848131798?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };
  
  
  const handleAddress = () => {
    window.open('https://maps.app.goo.gl/rLqjofw9Di6RNqnC9', '_blank', 'noopener,noreferrer');
  };

  const handleAddress2 = () => {
    window.open('https://maps.app.goo.gl/WRVN1TZicHr2qCoLA', '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div>
      <NavBar /> {/* Navbar component */}
      {/* About Us container */}
      <div className="p-4 mb-1 md:mb-4 w-full">
      
      <div className="bg-[#ffb72b] flex justify-center items-center rounded-2xl shadow-lg overflow-hidden">
        <div className="text-center p-2">
          <h1 className="text-white font-bold text-xl sm:text-5xl">About Us</h1>
        </div>
      </div>


        {/* Empty container with image and written content */}
        <div className="bg-orange-100 p-4 rounded-2xl flex flex-col md:flex-row justify-center items-center">
            {/* Image container */}
            <div className="w-full md:w-1/2 flex flex-row md:flex-col items-center md:items-start mb-4 md:mb-0 relative">
            {/* First image */}
            <img src={alternative} alt="" className="w-1/2 md:w-auto h-auto mb-0 md:mb-2 mr-2 md:mr-5" />
            {/* Second image */}
            {/* <img src={SMGD} alt="" className="w-1/2 md:w-auto h-auto md:absolute md:-bottom-1/4 md:right-5" /> */}
        </div>

            {/* Written content */}
          <div className="w-full md:w-1/2 ml-2 md:ml-8 p-2 md:p-4 text-center md:text-left">
              <h2 className="text-orange-500 font-bold text-3xl md:text-5xl mb-2">Mission</h2>
              <div className="flex flex-col items-center md:items-start">
                  <p className="text-black mb-2 md:mb-8 font-normal text-sm md:text-2xl text-justify">
                      To deliver Forex Services in a transparent and hassle-free manner. Hyderabad Forex, as a company, is known for its integrity, innovation, empathy, and passion for delivering the best forex services.
                  </p>
                  {/* Just Dial logo, rating, and anchor tag */}
                  <div className="flex flex-row items-center justify-center md:justify-start">
                      <div className="flex flex-col items-center mr-2 md:mr-8">
                          <img src={JustDialLogo} alt="Just Dial Logo" className="w-16 md:w-24 h-15 mb-2" />
                          <div className="flex flex-col items-center">
                              <div className="flex items-center">
                                  <span className="text-black mr-1 md:mr-2">4.3</span>
                                  <div className="stars">
                                      <span className="star text-yellow-500">&#9733;</span>
                                      <span className="star text-yellow-500">&#9733;</span>
                                      <span className="star text-yellow-500">&#9733;</span>
                                      <span className="star text-yellow-500">&#9733;</span>
                                      <span className="star text-gray-400">&#9734;</span>
                                  </div>
                              </div>
                              <span className="text-black text-xs md:text-sm">241+ ratings</span>
                              <a href="https://www.justdial.com/Hyderabad/Hyderabad-Forex-Ltd-Opposite-Indian-Oil-Petrol-Bunk-Somajiguda/040PZ004899_BZDET" className="text-blue-600 text-xs mt-1">See reviews</a>
                          </div>
                      </div>
                      <div className="flex flex-col items-center ml-2 md:ml-12">
                          <img src={GoogleLogo} alt="Another Logo" className="w-16 md:w-24 h-auto mb-2" />
                          <div className="flex flex-col items-center">
                              <div className="flex items-center">
                                  <span className="text-black mr-1 md:mr-2">4.7</span>
                                  <div className="stars">
                                      <span className="star text-yellow-500">&#9733;</span>
                                      <span className="star text-yellow-500">&#9733;</span>
                                      <span className="star text-yellow-500">&#9733;</span>
                                      <span className="star text-yellow-500">&#9733;</span>
                                      <span className="star text-gray-400">&#9734;</span>
                                  </div>
                              </div>
                              <a href="https://www.google.com/localservices/prolist?g2lbs=AOHF13klXYtnetRnbyktzM3_MhLnL5ZE9cjfJmXtM7Lx3P1bxJoS5L1KEQasTbMZcrHjLUiZCiLZSoy_Ha2NBoYhhhy17qEs-YCgfGkOz5EGt1aCRbTRRRE%3D&hl=en-IN&gl=in&cs=1&ssta=1&q=hyderabad%20forex%20limited&oq=hyderabad%20forex%20limited&slp=MgBSAggCYAB6uAJDaGRvZVdSbGNtRmlZV1FnWm05eVpYZ2diR2x0YVhSbFpFaktoZXIxdWE2QWdBaGFJeEFCRUFJWUFCZ0JHQUlpRjJoNVpHVnlZV0poWkNCbWIzSmxlQ0JzYVcxcGRHVmtrZ0VaWTNWeWNtVnVZM2xmWlhoamFHRnVaMlZmYzJWeWRtbGpaWm9CSTBOb1drUlRWV2hPVFVjNWJsTXdWa3BSTUVadVUxVk9iR050T1RKU1IxcHVSVUZGcWdGZENnZ3ZiUzh3T1dNMmR4QUJLaEVpRFdadmNtVjRJR3hwYldsMFpXUW9BRElmRUFFaUc5cElUdUtMOUhyYXppcWRxdjNTdnFPS1c1d2hYZlhQMnNEYVhESWJFQUlpRjJoNVpHVnlZV0poWkNCbWIzSmxlQ0JzYVcxcGRHVmuSARwKDS9nLzExZ2doY3AwcWIKCy9nLzF0ZnBoODN2&src=2&spp=Cg0vZy8xMWdnaGNwMHFiOowCV2lNUUFSQUNHQUFZQVJnQ0loZG9lV1JsY21GaVlXUWdabTl5WlhnZ2JHbHRhWFJsWkpJQkdXTjFjbkpsYm1ONVgyVjRZMmhoYm1kbFgzTmxjblpwWTJXYUFTTkRhRnBFVTFWb1RrMUhPVzVUTUZaS1VUQkdibE5WVG14amJUa3lVa2RhYmtWQlJhb0JYUW9JTDIwdk1EbGpObmNRQVNvUklnMW1iM0psZENCc2FXMXBkR1ZrS0FBeUh4QUJJaHZhU0U3aWlfUjYyczRxbmFyOTByNmppbHVjSVYzMXo5ckEybHd5R3hBQ0loZG9lV1JsY21GaVlXUWdabTl5WlhnZ2JHbHRhWFJsWkE9PQ%3D%3D&serdesk=1&lrlstt=1715247924918&ved=2ahUKEwjt5LXSo4CGAxWV7zgGHVfxBPkQvS56BAgdEAE&scp=Ch5nY2lkOmN1cnJlbmN5X2V4Y2hhbmdlX3NlcnZpY2USQhISCcfS6-ramcs7EcL7upKDt5OuIhRIeWRlcmFiYWQsIFRlbGFuZ2FuYSoUDbYWQwoV8UGWLh0IvX4KJZ764S4wABoNZm9yZXggbGltaXRlZCIXaHlkZXJhYmFdIGZvcmV4IGxpbWl0ZWQqGUN1cnJlbmN5IGV4Y2hhbmdlIHNlcnZpY2U%3D#ts=3" className="text-blue-600 text-xs mt-1">See reviews</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

        </div>

      
      {/* Additional heading and paragraph */}
      <div className="flex flex-col md:flex-row mt-3 md:mt-6 mb-3 md:mb-4">
      <div className="w-full md:w-1/2 p-2 md:p-10">
        <h2 className="text-orange-500 text-xl md:text-6xl mb-4 font-bold bg-slate-300 text-center rounded-2xl">Vision</h2>
        <p className="text-black text-sm md:text-2xl md:mb- text-center text-justify">
          <b>W</b>e aim to offer innovative products in B2C segment in forex market by
          targeting needs of people travelling abroad on holiday, business and on
          higher education
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="grid grid-cols-4 gap-4 md:grid-cols-2 p-1 md:p-4">
          <div className="flex flex-col items-center">
            <img src={Checkout} alt="Vision Image 1" className="w-12 md:w-24 h-12 md:h-24 mb-1 md:mb-2 md:mr-16 mx-2" />
            <span className="text-center font-semibold text-xs md:text-base">We Buy</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={Payment} alt="Vision Image 3" className="w-12 md:w-24 h-12 md:h-24 mb-1 md:mb-2 md:mr-16 mx-2" />
            <span className="text-center font-semibold text-xs md:text-base">We Sell</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={Card} alt="Vision Image 4" className="w-12 md:w-24 h-12 md:h-24 mb-1 md:mb-2 md:mr-16 mx-2" />
            <span className="text-center font-semibold text-xs md:text-base">Card</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={School} alt="Vision Image 2" className="w-12 md:w-24 h-12 md:h-24 mb-1 md:mb-2 md:mr-16 mx-2" />
            <span className="text-center font-semibold text-xs md:text-base">Outward Remittances</span>
          </div>
        </div>
      </div>
    </div>


      {/* Company profile section */}
      <div className="bg-orange p-4 md:p-8 decoration-wavy rounded-2xl mb-2">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 relative opacity-50 md:opacity-100"> {/* Opacity for mobile */}
              {/* Image hidden on mobile, shown on desktop */}
              <img src={Company} alt="Company" className="hidden md:block w-72 h-72 md:ml-20" /> 
            </div>
            <div className="md:w-2/3 md:pl-8">
              <div className='flex justify-center md:justify-end items-center'>
                <h1 className="text-orange-500 text-3xl md:text-6xl md:mb-12 font-bold">Company profile</h1>
                {/* Image next to the heading, only visible on mobile */}
                {/* <img src={Company} alt="Company" className="w-20 h-20 ml-2 block md:hidden" /> */}
              </div>
              <p className="text-black mb-2 md:mb-4 font-normal text-sm md:text-2xl text-justify">
                <span className='font-bold text-2xl md:text-4xl'>H</span>yderabad Forex Customer base includes a cream of corporates from IT industry, manufacturing units, service industry and of course individuals who travel abroad frequently on business and for holiday. In addition to this, Hyderabad Forex has strong business relationship with various Banks and Travel agencies.
                <br/>Hyderabad Forex provides you the widest range of foreign exchange products and currencies at the best rates.
              </p>
              {/* <p className="text-black font-semibold text-sm md:text-1xl text-justify">
                Hyderabad Forex provides you the widest range of foreign exchange
              </p>
              <p className='text-black font-semibold text-sm md:text-base text-justify'>
                products and currencies at the best rates.
              </p> */}
            </div>
          </div>
        </div>
      </div>






      {/* <div className="bg-[#ffb72b] text-white px-4 py-3 sm:px-8 sm:py-4 rounded-2xl mb-2">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="w-full sm:w-auto mb-4 sm:mb-0">
              <h1 className="text-lg sm:text-4xl font-bold mt-2 sm:mt-4">
                Experience seamless currency exchange with 
              </h1>
              <h1 className="text-lg sm:text-4xl font-bold mb-2 sm:mb-4">
                best price in HFL
              </h1>
            </div>
            <div className='flex justify-center sm:justify-start sm:mr-40'>
              <button
                className="bg-[#ffb72b] rounded-xl hover:bg-[#eeb826] text-white px-3 py-1 sm:px-4 sm:py-2  border-4 border-white"
                onClick={handleContactUs}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col md:flex-row items-start bg-slate-300 rounded-r-2xl sm:bg-white my-2">
        <div className="mb-1 md:mb-0 md:max-w-2xl md:mr-8 flex-1">
          <h2 className="text-orange-500 text-xl sm:text-4xl md:text-6xl mb-2 md:mb-4 md:pl-12 mt-2 md:mt-9 text-center">Our People:</h2>
          <div className="md:pl-11">
            <p className="text-black text-sm md:text-3xl mb-4 text-justify m-2">
              <span className="font-bold text-md md:text-4xl">W</span>e are proud of our people - proud of their ability, commitment and service orientation. Our people have been indoctrinated in the service quality mindset and the organization is one of the best customer service oriented companies in the forex services domain. Hyderabad Forex enjoys a reputation for providing reliable, personalized and professional forex services.
            </p> 
          </div>
        </div>
        <div className="hidden md:flex justify-center mt-8 md:mt-0 md:ml-8 w-full md:w-1/2">
          <img src={Network} alt="People" className="max-w-full h-auto object-contain" />
        </div>
      </div>
      <div className="bg-orange-100 py-4 md:py-8 rounded-2xl mb-2 md:mb-4">
  <h1 className="text-sm sm:text-3xl font-bold text-center text-gray-800 mb-2 md:mb-4">
    Board Of Directors
  </h1>
  <p className="text-center text-black-600 mb-4 sm:mb-8 font-semibold text-xs sm:text-base">
    Guiding the company's strategic vision and upholding ethical practices in the dynamic financial landscape.
  </p>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 justify-center">
    <div className="text-center mb-4">
      <div className="relative bg-white shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-2xl p-1 sm:p-6 max-w-xs mx-1">
        <img
          src={Avatar}
          alt="Director 1"
          className="w-12 h-12 sm:w-40 sm:h-40 rounded-full object-cover mx-auto mb-2 sm:mb-4"
        />
        <h3 className="text-xs sm:text-xl font-bold text-gray-800">Raghunath Mudumal</h3>
        
        
      </div>
    </div>
    <div className="text-center mb-2 md:mb-4">
      <div className="relative bg-white shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-2xl p-1 sm:p-6 max-w-xs mx-1">
        <img
          src={Avatar}
          alt="Director 2"
          className="w-12 h-12 sm:w-40 sm:h-40 rounded-full object-cover mx-auto mb-2 sm:mb-4"
        />
        <h3 className="text-xs sm:text-xl font-bold text-gray-800">Venkata Ramana Kokkalla</h3>
        
      </div>
    </div>
    <div className="text-center mb-4">
      <div className="relative bg-white shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-2xl p-1 sm:p-6 max-w-xs mx-1">
        <img
          src={Avatar}
          alt="Director 3"
          className="w-12 h-12 sm:w-40 sm:h-40 rounded-full object-cover mx-auto mb-2 sm:mb-4"
        />
        <h3 className="text-xs sm:text-xl font-bold text-gray-800">Girish Kulkarni Padmananda</h3>
        
      </div>
    </div>
    <div className="text-center mb-4">
      <div className="relative bg-white shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-2xl p-1 sm:p-6 max-w-xs mx-1">
        <img
          src={Avatar}
          alt="Director 4"
          className="w-12 h-12 sm:w-40 sm:h-40 rounded-full object-cover mx-auto mb-2 sm:mb-4"
        />
        <h3 className="text-xs sm:text-xl font-bold text-gray-800">Vinay Kumar Beraar</h3>
        
      </div>
    </div>
  </div>
</div>





        <StatsDisplay/>
        <div className="flex flex-col justify-center items-center w-full bg-white rounded-2xl mt-10">
  <h1 className="text-2xl sm:text-4xl font-semibold text-black mb-2 text-center">Why Buy Forex via HFL</h1>
  <div className="flex items-center justify-center w-full mb-5 flex-col sm:flex-row">
    <div className="flex items-center gap-2 mb-4 sm:mb-0 sm:mr-20">
      <img src={rbiIcon} alt="RBI Authorized" className="h-12 sm:h-16 w-12 sm:w-16" />
      <p className="flex items-center text-xs sm:text-lg font-medium text-black">
        RBI Authorised
        <br className="hidden sm:block" /> Money Changer <span className="text-green-500 text-4xl sm:text-8xl ml-2 sm:ml-4">✓</span>
      </p>
    </div>
    <div className="flex items-center gap-2 sm:ml-20">
      <img src={deliveryIcon} alt="Fast Delivery" className="h-12 sm:h-16 w-12 sm:w-16" />
      <p className="flex items-center text-xs sm:text-lg font-medium text-black">
        Fast, Secure and Reliable! <span className="text-green-500 text-4xl sm:text-8xl ml-2 sm:ml-4">✓</span>
      </p>
    </div>
  </div>
  <div className="text-base sm:text-xl font-medium text-black">
    <div className="peak-background flex flex-col items-center px-4 py-2 relative">
      <img src={centerImage} className="blurred-image" alt="Background" />
      <h1 className="text-2xl sm:text-4xl text-center w-full font-bold">Corporate Practices</h1>
      <div className="flex flex-col sm:flex-row justify-between w-full">
        <ul className="list-disc space-y-2 mt-4 sm:ml-40">
          <li className="text-sm font-semibold sm:text-base p-2 sm:p-8">Corporate Governance Practices</li>
          <li className="text-sm font-semibold sm:text-base p-2 sm:p-8">Continuous Improvement in Governance</li>
          <li className="text-sm font-semibold sm:text-base p-2 sm:p-8">Internal Control Systems</li>
        </ul>
        <ul className="list-disc space-y-2 mt-4 sm:mr-40">
          <li className="text-sm font-semibold sm:text-base p-2 sm:p-8">Integration of Operational, Financial, Legal Systems</li>
          <li className="text-sm font-semibold sm:text-base p-2 sm:p-8">Anti-Money Laundering Policy</li>
          <li className="text-sm font-semibold sm:text-base p-2 sm:p-8">Monitoring and Review of Controls</li>
        </ul>
      </div>
    </div>
    <div className="background-image-list space-y-2 p-4 sm:pl-20 sm:pr-20 ">
      <li className="text-xs sm:text-base p-2 sm:p-6">
        Corporate Governance practices, Internal Control Systems and Anti-Money Laundering Policy are some of the ongoing practices within Hyderabad Forex.
      </li>
      <li className="text-xs sm:text-base p-2 sm:p-6">
        Hyderabad Forex has implemented the principles of good Corporate Governance by adopting standard Corporate Governance practices through continuous improvement of internal systems to ensure customer satisfaction.
      </li>
      <li className="text-xs sm:text-base p-2 sm:p-6">
        At Hyderabad Forex, Internal Control Systems that include Operational, Financial and Legal systems have been integrated to ensure that the Company meets its business objectives. These systems are continuously monitored, reviewed, and modified when necessary for better efficiency and effectiveness.
      </li>
      <li className="text-xs sm:text-base p-2 sm:p-6">
        Hyderabad Forex has implemented Anti-Money Laundering Policy which provides detailed guidelines and procedures to be followed while undertaking foreign exchange transactions.
      </li>
    </div>
  </div>
</div>
        <div>
        <div className="flex flex-col justify-center items-center mt-8">
        <h1 className='text-lg font-bold sm:text-4xl text-center w-full'>Our Branches in Hyderabad</h1>
        <div className="flex justify-between items-center w-4/5">
    <div className="flex flex-col items-center w-1/2">
    <h1 className='text-lg font-bold sm:text-4xl flex items-center space-x-2 mt-8 pb-16'>Somajiguda</h1>
      <div className="flex items-center space-x-2 mt-8 pb-16">
        <img src={phoneIcon} alt="Phone" className="h-6 w-6 sm:h-10 sm:w-10" />
        <button onClick={handleContactUs} style={{ cursor: 'pointer' }}>
          9440626779
        </button>
      </div>
      <div className="flex items-center space-x-2 pb-16">
        <img src={messageIcon} alt="Message" className="h-6 w-6 sm:h-10 sm:w-10" />
        <button onClick={handleWhatsApp} style={{ cursor: 'pointer' }}>
          9440626779
        </button>
      </div>
      <div className="flex items-center space-x-2 pb-16">
        <img src={locationIcon} alt="Location" className="h-6 w-6 sm:h-10 sm:w-10" />
        <button onClick={handleAddress} style={{ cursor: 'pointer' }}>
          ADDRESS
        </button>
      </div>
    </div>
    <div className="w-1 bg-gray-800 h-56"></div>
    <div className="flex flex-col items-center w-1/2">
    <h1 className='text-lg font-bold sm:text-4xl flex items-center space-x-2 mt-8 pb-16'>Gachibowli</h1>
      <div className="flex items-center space-x-2 mt-8 pb-16">
        <img src={phoneIcon} alt="Phone" className="h-6 w-6 sm:h-10 sm:w-10" />
        <button onClick={handleContactUs2} style={{ cursor: 'pointer' }}>
        9848131798
        </button>
      </div>
      <div className="flex items-center space-x-2 pb-16">
        <img src={messageIcon} alt="Message" className="h-6 w-6 sm:h-10 sm:w-10" />
        <button onClick={handleWhatsApp2} style={{ cursor: 'pointer' }}>
        9848131798
        </button>
      </div>
      <div className="flex items-center space-x-2 pb-16">
        <img src={locationIcon} alt="Location" className="h-6 w-6 sm:h-10 sm:w-10" />
        <button onClick={handleAddress2} style={{ cursor: 'pointer' }}>
          ADDRESS
        </button>
      </div>
    </div>
  </div>

    </div>
        </div>
        </div>
        <Footer/>
    </div>

    
  
  );
};

export default AboutUs;