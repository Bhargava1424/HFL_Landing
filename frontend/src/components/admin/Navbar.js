import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear local storage and navigate to login
    localStorage.removeItem('token');
    navigate('/login'); 
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-wider transition duration-300 ease-in-out transform hover:scale-105 hover:text-orange-400">
          HFL Admin Panel
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="nav-link">Dashboard</Link>
          </li>
          <li>
            <Link to="/upload" className="nav-link">
              New Request
            </Link>
          </li>
          <li>
            <Link to="/requests" className="nav-link">
              Requests
            </Link>
          </li>
          {/* Conditionally render Users link if user is admin */}
          {localStorage.getItem('isAdmin') === 'true' && ( 
            <li>
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
          )}
          <li>
            <button 
              onClick={handleLogout} 
              className="nav-link" 
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;