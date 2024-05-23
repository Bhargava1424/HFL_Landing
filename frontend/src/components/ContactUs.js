import React, { useState } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import { isMobile } from 'react-device-detect';
import backgroundImage from '../assets/ContactUs/backgroundImage.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    inquiry: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    let error = '';
    if (name === 'name') {
      const regex = /^[A-Za-z\s]*$/;  // Allow only letters and spaces
      if (regex.test(value)) {
        const capitalizedValue = value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setFormData((prevState) => ({ ...prevState, [name]: capitalizedValue }));
      }
    } else if (name === 'phoneNumber') {
      const regex = /^[0-9\b]+$/;
      if (value === '' || regex.test(value)) {
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      }
      if (value.length !== 10) {
        error = 'Phone number should be 10 digits';
      }
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Please enter a valid email address';
      }
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  
    setErrors((prevState) => ({ ...prevState, [name]: error }));
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.inquiry) {
      alert('Please fill in all the fields');
      return;
    }

    if (errors.email || errors.phoneNumber) {
      alert('Please correct the errors before submitting');
      return;
    }

    console.log('Payload:', {
      ...formData,
      name: formData.name.replace(/^\w/, (c) => c.toUpperCase()),
    });
  };

  const handleContactSomaji = () => {
    const phoneNumber = '9876543210';

    if (isMobile) {
      // Redirect to the call app with the phone number
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Show a popup with the phone number
      alert(`Please call ${phoneNumber}`);
    }
  };

  const handleContactGachi = () => {
    const phoneNumber = '9876543210';

    if (isMobile) {
      // Redirect to the call app with the phone number
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Show a popup with the phone number
      alert(`Please call ${phoneNumber}`);
    }
  };

  const openGmail = (email) => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div
        className="mt-16 pb-16 bg-cover bg-center pt-16"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="max-w-7xl md:mx-auto bg-white rounded-lg shadow-md p-2 md:p-8 flex flex-col md:grid md:grid-cols-5 gap-2 md:gap-8 mr-4 ml-4">
          <div className="md:col-span-2 mb-2 md:mb-8 md:mb-0">
            <div className="mb-4">
              <h2 className="text-3xl md:text-6xl font-bold mb-2 mt-2">
                Get in <span className="text-yellow-500">Touch</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-lg">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mb-2 md:mb-8">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  className="w-full p-1 md:p-3 border rounded bg-gray-100 text-black text-sm md:text-lg"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-1 md:p-3 border rounded bg-gray-100 text-black text-sm md:text-lg"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone number *"
                  className="w-full p-1 md:p-3 border rounded bg-gray-100 text-black text-sm md:text-lg"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  maxLength="10"
                  required
                />
                {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
              </div>
              <div className="mb-4">
                <select
                  name="inquiry"
                  className="w-3/4 md:w-full p-1 md:p-3 border rounded bg-gray-100 text-black text-xs md:text-lg"
                  value={formData.inquiry}
                  onChange={handleChange}
                  required
                >
                  <option value="">What Are You Looking About?</option>
                  <option value="inquiry1">Inquiry 1</option>
                  <option value="inquiry2">Inquiry 2</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white p-3 rounded custom-get-quote-button text-sm md:text-lg"
              >
                SEND
              </button>
            </form>
          </div>

          <div className="md:col-span-3">
            <div className="mt-0 md:mt-24 mb-2 md:mb-4 flex justify-center text-3xl md:text-4xl">Store Locations</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div
                  className="rounded-lg overflow-hidden flex justify-center"
                  dangerouslySetInnerHTML={{
                    __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.75140611615!2d78.45640297468381!3d17.42371380175852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974c629a05bf%3A0x1f2ad73d4257ca81!2sHyderabad%20Forex%20Limited!5e0!3m2!1sen!2sin!4v1715873066743!5m2!1sen!2sin&z=15" width="100%" height="180" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                  }}
                />
                <div className="mt-2">
                  <h3 className="font-bold flex justify-center">Somajiguda</h3>
                  <p className='text-justify mr-6 ml-6 font-semibold'>6-3-1090/A/1B/1, C-2, One Centre, Raj Bhavan Rd, Somajiguda, Hyderabad, Telangana 500082</p>
                </div>
                <div className="flex justify-center space-x-4">
                  <div>
                    <button onClick={handleContactSomaji} className="flex items-center space-x-2 text-black font-semibold text-sm">
                      <div role="img" aria-label="phone">📞 9876543210</div>
                    </button>
                  </div>
                  <div>
                    <button onClick={() => openGmail('hooperations@hflforex.com')} className="flex items-center space-x-2 text-black font-semibold text-sm">
                      <span role="img" aria-label="email">📧</span>
                      <span>hooperations@hflforex.com</span>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="rounded-lg overflow-hidden flex justify-center"
                  dangerouslySetInnerHTML={{
                    __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4985901306195!2d78.36422557468401!3d17.43583440140857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ec2b8933c7%3A0xfe8d87caf8af1578!2sHYDERABAD%20FOREX%20LIMITED!5e0!3m2!1sen!2sin!4v1715872909969!5m2!1sen!2sin&z=15" width="100%" height="180" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                  }}
                />
                <div className="mt-2">
                  <h3 className="font-bold flex justify-center">Gachibowli</h3>
                  <p className='text-justify mr-6 ml-6 font-semibold'>95H9+F9P, Gachibowli, Hyderabad, Telangana 500032</p>
                </div>
                <div className="flex justify-center space-x-4 mt-5">
                  <div>
                    <button onClick={handleContactGachi} className="flex items-center space-x-2 text-black font-semibold text-sm">
                      <div role="img" aria-label="phone">📞 9876543210</div>
                    </button>
                  </div>
                  <div>
                    <button onClick={() => openGmail('gnoperations@hflforex.com')} className="flex items-center space-x-2 text-black text-sm font-semibold">
                      <span role="img" aria-label="email">📧</span>
                      <span>gnoperations@hflforex.com</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
