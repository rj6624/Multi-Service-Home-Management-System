import './NetworkLandingPage.css';
import { BsBriefcase } from 'react-icons/bs';
import { BiDollar } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { MdOutlineManageAccounts } from 'react-icons/md';
import providerImg from '../assets/images/Provider.jpg';

function NetworkLandingPage() {
  const features = [
    {
      icon: <BsBriefcase />,
      title: "Steady Work",
      description: "Regular job opportunities from verified customers"
    },
    {
      icon: <BiDollar />,
      title: "Earn More",
      description: "Set your own rates and grow your income"
    },
    {
      icon: <AiOutlineStar />,
      title: "Build Reputation",
      description: "Gain reviews and build a trusted profile"
    },
    {
      icon: <MdOutlineManageAccounts />,
      title: "Easy Management",
      description: "Manage bookings through our simple app"
    }
  ];

  return (
    <div className="network-landing">
      <h2 className="network-title">Join Our Network of Service Providers</h2>
      <div className="network-content">
        <div className="network-image">
          <img src={providerImg} alt="Provider" className="provider-image" />
        </div>
        
        <div className="network-text">
          <p className="network-description">
            Are you a skilled professional? Partner with HomeServe and grow your business. 
            Get access to thousands of customers looking for trusted service providers.
          </p>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="provider-button">Become a Provider</button>
        </div>
      </div>
    </div>
  );
}

export default NetworkLandingPage;