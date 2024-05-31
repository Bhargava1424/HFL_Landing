import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/users', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUsers(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 animate-fade-in">
        User Management
      </h1>
      {isLoading && (
        <p className="text-center text-xl text-gray-600 animate-pulse">
          Loading users...
        </p>
      )}
      {error && (
        <p className="text-center text-red-500 text-xl animate-fade-in">
          Error fetching users: {error.message}
        </p>
      )}
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-6 py-4 font-medium">Username</th>
              <th className="px-6 py-4 font-medium">Email</th>
              <th className="px-6 py-4 font-medium">Role</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="bg-white hover:bg-gray-100 transition duration-300"
              >
                <td className="px-6 py-4 border-b border-gray-200 animate-fade-in">
                  {user.username}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 animate-fade-in">
                  {user.email}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 animate-fade-in">
                  {user.role}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 animate-fade-in">
                  {/* ... (Implement actions like edit, delete, change role, etc.) */}
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
