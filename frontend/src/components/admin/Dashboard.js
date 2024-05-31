import React from 'react';
import Navbar from './Navbar';
import RequestList from './RequestList';
import UserManagement from './UserManagement';
import Upload from './Upload'; 
import { Routes, Route, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <main className="p-4"> 
        <Routes>
          <Route path="/" element={<RequestList />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;  