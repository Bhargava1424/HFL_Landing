import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(process.env.REACT_APP_SERVER_URL + '/api/requests/getRequests', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setRequests(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchRequests();
  }, []);


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
    } catch (error) {
      setError(error);
    }
  };

  const filteredRequests = requests.filter((request) =>
    request.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div className="container mx-auto mt-10 p-4">Loading user requests...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto mt-10 p-4">
        <p className="text-red-500">Error fetching requests: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">User Management</h1>

      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-6 py-4 font-medium">ID</th>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Request Type</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => (
              <tr
                key={request._id}
                className="bg-white hover:bg-gray-100 transition duration-300"
              >
                <td className="px-6 py-4 border-b border-gray-200">{request._id}</td>
                <td className="px-6 py-4 border-b border-gray-200">{request.name}</td>
                <td className="px-6 py-4 border-b border-gray-200">{request.requestType}</td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
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
                <td className="px-6 py-4 border-b border-gray-200">
                  {request.status === 'Pending' && (
                    <button
                      className="text-green-500 hover:text-green-700 transition duration-300 mr-2"
                      onClick={() => handleStatusChange(request._id, 'Approved')}
                    >
                      Approve
                    </button>
                  )}
                  {request.status === 'Approved' && (
                    <button
                      className="text-gray-500 hover:text-gray-700 transition duration-300 mr-2"
                      onClick={() => handleStatusChange(request._id, 'Completed')}
                    >
                      Complete
                    </button>
                  )}
                  {request.status !== 'Rejected' && (
                    <button
                      className="text-red-500 hover:text-red-700 transition duration-300"
                      onClick={() => handleStatusChange(request._id, 'Rejected')}
                    >
                      Reject
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
