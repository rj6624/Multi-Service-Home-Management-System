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
import LaundryServiceDetails from './pages/LaundryServiceDetails';
import CleaningServiceDetails from './pages/CleaningServiceDetails';
import PlumbingServiceDetails from './pages/PlumbingServiceDetails';
import ElectricalServiceDetails from './pages/ElectricalServiceDetails';
import ApplianceRepairServiceDetails from './pages/ApplianceRepairServiceDetails';
import TailorServiceDetails from './pages/TailorServiceDetails';
import PersonalServiceDetails from './pages/PersonalServiceDetails';
import VehicleServiceDetails from './pages/VehicleServiceDetails';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import Cart from './pages/Cart';

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
          <Route path="/laundry-service-list/details" element={<LaundryServiceDetails />} />
          <Route path="/cleaning-service-list/details" element={<CleaningServiceDetails />} />
          <Route path="/plumbing-service-list/details" element={<PlumbingServiceDetails />} />
          <Route path="/electrical-service-list/details" element={<ElectricalServiceDetails />} />
          <Route path="/appliance-repair-service-list/details" element={<ApplianceRepairServiceDetails />} />
          <Route path="/tailor-service-list/details" element={<TailorServiceDetails />} />
          <Route path="/personal-service-list/details" element={<PersonalServiceDetails />} />
          <Route path="/vehicle-service-list/details" element={<VehicleServiceDetails />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
