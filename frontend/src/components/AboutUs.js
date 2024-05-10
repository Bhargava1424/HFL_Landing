import React, { useState } from 'react';
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
import Euros from "../assets/euros.png"
import Customer from "../assets/customer-support.png"
import software from "../assets/software-application.png"
import { isMobile } from 'react-device-detect';
import Network from "../assets/networking.png"
import Avatar from "../assets/undraw_male_avatar_g98d (1).svg"


const AboutUs = () => {
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
    <div>
      <NavBar /> {/* Navbar component */}
      {/* About Us container */}
      <div className="container mx-auto">
      <div className="mt-16">
        <div className="bg-orange-500 p-8 flex justify-center items-center">
          <div className="container mx-auto text-center">
            <h1 className="text-white font-bold text-5xl mt-4">About Us</h1>
          </div>
        </div>
        {/* Empty container with image and written content */}
        <div className="bg-orange-100 p-8 flex flex-col md:flex-row justify-center items-center">
          {/* Image container */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mb-8 md:mb-0 relative">
            {/* First image */}
            <img src={GBLI} alt="" className="w-1/2 md:w-auto h-auto mb-0 mr-5 md:mr-10" />
            {/* Second image */}
            <img src={SMGD} alt="" className="w-1/2 md:w-auto h-auto md:absolute md:-bottom-1/4 md:right-5" />
          </div>
          {/* Written content */}
          <div className="w-full md:w-1/2 ml-4 md:ml-8 p-4 text-center md:text-left">
            <h2 className="text-orange-500 font-bold text-5xl mb-4">Mission</h2>
            <div className="flex flex-col items-start">
              <p className="text-black mb-4 font-semibold">To deliver Forex Services in a transparent and hassle-free manner. Hyderabad Forex, as a company, is known for its integrity, innovation, empathy, and passion for delivering the best forex services.</p>
              {/* Just Dial logo, rating, and anchor tag */}
              <div className="flex items-center">
  <div className="flex flex-col items-center mr-8">
    <img src={JustDialLogo} alt="Just Dial Logo" className="w-24 h-auto mb-2" />
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <span className="text-black mr-2">4.3</span>
        <div className="stars">
          <span className="star text-yellow-500">&#9733;</span>
          <span className="star text-yellow-500">&#9733;</span>
          <span className="star text-yellow-500">&#9733;</span>
          <span className="star text-yellow-500">&#9733;</span>
          <span className="star text-gray-400">&#9734;</span>
        </div>
      </div>
      <span className="text-black text-sm">241+ ratings</span>
      <a href="https://www.justdial.com/Hyderabad/Hyderabad-Forex-Ltd-Opposite-Indian-Oil-Petrol-Bunk-Somajiguda/040PZ004899_BZDET" className="text-blue-600 mt-2">See reviews</a>
    </div>
  </div>
  <div className="flex flex-col items-center ml-12">
    <img src={GoogleLogo} alt="Another Logo" className="w-24 h-auto " />
    <div className="flex flex-col items-center mt-4">
      <div className="flex items-center">
        <span className="text-black mr-2 ">4.7</span>
        <div className="stars">
          <span className="star text-yellow-500">&#9733;</span>
          <span className="star text-yellow-500">&#9733;</span>
          <span className="star text-yellow-500">&#9733;</span>
          <span className="star text-yellow-500">&#9733;</span>
          <span className="star text-gray-400">&#9734;</span>
        </div>
      </div>
      <a href="https://www.google.com/localservices/prolist?g2lbs=AOHF13klXYtnetRnbyktzM3_MhLnL5ZE9cjfJmXtM7Lx3P1bxJoS5L1KEQasTbMZcrHjLUiZCiLZSoy_Ha2NBoYhhhy17qEs-YCgfGkOz5EGt1aCRbTRRRE%3D&hl=en-IN&gl=in&cs=1&ssta=1&q=hyderabad%20forex%20limited&oq=hyderabad%20forex%20limited&slp=MgBSAggCYAB6uAJDaGRvZVdSbGNtRmlZV1FnWm05eVpYZ2diR2x0YVhSbFpFaktoZXIxdWE2QWdBaGFJeEFCRUFJWUFCZ0JHQUlpRjJoNVpHVnlZV0poWkNCbWIzSmxlQ0JzYVcxcGRHVmtrZ0VaWTNWeWNtVnVZM2xmWlhoamFHRnVaMlZmYzJWeWRtbGpaWm9CSTBOb1drUlRWV2hPVFVjNWJsTXdWa3BSTUVadVUxVk9iR050T1RKU1IxcHVSVUZGcWdGZENnZ3ZiUzh3T1dNMmR4QUJLaEVpRFdadmNtVjRJR3hwYldsMFpXUW9BRElmRUFFaUc5cElUdUtMOUhyYXppcWRxdjNTdnFPS1c1d2hYZlhQMnNEYVhESWJFQUlpRjJoNVpHVnlZV0poWkNCbWIzSmxlQ0JzYVcxcGRHVmuSARwKDS9nLzExZ2doY3AwcWIKCy9nLzF0ZnBoODN2&src=2&spp=Cg0vZy8xMWdnaGNwMHFiOowCV2lNUUFSQUNHQUFZQVJnQ0loZG9lV1JsY21GaVlXUWdabTl5WlhnZ2JHbHRhWFJsWkpJQkdXTjFjbkpsYm1ONVgyVjRZMmhoYm1kbFgzTmxjblpwWTJXYUFTTkRhRnBFVTFWb1RrMUhPVzVUTUZaS1VUQkdibE5WVG14amJUa3lVa2RhYmtWQlJhb0JYUW9JTDIwdk1EbGpObmNRQVNvUklnMW1iM0psZUNCc2FXMXBkR1ZrS0FBeUh4QUJJaHZhU0U3aWlfUjYyczRxbmFyOTByNmppbHVjSVYzMXo5ckEybHd5R3hBQ0loZG9lV1JsY21GaVlXUWdabTl5WlhnZ2JHbHRhWFJsWkE9PQ%3D%3D&serdesk=1&lrlstt=1715247924918&ved=2ahUKEwjt5LXSo4CGAxWV7zgGHVfxBPkQvS56BAgdEAE&scp=Ch5nY2lkOmN1cnJlbmN5X2V4Y2hhbmdlX3NlcnZpY2USQhISCcfS6-ramcs7EcL7upKDt5OuIhRIeWRlcmFiYWQsIFRlbGFuZ2FuYSoUDbYWQwoV8UGWLh0IvX4KJZ764S4wABoNZm9yZXggbGltaXRlZCIXaHlkZXJhYmFkIGZvcmV4IGxpbWl0ZWQqGUN1cnJlbmN5IGV4Y2hhbmdlIHNlcnZpY2U%3D#ts=3" className="text-blue-600 mt-2">See reviews</a>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
      {/* Additional heading and paragraph */}
      <div className="flex flex-col md:flex-row mt-6">
  <div className="w-full md:w-1/2 p-10">
    <h2 className="text-orange-500 text-4xl md:text-6xl mb-4">Vision</h2>
    <p className="text-black text-lg md:text-3xl mb-4">
      we aim to offer innovative products in B2B segment in forex market by
      targeting needs of people travelling abroad on holiday, business and on
      higher education
    </p>
  </div>
  <div className="w-full md:w-1/2 flex justify-center mt-4">
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="flex flex-col items-center">
        <img src={Checkout} alt="Vision Image 1" className="w-16 h-16 mb-2 mr-32" />
        <span className="text-center font-semibold mr-32">We Buy</span>
      </div>
      <div className="flex flex-col items-center">
        <img src={School} alt="Vision Image 2" className="w-16 h-16 mb-2" />
        <span className="text-center font-semibold">School</span>
      </div>
      <div className="flex flex-col items-center">
        <img src={Payment} alt="Vision Image 3" className="w-16 h-16 mb-2 mr-32" />
        <span className="text-center font-semibold mr-32">We Sell</span>
      </div>
      <div className="flex flex-col items-center">
        <img src={Card} alt="Vision Image 4" className="w-16 h-16 mb-2" />
        <span className="text-center font-semibold">Card</span>
      </div>
    </div>
  </div>
</div>
      {/* Company profile section */}
<div className="bg-orange-100 p-8 decoration-wavy">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/3 mb-8 md:mb-0">
        <img src={Company} alt="Company" className="w-full h-auto" /> 
      </div>
      <div className="md:w-2/3 md:pl-8">
        <div className='flex justify-end'>
        <h1 className="text-orange-500 text-6xl mb-12 mr-20 font-bold">Company profile</h1>
        </div>
        <p className="text-black mb-4 font-semibold">
        <span className='font-bold text-4xl'>H</span>yderabad Forex Customer base includes a cream of corporates from IT industry, manufacturing units, service industry and of course individuals who travel abroad frequently on business and for holiday. In addition to this, Hyderabad Forex has strong business relationship with various Banks and Travel agencies.
        </p>
        <p className="text-black font-semibold">
         Hyderabad Forex provides you the widest range of foreign exchange </p>
        <p className='text-black font-semibold'>products and currencies at the best rates.</p>
        <div className="mt-8">
          <div className="grid grid-cols-3 gap-4">
            {/* <img src={Company} alt="Bank" className="w-12 h-12" /> */}
            {/* <img src={Euros} alt="Currency" className="w-12 h-12" />
            <img src={software} alt="Building" className="w-12 h-12" />
            <img src={Customer} alt="Plane" className="w-12 h-12" /> */}
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="bg-orange-500 text-white px-4 py-3 sm:px-8 sm:py-4">
  <div className="container mx-auto">
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <div className="w-full sm:w-auto mb-4 sm:mb-0">
        <h1 className="text-2xl sm:text-4xl font-bold mt-4">
          Experience seamless currency exchange with 
        </h1>
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">
        best price in HFL
        </h1>
      </div>
      <div className='mr-40'>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded border border-white "
          onClick={handleContactUs}
        >
          Contact Us
        </button>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-col md:flex-row items-start">
  <div className="mb-8 md:mb-0 md:max-w-2xl md:mr-8 flex-1">
    <h2 className="text-orange-500 text-4xl md:text-6xl mb-4 md:pl-12 mt-9">Our People:</h2>
    <div className="md:pl-11">
      <p className="text-black text-3xl mb-4">
        <span className="font-bold text-4xl">W</span>e are proud of our people - proud of their ability, commitment and service orientation. Our people have been indoctrinated in the service quality mind set and the organization is one of the best customer service oriented companies in the forex services domain. Hyderabad Forex enjoys a reputation for providing reliable, personalized and professional forex services
      </p>
      
    </div>
  </div>
  <div className="flex justify-center mt-8 md:mt-0 md:ml-8 w-full md:w-1/2">
    <img src={Network} alt="People" className="max-w-full h-auto object-contain" />
  </div>
</div>
<div className="bg-orange-100 py-8">
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
    Board Of Directors
  </h1>
  <p className="text-center text-black-600 mb-8 font-semibold">
    Guiding the company's strategic vision and upholding ethical practices in the dynamic financial landscape.
  </p>
  <div className="flex justify-center space-x-8">
    <div className="text-center">
      <div className="relative bg-white shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg p-4">
        <img
          src={Avatar}
          alt="Director 1"
          className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
        />
        <h3 className="text-xl font-bold text-gray-800">Mr Raghunath Mudumal</h3>
        <p className="text-gray-600">Chairman and Managing Director</p>
        <a href="#" className="text-blue-500 hover:text-blue-700 mt-2 inline-block">Read More</a>
      </div>
    </div>
    <div className="text-center">
      <div className="relative bg-white shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg p-4">
        <img
          src={Avatar}
          alt="Director 2"
          className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
        />
        <h3 className="text-xl font-bold text-gray-800">Mr Raghunath Mudumal</h3>
        <p className="text-gray-600">Chairman and Managing Director</p>
        <a href="#" className="text-blue-500 hover:text-blue-700 mt-2 inline-block">Read More</a>
      </div>
    </div>
    <div className="text-center">
      <div className="relative bg-white shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg p-4">
        <img
          src={Avatar}
          alt="Director 3"
          className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
        />
        <h3 className="text-xl font-bold text-Orange-500">Mr Raghunath Mudumal</h3>
        <p className="text-gray-600">Chairman and Managing Director</p>
        <a href="#" className="text-blue-500 hover:text-blue-700 mt-2 inline-block">Read More</a>
      </div>
    </div>
    <div className="text-center">
      <div className="relative bg-white shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg p-4">
        <img
          src={Avatar}
          alt="Director 4"
          className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
        />
        <h3 className="text-xl font-bold text-gray-800">Mr Raghunath Mudumal</h3>
        <p className="text-gray-600">Chairman and Managing Director</p>
        <a href="#" className="text-blue-500 hover:text-blue-700 mt-2 inline-block">Read More</a>
      </div>
    </div>
  </div>
</div>
</div>  
    </div>

    
  
  );
};

export default AboutUs;