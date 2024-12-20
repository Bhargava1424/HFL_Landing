import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Upload from './components/admin/Upload'; 
import ContactUs from './components/ContactUs';
import FAQs from './components/FAQs';
import GetAnymoney from './components/GetAnymoney';
import Dashboard from './components/admin/Dashboard';
import UserManagement from './components/admin/UserManagement';
import Login from './components/admin/Login'; 
import ProtectedRoute from './components/admin/ProtectedRoute';
import RequestList from './components/admin/RequestList';

import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import InfoRBI from './components/InfoRBI';
function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        <Routes>
          
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/Getanymoney" element={<GetAnymoney />} />
          <Route path="/upload" element={<Upload />} /> {/* Upload is now public */}
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
          <Route path='/infoRbi' element={<InfoRBI/>}/>
          {/* Authentication Route */}
          <Route path="/login" element={<Login />} /> 

          {/* Protected Admin Routes */}
          <Route 
            path="/admin/*" // Base path for admin routes
            element={
              <ProtectedRoute> 
                <Dashboard /> {/* Your Admin Layout or Dashboard */}
              </ProtectedRoute>
            }
          >
            {/* Notice the nesting of routes here */}
            <Route index element={<Dashboard />} /> 
            <Route path="user-management" element={<UserManagement />} />
            {/* Add more admin routes as needed */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
