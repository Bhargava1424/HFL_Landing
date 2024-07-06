import React from 'react'
import { motion } from "framer-motion"
import Buy from "../assets/Buy.png"
import Sell from "../assets/Receive Cash.png"
import Card from "../assets/Card Security.png"
import Scholarship from "../assets/Scholarship.png"
import background from '../assets/Ourservice.png'

const OurServiceHomePage = () => {
  return (
    <div className='px-1 py-4'>
      <div className="container mx-auto my-4 py-2 px-2 md:py-4 md:px-4 relative bg-cover bg-center bg-[#ffefd6]" style={{ backgroundImage: `url(${background})` }}>
        <div className='sm:relative'>
        
        <div className="top-0 right-0 w-full pr-8 mt-2 sm:absolute md:mt-4 sm:w-1/2">
</div>
</div>

        <div className="grid justify-center grid-cols-2 gap-2 mt-2 sm:grid-cols-4 md:mt-10">
    <div className="mb-1 text-center md:mb-4">
      <motion.div 
      whileHover={{ scale: 1.1 }}
      className="bg-[#FBF8F1] hover: px-2 py-1 md:py-2 md:px-4 hover:bg-white hover:shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg p-1 sm:p-6 max-w-xs md:mx-1">
        <img
          src={Buy}
          alt="Director 1"
          className="object-cover w-12 h-12 mx-auto mb-2 sm:w-40 sm:h-40 sm:mb-4"
        />
        <h3 className="text-poppins text-xs sm:text-xl font-bold text-[#343434]">We Buy</h3>
        <p className="text-poppins text-xs md:text-base lg:text-xl  text-[#333539] ">Sell your foreign currency easily and get the best rates</p>
        
      </motion.div>
    </div>
    <div className="mb-1 text-center md:mb-4">
      <motion.div 
      whileHover={{ scale: 1.1 }}
      className="bg-[#FBF8F1] hover: px-2 py-1 md:py-2 md:px-4 hover:bg-white hover:shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg p-1 sm:p-6 max-w-xs md:mx-1">
        <img
          src={Sell}
          alt="Director 1"
          className="object-cover w-12 h-12 mx-auto mb-2 sm:w-40 sm:h-40 sm:mb-4"
        />
        <h3 className="text-poppins text-xs sm:text-xl font-bold text-[#343434]">We Sell</h3>
        <p className="text-poppins text-xs md:text-base lg:text-xl  text-[#333539] ">Purchase foreign currency at competitive rates with seamless transactions</p>
        
      </motion.div>
    </div>
    <div className="mb-1 text-center md:mb-4">
      <motion.div 
      whileHover={{ scale: 1.1 }}
      className=" bg-[#FBF8F1] hover: py px-2 py-1-md:2 px-md:4 hover:bg-white hover:shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg p-1  sm:p-6 max-w-xs md:mx-1">
        <img
          src={Card}
          alt="Director 1"
          className="object-cover w-12 h-12 mx-auto mb-2 sm:w-40 sm:h-40 sm:mb-4"
        />
        <h3 className="text-poppins text-xs sm:text-xl font-bold text-[#343434]">Forex Cards</h3>
        <p className="text-poppins text-xs md:text-base lg:text-xl  text-[#333539] ">Convenient and secure for all your travel needs</p>
       
      </motion.div>
    </div>
    <div className="mb-1 text-center md:mb-4">
      <motion.div 
      whileHover={{ scale: 1.1 }}
      className=" bg-[#FBF8F1] hover: py px-2 py-1-md:2 px-md:4 hover:bg-white hover:shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg p-1  sm:p-6 max-w-xs md:mx-1">
        <img
          src={Scholarship}
          alt="Director 1"
          className="object-cover w-12 h-12 mx-auto mb-2 sm:w-40 sm:h-40 sm:mb-4"
        />
        <h3 className="text-poppins text-xs sm:text-xl font-bold text-[#343434]">Outward Remittances</h3>
        <p className="text-poppins text-xs md:text-base lg:text-xl  text-[#333539] "> International buisness payments, supporting family abroad and other remittances.</p>
        
      </motion.div>
    </div>
    
  </div>
      </div>
    </div>
  )
}

export default OurServiceHomePage
