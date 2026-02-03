import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">HomeServe</h3>
          <p className="footer-tagline">
            Your trusted platform for all home services. Quality work, guaranteed satisfaction.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">For Providers</h4>
          <ul className="footer-links">
            <li><a href="#become-provider">Become a Provider</a></li>
            <li><a href="#provider-resources">Provider Resources</a></li>
            <li><a href="#success-stories">Success Stories</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
          <p className="footer-contact">support@homeserve.com</p>
          <p className="footer-contact">1-800-HOME-SERVE</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">© 2026 HomeServe. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
