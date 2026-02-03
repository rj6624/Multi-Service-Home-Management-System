import React from 'react';
import './LandingPage.css';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import IntroLandingPage from '../components/IntroLandingPage';
import ServiceCatalogLandingPage from '../components/ServiceCatalogLandingPage';
import HowItWorksLandingPage from '../components/HowItWorksLandingPage';
import CustomerReviewLandingPage from '../components/CustomerReviewLandingPage';

function LandingPage() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <IntroLandingPage />
      <ServiceCatalogLandingPage />
      <HowItWorksLandingPage />
      <CustomerReviewLandingPage />
    </div>
  );
}

export default LandingPage;
