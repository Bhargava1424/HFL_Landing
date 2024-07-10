import React, { useState, useRef, useEffect } from 'react';
import { FaCheckCircle, FaCamera } from 'react-icons/fa';
import Webcam from 'react-webcam';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useNavigate } from 'react-router-dom';
import centerImage from '../../assets/currency exchnage near me.jpg';

const steps = ['PAN', 'Passport', 'Aadhar', 'Driving License', 'Ticket'];
const currencies = ['USD', 'EUR', 'GBP', 'INR'];

const pdfjsVersion = '2.16.105';

const UploadWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [files, setFiles] = useState({
    pan: [],
    passport: [],
    aadhar: [],
    drivingLicense: [],
    ticket: []
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
    setFiles({ ...files, [fileType]: [e.target.files[0]] });
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
        setFiles((prevFiles) => {
          const updatedFiles = { ...prevFiles };
          updatedFiles[fileType] = [...(updatedFiles[fileType] || []), file];
          setShowWebcam(updatedFiles[fileType].length < 2);
          return updatedFiles;
        });
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
    const fileType = steps[currentStep].toLowerCase().replace(' ', '');
    if (showWebcam && (files[fileType]?.length || 0) < 2) {
      toast.error("Please capture two images for this document.");
      return;
    }
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
        if (value.length > 0) {
          const formData = new FormData();
          value.forEach((file, index) => {
            formData.append(`file${index + 1}`, file);
          });
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
          } else {
            toast.error(`Error Uploading ${key}`);
            setUploadError(response.data.message);
          }
        }
      }
      setIsLoading(false);
      setShowModal(true);
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
    <div className="relative flex items-center justify-center min-h-screen p-6 bg-gray-100">
      {isLoading && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="w-32 h-32 border-t-2 border-b-2 border-gray-900 rounded-full loader animate-spin"></div>
        </div>
      )}

      {showModal && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="max-w-md p-8 text-center bg-white shadow-xl rounded-xl">
            <p className="mb-4 text-lg font-bold">Thank you for uploading the documents. You will now be redirected to the Hyderabad Forex Limited Official Webpage.</p>
          </div>
        </div>
      )}

      <div className="w-full max-w-2xl p-8 bg-white border-2 border-gray-400 border-dashed shadow-xl rounded-xl">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Create Request & Upload Documents
        </h2>

        <p className="mb-6 font-semibold text-gray-600" >
        <img src={centerImage} className="upload-blurred-image" alt="Background" />
          Welcome to the official HFL Foreign Exchange Document Upload Portal. This is an essential RBI-approved step for legally processing your foreign exchange needs. We take pleasure in maintaining the highest levels of professionalism and data security. Please review our <a href="#" className="text-green-500 hover:text-green-700">User Data Protection Regulations</a> to understand our commitment to protecting your personal information.
        </p>


        {!requestId ? (
          <div className="mb-8">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-4 py-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="block w-full px-4 py-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Amount Needed</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="block w-full px-4 py-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Currency</label>
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="block w-full px-4 py-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
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
            className="w-full px-4 py-3 mt-4 text-white transition duration-300 bg-green-500 rounded-lg shadow-md hover:bg-green-600"
          >
            Create Request
          </button>
        </div>
        ) : (
          <>
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
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
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Upload {steps[currentStep]}
                    {files[steps[currentStep].toLowerCase().replace(' ', '')] && (
                      <FaCheckCircle className="inline ml-2 text-green-500" />
                    )}
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="block w-full px-4 py-2 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer">
                      <span className="text-sm text-gray-600 md:text-lg">Choose file</span>
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
                  {files[steps[currentStep].toLowerCase().replace(' ', '')]?.length > 0 && files[steps[currentStep].toLowerCase().replace(' ', '')].map((file, index) => (
                    file && (
                      <div key={index} className="mt-4">
                        {file.type === 'application/pdf' ? (
                          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
                            <div style={{ height: '300px' }}>
                              <Viewer fileUrl={URL.createObjectURL(file)} />
                            </div>
                          </Worker>
                        ) : (
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`${steps[currentStep]} preview`}
                            className="object-cover w-full h-32 mt-4 rounded-lg shadow-md"
                          />
                        )}
                      </div>
                    )
                  ))}
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
                      disabled={
                        (currentStep === 0 && files[steps[currentStep].toLowerCase().replace(' ', '')]?.length === 0) || // PAN requires 1 file
                        (currentStep === 1 && files[steps[currentStep].toLowerCase().replace(' ', '')]?.length < 1) || // Passport requires 2 files
                        (currentStep === 2 && files[steps[currentStep].toLowerCase().replace(' ', '')]?.length < 1) || // Aadhar requires 2 files
                        (currentStep === 3 && files[steps[currentStep].toLowerCase().replace(' ', '')]?.length < 1) || // Driving License requires 2 files
                        (currentStep === 4 && files[steps[currentStep].toLowerCase().replace(' ', '')]?.length <1)  // Ticket requires 1 file
                      }
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
              <div className="mt-4 text-center text-green-600">
                Files uploaded successfully!
              </div>
            )}

            {uploadError && (
              <div className="mt-4 text-center text-red-600">
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