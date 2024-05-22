import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RequestList = () => {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/requests');
        setRequests(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Requests</h1>
      {isLoading && (
        <p className="text-center">Loading requests...</p>
      )}
      {error && (
        <p className="text-center text-red-500">Error fetching requests: {error.message}</p>
      )}

      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left">ID</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left">Name</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left">Amount</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left">Currency</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left">Status</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id} className="hover:bg-gray-200">
              <td className="px-4 py-2 border border-gray-300 text-left">{request._id}</td>
              <td className="px-4 py-2 border border-gray-300 text-left">{request.name}</td>
              <td className="px-4 py-2 border border-gray-300 text-left">{request.amount}</td>
              <td className="px-4 py-2 border border-gray-300 text-left">{request.currency}</td>
              <td className="px-4 py-2 border border-gray-300 text-left">{request.status}</td>
              <td className="px-4 py-2 border border-gray-300 text-left">
                <Link
                  to={`/requests/${request._id}`}
                  className="text-blue-500 hover:underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestList;
