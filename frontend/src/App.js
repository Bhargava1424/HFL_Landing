import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Upload from './components/admin/Upload'; 
import ContactUs from './components/ContactUs';
import FAQs from './components/FAQs';
import GetAnymoney from './components/GetAnymoney';
import Dashboard from './components/admin/Dashboard';
import UserManagement from './components/admin/UserManagement';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* The Route path="/" will render HomePage as the default component */}
          <Route path="/" element={<HomePage />} />
          <Route path='/aboutUs' element={<AboutUs />}/>
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/user-management' element={<UserManagement/>}/>
          <Route path='/contactUs' element={<ContactUs/>}/>
          <Route path='/FAQs' element={<FAQs/>}/>
          <Route path='/Getanymoney' element={<GetAnymoney/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
