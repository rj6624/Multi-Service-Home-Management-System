import React from 'react';
import './LandingPage.css';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import IntroLandingPage from '../components/IntroLandingPage';

function LandingPage() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <IntroLandingPage />

    </div>
  );
}

export default LandingPage;
