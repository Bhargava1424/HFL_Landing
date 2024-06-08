import React, { useState } from 'react';
import faqImage from '../assets/faqImage.jpg';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline'; // Ensure you have Heroicons installed

const faqs = [
  {
    question: "What services does Hyderabad Forex Ltd provide?",
    answer: "Licensed by the Reserve Bank of India, Hyderabad Forex Limited deals in buying and selling of Forex, including currency and travel cards."
  },
  {
    question: "How much foreign currency can be carried in cash for travel abroad?",
    answer: "Travellers going to all countries other than (a) and (b) below are allowed to purchase foreign currency notes/coins only up to USD 3000 per visit. Balance amount can be carried in the form of store value cards, travellers cheque, or banker’s draft. Exceptions to this are (a) travellers proceeding to Iraq and Libya who can draw foreign exchange in the form of foreign currency notes and coins not exceeding USD 5000 or its equivalent per visit; (b) travellers proceeding to the Islamic Republic of Iran, Russian Federation and other Republics of Commonwealth of Independent States who can draw entire foreign exchange (up to USD 250,000) in the form of foreign currency notes or coins. For travellers proceeding for Haj/Umrah pilgrimage, full amount of entitlement (USD 250,000) in cash or up to the cash limit as specified by the Haj Committee of India, may be released by the ADs and FFMCs."
  },
  {
    question: "How much foreign exchange can be brought in while visiting India?",
    answer: "A person coming into India from abroad can bring with him foreign exchange without any limit. However, if the aggregate value of the foreign exchange in the form of currency notes, bank notes, or travellers cheques brought in exceeds USD 10,000 or its equivalent and/or the value of foreign currency alone exceeds USD 5,000 or its equivalent, it should be declared to the Customs Authorities at the Airport in the Currency Declaration Form (CDF), on arrival in India."
  },
  {
    question: "Can one pay by cash full rupee equivalent of foreign exchange being purchased for travel abroad?",
    answer: "Foreign exchange for travel abroad can be purchased from an authorized person against rupee payment in cash below Rs.50,000/-. However, if the sale of foreign exchange is for the amount equivalent to Rs 50,000/- and above, the entire payment should be made by way of a crossed cheque, banker’s cheque, pay order, demand draft, debit card, credit card, or prepaid card only."
  },
  {
    question: "Who can pay for forex?",
    answer: "As per the RBI and income tax acts, payment for forex can be done by the traveler himself or by the traveler’s immediate family. Immediate family includes parents, children, spouse, siblings, and in-laws. KYC of the sponsor is to be provided for all sponsored trips."
  },
  {
    question: "Is there any time-frame for a traveller who has returned to India to surrender foreign exchange?",
    answer: "On return from a foreign trip, travellers are required to surrender unspent foreign exchange held in the form of currency notes and travellers cheques within 180 days of return. However, they are free to retain foreign exchange up to USD 2,000, in the form of foreign currency notes or TCs for future use or credit to their Resident Foreign Currency (Domestic) [RFC (Domestic)] Accounts."
  },
  {
    question: "What are the documents required for purchase of forex?",
    answer: "In order to purchase foreign currency, you have to submit KYC documents. As per the guidelines of the RBI, the following documents need to be submitted for purchase of forex as basic KYC requirements: Valid Passport and Visa, onward and return ticket, valid PAN and Aadhaar."
  },
  {
    question: "When can I buy forex?",
    answer: "Resident Indians travelling abroad can buy forex up to 60 days before the travel date, as indicated on your air ticket."
  }
];



function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between w-full items-start p-4 md:p-6">
      <div className="w-full md:w-1/2">
        <h1 className="text-xl md:text-2xl font-bold mb-3">FAQs</h1>
        {/* <h1 className="text-xl md:text-2xl font-bold mb-3">Popular FAQs</h1> */}
        {faqs.map((faq, index) => (
          <div key={index} className="md:mb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-sm md:text-lg p-1 md:p-2 border-b border-gray-300 font-semibold"
            >
              {faq.question}
              {activeIndex === index ? (
                <ChevronUpIcon className="h-4 w-4 md:h-5 md:w-5" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 md:h-5 md:w-5" />
              )}
            </button>
            <div className={`${activeIndex === index ? 'block' : 'hidden'} p-2 text-gray-600 text-xs md:text-sm text-justify`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={faqImage} alt="FAQ Illustration" className="w-auto max-h-56 md:max-h-[600px]" />
      </div>
    </div>
  );
  
}

export default FAQ;
