import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bgimage from '../assets/HFLlogo.jpg'

const PrivacyPolicy = () => {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className=' relative p-2'>
      <div
    className='absolute inset-0'
    style={{
      backgroundImage: `url(${bgimage})`,
      backgroundPosition: 'center',
      opacity: 0.06
    }}>
      </div>
      <div className='relative'>
      <button
      onClick={handleBackClick}
      className="px-6 py-3 bg-gradient-to-r from-[#FCC999] via-[#FBF8F1] to-[#FFB72B] text-black font-bold rounded-full shadow-lg hover:from-[#FFB72B] hover:via-[#FBF8F1] hover:to-[#FCC999] transform hover:scale-105 transition-transform duration-300"
    >
      Back
    </button>
    <div className="p-4 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
      <p className="mb-4">
        Hyderabad Forex Limited (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our web site www.hflforex.com (the “Website”). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Website.
      </p>
      <p className="mb-4">
        We reserve the right to make changes to this Privacy Policy at any time and for any reason. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Website after the date such revised Privacy Policy is posted.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Collection of Your Information</h2>
      <p className="mb-4">
        We may collect information about you in a variety of ways. The information we may collect via the Website depends on the content and materials you use, and includes:
      </p>

      <h3 className="text-xl font-semibold mb-2">Personal Data</h3>
      <p className="mb-4">
        Demographic and other personally identifiable information (such as your name, phone number and email address) that you voluntarily give to us when choosing to participate in various activities related to the Website, such as chat, posting messages in comment sections or in our forums, liking posts, sending feedback, and responding to surveys. If you choose to share data about yourself via your profile, online chat, or other interactive areas of the Website, please be advised that all data you disclose in these areas is public and your data will be accessible to anyone who accesses the Website.
      </p>

      <h3 className="text-xl font-semibold mb-2">Derivative Data</h3>
      <p className="mb-4">
        Information our servers automatically collect when you access the Website, such as your native actions that are integral to the Website, including liking, re-blogging, or replying to a post, as well as other interactions with the Website and other users via server log files.
      </p>

      <h3 className="text-xl font-semibold mb-2">Financial Data</h3>
      <p className="mb-4">
        Financial information, such as data related to your payment method that we may collect when you purchase, sale or request information about our services from the Website. [We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, and you are encouraged to review their privacy policy and contact them directly for responses to your questions.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Use of Your Information</h2>
      <p className="mb-4">
        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Website to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Fulfill and manage money exchange and other transactions related to the Website.</li>
        <li>Generate a personal profile about you to make future visits to the Website more personalized.</li>
        <li>Increase the efficiency and operation of the Website.</li>
        <li>Monitor and analyze usage and trends to improve your experience with the Website.</li>
        <li>Offer new products, services, mobile applications, and/or recommendations to you.</li>
        <li>Process payments and refunds.</li>
        <li>Request feedback and contact you about your use of the Website.</li>
        <li>Resolve disputes and troubleshoot problems.</li>
        <li>Respond to product and customer service requests.</li>
        <li>Send you a newsletter.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Disclosure Of Your Information</h2>
      <p className="mb-4">
        We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
      </p>

      <h3 className="text-xl font-semibold mb-2">By Law or to Protect Rights</h3>
      <p className="mb-4">
        If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation. This includes exchanging information with other entities for fraud protection and credit risk reduction.
      </p>

      <h3 className="text-xl font-semibold mb-2">Marketing Communications</h3>
      <p className="mb-4">
        With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
      </p>

      <h3 className="text-xl font-semibold mb-2">Tracking Technologies</h3>
      <p className="mb-4">Cookies and Web Beacons</p>
      <p className="mb-4">
        We may use cookies, web beacons, and other tracking technologies when you access the Website. Your personal information is not collected through the use of these technologies. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Website. You may not decline web beacons. However, they can be rendered ineffective by declining all cookies or by modifying your web browser’s settings to notify you each time a cookie is tendered, permitting you to accept or decline cookies on an individual basis.
      </p>

      <h3 className="text-xl font-semibold mb-2">Internet-Based Advertising</h3>
      <p className="mb-4">
        Additionally, we may use third-party software to serve ads on the Website, implement email marketing campaigns, and manage other interactive marketing initiatives. This third-party software may use cookies or similar tracking technology to help manage and optimize your online experience with us.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Security Of Your Information</h2>
      <p className="mb-4">
        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.
      </p>
    </div>
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 px-6 py-3 bg-gradient-to-r from-[#FCC999] via-[#FBF8F1] to-[#FFB72B] text-black font-bold rounded-full shadow-lg transform transition-transform duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      style={{ zIndex: 1000 }}
    >
      ↑ Top
    </button>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
