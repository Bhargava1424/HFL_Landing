import React, { useState } from 'react';
import faqImage from '../assets/faqImage.jpg';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline'; // Ensure you have Heroicons installed

const faqs = [
  {
    question: "How much foreign exchange can be taken for a trip abroad?",
    answer: "Foreign exchange can be taken under private visit category governed by the overall LRS limit of USD 2,50,000 per traveller in a single financial year, as per regulations. However, only USD 3000 of that amount can be carried as currency notes for a particular trip– the balance has to be in the form of prepaid forex cards."
  },
  {
    question: "What are the various documents required to purchase foreign currency?",
    answer: "Specific documents may vary by provider, but typically include valid ID, travel documents, and proof of address."
  },
  {
    question: "Can I place my order on a holiday through the WSFx Global Pay App?",
    answer: "Yes, orders can typically be placed any time via the app, including holidays."
  },
  {
    question: "What if my trip is cancelled or postponed after buying forex?",
    answer: "You may be able to return the forex or adjust your order based on the provider's terms and conditions."
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between w-full items-start p-4 md:p-6">
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <h1 className="text-xl md:text-2xl font-bold mb-3">FAQs</h1>
        {/* <h1 className="text-xl md:text-2xl font-bold mb-3">Popular FAQs</h1> */}
        {faqs.map((faq, index) => (
          <div key={index} className="mb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-sm md:text-lg p-2 border-b border-gray-300 font-semibold"
            >
              {faq.question}
              {activeIndex === index ? (
                <ChevronUpIcon className="h-4 w-4 md:h-5 md:w-5" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 md:h-5 md:w-5" />
              )}
            </button>
            <div className={`${activeIndex === index ? 'block' : 'hidden'} p-2 text-gray-600 text-xs md:text-sm`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/2 flex justify-end">
        <img src={faqImage} alt="FAQ Illustration" className="w-auto max-h-60 md:max-h-80" />
      </div>
    </div>
  );
  
}

export default FAQ;
