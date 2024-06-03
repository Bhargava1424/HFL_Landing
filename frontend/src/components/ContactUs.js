import React, { useState } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import { isMobile } from 'react-device-detect';
import backgroundImage from '../assets/ContactUs/backgroundImage.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();
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
      toast.error('Please fill in all the fields.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (errors.email || errors.phoneNumber) {
      toast.error('Please correct the errors before submitting.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    console.log('Payload:', {
      ...formData,
      name: formData.name.replace(/^\w/, (c) => c.toUpperCase()),
    });

    toast.success('Form submitted successfully! Our team will contact you soon.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined, 
      onClose: () => navigate('/')// Reset the form after toast timeout

      
    });


  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      inquiry: '',
    });
    setErrors({
      name: '',
      email: '',
      phoneNumber: '',
    });
  };

  const handleContactSomaji = () => {
    const phoneNumber = '9876543210';

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      alert(`Please call ${phoneNumber}`);
    }
  };

  const handleContactGachi = () => {
    const phoneNumber = '9876543210';

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
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
        className="pt-16 pb-16 mt-16 bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col gap-2 p-2 ml-4 mr-4 bg-white rounded-lg shadow-md max-w-7xl md:mx-auto md:p-8 md:grid md:grid-cols-5 md:gap-8">
          <div className="mb-2 md:col-span-2 md:mb-8 md:mb-0">
            <div className="mb-4">
              <h2 className="mt-2 mb-2 text-3xl font-bold md:text-6xl">
                Get in <span className="text-yellow-500">Touch</span>
              </h2>
              <p className="text-sm text-gray-600 md:text-lg">
              Have questions or need assistance? 
              <p className="text-sm text-gray-600 md:text-lg "> Our friendly team is here to help you with all your forex needs. Contact us today for personalized support!</p>
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mb-2 md:mb-8">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  className="w-full p-1 text-sm text-black bg-gray-100 border rounded md:p-3 md:text-lg"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-1 text-sm text-black bg-gray-100 border rounded md:p-3 md:text-lg"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone number *"
                  className="w-full p-1 text-sm text-black bg-gray-100 border rounded md:p-3 md:text-lg"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  maxLength="10"
                  required
                />
                {errors.phoneNumber && <p className="text-xs text-red-500">{errors.phoneNumber}</p>}
              </div>
              <div className="mb-4">
                <select
                  name="inquiry"
                  className="w-3/4 p-1 text-xs text-black bg-gray-100 border rounded md:w-full md:p-3 md:text-lg"
                  value={formData.inquiry}
                  onChange={handleChange}
                  required
                >
                  <option value="">What Are You Looking About?</option>
                  <option value="inquiry1">Currency Notes</option>
                  <option value="inquiry2">Forex Cards</option>
                  <option value="inquiry3">Outwards Remettiance</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full p-3 text-sm text-white bg-yellow-500 rounded custom-get-quote-button md:text-lg"
              >
                SEND
              </button>
            </form>
          </div>

          <div className="md:col-span-3">
            <div className="flex justify-center mt-0 mb-2 text-3xl md:mt-24 md:mb-4 md:text-4xl">Store Locations</div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <div
                  className="flex justify-center overflow-hidden rounded-lg"
                  dangerouslySetInnerHTML={{
                    __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.75140611615!2d78.45640297468381!3d17.42371380175852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974c629a05bf%3A0x1f2ad73d4257ca81!2sHyderabad%20Forex%20Limited!5e0!3m2!1sen!2sin!4v1715873066743!5m2!1sen!2sin&z=15" width="100%" height="180" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                  }}
                />
                <div className="mt-2">
                  <h3 className="flex justify-center mb-4 text-2xl font-medium">Somajiguda</h3>
                  <p className='ml-6 mr-6 font-semibold text-justify'>6-3-1090/A/1B/1, C-2, One Centre, Raj Bhavan Rd, Somajiguda, Hyderabad, Telangana 500082</p>
                </div>
                <div className="flex justify-center space-x-4">
                  <div>
                    <button onClick={handleContactSomaji} className="flex items-center space-x-2 text-sm font-semibold text-black">
                      <div role="img" aria-label="phone">📞 9876543210</div>
                    </button>
                  </div>
                  <div>
                    <button onClick={() => openGmail('hooperations@hflforex.com')} className="flex items-center space-x-2 text-sm font-semibold text-black">
                      <span role="img" aria-label="email">📧</span>
                      <span>hooperations@hflforex.com</span>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="flex justify-center overflow-hidden rounded-lg"
                  dangerouslySetInnerHTML={{
                    __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4985901306195!2d78.36422557468401!3d17.43583440140857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ec2b8933c7%3A0xfe8d87caf8af1578!2sHYDERABAD%20FOREX%20LIMITED!5e0!3m2!1sen!2sin!4v1715872909969!5m2!1sen!2sin&z=15" width="100%" height="180" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                  }}
                />
                <div className="mt-2">
                  <h3 className="flex justify-center mb-4 text-2xl font-medium">Gachibowli</h3>
                  <p className='ml-6 mr-6 font-semibold text-justify'>95H9+F9P, Gachibowli, Hyderabad, Telangana 500032</p>
                </div>
                <div className="flex justify-center mt-5 space-x-4">
                  <div>
                    <button onClick={handleContactGachi} className="flex items-center space-x-2 text-sm font-semibold text-black">
                      <div role="img" aria-label="phone">📞 9876543210</div>
                    </button>
                  </div>
                  <div>
                    <button onClick={() => openGmail('gboperations@hflforex.com')} className="flex items-center space-x-2 text-sm font-semibold text-black">
                      <span role="img" aria-label="email">📧</span>
                      <span>gboperations@hflforex.com</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default ContactUs;
