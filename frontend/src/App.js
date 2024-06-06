import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Upload from './components/Upload';
import AdminPanel from './components/AdminPanel';
import ContactUs from './components/ContactUs';
import FAQs from './components/FAQs';
import GetAnymoney from './components/GetAnymoney'
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        <Routes>
          
          {/* The Route path="/" will render HomePage as the default component */}
          <Route path="/" element={<HomePage />} />
          <Route path='/aboutUs' element={<AboutUs />}/>
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/adminPanel' element={<AdminPanel/>}/>
          <Route path='/contactUs' element={<ContactUs/>}/>
          <Route path='/FAQs' element={<FAQs/>}/>
          <Route path='/Getanymoney' element={<GetAnymoney/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
