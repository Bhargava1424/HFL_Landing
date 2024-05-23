import React from 'react'
import { motion } from "framer-motion"
import Buy from "../assets/Buy.png"
import Sell from "../assets/Receive Cash.png"
import Card from "../assets/Card Security.png"
import Scholarship from "../assets/Scholarship.png"
import background from '../assets/Ourservice.png'

const OurServiceHomePage = () => {
  return (
    <div className='py-4 px-1'>
      <div className="container mx-auto my-4 py-2 px-2 md:py-4 md:px-4 relative bg-cover bg-center bg-[#ffefd6]" style={{ backgroundImage: `url(${background})` }}>
        <div className='sm:relative'>
        <div className='flex flex-col sm:flex-row mt-4 '>
        <h1 className="text-black text-5xl font-semibold md:text-5xl">Always Provide The</h1>
        </div>
        <div className='flex flex-col sm:flex-row'>
        <h1 className="text-black text-5xl font-semibold md:text-5xl">Best Service</h1>
        </div>
        
        <div className="sm:absolute top-0 right-0 mt-4 w-full sm:w-1/2 pr-8">
  <div className="mb-4">
    <h1 className="text-[#D69009] font-bold text-2xl sm:text-3xl">Our Services</h1>
    <p className="font-semibold text-[#333539] text-poppins text-xs sm:text-sm mt-2">Hyderabad Forex offers secure, convenient forex</p>
    <p className="font-semibold text-[#333539] text-poppins text-xs sm:text-sm">solutions as buy/sell currency, forex cards for travel, and</p>
    <p className="font-semibold text-[#333539] text-poppins text-xs sm:text-sm">hassle-free tuition fee remittances</p>
  </div>
</div>
</div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 justify-center mt-10">
    <div className="text-center mb-4">
      <motion.div 
      whileHover={{ scale: 1.1 }}
      className="bg-[#FBF8F1] hover: py-2 px-4 hover:bg-white hover:shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg p-1 sm:p-6 max-w-xs mx-1">
        <img
          src={Buy}
          alt="Director 1"
          className="w-12 h-12 sm:w-40 sm:h-40 object-cover mx-auto mb-2 sm:mb-4"
        />
        <h3 className="text-poppins text-xs sm:text-xl font-bold text-[#343434]">We Buy</h3>
        <p className="text-poppins text-xs sm:text-base text-[#333539]">Purchase foreign currency at competitive rates with seamless transactions</p>
        
      </motion.div>
    </div>
    <div className="text-center mb-4">
      <motion.div 
      whileHover={{ scale: 1.1 }}
      className="bg-[#FBF8F1] hover: py-2 px-4 hover:bg-white hover:shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg p-1 sm:p-6 max-w-xs mx-1">
        <img
          src={Sell}
          alt="Director 1"
          className="w-12 h-12 sm:w-40 sm:h-40 object-cover mx-auto mb-2 sm:mb-4"
        />
        <h3 className="text-poppins text-xs sm:text-xl font-bold text-[#343434]">We Sell</h3>
        <p className="text-poppins text-xs sm:text-base text-[#333539]">Sell your foreign currency easily and get the best rates</p>
        
      </motion.div>
    </div>
    <div className="text-center mb-4">
      <motion.div 
      whileHover={{ scale: 1.1 }}
      className=" bg-[#FBF8F1] hover: py-2 px-4 hover:bg-white hover:shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg p-1  sm:p-6 max-w-xs mx-1">
        <img
          src={Card}
          alt="Director 1"
          className="w-12 h-12 sm:w-40 sm:h-40 object-cover mx-auto mb-2 sm:mb-4"
        />
        <h3 className="text-poppins text-xs sm:text-xl font-bold text-[#343434]">Forex Cards</h3>
        <p className="text-poppins text-xs sm:text-base text-[#333539]">Convenient and secure forex cards for all your travel needs</p>
       
      </motion.div>
    </div>
    <div className="text-center mb-4">
      <motion.div 
      whileHover={{ scale: 1.1 }}
      className="bg-[#FBF8F1] hover: py-2 px-4 hover:bg-white hover:shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg  sm:p-6 max-w-xs mx-1">
        <img
          src={Scholarship}
          alt="Director 1"
          className="w-12 h-12 sm:w-40 sm:h-40 object-cover mx-auto mb-2 sm:mb-4"
        />
        <h3 className="text-poppins text-xs sm:text-xl font-bold text-[#343434]">Tution Fees</h3>
        <p className="text-poppins text-xs sm:text-base text-[#333539]">Effortlessly transfer tuition fees and other remittances abroad with Hyderabad Forex</p>
        
      </motion.div>
    </div>
    
  </div>
      </div>
    </div>
  )
}

export default OurServiceHomePage
