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
        const response = await axios.get(process.env.REACT_APP_SERVER_URL + `/api/requests/get`, {
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
                  <Link
                    to={`/requests/${request._id}`}
                    className="text-blue-500 hover:text-blue-700 transition duration-300"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestList; 