import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RequestList from './RequestList';
import UserManagement from './UserManagement';

const Dashboard = () => {
  return (
    <div>
      <main className="p-4"> 
        <Routes>
          <Route path="/" element={<RequestList />} />
          <Route path="/user-management" element={<UserManagement />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;  
