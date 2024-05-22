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
        const response = await axios.get('/api/users');
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
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      {isLoading && <p className="text-center">Loading users...</p>}
      {error && <p className="text-center text-red-500">Error fetching users: {error.message}</p>}

      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left">Username</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left">Email</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left">Role</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="hover:bg-gray-200">
              <td className="px-4 py-2 border border-gray-300 text-left">{user.username}</td>
              <td className="px-4 py-2 border border-gray-300 text-left">{user.email}</td>
              <td className="px-4 py-2 border border-gray-300 text-left">{user.role}</td>
              <td className="px-4 py-2 border border-gray-300 text-left">
                {/* ... (Implement actions like edit, delete, change role, etc.) */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
