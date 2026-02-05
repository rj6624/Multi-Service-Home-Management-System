import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import LaundryServicesListPage from './pages/LaundryServicesListPage';
import CleaningServicesListPage from './pages/CleaningServicesListPage';
import PlumbingServicesListPage from './pages/PlumbingServicesListPage';
import ElectricalServicesListPage from './pages/ElectricalServicesListPage';
import ApplianceRepairServicesListPage from './pages/ApplianceRepairServicesListPage';
import TailorServicesListPage from './pages/TailorServicesListPage';
import PersonalServicesListPage from './pages/PersonalServicesListPage';
import VehicleServicesListPage from './pages/VehicleServicesListPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/laundry-service-list" element={<LaundryServicesListPage />} />
          <Route path="/cleaning-service-list" element={<CleaningServicesListPage />} />
          <Route path="/plumbing-service-list" element={<PlumbingServicesListPage />} />
          <Route path="/electrical-service-list" element={<ElectricalServicesListPage />} />
          <Route path="/appliance-repair-service-list" element={<ApplianceRepairServicesListPage />} />
          <Route path="/tailor-service-list" element={<TailorServicesListPage />} />
          <Route path="/personal-service-list" element={<PersonalServicesListPage />} />
          <Route path="/vehicle-service-list" element={<VehicleServicesListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
