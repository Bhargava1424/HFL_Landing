import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DocumentViewer from './DocumentViewer';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const RequestDetail = () => {
  const { requestId } = useParams();
  const [request, setRequest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleStatusChange = async (newStatus) => {
    try {
      const response = await axios.put(process.env.REACT_APP_SERVER_URL + `/api/requests/${requestId}`, { status: newStatus }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` 
        }
      });
      console.log(response.data);
      setRequest(response.data); 
        toast.success(`Request marked as ${newStatus}`); 
    } catch (error) {
        toast.error("Error updating request status");
      setError(error);
    }
  };

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/api/requests/${requestId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` 
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
  }, [requestId]); 

  if (isLoading) {
    return <div className="container mx-auto mt-10 p-4">Loading request details...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto mt-10 p-4">
        <p className="text-red-500">Error fetching request: {error.message}</p>
      </div>
    );
  }

  if (!request) {
    return (
      <div className="container mx-auto mt-10 p-4">
        <p>Request not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-dashed border-gray-400">
        <h1 className="text-2xl font-bold mb-4">Request Details</h1>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
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

        <h2 className="text-xl font-bold mb-2">Documents</h2>
        <DocumentViewer documents={request.documents} />

        <h2 className="mt-8 text-xl font-bold mb-2">OCR Extracted Data</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {request.documents.map((document) => {
                if (document.extractedData) { 
                  return (
                    <div key={document._id}>
                      <h3 className="font-bold text-lg">{document.type}</h3>
                      <ul>
                        {Object.entries(document.extractedData).map(([key, value]) => (
                          <li key={key}>
                            <span className="font-bold">{key}: </span>
                            {value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                } else { 
                  return null;
                }
              })}
            </div>

        <h2 className="mt-8 text-xl font-bold mb-2">Manage Request</h2>
        <div className="grid grid-cols-2 gap-4">
          
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleStatusChange('Processing')}
            disabled={request.status !== 'Pending'}
          >
            Mark as Processing
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleStatusChange('Approved')}
            disabled={request.status !== 'Processing'}
          >
            Approve
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleStatusChange('Rejected')}
            disabled={request.status !== 'Processing'}
          >
            Reject
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleStatusChange('Completed')}
            disabled={request.status !== 'Approved'}
          >
            Mark as Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestDetail;