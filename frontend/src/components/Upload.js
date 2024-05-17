import React, { useState, useRef } from 'react';
import axios from 'axios';
import { FaCheckCircle, FaCamera } from 'react-icons/fa';
import Webcam from 'react-webcam';

const Upload = () => {
  const [files, setFiles] = useState({
    pan: null,
    passport: null,
    aadhar: null,
    drivingLicense: null,
  });
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [showWebcam, setShowWebcam] = useState({});

  const webcamRef = useRef(null);

  const onFileChange = (e, type) => {
    setFiles({ ...files, [type]: e.target.files[0] });
    setUploadSuccess(false);
    setUploadError(null);
  };

  const capture = (type) => {
    const imageSrc = webcamRef.current.getScreenshot();
    fetch(imageSrc)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], `${type}.jpg`, { type: 'image/jpeg' });
        setFiles({ ...files, [type]: file });
        setShowWebcam({ ...showWebcam, [type]: false });
      });
  };

  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append('pan', files.pan);
    formData.append('passport', files.passport);
    formData.append('aadhar', files.aadhar);
    formData.append('drivingLicense', files.drivingLicense);

    setUploading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Files uploaded successfully:', response.data);
      setUploadSuccess(true);
      setUploadError(null);
    } catch (error) {
      console.error('Error uploading files:', error);
      setUploadError(error.message);
      setUploadSuccess(false);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Upload Documents</h2>
        
        {['pan', 'passport', 'aadhar', 'drivingLicense'].map(type => (
          <div key={type} className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload {type.charAt(0).toUpperCase() + type.slice(1).replace(/([A-Z])/g, ' $1').trim()}
              {files[type] && <FaCheckCircle className="inline ml-2 text-green-500" />}
            </label>
            <div className="flex items-center">
              <input
                type="file"
                onChange={(e) => onFileChange(e, type)}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              />
              <button
                type="button"
                onClick={() => setShowWebcam({ ...showWebcam, [type]: !showWebcam[type] })}
                className="ml-2 btn btn-secondary text-blue-700"
              >
                <FaCamera />
              </button>
            </div>
            {files[type] && (
              <img
                src={URL.createObjectURL(files[type])}
                alt={`${type} preview`}
                className="mt-2 w-full h-32 object-cover"
              />
            )}
            {showWebcam[type] && (
              <div className="mt-2">
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => capture(type)}
                  className="mt-2 btn btn-primary"
                >
                  Capture
                </button>
              </div>
            )}
          </div>
        ))}
        
        <button
          onClick={onFileUpload}
          className={`btn btn-primary mt-4 w-full ${uploading ? 'loading' : ''}`}
          disabled={!files.pan || !files.passport || !files.aadhar || !files.drivingLicense || uploading}
        >
          {uploading ? 'Uploading...' : 'Upload Files'}
        </button>
        
        {uploadSuccess && (
          <div className="mt-4 text-green-600">
            Files uploaded successfully!
          </div>
        )}
        
        {uploadError && (
          <div className="mt-4 text-red-600">
            Error uploading files: {uploadError}
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
