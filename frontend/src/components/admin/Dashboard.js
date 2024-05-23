import React from 'react';
import Navbar from './Navbar';
import RequestList from './RequestList';
import UserManagement from './UserManagement';
import Upload from './Upload'; // Add Upload component
import { Routes, Route } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<RequestList />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
