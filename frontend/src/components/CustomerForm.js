import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomNotification from './CustomNotification';

const CustomerForm = () => {
  const [formType, setFormType] = useState('buy');
  const [formData, setFormData] = useState({
    store: 'Somajiguda',
    currency: 'USD - Dollar',
    amount: '',
    phone: '',
    email: '',
  });
  const [isPrivacyPolicyChecked, setIsPrivacyPolicyChecked] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '', show: false });
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
    <div className='bg-[#FBF8F1] pl-3 pr-3 md:pl-6 md:pr-6 mx-4 rounded-xl'>
    <div className="flex flex-col justify-between mx-auto lg:flex-row md:p-4 ">
      <div className="mt-4 mb-4 lg:w-1/2 lg:mb-0">
        <h2 className="mb-1 font-semibold text-black text-kundan md:mb-6">
          Experience the Best Currency Exchange Service
        </h2>
        <ul className="pl-5 space-y-3 list-disc md:space-y-4">
          <li className="text-sm font-semibold text-[#d69009] md:mb-1 md:text-2xl">
            RBI Authorized Money changer
          </li>
          <li className="text-sm font-semibold text-[#d69009] md:mb-1 md:text-2xl">
            2 Decades of seamless service
          </li>
          <li className="text-sm font-semibold text-[#d69009] md:mb-1 md:text-2xl md:w-80">
            Expert team ensures quick, secure and hassle free forex services
          </li>
        </ul>
      </div>

      <div className="lg:w-1/2 bg-[#FDE5BF] p-2 md:p-3 rounded-lg shadow-lg">
        <div className="flex justify-between w-3/4 h-8 md:h-14">
          <button
            className={`flex-1 pl-1 pr-1 md:pl-3 md:pr-3 md:pt-1 md:pb-1 ${
              formType === 'buy' ? 'bg-[#F8A401]' : 'bg-white'
            } border-2 border-[#FF8A1F] rounded-t-xl font-medium text-xs md:text-lg`}
            onClick={() => setFormType('buy')}
          >
            Buy Forex
          </button>
          <button
            className={`flex-1 pl-1 pr-1 md:pl-3 md:pr-3 md:pt-1 md:pb-1 ${
              formType === 'sell' ? 'bg-[#F8A401]' : 'bg-white'
            } border-2 border-[#FF8A1F] rounded-t-xl font-medium text-xs md:text-lg`}
            onClick={() => setFormType('sell')}
          >
            Sell Forex
          </button>
          <button
            className={`flex-1 pl-1 pr-1 md:pl-3 md:pr-3 md:pt-1 md:pb-1 ${
              formType === 'card' ? 'bg-[#F8A401]' : 'bg-white'
            } border-2 border-[#FF8A1F] rounded-t-xl font-medium text-xs md:text-lg`}
            onClick={() => setFormType('card')}
          >
            Forex Card
          </button>
        </div>

        <form onSubmit={handleSubmit} className="relative border border-[#FF8A1F] border-1 rounded-b-lg rounded-r-lg p-2 bg-white">
          {notification.show && (
            <CustomNotification 
              message={notification.message} 
              type={notification.type} 
              onClose={() => setNotification({ ...notification, show: false })} 
            />
          )}
          <div className="grid grid-cols-2 gap-6 mb-2 md:mb-4">
            <div>
              <label className="block mb-1 text-xs md:text-sm">Store Select</label>
              <select
                name="store"
                value={formData.store}
                onChange={handleInputChange}
                className="w-3/4 p-1 text-xs bg-gray-100 border rounded md:text-sm"
              >
                <option value="Somajiguda">Somajiguda</option>
                <option value="Gachibowli">Gachibowli</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-xs md:text-sm">Currency</label>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
                className="w-3/4 p-1 text-xs bg-gray-100 border rounded md:text-sm"
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
                <option value="Vietnamese Dong (VND) - ₫">Vietnamese Dong (VND) - ₫ </option>
                <option value="New Zealand dollar (NZD) - NZ$">New Zealand dollar (NZD) - NZ$</option>
                <option value="Hong Kong dollar (HKD) - HK$">Hong Kong dollar (HKD) - HK$</option>
                <option value="Saudi riyal (SAR) - ر.س">Saudi riyal (SAR) - ر.س</option>
                <option value="Turkish lira (TRY) - ₺ ">Turkish lira (TRY) - ₺ </option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md-1 md:mb-2">
            <div>
              <label className="block mb-1 text-xs md:text-sm">Forex Amount / Volume</label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="w-3/4 p-1 text-xs bg-gray-100 border rounded md:text-sm"
              />
            </div>
            <div className="w-3/4 p-1 font-semibold bg-gray-100 bg-yellow-100 border rounded text-xxs md:text-xs">
              <p className="text-yellow-700">Alert</p>
              <span>
                Our HFL agent will reach out to you once you request. Fill the contact details and submit.
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between md:mb-4">
            <hr className="flex-grow mr-2 border-gray-400 bigger-dots" />
            <span className="text-xs font-semibold text-gray-700 md:text-sm">Contact Details</span>
            <hr className="flex-grow ml-2 border-gray-400 bigger-dots" />
          </div>
          <div className="grid grid-cols-3 gap-6 mb-4 ">
            <div className='content-end'>
              <label className="block mb-1 text-xs md:text-sm">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-1 text-xs bg-gray-100 border rounded md:text-sm"
              />
            </div>
            <div className='content-end'>
              <label className="block mb-1 text-xs md:text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-1 text-xs bg-gray-100 border rounded md:text-sm"
              />
            </div>
            <div className="content-end mt-7">
              <button type="submit" className="w-full custom-get-quote-button">
                Get Quote
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto mb-2">
            <input
              type="checkbox"
              name="privacyPolicy"
              id="privacyPolicy"
              checked={isPrivacyPolicyChecked}
              onChange={handleCheckboxChange}
              className="mr-2 bg-gray-100"
            />
            <label htmlFor="privacyPolicy" className='text-sm md:text-sm'>
              I accept the <a href="" onClick={handlePrivacyPolicyClick} className="text-blue-500 underline">Privacy Policy</a>
            </label>
          </div>
          
        </form>
      </div>
    </div>
    </div>
  );
};

export default CustomerForm;
