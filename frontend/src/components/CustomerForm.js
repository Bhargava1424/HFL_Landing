import React, { useState } from 'react';

const CustomerForm = () => {
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
      alert('Please agree to the terms and conditions.');
      return;
    }
    const payload = {
      ...formData,
      formType,
    };
    console.log('Form Payload:', payload);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between bg-white rounded shadow-lg p-2 md:p-4 mx-auto">
      <div className="lg:w-2/5 mb-4 lg:mb-0">
      <h2 className="text-kundan font-semibold mb-1 md:mb-4 text-black">Experience the Best Currency Exchange Service with HFL</h2>
        <ul className="list-disc pl-5">
          <li className="md:mb-1 text-sm md:text-lg text-orange-500 font-semibold">RBI Authorized Money changer</li>
          <li className="md:mb-1 text-sm md:text-lg text-orange-500 font-semibold">2 Decades of seamless service</li>
          <li className="md:mb-1 text-sm md:text-lg text-orange-500 font-semibold">Expert team ensures quick, secure and hassle free services</li>
        </ul>
      </div>

      <div className="lg:w-2/5 bg-[#FDE5BF] p-2 md:p-3 rounded-lg shadow-lg">
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
                <option value="USD - Dollar">USD - Dollar</option>
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
      </div>
    </div>
  );
};

export default CustomerForm;
