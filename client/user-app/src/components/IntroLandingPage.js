import './IntroLandingPage.css';
import introImage from '../assets/images/intro-landing-image.avif';

function IntroLandingPage() {
  return (
    <div className="intro-landing-page">
      <div className="intro-content">
        <h1 className="intro-title">All Your Home Services, One Trusted Platform</h1>
        <p className="intro-description">
          Book plumbers, electricians, cleaners & more - instantly, securely,
          and hassle-free.
        </p>

        <div className="intro-buttons">
          <button className="btn-book">Book a Service</button>
          <button className="btn-explore">Explore Services</button>
        </div>
      </div>
      <div className="intro-image">
        <img src={introImage} alt="Intro Landing" />
      </div>
    </div>
  );
}

export default IntroLandingPage;
