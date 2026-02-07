import './ElectricalworkDashboard.css';
import laundryImg from '../assets/images/Laundry.jpg';
import cleaningImg from '../assets/images/Cleaning sevice.avif';
import plumbingImg from '../assets/images/Plumbing.jpg';
import electricianImg from '../assets/images/Electrician.jpg';
import applianceImg from '../assets/images/Appliance.avif';
import tailorImg from '../assets/images/stitch.avif';
import vehicleImg from '../assets/images/Carwash.avif';
import personalImg from '../assets/images/PersonalServant.avif';

function ElectricalworkDashboard() {
  const services = [
    { name: 'Wiring Installation', image: electricianImg, price: 220, rating: 4.9, reviews: '2.2 M' },
    { name: 'Switch & Socket', image: electricianImg, price: 220, rating: 4.9, reviews: '2.2 M' },
    { name: 'Fan Installation', image: electricianImg, price: 220, rating: 4.9, reviews: '2.2 M' },
    { name: 'Light Fitting', image: electricianImg, price: 220, rating: 4.9, reviews: '2.2 M' },
    { name: 'MCB Repair', image: electricianImg, price: 220, rating: 4.9, reviews: '2.2 M' },
    { name: 'Inverter Installation', image: electricianImg, price: 220, rating: 4.9, reviews: '2.2 M' },
    { name: 'Electrical Inspection', image: electricianImg, price: 220, rating: 4.9, reviews: '2.2 M' },
    { name: 'Short Circuit Repair', image: electricianImg, price: 220, rating: 4.9, reviews: '2.2 M' }
  ];

  const handleScroll = (e) => {
    const element = e.target;
    const scrollProgress = element.scrollLeft / (element.scrollWidth - element.clientWidth);
    element.parentElement.style.setProperty('--scroll-progress', scrollProgress);
  };

  return (
    <div className="most-booked-container">
      <h2 className="most-booked-title">Electrical Work</h2>
      <div className="services-scroll-wrapper">
        <div className="services-scroll" onScroll={handleScroll}>
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-image-box">
                <img src={service.image} alt={service.name} />
              </div>
              <h4 className="service-item-name">{service.name}</h4>
              <p className="service-price">₹{service.price}.00</p>
              <p className="service-rating">★ {service.rating} ({service.reviews})</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ElectricalworkDashboard;