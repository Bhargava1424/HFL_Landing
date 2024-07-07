import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import faqbg from '../assets/faqbg.png';
import Footer from "./Footer";
import NavBar from "./NavBar";


const FAQSection = ({ title, questions }) => {
  return (
    <div className="w-full p-4 bg-[#faedce] rounded-lg shadow-lg mb-6" >
      <h2 className="mb-2 text-lg font-medium">{title}</h2>
      {questions.map((question, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 mb-1 text-sm font-medium text-left text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>{question.question}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {question.answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

const FAQs = () => {
  const faqSections = [
    {
      title: "General Rules for Travelling Abroad",
      questions: [
        {
          question: "How much foreign currency can I carry when travelling abroad?",
          answer: "Travellers can purchase foreign currency notes and coins up to USD 3,000 per trip. The remaining foreign exchange can be carried in the form of traveler's cheques, prepaid forex cards, or banker’s drafts. Specific limits apply for travel to certain countries like Iraq, Libya, Iran, and the Commonwealth of Independent States, where the limits may vary​ (RBI)​​ (NRIGuides)​."
        },
        {
          question: "Do I need to declare the foreign currency I am carrying when leaving India?",
          answer: "Yes, if the amount of foreign currency being carried exceeds USD 5,000 in currency notes or USD 10,000 in currency notes and traveler's cheques combined, it must be declared using the Currency Declaration Form (CDF) at the airport​ (NRIGuides)​​ (NRIGuides)​."
        },
        {
          question: "How much Indian currency can I carry while travelling abroad?",
          answer: "Indian residents can carry up to INR 25,000 in currency notes while travelling abroad. This limit applies to residents, NRIs, and foreign visitors, except citizens of Pakistan and Bangladesh​ (RBI)​​ (NRIGuides)​."
        },
        {
          question: "Are there any restrictions on carrying foreign coins?",
          answer: "There are no restrictions on carrying foreign coins. Travellers can bring back or take abroad any amount of foreign coins without any limit​ (RBI)​."
        },
        {
          question: "What documents are needed to purchase foreign exchange for travel?",
          answer: "To purchase foreign exchange for travel, you need to provide a valid passport, visa, confirmed air tickets, and a completed Form A2 declaring the purpose of travel. Payments for amounts above INR 50,000 must be made via a crossed cheque, debit card, credit card, or other non-cash modes​ (RBI). "
        }
      ]
    },
    {
        title: "Carrying Cash and Currency Limits",
        questions: [
          {
            question: "How much foreign currency can be brought into India without declaration?",
            answer: "Travellers can bring any amount of foreign currency into India. However, if the value of foreign currency notes exceeds USD 5,000 or the total foreign exchange exceeds USD 10,000, it must be declared to customs using the Currency Declaration Form (CDF)​ (NRIGuides)​​ (NRIGuides)​."
          },
          {
            question: "Can I carry Indian currency when returning to India?",
            answer: "Yes, Indian residents returning from abroad can bring back Indian currency up to INR 25,000. This limit does not apply to foreign nationals or travellers from Pakistan and Bangladesh​ (RBI)​​ (NRIGuides)​."
          },
          {
            question: "What is the limit for carrying foreign exchange for medical treatment abroad?",
            answer: "Foreign exchange up to USD 25,000 is available for medical treatment and accompanying attendant expenses on a self-certification basis. Higher amounts require supporting documents such as medical certificates and hospital estimates​ (NRIGuides)​."
          },
          {
            question: "How much foreign exchange can a student take for studying abroad?",
            answer: "Students can take up to USD 30,000 or the estimate provided by the educational institution per academic year, whichever is higher, supported by documentary evidence​ (NRIGuides)​."
          },
          {
            question: "Is there a time frame to surrender unspent foreign exchange upon returning to India?",
            answer: "Yes, travellers must surrender unspent foreign exchange within 180 days of return to India. However, they can retain up to USD 2,000 in foreign currency notes or traveler's cheques for future use or credit to their Resident Foreign Currency (Domestic) [RFC(D)] account​ (RBI)​."
          }
        ]
      },
      {
        title: "Customs and Duty-Free Allowances",
        questions: [
          {
            question: "How much liquor can I bring into India duty-free?",
            answer: "International passengers can bring up to 2 liters of alcoholic beverages, such as liquor, wine, or beer, without paying customs duty​ (NRIGuides)​."
          },
          {
            question: "What are the duty-free allowances for tobacco products?",
            answer: "Passengers can bring in 100 cigarettes, 25 cigars, or 125 grams of tobacco as part of their duty-free allowance. Any quantities above these limits will attract applicable customs duties​ (NRIGuides)​."
          },
          {
            question: "What is the duty-free allowance for electronics?",
            answer: "Passengers can bring electronic goods worth up to INR 50,000 duty-free, excluding items like LCD/LED TVs, which are not covered under this allowance​ (NRIGuides)​."
          },
          {
            question: "How much currency can be declared through the ATITHI mobile app?",
            answer: "Passengers can declare dutiable items, including foreign exchange exceeding USD 5,000 in currency notes or USD 10,000 in aggregate, using the ATITHI mobile app before boarding their flight to India​ (NRIGuides)​."
          },
          {
            question: "What are the green and red channels at Indian airports?",
            answer: "The green channel is for passengers with no dutiable goods, while the red channel is for those who need to declare dutiable goods. Misuse of the green channel can result in prosecution and seizure of goods​ (NRIGuides)​."
          }
        ]
      },
      {
        title: "Using Credit/Debit Cards Abroad",
        questions: [
          {
            question: "Can I use my Indian credit/debit card abroad?",
            answer: " Yes, Indian residents can use international credit and debit cards issued by banks authorized to deal in foreign exchange. These cards can be used for permissible current account transactions and within the Liberalised Remittance Scheme (LRS) limit​ (RBI)​."
          },
          {
            question: "Are there any limits on the use of international credit cards for transactions abroad?",
            answer: "The use of international credit cards is subject to the overall LRS limit of USD 250,000 per financial year for permissible transactions​ (RBI)​."
          },
          {
            question: "Can I withdraw cash abroad using my Indian debit card?",
            answer: "Yes, international debit cards issued by authorized banks can be used to withdraw cash at ATMs and make payments at merchant establishments overseas, within the LRS limits​ (RBI)​."
          },
          {
            question: "What are the charges for using Indian cards abroad?",
            answer: "Charges for using Indian credit/debit cards abroad vary by bank and may include foreign transaction fees, currency conversion fees, and ATM withdrawal fees. It's advisable to check with your bank for specific charges​ (RBI)​."
          },
          {
            question: "Can I use prepaid forex cards for transactions abroad?",
            answer: " Yes, prepaid forex cards are a convenient way to carry foreign exchange and can be used for transactions and cash withdrawals abroad. These cards can be loaded with foreign currency in India before travel​ (RBI)​."
          }
        ]
      },
    {
      title: "Returning to India with Foreign Exchange",
      questions: [
        {
          question: "How much foreign exchange can I bring back to India?",
          answer: "Travellers can bring back any amount of foreign exchange. However, amounts exceeding USD 5,000 in currency notes or USD 10,000 in total foreign exchange must be declared to customs using the Currency Declaration Form (CDF)​ (NRIGuides)​."
        },
        {
          question: "Can I keep foreign currency for future trips abroad?",
          answer: "Yes, travellers can retain up to USD 2,000 in foreign currency notes or traveler's cheques for future trips or credit to their Resident Foreign Currency (Domestic) [RFC(D)] account​ (RBI)​."
        },
        {
          question: "Do I need to declare foreign coins when returning to India?",
          answer: "No, there is no requirement to declare foreign coins. They can be brought into India without any limit​ (RBI)​."
        },
        {
          question: "Can I deposit foreign currency into my Indian bank account?",
          answer: " Yes, foreign currency can be deposited into Resident Foreign Currency (RFC) accounts or converted to INR and deposited into regular bank accounts through authorized dealer banks​ (RBI)​."
        },
        {
          question: "Is there a time limit for surrendering unspent foreign exchange?",
          answer: "Unspent foreign exchange should be surrendered within 180 days of returning to India. Retaining foreign exchange beyond this period without proper authorization may lead to penalties​ (RBI)​."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar/>
      <div className="w-full overflow-hidden bg-white shadow-md"
      style={{ backgroundImage: `url(${faqbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="md:mt-12 mt-12 p-6 bg-[#d69009] rounded-b-3xl">
          <h1 className="text-lg font-bold text-center text-white md:text-2xl">
            Frequently Asked Questions on Foreign Exchange for Indian Tourists (RBI Rules)
          </h1>
        </div>
        <div className="px-4 py-4 md:px-32">
          {faqSections.map((section, index) => (
            <FAQSection key={index} title={section.title} questions={section.questions} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FAQs;
