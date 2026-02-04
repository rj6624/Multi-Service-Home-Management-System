import './PersonalServiceDashboard.css';
import laundryImg from '../assets/images/Laundry.jpg';
import cleaningImg from '../assets/images/Cleaning sevice.avif';
import plumbingImg from '../assets/images/Plumbing.jpg';
import electricianImg from '../assets/images/Electrician.jpg';
import applianceImg from '../assets/images/Appliance.avif';
import tailorImg from '../assets/images/stitch.avif';
import vehicleImg from '../assets/images/Carwash.avif';
import personalImg from '../assets/images/PersonalServant.avif';

function PersonalServiceDashboard() {
  const services = [
    { name: 'Babysitting', image: personalImg, price: 220, rating: 4.9, reviews: '2.2 M' },
    { name: 'Elder Care', image: personalImg, price: 220, rating: 4.9, reviews: '2.2 M' },
    { name: 'Personal Chef', image: personalImg, price: 220, rating: 4.9, reviews: '2.2 M' },
    { name: 'Home Tutor', image: personalImg, price: 220, rating: 4.9, reviews: '2.2 M' },
    { name: 'Pet Care', image: personalImg, price: 220, rating: 4.9, reviews: '2.2 M' },
    { name: 'Driver Service', image: personalImg, price: 220, rating: 4.9, reviews: '2.2 M' },
    { name: 'Security Guard', image: personalImg, price: 220, rating: 4.9, reviews: '2.2 M' },
    { name: 'Gardening', image: personalImg, price: 220, rating: 4.9, reviews: '2.2 M' }
  ];

  const handleScroll = (e) => {
    const element = e.target;
    const scrollProgress = element.scrollLeft / (element.scrollWidth - element.clientWidth);
    element.parentElement.style.setProperty('--scroll-progress', scrollProgress);
  };

  return (
    <div className="most-booked-container">
      <h2 className="most-booked-title">Personal Services</h2>
      <div className="services-scroll-wrapper">
        <div className="services-scroll" onScroll={handleScroll}>
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-image-box">
                <img src={service.image} alt={service.name} />
              </div>
              <h4 className="service-item-name">{service.name}</h4>
              <p className="service-price">₹{service.price}.00</p>
              <p className="service-rating">★{service.rating} ({service.reviews})</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalServiceDashboard;