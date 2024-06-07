import React, { useState } from 'react';
import Navbar from './NavBar';
import Steps from '../assets/GetAnyMoney/Roadmap.svg'
import OurServiceHomePage from './OurServiceHomePage';
import RbiComponent from './RbiComponent';
import StatsDisplay from './StatsDisplay';
import PromoBanner from './PromoBanner';
import Footer from './Footer';
import backgroundImage from '../assets/GetAnyMoney/BGVEctor.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetAnyMoney = () => {

  const [formType, setFormType] = useState('buy'); // buy, sell, or card
  const [formData, setFormData] = useState({
    store: 'Somajiguda',
    currency: 'USD - Dollar',
    amount: '',
    phone: '',
    email: '',
  });
  const [isPrivacyPolicyChecked, setIsPrivacyPolicyChecked] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  
  const handleCheckboxChange = (e) => {
    setIsPrivacyPolicyChecked(e.target.checked);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isPrivacyPolicyChecked) {
      toast.error('Please agree to the terms and conditions.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
      }, 2000);
      return;
    }
    const phonePattern = /^\d{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!phonePattern.test(formData.phone)) {
      toast.error('Please enter a valid 10-digit phone number.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          phone: '',
        }));
      }, 2000);
      return;
    }
  
    if (!emailPattern.test(formData.email)) {
      toast.error('Please enter a valid email address.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          email: '',
        }));
      }, 2000);
      return;
    }
  
    if (!isPrivacyPolicyChecked) {
      toast.error('Please agree to the terms and conditions.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
  
    const payload = {
      ...formData,
      formType,
    };
    console.log('Form Payload:', payload);
  
    // Display the success toast
    toast.success('Our HFL team will contact you soon.', {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: '#ffcc69',
        color: '#000',
      },
    });
  
    // Reset the form after 2000ms
    setTimeout(() => {
      setFormData({
        store: 'Somajiguda',
        currency: 'USD - Dollar',
        amount: '',
        phone: '',
        email: '',
      });
      setIsPrivacyPolicyChecked(false);
      setFormType('buy');
    }, 2000);
  };

  return (
    <>
      <Navbar/>

      <div
        className="mt-16 pb-6 md:pb-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='mx-auto bg-cover mb-1 md:mb-4 text-2xl md:text-4xl pt-4 md:pt-12 text-center w-full font-semibold'>
          Get <span className='bg-white p-2 text-[#D69009]'>Any Money</span> in 5 Simple Steps
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-2 md:mt-8 mb-4 md:mb-20'>
          <div className='flex justify-center'>
            <img src={Steps} alt='5 Steps' className='max-w-full h-72 md:h-auto' />
          </div>


          <div className='my-auto'>
            <div className="w-full md:w-4/5 bg-[#FDE5BF] p-2 md:p-3 rounded-lg shadow-lg md:mx-auto">
              <div className="flex justify-between w-3/4 h-8 md:h-14">
                <button
                  className={`flex-1 pl-1 pr-1 md:pl-3 md:pr-3 md:pt-1 md:pb-1 ${formType === 'buy' ? 'bg-[#F8A401]' : 'bg-white'} border border-2 border-[#FF8A1F] rounded-t-xl`}
                  onClick={() => setFormType('buy')}
                >
                  Buy Forex
                </button>
                <button
                  className={`flex-1 pl-1 pr-1 md:pl-3 md:pr-3 md:pt-1 md:pb-1 ${formType === 'sell' ? 'bg-[#F8A401]' : 'bg-white'} border border-2 border-[#FF8A1F] rounded-t-xl`}
                  onClick={() => setFormType('sell')}
                >
                  Sell Forex
                </button>
                <button
                  className={`flex-1 pl-1 pr-1 md:pl-3 md:pr-3 md:pt-1 md:pb-1 ${formType === 'card' ? 'bg-[#F8A401]' : 'bg-white'} border border-2 border-[#FF8A1F] rounded-t-xl`}
                  onClick={() => setFormType('card')}
                >
                  Forex Card
                </button>
              </div>

              <form onSubmit={handleSubmit} className='border border-[#FF8A1F] border-1 rounded-b-lg rounded-r-lg p-2 bg-white'>
                <div className="mb-2 md:mb-4 grid grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-1 text-sm md:text-lg">Store Select</label>
                    <select
                      name="store"
                      value={formData.store}
                      onChange={handleInputChange}
                      className="w-3/4 p-1 border rounded bg-gray-100 text-sm md:text-lg"
                    >
                      <option value="Somajiguda">Somajiguda</option>
                      <option value="Gachibowli">Gachibowli</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm md:text-lg">Currency</label>
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleInputChange}
                      className="w-3/4 p-1 border rounded bg-gray-100 text-sm md:text-lg"
                    >
                      <option value="US Dollar (USD) - $">US Dollar (USD) - $</option>
                      <option value="Euro (EUR) - €">Euro (EUR) - €</option>
                      <option value="Swiss frank (CHF) - CHF">Swiss frank (CHF) - CHF</option>
                      <option value="British pound (GBP) - £">British pound (GBP) - £</option>
                      <option value="Australian dollar (AUD) - A$">Australian dollar (AUD) - A$</option>
                      <option value="Canadian dollar (CAD) - C$">Canadian dollar (CAD) - C$</option>
                      <option value="Singapore dollar (SGD) - S$">Singapore dollar (SGD) - S$</option>
                      <option value="Malaysian ringgit (MYR) - RM">Malaysian ringgit (MYR) - RM</option>
                      <option value="UAE Dirham (AED) - د.إ">UAE Dirham (AED) - د.إ</option>
                      <option value="Thai Baht (THB) - ฿ ">Thai Baht (THB) - ฿ </option>
                      <option value="Japanese yen (JPY) - ¥ ">Japanese yen (JPY) - ¥ </option>
                      <option value="Chinese yuan (CNY) - ¥ (or 元)">Chinese yuan (CNY) - ¥ (or 元)</option>
                      <option value="Indonesian rupiah (IDR) - Rp ">Indonesian rupiah (IDR) - Rp </option>
                      <option value="Thai Baht (THB) - ฿ ">Thai Baht (THB) - ฿ </option>
                      <option value="Vietnamese Dong (VND) - ₫">Thai Baht (THB) - ฿ </option>
                      <option value="New Zealand dollar (NZD) - NZ$">New Zealand dollar (NZD) - NZ$</option>
                      <option value="Hong Kong dollar (HKD) - HK$">Thai Baht (THB) - ฿ </option>
                      <option value="Saudi riyal (SAR) - ر.س">Saudi riyal (SAR) - ر.س</option>
                      <option value="Turkish lira (TRY) - ₺ ">Turkish lira (TRY) - ₺ </option>




                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>
                <div className="md-1 md:mb-2 grid grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-1 text-sm md:text-lg">Forex Amount / Volume</label>
                    <input
                      type="text"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      className="w-3/4 p-1 border rounded bg-gray-100 text-sm md:text-lg"
                    />
                  </div>
                  <div className="p-1 bg-yellow-100 border rounded bg-gray-100 font-semibold text-xxs md:text-xs w-3/4">
                    <p className="text-yellow-700">Alert</p>
                    <span>Our HFL agent will reach out to you once you request. Fill the contact details and submit.</span>
                  </div>
                </div>
                <div className="md:mb-4 flex justify-between items-center">
                  <hr className="border-gray-400 flex-grow mr-2 bigger-dots" />
                  <span className="text-gray-700 font-semibold text-sm md:text-lg">Contact Details</span>
                  <hr className="border-gray-400 flex-grow ml-2 bigger-dots" />
                </div>
                <div className="mb-4 grid grid-cols-3 gap-6">
                  <div>
                    <label className="block mb-1 text-sm md:text-lg">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-1 border rounded bg-gray-100 text-sm md:text-lg"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm md:text-lg">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-1 border rounded bg-gray-100 text-sm md:text-lg"
                    />
                  </div>
                  <div className="mt-7">
                      <button type="submit" className="custom-get-quote-button w-full">
                          Get Quote
                      </button>
                  </div>

                </div>
                <div className="mb-2 mx-auto flex items-center justify-center">
                  <input
                    type="checkbox"
                    name="privacyPolicy"
                    id="privacyPolicy"
                    checked={isPrivacyPolicyChecked}
                    onChange={handleCheckboxChange}
                    className="mr-2 bg-gray-100"
                  />
                  <label htmlFor="privacyPolicy" className='text-sm md:text-lg'>
                    I accept the <a href="#" className="text-blue-500 underline">Privacy Policy</a>
                  </label>
                </div>
              </form>
              <ToastContainer/>
            </div>
          </div>
        </div>
        <div className='pl-3 pr-3 md:pl-12 md:pr-12'>
          <OurServiceHomePage/>
          <div className='mt-3 md:mt-8 mb-8 md:mb-20'>
            <RbiComponent/>
            <StatsDisplay/>
          </div>
          <div className='mb-6 md:mb-16'>
            <PromoBanner/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default GetAnyMoney;
