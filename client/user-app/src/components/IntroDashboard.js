import './IntroDashboard.css';
import { useNavigate } from 'react-router-dom';
import plumbingImg from '../assets/images/Plumbing.png';
import electricianImg from '../assets/images/Electrician.png';
import cleaningImg from '../assets/images/Cleaning.png';
import applianceImg from '../assets/images/Appliance Repair.png';
import laundryImg from '../assets/images/Laundry.png';
import tailorImg from '../assets/images/Tailor.png';
import vehicleImg from '../assets/images/Vehicle Service.png';
import personalImg from '../assets/images/Personal Service.png';
import bikeImg from '../assets/images/BikeDashboard.png';

function IntroDashboard() {
  const navigate = useNavigate();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="maindiv">
      <div className="Center">
        <div className="red-section">
          <h2>{getGreeting()}, Jay!</h2>
          <p>What service do you need today?</p>
          <div className="greeting-decoration">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
          </div>
        </div>
        <div className="silver-section">
          <h2 className='heading'>What are you looking for?</h2>
          <div className='r1'>
            <div className='f1' onClick={() => navigate('/laundry-service-list')} style={{ cursor: 'pointer' }}>
              <img src={laundryImg} alt="Laundry" className='img1' />
              <p className='ptext'>Laundry</p>
            </div>
            <div className='f1'>
              <img src={cleaningImg} alt="Cleaning" className='img1' />
              <p className='ptext'>Cleaning</p>
            </div>
            <div className='f1'>
              <img src={plumbingImg} alt="Plumbing" className='img1' />
              <p className='ptext'>Plumbing</p>
            </div>
            <div className='f1'>
              <img src={electricianImg} alt="Electrical Work" className='img1'/>
              <p className='ptext'>Electrical Work</p>
            </div>
          </div>
          <div className='r1'>
            <div className='f1'>
              <img src={applianceImg} alt="Appliance Repair" className='img1' />
              <p className='ptext'>Appliance Repair</p>
            </div>
            <div className='f1'>
              <img src={tailorImg} alt="Tailor" className='img1' />
              <p className='ptext'>Tailor</p>
            </div>
            <div className='f1'>
              <img src={vehicleImg} alt="Vehicle Service" className='img1' />
              <p className='ptext'>Vehicle Service</p>
            </div>
            <div className='f1'>
              <img src={personalImg} alt="Personal Service" className='img1' />
              <p className='ptext'>Personal Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroDashboard;