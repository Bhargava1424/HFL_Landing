import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';
import Steps from '../assets/GetAnyMoney/Roadmap.svg'
import OurServiceHomePage from './OurServiceHomePage';
import RbiComponent from './RbiComponent';
import StatsDisplay from './StatsDisplay';
import PromoBanner from './PromoBanner';
import Footer from './Footer';
import backgroundImage from '../assets/GetAnyMoney/BGVEctor.svg'
import CustomNotification from './CustomNotification';
import PrivacyPolicy from './PrivacyPolicy';

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
  const navigate = useNavigate();
  const handlePrivacyPolicyClick = (e) => {
    e.preventDefault();
    navigate('/privacypolicy');
  };
  
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
  const [notification, setNotification] = useState({ message: '', type: '', show: false });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount) {
      setNotification({ message: 'Please enter a Forex amount.', type: 'error', show: true });
      setFormData((prevFormData) => ({
        ...prevFormData,
        amount: '',
      }));
      return;
    }


    const phonePattern = /^\d{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phonePattern.test(formData.phone)) {
      setNotification({ message: 'Please enter a valid 10-digit phone number.', type: 'error', show: true });
      setFormData((prevFormData) => ({
        ...prevFormData,
        phone: '',
      }));
      return;
    }

    if (!emailPattern.test(formData.email)) {
      setNotification({ message: 'Please enter a valid email address.', type: 'error', show: true });
      setFormData((prevFormData) => ({
        ...prevFormData,
        email: '',
      }));
      return;
    }
    if (!isPrivacyPolicyChecked) {
      setNotification({ message: 'Please agree to the terms and conditions.', type: 'error', show: true });
      return;
    }

    const payload = {
      ...formData,
      formType,
    };
    console.log('Form Payload:', payload);

    setNotification({ message: 'Thank you for choosing HFL. We will get back to you shortly.', type: 'success', show: true });
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
        className=" pb-6 md:pb-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='mx-auto bg-cover mb-1 md:mb-4 text-2xl md:text-4xl pt-4 md:pt-12 text-center w-full font-semibold hidden md:block'>
          Get <span className='bg-white p-2 text-[#D69009]'>Any Money</span> in 5 Simple Steps
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-2 md:mt-8 mb-4 md:mb-20'>
          <div className='flex justify-center hidden md:inline'>
            <img src={Steps} alt='5 Steps' className='max-w-full h-72 md:h-auto' />
          </div>


          <div className='my-auto'>
            <div className="w-full md:w-4/5 bg-[#FDE5BF] p-2 md:p-3 rounded-lg shadow-lg md:mx-auto">
              <div className="flex justify-between w-3/4 h-8 md:h-14">
                <button
                  className={`flex-1 pl-1 pr-1 md:pl-3 md:pr-3 md:pt-1 md:pb-1 ${formType === 'buy' ? 'bg-[#F8A401]' : 'bg-white'} border border-2 border-[#FF8A1F] rounded-t-xl text-xs md:text-lg`}
                  onClick={() => setFormType('buy')}
                >
                  Buy Forex
                </button>
                <button
                  className={`flex-1 pl-1 pr-1 md:pl-3 md:pr-3 md:pt-1 md:pb-1 ${formType === 'sell' ? 'bg-[#F8A401]' : 'bg-white'} border border-2 border-[#FF8A1F] rounded-t-xl text-xs md:text-lg`}
                  onClick={() => setFormType('sell')}
                >
                  Sell Forex
                </button>
                <button
                  className={`flex-1 pl-1 pr-1 md:pl-3 md:pr-3 md:pt-1 md:pb-1 ${formType === 'card' ? 'bg-[#F8A401]' : 'bg-white'} border border-2 border-[#FF8A1F] rounded-t-xl text-xs md:text-lg`}
                  onClick={() => setFormType('card')}
                >
                  Forex Card
                </button>
              </div>

              <form onSubmit={handleSubmit} className='relative border border-[#FF8A1F] border-1 rounded-b-lg rounded-r-lg p-2 bg-white'>
              {notification.show && (
                  <CustomNotification 
                    message={notification.message} 
                    type={notification.type} 
                    onClose={() => setNotification({ ...notification, show: false })} 
                  />
                )}
                <div className="mb-2 md:mb-4 grid grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-1 text-xs md:text-lg">Store Select</label>
                    <select
                      name="store"
                      value={formData.store}
                      onChange={handleInputChange}
                      className="w-3/4 p-1 border rounded bg-gray-100 text-xs md:text-lg"
                    >
                      <option value="Somajiguda">Somajiguda</option>
                      <option value="Gachibowli">Gachibowli</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 text-xs md:text-lg">Currency</label>
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleInputChange}
                      className="w-3/4 p-1 border rounded bg-gray-100 text-xs md:text-lg"
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
                    <label className="block mb-1 text-xs md:text-lg">Forex Amount / Volume</label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      className="w-3/4 p-1 border rounded bg-gray-100 text-xs md:text-lg"
                      min="0"
                    />
                  </div>
                  <div className="p-1 bg-yellow-100 border rounded bg-gray-100 font-semibold text-xxs md:text-xs w-3/4">
                    <p className="text-yellow-700">Alert</p>
                    <span>Our HFL agent will reach out to you once you request. Fill the contact details and submit.</span>
                  </div>
                </div>
                <div className="md:mb-4 flex justify-between items-center">
                  <hr className="border-gray-400 flex-grow mr-2 bigger-dots" />
                  <span className="text-gray-700 font-semibold text-xs md:text-lg">Contact Details</span>
                  <hr className="border-gray-400 flex-grow ml-2 bigger-dots" />
                </div>
                <div className="mb-4 grid grid-cols-3 gap-6">
                  <div>
                    <label className="block mb-1 text-xs md:text-lg">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-1 border rounded bg-gray-100 text-xs md:text-lg"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-xs md:text-lg">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-1 border rounded bg-gray-100 text-xs md:text-lg"
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
                  <label htmlFor="privacyPolicy" className='text-xs md:text-lg'>
                  I accept the <a href="" onClick={handlePrivacyPolicyClick} className="text-blue-500 underline">Privacy Policy</a>
                  </label>
                </div>
              </form>
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
