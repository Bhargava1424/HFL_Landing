import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/dashboard"
          className="text-2xl font-bold tracking-wider transition duration-300 ease-in-out transform hover:scale-105 hover:text-orange-400"
        >
          HFL Admin Panel
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/upload"
              className="relative inline-block text-lg font-medium before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-orange-400 before:transition hover:before:scale-100"
            >
              New Request
            </Link>
          </li>
          <li>
            <Link
              to="/user-management"
              className="relative inline-block text-lg font-medium before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-orange-400 before:transition hover:before:scale-100"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/logout"
              className="relative inline-block text-lg font-medium before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-orange-400 before:transition hover:before:scale-100"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;