import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DocumentViewer from './DocumentViewer';
import { useNavigate } from 'react-router-dom';

const RequestDetail = ({ match }) => {
  const [request, setRequest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleStatusChange = async (newStatus) => {
    try {
      const response = await axios.put(`/api/requests/${match.params.requestId}`, { status: newStatus }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Include JWT token
        }
      });
      setRequest(response.data); // Update the request in the state
      console.log('Request status updated successfully!');
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/api/requests/${match.params.requestId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Include JWT token
          }
        });
        setRequest(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchRequest();
  }, [match.params.requestId]);

  return (
    <div className="container mx-auto mt-10">
      {isLoading && <p className="text-center">Loading request details...</p>}
      {error && <p className="text-center text-red-500">Error fetching request: {error.message}</p>}

      {request && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Request Details</h1>
          {/* Display request information (name, amount, status, etc.) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold">Name:</p>
              <p>{request.name}</p>
            </div>
            <div>
              <p className="font-bold">Phone:</p>
              <p>{request.phoneNumber}</p>
            </div>
            <div>
              <p className="font-bold">Email:</p>
              <p>{request.email}</p>
            </div>
            <div>
              <p className="font-bold">Amount:</p>
              <p>{request.amount}</p>
            </div>
            <div>
              <p className="font-bold">Currency:</p>
              <p>{request.currency}</p>
            </div>
            <div>
              <p className="font-bold">Status:</p>
              <p>{request.status}</p>
            </div>
          </div>

          <h2 className="mt-8 text-xl font-bold mb-2">Documents</h2>
          <DocumentViewer documents={request.documents} />

          {/* ... (Add other request information) */}
          <h2 className="mt-8 text-xl font-bold mb-2">OCR Extracted Data</h2>
          {/* ... (Display extracted OCR data) */}

          <h2 className="mt-8 text-xl font-bold mb-2">Manage Request</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Create buttons for different status changes */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleStatusChange('processing')}
              disabled={request.status !== 'pending'}
            >
              Mark as Processing
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleStatusChange('approved')}
              disabled={request.status !== 'processing'}
            >
              Approve
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleStatusChange('rejected')}
              disabled={request.status !== 'processing'}
            >
              Reject
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleStatusChange('completed')}
              disabled={request.status !== 'approved'}
            >
              Mark as Completed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestDetail;
