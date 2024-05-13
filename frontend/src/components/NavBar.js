import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/HFLlogo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to='/' className="flex items-center">
          <img src={Logo} alt="Logo" className="h-9 w-auto" />
          <div className="border-r border-gray-800 h-9 mx-2"></div>
          <div>
            <span className="text-gray-800 font-bold block">Hyderabad Forex</span>
            <span className='text-gray-800 font-bold'>Limited</span>
          </div>
        </Link>

        {/* Navigation items */}
        <div className={`${isMobile ? 'hidden' : 'flex justify-center flex-grow space-x-8 md:space-x-12 lg:space-x-16'}`}>
          <Link to="/" className="font-medium text-gray-800 hover:text-orange-500">
            Home
          </Link>
          <Link to="#" className="font-medium text-gray-800 hover:text-orange-500">
            Currency Exchange
          </Link>
          <Link to="/AboutUs" className="font-medium text-gray-800 hover:text-orange-500">
            About Us
          </Link>
          <Link to="#" className="font-medium text-gray-800 hover:text-orange-500">
            Services
          </Link>
        </div>

        {/* Button */}
        <div className={`${isMobile ? 'hidden' : 'relative'}`}>
          <div className='absolute inset-0.5 px-4 py-2 ml-4 bg-orange-200 rounded-lg blur'></div>
          <button className="relative bg-white text-black hover:text-orange-500 py-2 px-4 border border-orange-500 rounded-full ml-4 font-semibold">
            Get AnyMoney Now &rarr;
          </button>
        </div>

        {/* Mobile menu button */}
        <div className={`${isMobile ? 'block' : 'hidden'}`}>
          <button
            className="lg:hidden text-gray-800 hover:text-blue-600 focus:outline-none"
            onClick={toggleDropdown}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block text-gray-800 hover:text-orange-500 py-2 font-medium"
            >
              Home
            </Link>
            <Link
              to="#"
              className="block text-gray-800 hover:text-orange-500 py-2 font-medium"
            >
              Currency Exchange
            </Link>
            <Link
              to="/AboutUs"
              className="block text-gray-800 hover:text-orange-500 py-2 font-medium"
            >
              About Us
            </Link>
            <Link
              to="#"
              className="block text-gray-800 hover:text-orange-500 py-2 font-medium"
            >
              Services
            </Link>
            <div className='relative'>
              
              <button className="relative bg-white text-black hover:text-orange-500 py-2 px-4 border border-orange-500 rounded-full  font-semibold">
                Get AnyMoney Now &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;