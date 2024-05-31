import React, { useState, useRef } from 'react';
import { FaCheckCircle, FaCamera } from 'react-icons/fa';
import Webcam from 'react-webcam';
import axios from 'axios';
import { toast } from 'react-toastify';

const steps = ['PAN', 'Passport', 'Aadhar', 'Driving License', 'Ticket'];
const currencies = ['USD', 'EUR', 'GBP', 'INR'];

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

  const webcamRef = useRef(null);

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

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    if (!requestId) {
      toast.error("Please create a request first.");
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
            formData, // Send the FormData object directly
            {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include JWT token
                'Content-Type': 'multipart/form-data'
              }
            }
          );
  
          if (response.status === 200) {
              toast.success(`Uploaded ${key} Successfully`);
            setUploadSuccess(true);
            setUploadError(null);
          } else {
            const data = await response.json();
              toast.error(`Error Uploading ${key}`);
            setUploadError(data.message);
          }
        }
      }
    } catch (error) {
        console.error("Upload error", error);
        toast.error("Error uploading files, try again later");
      setUploadError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-2xl border-2 border-dashed border-gray-400">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Request & Upload Documents
        </h2>

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
                  <img
                    src={URL.createObjectURL(files[steps[currentStep].toLowerCase().replace(' ', '')])}
                    alt={`${steps[currentStep]} preview`}
                    className="mt-4 w-full h-32 object-cover rounded-lg shadow-md"
                  />
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
                  onClick={() => setCurrentStep(currentStep - 1)}
                  disabled={currentStep === 0}
                  className=" bg-sky-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-sky-800 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="!bg-green-700 text-white py-2 px-4 rounded-lg shadow-md hover:!bg-green-800 transition duration-300"
                  disabled={!files[steps[currentStep].toLowerCase().replace(' ', '')]} 
                >
                  {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
                </button>
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