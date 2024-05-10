import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import KundanAboutUs from './components/KundanAboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* The Route path="/" will render HomePage as the default component */}
          <Route path="/" element={<HomePage />} />
          <Route path='/KA' element={<KundanAboutUs />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
