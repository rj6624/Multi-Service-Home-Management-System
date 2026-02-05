import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import LaundryServicesListPage from './pages/LaundryServicesListPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/laundry-service-list" element={<LaundryServicesListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
