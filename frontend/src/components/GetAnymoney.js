import React from 'react';

const CurrencyExchangeForm = () => {
  const currencies = [
    'USD - United States Dollar',
    'EUR - Euro',
    'GBP - British Pound',
    'JPY - Japanese Yen',
    'CAD - Canadian Dollar',
    'AUD - Australian Dollar',
    'CHF - Swiss Franc',
    'CNY - Chinese Yuan',
    'HKD - Hong Kong Dollar',
    'SGD - Singapore Dollar',
    'SEK - Swedish Krona',
    'NOK - Norwegian Krone',
    'MXN - Mexican Peso',
    'NZD - New Zealand Dollar',
    'KRW - South Korean Won',
    'BRL - Brazilian Real',
  ];
  

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Currency Exchange Request Form</h1>
      <p className="mb-6">Please fill out the form below to request currency exchange at one of our nearest stores.</p>

      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6">
        <p className="font-bold">Quick Response:</p>
        <p>After submitting the form, our team will reach out to you with a phone call within 15 to 20 minutes to assist you further.</p>
      </div>

      <form > 
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block mb-2 font-bold">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Enter your email address" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 font-bold">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Currency Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="currency" className="block mb-2 font-bold">Currency to Exchange</label>
              <select id="currency" name="currency" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select currency</option>
                {currencies.map((currency, index) => (
                  <option key={index} value={currency}>{currency}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="amount" className="block mb-2 font-bold">Amount to Exchange</label>
              <input type="number" id="amount" name="amount" placeholder="Enter the amount you wish to exchange" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Store Selection</h2>
          <div>
            <label htmlFor="store" className="block mb-2 font-bold">Nearest Store</label>
            <div className="space-y-2">
              <div>
                <input type="radio" id="store1" name="store" value="Store 1" className="mr-2" />
                <label htmlFor="store1">Store 1: [Address of Store 1]</label>
              </div>
              <div>
                <input type="radio" id="store2" name="store" value="Store 2" className="mr-2" />
                <label htmlFor="store2">Store 2: [Address of Store 2]</label>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="comments" className="block mb-2 font-bold">Additional Comments</label>
          <textarea id="comments" name="comments" placeholder="Enter any additional comments or requests" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>

        {/* Add CAPTCHA or reCAPTCHA integration for bot prevention */}

        <div className="text-center">
          <button type="submit" className="px-6 py-3 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit Request</button>
        </div>
      </form>
    </div>
  );
};

export default CurrencyExchangeForm;