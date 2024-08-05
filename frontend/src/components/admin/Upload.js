import React, { useState, useRef, useEffect } from 'react';
import { FaCheckCircle, FaCamera, FaUndo } from 'react-icons/fa';
import Webcam from 'react-webcam';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import imageCompression from 'browser-image-compression';
import centerImage from '../../assets/currency exchnage near me.jpg';

const steps = ['PAN', 'Passport', 'Aadhar', 'Visa', 'Ticket', 'Others'];
const currencies = ['USD', 'EUR', 'GBP', 'INR'];
const pdfjsVersion = '2.16.105';

const UploadWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [files, setFiles] = useState({
    pan: [],
    passport: [],
    aadhar: [],
    visa: [],
    ticket: [],
    others: []
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
  const [passportUploadType, setPassportUploadType] = useState('separate');
  const [isUploading, setIsUploading] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const getGuidanceBoxSize = () => {
    switch (steps[currentStep]) {
      case 'PAN':
        return { width: '300px', height: '190px' };
      case 'Passport':
        return { width: '350px', height: '250px' };
      case 'Aadhar':
        return { width: '320px', height: '200px' };
      case 'Visa':
        return { width: '350px', height: '220px' };
      case 'Ticket':
        return { width: '350px', height: '250px' };
      default:
        return { width: '300px', height: '200px' };
    }
  };

  const onFileChange = async (e) => {
    const fileType = steps[currentStep].toLowerCase().replace(' ', '');
    const newFiles = Array.from(e.target.files);
    const compressedFiles = await Promise.all(newFiles.map(async (file) => {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size exceeds 5MB. Please upload a smaller file.");
        return null;
      }
      if (file.type.startsWith('image/')) {
        const options = { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true };
        try {
          return await imageCompression(file, options);
        } catch (error) {
          console.error("Error compressing image:", error);
          return file;
        }
      }
      return file;
    }));
  
    const validFiles = compressedFiles.filter(file => file !== null);
  
    if (fileType === 'passport' || fileType === 'others') {
      setFiles(prevFiles => ({
        ...prevFiles,
        [fileType]: [...prevFiles[fileType], ...validFiles.map(file => ({ ...file, uploaded: false }))]
      }));
    } else {
      setFiles(prevFiles => ({
        ...prevFiles,
        [fileType]: validFiles.map(file => ({ ...file, uploaded: false }))
      }));
    }
  
    setUploadSuccess(false);
    setUploadError(null);
    toast.info("Please ensure the uploaded document is clear and legible. If not, you may need to repeat the process.");
  };

  const removeFile = (index) => {
    const currentFileType = steps[currentStep].toLowerCase().replace(' ', '');
    setFiles(prevFiles => ({
      ...prevFiles,
      [currentFileType]: prevFiles[currentFileType].filter((_, i) => i !== index)
    }));
    setShowWebcam(false);
    setCapturedImage(null);
    setShowPreview(false);

    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const capture = async () => {
    const fileType = steps[currentStep].toLowerCase().replace(' ', '');
    const imageSrc = webcamRef.current.getScreenshot();
    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], `${fileType}.jpg`, { type: 'image/jpeg' });
        setFiles((prevFiles) => ({
          ...prevFiles,
          [fileType]: [file]
        }));
        setShowWebcam(false);
        setCapturedImage(imageSrc);
        setShowPreview(true);
      });
  };

  const createRequest = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/requests/create`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      if (response.status >= 200 && response.status < 300) {
        setRequestId(response.data.requestId);
        toast.success("Request created successfully.");
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error('Error creating request:', error.message);
      toast.error("Error creating request: " + error.message);
    }
  };

  const uploadFiles = async (documentType, filesToUpload) => {
    if (!requestId) {
      toast.error("Please create a request first.");
      return false;
    }
    try {
      const uploadPromises = filesToUpload.map(async (file, index) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('documentType', `${documentType}${index + 1}`);
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/api/requests/${requestId}/upload`,
          formData,
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        return response.status === 200;
      });
  
      const results = await Promise.all(uploadPromises);
      const allSuccessful = results.every(result => result === true);
  
      if (allSuccessful) {
        toast.success(`Uploaded ${documentType} Successfully`);
        setUploadSuccess(true);
        setUploadError(null);
        return true;
      } else {
        toast.error(`Error Uploading ${documentType}`);
        setUploadError("One or more files failed to upload");
        return false;
      }
    } catch (error) {
      console.error("Upload error", error);
      toast.error("Error uploading files, try again later");
      setUploadError(error.message);
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = async () => {
    const fileType = steps[currentStep].toLowerCase().replace(' ', '');
    if (files[fileType]?.length > 0 && !files[fileType][0].uploaded) {
      setIsUploading(true);
      const uploadSuccess = await uploadFiles(fileType, files[fileType]);
      setIsUploading(false);
      if (uploadSuccess) {
        setFiles(prevFiles => ({
          ...prevFiles,
          [fileType]: prevFiles[fileType].map(file => ({ ...file, uploaded: true }))
        }));
      } else {
        return; // Don't proceed to next step if upload failed
      }
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
      const lastFileType = steps[steps.length - 1].toLowerCase().replace(' ', '');
      if (files[lastFileType]?.length > 0 && !files[lastFileType][0].uploaded) {
        const uploadSuccess = await uploadFiles(lastFileType, files[lastFileType]);
        if (!uploadSuccess) {
          throw new Error(`Failed to upload ${lastFileType}`);
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

  useEffect(() => {
    const handleNetworkChange = () => {
      if (navigator.onLine) {
        setNetworkError(false);
      } else {
        setNetworkError(true);
        toast.error("You are offline. Please check your internet connection.");
      }
    };

    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);

    return () => {
      window.removeEventListener('online', handleNetworkChange);
      window.removeEventListener('offline', handleNetworkChange);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen p-6 bg-gray-100">
      {(isLoading || isUploading) && (
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

        {networkError && (
          <div className="mb-8 text-center text-red-600">
            You are offline. Please check your internet connection.
          </div>
        )}

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
        ) : (<>
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
                {currentStep === 1 && ( // Passport step
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Passport Upload Type
                    </label>
                    <select
                      value={passportUploadType}
                      onChange={(e) => setPassportUploadType(e.target.value)}
                      className="block w-full px-4 py-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="separate">Front and Back Separately</option>
                      <option value="together">Front and Back Together</option>
                    </select>
                  </div>
                )}
                <div className="flex items-center space-x-4">
                  <label className="block w-full px-4 py-2 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer">
                    <span className="text-sm text-gray-600 md:text-lg">Choose file</span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={onFileChange}
                      multiple={currentStep === 1 && passportUploadType === 'separate'}
                      accept="image/*,application/pdf"
                    />
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
                {showWebcam && !showPreview && (
                  <div className="relative mt-4">
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      className="rounded-lg shadow-md"
                    />
                    <div
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 border-2 border-red-500 top-1/2 left-1/2"
                      style={getGuidanceBoxSize()}
                    ></div>
                    <button
                      type="button"
                      onClick={capture}
                      className="mt-4 !bg-green-700 text-white py-2 px-4 rounded-lg shadow-md hover:!bg-green-800 transition duration-300"
                    >
                      Capture
                    </button>
                  </div>
                )}
                {files[steps[currentStep].toLowerCase().replace(' ', '')]?.length > 0 && (
                  <div className="mt-4">
                    {files[steps[currentStep].toLowerCase().replace(' ', '')].map((file, index) => (
                      <div key={index} className="mt-2">
                        {file.type === 'application/pdf' ? (
                          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
                            <div style={{ height: '300px' }}>
                              <Viewer fileUrl={URL.createObjectURL(file)} />
                            </div>
                          </Worker>
                        ) : (
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`${steps[currentStep]} preview ${index + 1}`}
                            className="object-cover w-full h-32 mt-4 rounded-lg shadow-md"
                          />
                        )}
                        <button
                          onClick={() => removeFile(index)}
                          className="mt-2 !bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:!bg-red-600 transition duration-300"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {showPreview && (
                  <div className="mt-4">
                    <img
                      src={capturedImage}
                      alt="Captured"
                      className="w-full rounded-lg shadow-md"
                    />
                    <div className="flex justify-between mt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setShowPreview(false);
                          setShowWebcam(true);
                        }}
                        className="!bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:!bg-orange-600 transition duration-300"
                      >
                        <FaUndo className="inline-block mr-2" />
                        Retake
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const fileType = steps[currentStep].toLowerCase().replace(' ', '');
                          fetch(capturedImage)
                            .then((res) => res.blob())
                            .then((blob) => {
                              const file = new File([blob], `${fileType}.jpg`, { type: 'image/jpeg' });
                              setFiles((prevFiles) => ({
                                ...prevFiles,
                                [fileType]: [file]
                              }));
                              setShowPreview(false);
                            });
                        }}
                        className="!bg-green-700 text-white py-2 px-4 rounded-lg shadow-md hover:!bg-green-800 transition duration-300"
                      >
                        Confirm
                      </button>
                    </div>
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
                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="!bg-green-700 text-white py-2 px-4 rounded-lg shadow-md hover:!bg-green-800 transition duration-300"
                    disabled={files[steps[currentStep].toLowerCase().replace(' ', '')]?.length === 0}
                  >
                    Next
                  </button>
                ) : (
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