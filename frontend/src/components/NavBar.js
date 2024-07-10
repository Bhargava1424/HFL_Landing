import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from "../assets/currency exchnage near me.jpg";
import { motion } from "framer-motion";
import "./NavBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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

  const handlebuttonclick = () => {
    navigate('/getanymoney');
  };

  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'text-orange-500' : 'text-gray-800';
  };

  return (
    <nav className=" sticky top-0 left-0 right-0 bg-white z-50 pr-0.5 drop-shadow-lg px-3">
      <div className="flex items-center justify-between px-1 py-2 mx-auto ">
        {/* Logo */}
        <Link to='/' className="flex items-center">
          <img src={Logo} alt="Logo" className="w-auto h-16 ml-5" />
          <div className="mx-2 border-r border-gray-800 h-9"></div>
          <div>
            <span className="block font-bold text-gray-800">Hyderabad Forex</span>
            <span className='font-bold text-gray-800'>Limited</span>
          </div>
        </Link>

        {/* Navigation items */}
        <div className={`${isMobile ? 'hidden' : 'flex justify-center flex-grow space-x-8 md:space-x-12 lg:space-x-16'}`}>
          <Link to="/" className={`font-medium hover:text-orange-500 ${getNavLinkClass('/')}`}>
            Home
          </Link>
          <Link to="/getanymoney" className={`font-medium hover:text-orange-500 ${getNavLinkClass('/getanymoney')}`}>
            Currency Exchange
          </Link>
          <Link to="/AboutUs" className={`font-medium hover:text-orange-500 ${getNavLinkClass('/AboutUs')}`}>
            About Us
          </Link>
          <Link to="/contactUs" className={`font-medium hover:text-orange-500 ${getNavLinkClass('/contactUs')}`}>
            Contact Us
          </Link>
        </div>

        {/* Button */}
        <div className={`${isMobile ? 'hidden' : 'relative'}`}>
          <div className='absolute inset-0.5 px-2 py-2 ml-4 bg-orange-200 rounded-lg blur'></div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="relative px-2 py-2 mr-5 font-semibold text-black bg-white border border-orange-500 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hover: button"
            style={{
              animation: 'glowing 1600ms infinite',
            }}
            onClick={handlebuttonclick}
          >
            Get AnyMoney Now &rarr;
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <div className={`${isMobile ? 'block' : 'hidden'}`}>
          <button
            className="text-gray-800 lg:hidden hover:text-orange-500 focus:outline-none"
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
              className={`block py-2 font-medium hover:text-orange-500 ${getNavLinkClass('/')}`}
              onClick={toggleDropdown}
            >
              Home
            </Link>
            <Link
              to="/getanymoney"
              className={`block py-2 font-medium hover:text-orange-500 ${getNavLinkClass('/getanymoney')}`}
              onClick={toggleDropdown}
            >
              Currency Exchange
            </Link>
            <Link
              to="/AboutUs"
              className={`block py-2 font-medium hover:text-orange-500 ${getNavLinkClass('/AboutUs')}`}
              onClick={toggleDropdown}
            >
              About Us
            </Link>
            <Link
              to="/contactUs"
              className={`block py-2 font-medium hover:text-orange-500 ${getNavLinkClass('/contactUs')}`}
              onClick={toggleDropdown}
            >
              Contact Us
            </Link>
            <div className='relative'>
              <button
                className="relative px-4 py-2 font-semibold text-black bg-white border border-orange-500 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hover:text-orange-500"
                onClick={handlebuttonclick}
              >
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
