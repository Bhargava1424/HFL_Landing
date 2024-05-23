import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import faqbg from '../assets/faqbg.png';
import Footer from "./Footer";
import NavBar from "./NavBar";


const FAQSection = ({ title, questions }) => {
  return (
    <div className="w-full p-4 bg-[#faedce] rounded-lg shadow-lg mb-6" >
      <h2 className="text-lg font-medium mb-2">{title}</h2>
      {questions.map((question, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mb-1">
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
          question: "Question 1?",
          answer: "Answer to question 1."
        },
        {
          question: "Question 2?",
          answer: "Answer to question 2."
        },
        {
          question: "Question 3?",
          answer: "Answer to question 3."
        },
        {
          question: "Question 4?",
          answer: "Answer to question 4."
        },
        {
          question: "Question 5?",
          answer: "Answer to question 5."
        }
      ]
    },
    {
        title: "General Rules for Travelling Abroad",
        questions: [
          {
            question: "Question 1?",
            answer: "Answer to question 1."
          },
          {
            question: "Question 2?",
            answer: "Answer to question 2."
          },
          {
            question: "Question 3?",
            answer: "Answer to question 3."
          },
          {
            question: "Question 4?",
            answer: "Answer to question 4."
          },
          {
            question: "Question 5?",
            answer: "Answer to question 5."
          }
        ]
      },
      {
        title: "General Rules for Travelling Abroad",
        questions: [
          {
            question: "Question 1?",
            answer: "Answer to question 1."
          },
          {
            question: "Question 2?",
            answer: "Answer to question 2."
          },
          {
            question: "Question 3?",
            answer: "Answer to question 3."
          },
          {
            question: "Question 4?",
            answer: "Answer to question 4."
          },
          {
            question: "Question 5?",
            answer: "Answer to question 5."
          }
        ]
      },
      {
        title: "General Rules for Travelling Abroad",
        questions: [
          {
            question: "Question 1?",
            answer: "Answer to question 1."
          },
          {
            question: "Question 2?",
            answer: "Answer to question 2."
          },
          {
            question: "Question 3?",
            answer: "Answer to question 3."
          },
          {
            question: "Question 4?",
            answer: "Answer to question 4."
          },
          {
            question: "Question 5?",
            answer: "Answer to question 5."
          }
        ]
      },
    {
      title: "General Rules for Travelling Abroad",
      questions: [
        {
          question: "Question 1?",
          answer: "Answer to question 1."
        },
        {
          question: "Question 2?",
          answer: "Answer to question 2."
        },
        {
          question: "Question 3?",
          answer: "Answer to question 3."
        },
        {
          question: "Question 4?",
          answer: "Answer to question 4."
        },
        {
          question: "Question 5?",
          answer: "Answer to question 5."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar/>
      <div className="w-full bg-white shadow-md overflow-hidden"
      style={{ backgroundImage: `url(${faqbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="md:mt-12 mt-12 p-6 bg-[#d69009] rounded-b-3xl">
          <h1 className="text-lg md:text-2xl font-bold text-center text-white">
            Frequently Asked Questions on Foreign Exchange for Indian Tourists (RBI Rules)
          </h1>
        </div>
        <div className="px-4 md:px-32 py-4">
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
