import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Upload from './components/Upload';
import AdminPanel from './components/AdminPanel';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* The Route path="/" will render HomePage as the default component */}
          <Route path="/" element={<HomePage />} />
          <Route path='/aboutUs' element={<AboutUs />}/>
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/adminPanel' element={<AdminPanel/>}/>
          <Route path='/contactUs' element={<ContactUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
