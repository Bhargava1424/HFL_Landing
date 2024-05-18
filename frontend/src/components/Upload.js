import React, { useState, useRef } from 'react';
import { FaCheckCircle, FaCamera } from 'react-icons/fa';
import Webcam from 'react-webcam';

const steps = ['PAN', 'Passport', 'Aadhar', 'Driving License'];

const UploadWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [files, setFiles] = useState({
    pan: null,
    passport: null,
    aadhar: null,
    drivingLicense: null,
  });
  const [username, setUsername] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [showWebcam, setShowWebcam] = useState(false);
  const [registrationTime, setRegistrationTime] = useState(null);

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
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], `${fileType}.jpg`, { type: 'image/jpeg' });
        setFiles({ ...files, [fileType]: file });
        setShowWebcam(false);
      });
  };

  const onRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();

      if (response.status === 201) {
        console.log('User registered successfully');
        setRegistrationTime(data.registrationTime);
        setIsRegistered(true);
      } else {
        console.error('Error registering user:', data.message);
      }
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-2xl border-2 border-dashed border-gray-400">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Register & Upload Documents</h2>

        {!isRegistered ? (
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full text-sm text-gray-900 py-3 px-4 rounded-lg border border-gray-300 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={onRegister}
              className="mt-4 w-full bg-green-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              Register
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
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload {steps[currentStep]}
                  {files[steps[currentStep].toLowerCase().replace(' ', '')] && <FaCheckCircle className="inline ml-2 text-green-500" />}
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
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="!bg-green-700 text-white py-2 px-4 rounded-lg shadow-md hover:!bg-green-800 transition duration-300"
                  disabled={!files[steps[currentStep].toLowerCase().replace(' ', '')] || currentStep >= steps.length - 1}
                >
                  {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
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
            {registrationTime && (
              <div className="mt-4 text-gray-600 text-center">
                Registered on: {new Date(registrationTime).toLocaleString()}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UploadWizard;
