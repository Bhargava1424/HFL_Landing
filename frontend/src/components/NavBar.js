import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Logo from "../assets/HFLlogo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
   
    
      <nav className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
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
          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="text-gray-800 hover:text-blue-600">
              Currency Exchange
            </Link>
            <Link to="#" className="text-gray-800 hover:text-blue-600">
              Services
            </Link>
            <Link to="/AboutUs" className="text-gray-800 hover:text-blue-600">
              About Us
            </Link>
            <div className="relative">
              <button
                className="text-gray-800 hover:text-blue-600 focus:outline-none"
                onClick={toggleDropdown}
              >
                More
                <svg
                  className="w-4 h-4 ml-1 inline-block"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
                  >
                    Option 1
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
                  >
                    Option 2
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
                  >
                    Option 3
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
              onClick={toggleMobileDropdown}
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
        {mobileDropdownOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="#"
                className="block text-gray-800 hover:text-blue-600 py-2"
              >
                Currency Exchange
              </Link>
              <Link
                to="#"
                className="block text-gray-800 hover:text-blue-600 py-2"
              >
                Services
              </Link>
              <Link
                to="/AboutUs"
                className="block text-gray-800 hover:text-blue-600 py-2"
              >
                About Us
              </Link>
              <div className="relative">
                <button
                  className="text-gray-800 hover:text-blue-600 focus:outline-none py-2"
                  onClick={toggleDropdown}
                >
                  More
                  <svg
                    className="w-4 h-4 ml-1 inline-block"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <Link
                      to="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
                    >
                      Option 1
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
                    >
                      Option 2
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
                    >
                      Option 3
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
     
      
  );
};

export default Navbar;
