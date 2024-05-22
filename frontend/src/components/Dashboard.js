import React from 'react';
import AdminNavbar from './AdminNavbar';
import RequestList from './RequestList';
import UserManagement from './UserManagement';

const Dashboard = () => {
  return (
    <div>
      <AdminNavbar />
      <main className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <RequestList />
          </div>
          <div>
            <UserManagement />
          </div>
          {/* ... (Add more sections as needed) */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
