import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Forex Payment Dashboard
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/upload">New Request</Link>
          </li>
          <li>
            <Link to="/user-management">Users</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
