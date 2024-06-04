import React, { useState, useRef, useEffect } from 'react';
import { FaCheckCircle, FaCamera } from 'react-icons/fa';
import Webcam from 'react-webcam';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useNavigate } from 'react-router-dom';
import centerImage from '../../assets/HFLlogo.jpg';

const steps = ['PAN', 'Passport', 'Aadhar', 'Driving License', 'Ticket'];
const currencies = ['USD', 'EUR', 'GBP', 'INR'];

const pdfjsVersion = '2.16.105';

const UploadWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [files, setFiles] = useState({
    pan: null,
    passport: null,
    aadhar: null,
    drivingLicense: null,
    ticket: null
  });
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    amount: '',
    currency: currencies[0],
  });
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [showWebcam, setShowWebcam] = useState(false);
  const [requestId, setRequestId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const onFileChange = (e) => {
    const fileType = steps[currentStep].toLowerCase().replace(' ', '');
    setFiles({ ...files, [fileType]: e.target.files[0] });
    setUploadSuccess(false);
    setUploadError(null);
  };

  const capture = () => {
    const fileType = steps[currentStep].toLowerCase().replace(' ', '');
    const imageSrc = webcamRef.current.getScreenshot();
    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], `${fileType}.jpg`, { type: 'image/jpeg' });
        setFiles({ ...files, [fileType]: file });
        setShowWebcam(false);
      });
  };

  const createRequest = async () => {
    try {
      const response = await axios.post(process.env.REACT_APP_SERVER_URL + '/api/requests/create', formData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        console.log('Request created successfully');
        setRequestId(response.data.requestId);
      } else {
        console.error('Error creating request:', response.data.message);
      }
    } catch (error) {
      console.error('Error creating request:', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!requestId) {
      toast.error("Please create a request first.");
      setIsLoading(false);
      return;
    }

    try {
      for (const [key, value] of Object.entries(files)) {
        if (value) {
          const formData = new FormData();
          console.log('Uploading:', value);
          formData.append('file', value);
          console.log('Uploading:', key);
          formData.append('documentType', key);

          const response = await axios.post(
            process.env.REACT_APP_SERVER_URL + `/api/requests/${requestId}/upload`,
            formData,
            {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data'
              }
            }
          );

          if (response.status === 200) {
            toast.success(`Uploaded ${key} Successfully`);
            setUploadSuccess(true);
            setUploadError(null);
            setIsLoading(false);
            setShowModal(true);
          } else {
            const data = await response.json();
            toast.error(`Error Uploading ${key}`);
            setUploadError(data.message);
          }
        }
      }
      setTimeout(() => {
        navigate('/');
      }, 5000);
    } catch (error) {
      console.error("Upload error", error);
      toast.error("Error uploading files, try again later");
      setUploadError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
        navigate('/');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showModal, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 relative">
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="loader animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-md text-center">
            <p className="text-lg font-bold mb-4">Thank you for uploading the documents. You will now be redirected to the Hyderabad Forex Limited Official Webpage.</p>
          </div>
        </div>
      )}

      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-2xl border-2 border-dashed border-gray-400">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Request & Upload Documents
        </h2>

        <p className="mb-6 text-gray-600 font-semibold" >
        <img src={centerImage} className="upload-blurred-image" alt="Background" />
          Welcome to the official HFL Foreign Exchange Document Upload Portal. This is an essential RBI-approved step for legally processing your foreign exchange needs. We take pleasure in maintaining the highest levels of professionalism and data security. Please review our <a href="#" className="text-green-500 hover:text-green-700">User Data Protection Regulations</a> to understand our commitment to protecting your personal information.
        </p>


        {!requestId ? (
          <div className="mb-8">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full text-sm text-gray-900 py-3 px-4 rounded-lg border border-gray-300 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="block w-full text-sm text-gray-900 py-3 px-4 rounded-lg border border-gray-300 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full text-sm text-gray-900 py-3 px-4 rounded-lg border border-gray-300 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount Needed</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="block w-full text-sm text-gray-900 py-3 px-4 rounded-lg border border-gray-300 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="block w-full text-sm text-gray-900 py-3 px-4 rounded-lg border border-gray-300 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={createRequest}
            className="mt-4 w-full bg-green-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Create Request
          </button>
        </div>
        ) : (
          <>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full ${
                        index <= currentStep ? '!bg-green-700' : 'bg-gray-300'
                      } text-white mb-2`}
                    >
                      {index + 1}
                    </div>
                    <span className="text-sm text-gray-600">{step}</span>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit}> 
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload {steps[currentStep]}
                    {files[steps[currentStep].toLowerCase().replace(' ', '')] && (
                      <FaCheckCircle className="inline ml-2 text-green-500" />
                    )}
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="block w-full py-2 px-4 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer">
                      <span className="text-gray-600">Choose file</span>
                      <input type="file" className="hidden" onChange={onFileChange} />
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowWebcam(!showWebcam)}
                      className="!bg-green-700 text-white py-2 px-16 rounded-lg shadow-md hover:!bg-green-800 transition duration-300"
                    >
                      <FaCamera className="inline-block mr-2" />
                      Webcam
                    </button>
                  </div>
                  {files[steps[currentStep].toLowerCase().replace(' ', '')] && (
                    <div className="mt-4">
                      {files[steps[currentStep].toLowerCase().replace(' ', '')].type === 'application/pdf' ? (
                        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
                          <div style={{ height: '300px' }}>
                            <Viewer fileUrl={URL.createObjectURL(files[steps[currentStep].toLowerCase().replace(' ', '')])} />
                          </div>
                        </Worker>
                      ) : (
                        <img
                          src={URL.createObjectURL(files[steps[currentStep].toLowerCase().replace(' ', '')])}
                          alt={`${steps[currentStep]} preview`}
                          className="mt-4 w-full h-32 object-cover rounded-lg shadow-md"
                        />
                      )}
                    </div>
                  )}
                  {showWebcam && (
                    <div className="mt-4">
                      <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="rounded-lg shadow-md"
                      />
                      <button
                        type="button"
                        onClick={capture}
                        className="mt-4 !bg-green-700 text-white py-2 px-4 rounded-lg shadow-md hover:!bg-green-800 transition duration-300"
                      >
                        Capture
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    disabled={currentStep === 0}
                    className="!bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:!bg-orange-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Back
                  </button>
                  {currentStep < steps.length - 1 && (
                    <button
                      type="button"
                      onClick={handleNextStep} 
                      className="!bg-green-700 text-white py-2 px-4 rounded-lg shadow-md hover:!bg-green-800 transition duration-300"
                      disabled={!files[steps[currentStep].toLowerCase().replace(' ', '')]} 
                    >
                      Next
                    </button>
                  )}
                  {currentStep === steps.length - 1 && (
                    <button
                      type="submit"
                      className="!bg-green-700 text-white py-2 px-4 rounded-lg shadow-md hover:!bg-green-800 transition duration-300"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form> 
            </div>
            {uploadSuccess && (
              <div className="mt-4 text-green-600 text-center">
                Files uploaded successfully!
              </div>
            )}

            {uploadError && (
              <div className="mt-4 text-red-600 text-center">
                Error uploading files: {uploadError}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UploadWizard;