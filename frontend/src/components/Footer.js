import React from 'react';
import HFLLogo from '../assets/HFLlogo.jpg';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="bg-[#e3a833] text-black py-2">
            <div className="container px-4 mx-auto text-xs md:text-sm">
                <div className="flex flex-col lg:flex-row items-center justify-between lg:items-start">
                    <div className="flex flex-col items-center lg:items-center">
                        <div className="flex flex-col items-center">
                            <div className='flex justify-center'>
                                <img
                                    src={HFLLogo}
                                    alt="Hyderabad Forex Private Limited"
                                    className="w-16 md:w-32"
                                />
                            </div>
                            <div className="flex justify-center font-bold md:mt-2">Hyderabad Forex Limited</div>
                        </div>
                        <div className="flex justify-center mt-4 lg:mt-2">
                            <div className="text-center">
                                <div>
                                    6-3-1090/A/24, LG - 2, Olbee Centre, Raj Bhavan Rd, Somajiguda, Hyderabad, Telangana 500082
                                </div>
                                <div>
                                    # 41st Floor, Telecom Housing Society, Gachibowli, Telangana 500032
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-xs text-center border-t border-black lg:mt-12 lg:text-sm lg:pt-2">
                            <div>CIN L8989787876767512</div>
                            <div>
                                © 2024 Hyderabad Forex Private Limited. All Rights Reserved |{' '}
                                <a href="#disclaimer" className="hover:underline">
                                    Disclaimer
                                </a>{' '}
                                |{' '}
                                <a href="#terms" className="hover:underline">
                                    Terms & Conditions
                                </a>{' '}
                                |{' '}
                                <a href="#privacy-policy" className="hover:underline">
                                    Privacy Policy
                                </a>{' '}
                                |{' '}
                                <a href="#privacy-notice" className="hover:underline">
                                    Privacy Notice
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center mt-6 md:pt-8 space-x-6 lg:flex-col lg:items-start lg:space-y-4 lg:space-x-0 lg:mt-0">
                        <button onClick={() => navigate('/')} className="flex items-center hover:underline">
                            Home <span className="ml-1">↗</span>
                        </button>
                        <button onClick={() => navigate('/Getanymoney')} className="flex items-center hover:underline">
                            Currency Exchange <span className="ml-1">↗</span>
                        </button>
                        <button onClick={() => navigate('/aboutUs')} className="flex items-center hover:underline">
                            About Us <span className="ml-1">↗</span>
                        </button>
                        <button onClick={() => navigate('/contactUs')} className="flex items-center hover:underline">
                            Contact Us <span className="ml-1">↗</span>
                        </button>
                        <button onClick={() => navigate('/FAQs')} className="flex items-center hover:underline">
                            FAQs <span className="ml-1">↗</span>
                        </button>
                    </div>
                    <div className="flex flex-row items-center mt-6 md:pt-8 space-x-6 lg:flex-col lg:items-start lg:space-y-4 lg:space-x-0 lg:mt-0">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black">
                            <FaLinkedinIn size={24} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-black">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                    <div className="flex flex-row items-center mt-6 md:pt-6 space-x-6 lg:flex-col lg:items-start lg:space-y-4 lg:space-x-0 lg:mt-0">
                        <div className="text-center">
                            <span className='font-bold md:text-lg'>Store Locations</span>
                        </div>
                        <div className="flex flex-row space-x-6 lg:flex-col lg:space-x-0 lg:space-y-4">
                            <a
                                href="https://www.google.com/maps/place/Hyderabad+Forex+Limited/@17.4237138,78.4563976,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb974c629a05bf:0x1f2ad73d4257ca81!8m2!3d17.4237087!4d78.4589779!16s%2Fg%2F1tfph83v?entry=ttu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center bg-[#e3c281] text-black px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-[#eec064]"
                            >
                                <FaMapMarkerAlt className="text-2xl md:text-5xl" />
                                <span className="font-medium ml-2">Somajiguda</span>
                            </a>
                            <a
                                href="https://www.google.com/maps/place/HYDERABAD+FOREX+LIMITED/@17.4358344,78.3642202,17z/data=!3m2!4b1!5s0x3bcb93ec2b90a663:0xfadde25fa15fec9e!4m6!3m5!1s0x3bcb93ec2b8933c7:0xfe8d87caf8af1578!8m2!3d17.4358293!4d78.3668005!16s%2Fg%2F11gghcp0qb?entry=ttu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center bg-[#e3c281] text-black px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-[#eec064]"
                            >
                                <FaMapMarkerAlt className="text-2xl md:text-5xl" />
                                <span className="font-medium ml-2">Gachibowli</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
