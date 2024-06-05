import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import 'tailwindcss/tailwind.css';
import RequestDetailModal from './RequestDetailModal';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
        <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-4xl mx-auto">
          <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
            <h2 className="text-2xl font-bold">Request Details</h2>
            <button
              className="text-white hover:text-gray-200 transition duration-300"
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6 max-h-[80vh] overflow-y-auto">{children}</div>
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
  const [searchTerm, setSearchTerm] = useState('');
  const [showManageModal, setShowManageModal] = useState(false);

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

  const handlePhoneClick = (phoneNumber) => {
    const isPhone = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isPhone) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      alert("Use phone to make call");
    }
  };

  const handleStatusChange = async (requestId, newStatus) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/requests/${requestId}`, { status: newStatus }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === requestId ? { ...request, status: newStatus } : request
        )
      );
      setShowManageModal(false);
    } catch (error) {
      setError(error);
    }
  };

  const handleOpenManageModal = (request) => {
    setSelectedRequest(request);
    setShowManageModal(true);
  };

  const handleCloseManageModal = () => {
    setShowManageModal(false);
    setSelectedRequest(null);
  };

  const filteredRequests = requests.filter((request) =>
    request.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 animate-fade-in">
        Requests
      </h1>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded w-full max-w-xs"
        />
      </div>

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
              <th className="px-6 py-4 font-medium">Phone no.</th>
              <th className="px-6 py-4 font-medium">Amount</th>
              <th className="px-6 py-4 font-medium">Currency</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Actions</th>
              <th className="px-6 py-4 font-medium">Management</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => (
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
                <td 
                  className="px-6 py-4 border-b border-gray-200 animate-fade-in cursor-pointer text-blue-500 hover:text-blue-700"
                  onClick={() => handlePhoneClick(request.phoneNumber)}
                >
                  {request.phoneNumber}
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
                    className="text-blue-500 hover:text-blue-700 transition duration-300 mr-2"
                    onClick={() => handleViewDetail(request)}
                  >
                    View
                  </button>
                  <button
                    className="text-green-500 hover:text-green-700 transition duration-300"
                    onClick={() => handleViewExtractedData(request)}
                  >
                    Data
                  </button>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 animate-fade-in">
                  <button
                    className="text-purple-500 hover:text-purple-700 transition duration-300"
                    onClick={() => handleOpenManageModal(request)}
                  >
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <RequestDetailModal 
        showDetail={showDetail} 
        handleCloseDetail={handleCloseDetail} 
        selectedRequest={selectedRequest} 
      />

      <Modal isOpen={showExtractedData} onClose={handleCloseExtractedData}>
        {selectedRequest && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Extracted Data</h2>
            {selectedRequest.finalExtractedData ? (
              <div className="bg-gray-100 p-4 rounded">
                {Object.entries(selectedRequest.finalExtractedData).map(([key, value]) => (
                  <p key={key}><strong>{key}:</strong> {value}</p>
                ))}
              </div>
            ) : (
              <p>No extracted data available.</p>
            )}
          </div>
        )}
      </Modal>

      <Modal isOpen={showManageModal} onClose={handleCloseManageModal}>
        {selectedRequest && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Manage Request</h2>
            <p><strong>ID:</strong> {selectedRequest._id}</p>
            <p><strong>Name:</strong> {selectedRequest.name}</p>
            <p><strong>Status:</strong> {selectedRequest.status}</p>
            <div className="mt-6 flex justify-center">
              {selectedRequest.status === 'Pending' && (
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300 mr-4"
                  onClick={() => handleStatusChange(selectedRequest._id, 'Approved')}
                >
                  Approve
                </button>
              )}
              {selectedRequest.status === 'Approved' && (
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition duration-300 mr-4"
                  onClick={() => handleStatusChange(selectedRequest._id, 'Completed')}
                >
                  Complete
                </button>
              )}
              {selectedRequest.status !== 'Rejected' && (
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
                  onClick={() => handleStatusChange(selectedRequest._id, 'Rejected')}
                >
                  Reject
                </button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default RequestList;
