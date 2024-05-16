import React from 'react';
import HFLLogo from '../assets/HFLlogo.jpg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="bg-orange-500 text-white py-2">
            <div className="container mx-auto px-4 text-xs md:text-sm">
                <div className="flex flex-col lg:flex-row justify-between items-start">
                    <div className="flex flex-col">
                        <div>
                            <div className='flex justify-center'>
                            <img
                                src={HFLLogo}
                                alt="Hyderabad Forex Private Limited"
                                className="w-16 md:w-32"
                            />
                            </div>
                            <div className="md:mt-2 font-bold flex justify-center">Hyderabad Forex Pvt Ltd</div>
                        </div>
                        <div>
                            6-3-1090/A/24, LG - 2, Olbee Centre, Raj Bhavan Rd, Somajiguda, Hyderabad, Telangana 500082
                        </div>
                        <div>
                            # 41st Floor, Telecom Housing Society, Gachibowli, Telangana 500032
                        </div>
                        <div className="mt-2 border-t border-white md:pt-2 text-center text-xs md:text-sm">
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
                    <div className="hidden lg:flex flex-col items-center space-y-2">
                        <div className="text-center">
                            <button
                                onClick={() => navigate('/aboutUs')}
                                className="hover:underline text-lg"
                            >
                                About Us
                            </button>
                            <span className='ml-16'>Store Locations</span>
                        </div>
                        <div className="flex justify-center space-x-4 gap-24">
                            <span className='font-medium'>Somajiguda</span>
                            <span className='font-medium'>Gachibowli</span>
                        </div>
                        <div className="flex space-x-4">
                        <div
                            className="rounded-lg overflow-hidden"
                            dangerouslySetInnerHTML={{
                                __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.75140611615!2d78.45640297468381!3d17.42371380175852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974c629a05bf%3A0x1f2ad73d4257ca81!2sHyderabad%20Forex%20Limited!5e0!3m2!1sen!2sin!4v1715873066743!5m2!1sen!2sin&z=15" width="180" height="180" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                            }}
                        />
                            <div
                                className="rounded-lg overflow-hidden"
                                dangerouslySetInnerHTML={{
                                    __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4985901306195!2d78.36422557468401!3d17.43583440140857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ec2b8933c7%3A0xfe8d87caf8af1578!2sHYDERABAD%20FOREX%20LIMITED!5e0!3m2!1sen!2sin!4v1715872909969!5m2!1sen!2sin&z=15" width="180" height="180" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                                }}
                            />


                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
