import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DocumentViewer from './DocumentViewer'; // Import your DocumentViewer component

const RequestDetail = ({ match }) => {
  const [request, setRequest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/api/requests/${match.params.requestId}`);
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
          {/* ... Implement the rest of the request detail logic */}
        </div>
      )}
    </div>
  );
};

export default RequestDetail;
