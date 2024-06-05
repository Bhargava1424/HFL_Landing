import axios from 'axios';
import Modal from 'react-modal';
import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const RequestDetailModal = ({ showDetail, handleCloseDetail, selectedRequest }) => {
  const [loading, setLoading] = useState(false);

  const handleOpenDocument = async (doc) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/requests/getSignedUrl', {
        url: doc.file,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const signedUrl = response.data.signedUrl;
      window.open(signedUrl, '_blank');
    } catch (error) {
      console.error('Error fetching signed URL:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal 
      isOpen={showDetail} 
      onRequestClose={handleCloseDetail} 
      contentLabel="Request Details"
      
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%', // Adjust as needed for smaller modal
          maxWidth: '600px',
          maxHeight: '80vh', // Ensure it doesn't get too wide
          padding: '20px',
          
        },
      }}
    >
      {selectedRequest && (
        <div >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Request Details</h2>
            <button
              className="text-gray-500 hover:text-gray-700 transition duration-300"
              onClick={handleCloseDetail}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mb-8">
            <p><strong>ID:</strong> {selectedRequest._id}</p>
            <p><strong>Name:</strong> {selectedRequest.name}</p>
            <p><strong>Amount:</strong> {selectedRequest.amount}</p>
            <p><strong>Currency:</strong> {selectedRequest.currency}</p>
            <p><strong>Status:</strong> {selectedRequest.status}</p>
          </div>
          <h3 className="text-xl font-semibold mb-4">Documents</h3>
          {selectedRequest.documents.map((doc, index) => (
            <div key={index} className="mb-8">
              <p><strong>Type:</strong> {doc.type}</p>
              <button
                onClick={() => handleOpenDocument(doc)}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Open'}
              </button>
              <details className="mt-4">
                <summary className="cursor-pointer text-blue-500 hover:text-blue-700">OCR Data</summary>
                <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded">{doc.ocrText}</pre>
              </details>
              <details className="mt-4">
                <summary className="cursor-pointer text-blue-500 hover:text-blue-700">Extracted Data</summary>
                {doc.extractedData ? (
                  <div className="bg-gray-100 p-4 rounded">
                    {Object.entries(doc.extractedData).map(([key, value]) => (
                      <p key={key}><strong>{key}:</strong> {value}</p>
                    ))}
                  </div>
                ) : (
                  <p>No extracted data available.</p>
                )}
              </details>
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
};

export default RequestDetailModal;
