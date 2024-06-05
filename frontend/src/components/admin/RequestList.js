import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group'; // Import for animation
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import 'tailwindcss/tailwind.css';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-2xl w-full">
          <div className="flex justify-end p-4">
            <button
              className="text-gray-500 hover:text-gray-700 transition duration-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

const RequestList = () => {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showExtractedData, setShowExtractedData] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(process.env.REACT_APP_SERVER_URL + `/api/requests/getRequests`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        console.log(response.data);
        setRequests(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const handleViewDetail = (request) => {
    setSelectedRequest(request);
    setShowDetail(true);
  };

  const handleViewExtractedData = (request) => {
    setSelectedRequest(request);
    setShowExtractedData(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedRequest(null);
  };

  const handleCloseExtractedData = () => {
    setShowExtractedData(false);
    setSelectedRequest(null);
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 animate-fade-in">
        Requests
      </h1>

      {isLoading && (
        <p className="text-center text-xl text-gray-600 animate-pulse">
          Loading requests...
        </p>
      )}

      {error && (
        <p className="text-center text-red-500 text-xl animate-fade-in">
          Error fetching requests: {error.message}
        </p>
      )}

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-6 py-4 font-medium">ID</th>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Amount</th>
              <th className="px-6 py-4 font-medium">Currency</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Actions</th>
              <th className="px-6 py-4 font-medium">Extracted Data</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr
                key={request._id}
                className="bg-white hover:bg-gray-100 transition duration-300"
              >
                <td className="px-6 py-4 border-b border-gray-200 animate-fade-in">
                  {request._id}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 animate-fade-in">
                  {request.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 animate-fade-in">
                  {request.amount}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 animate-fade-in">
                  {request.currency}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 animate-fade-in">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full transition duration-300 ${
                      request.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : request.status === 'Approved'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 animate-fade-in">
                  <button
                    className="text-blue-500 hover:text-blue-700 transition duration-300"
                    onClick={() => handleViewDetail(request)}
                  >
                    View
                  </button>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 animate-fade-in">
                  <button
                    className="text-green-500 hover:text-green-700 transition duration-300"
                    onClick={() => handleViewExtractedData(request)}
                  >
                    View Extracted Data
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={showDetail} onClose={handleCloseDetail}>
        {selectedRequest && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Request Details</h2>
            <p><strong>ID:</strong> {selectedRequest._id}</p>
            <p><strong>Name:</strong> {selectedRequest.name}</p>
            <p><strong>Amount:</strong> {selectedRequest.amount}</p>
            <p><strong>Currency:</strong> {selectedRequest.currency}</p>
            <p><strong>Status:</strong> {selectedRequest.status}</p>
            <h3 className="text-xl font-semibold mt-4">Documents</h3>
            {selectedRequest.documents.map((doc, index) => (
              <div key={index} className="mb-4">
                <p><strong>Type:</strong> {doc.type}</p>
                {doc.file.endsWith('.pdf') ? (
                  <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
                    <div style={{ height: '300px' }}>
                      <Viewer fileUrl={doc.file} />
                    </div>
                  </Worker>
                ) : (
                  <img
                    src={doc.file}
                    alt={`${doc.type} preview`}
                    className="mt-4 w-full h-32 object-cover rounded-lg shadow-md"
                  />
                )}
                <details className="mt-2">
                  <summary className="cursor-pointer text-blue-500 hover:text-blue-700">OCR Data</summary>
                  <pre className="whitespace-pre-wrap">{doc.ocrText}</pre>
                </details>
                <details className="mt-2">
                  <summary className="cursor-pointer text-blue-500 hover:text-blue-700">Extracted Data</summary>
                  {doc.extractedData ? (
                    Object.entries(doc.extractedData).map(([key, value]) => (
                      <p key={key}><strong>{key}:</strong> {value}</p>
                    ))
                  ) : (
                    <p>No extracted data available.</p>
                  )}
                </details>
              </div>
            ))}
          </div>
        )}
      </Modal>

      <Modal isOpen={showExtractedData} onClose={handleCloseExtractedData}>
        {selectedRequest && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Extracted Data</h2>
            {selectedRequest.finalExtractedData ? (
              Object.entries(selectedRequest.finalExtractedData).map(([key, value]) => (
                <p key={key}><strong>{key}:</strong> {value}</p>
              ))
            ) : (
              <p>No extracted data available.</p>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default RequestList;
