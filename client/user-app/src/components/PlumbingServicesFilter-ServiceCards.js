import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { TbReload } from 'react-icons/tb';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import { LuSlidersHorizontal } from 'react-icons/lu';
import './PlumbingServicesFilter-ServiceCards.css';
import plumbingImg from '../assets/images/Appliance.avif';

function PlumbingServicesFilterServiceCards() {
  const navigate = useNavigate();
      const [sortBy, setSortBy] = useState('');
      const [priceMin, setPriceMin] = useState(0);
      const [priceMax, setPriceMax] = useState(500);
      const [distance, setDistance] = useState('');
      const [minRating, setMinRating] = useState(0);
      const [availability, setAvailability] = useState('');
      const [serviceType, setServiceType] = useState('');
      const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
      const [collapsed, setCollapsed] = useState({
          sortBy: false,
          priceRange: false,
          distance: false,
          rating: false,
          availability: false,
          serviceType: false
      });

      const toggleSection = (section) => {
          setCollapsed(prev => ({
              ...prev,
              [section]: !prev[section]
          }));
      };

      useEffect(() => {
          // Initialize slider backgrounds on mount
          const priceSlider = document.querySelector('.plumbing-filter-price-range-slider input[type="range"]');
          const ratingSlider = document.querySelector('.plumbing-filter-rating-slider input[type="range"]');
          
          if (priceSlider) {
              const percentage = (priceMax / 500) * 100;
              priceSlider.style.setProperty('--value', `${percentage}%`);
          }
          
          if (ratingSlider) {
              const percentage = (minRating / 5) * 100;
              ratingSlider.style.setProperty('--value', `${percentage}%`);
          }
      }, [priceMax, minRating]);
  
      const handleReset = () => {
          setSortBy('');
          setPriceMin(0);
          setPriceMax(500);
          setDistance('');
          setMinRating(0);
          setAvailability('');
          setServiceType('');
      };

      const updateSliderBackground = (e) => {
          const min = e.target.min || 0;
          const max = e.target.max || 100;
          const value = e.target.value;
          const percentage = ((value - min) / (max - min)) * 100;
          e.target.style.setProperty('--value', `${percentage}%`);
      };
  
      const services = [
          {
              id: 1,
              name: 'QuickFix Plumbing',
              price: 599,
              unit: 'per visit',
              image: plumbingImg,
              address: 'Kalawad Road, Rajkot',
              rating: 4.7,
              reviews: 135
          },
          {
              id: 2,
              name: 'Expert Pipe Solutions',
              price: 799,
              unit: 'per service',
              image: plumbingImg,
              address: 'University Road, Rajkot',
              rating: 4.5,
              reviews: 98
          },
          {
              id: 3,
              name: 'Reliable Plumbers',
              price: 499,
              unit: 'per hour',
              image: plumbingImg,
              address: 'Gondal Road, Rajkot',
              rating: 4.3,
              reviews: 76
          },
          {
              id: 4,
              name: 'DrainPro Services',
              price: 899,
              unit: 'per service',
              image: plumbingImg,
              address: 'Rajkot City Center',
              rating: 4.8,
              reviews: 150
          },
          {
              id: 5,
              name: '24/7 Plumbing Care',
              price: 699,
              unit: 'per visit',
              image: plumbingImg,
              address: 'Near Railway Station, Rajkot',
              rating: 4.6,
              reviews: 112
          },
          {
              id: 6,
              name: 'PipeMaster Solutions',
              price: 849,
              unit: 'per service',
              image: plumbingImg,
              address: 'Mavdi Main Road, Rajkot',
              rating: 4.4,
              reviews: 89
          }
      ];
  
      return (
          <div className="plumbing-filter-container">
              {/* Header */}
              <div className="plumbing-filter-header">
                  <button className="plumbing-filter-back-button" onClick={() => navigate(-1)}>
                      <IoMdArrowRoundBack />
                  </button>
                  <h3 className="plumbing-filter-title">Plumbing Service</h3>
                  <button className="plumbing-filter-mobile-filter-btn" onClick={() => setIsMobileFilterOpen(true)}>
                      <LuSlidersHorizontal />
                  </button>
              </div>
  
              {/* Main Content */}
              <div className="plumbing-filter-content">
                  {/* Mobile Filter Overlay */}
                  {isMobileFilterOpen && (
                      <div className="plumbing-filter-mobile-overlay" onClick={() => setIsMobileFilterOpen(false)}></div>
                  )}
                  
                  {/* Filters Sidebar */}
                  <div className={`plumbing-filter-sidebar ${isMobileFilterOpen ? 'mobile-open' : ''}`}>
                    <div className="plumbing-filter-header-top">
                        <h3 className="plumbing-filter-heading">Refine By</h3>
                        <div className="plumbing-filter-header-actions">
                            <button className="plumbing-filter-reset-button" onClick={handleReset}>
                                <TbReload /> Reset
                            </button>
                            <button className="laundry-filter-close-button" onClick={() => setIsMobileFilterOpen(false)}>
                                ×
                            </button>
                        </div>
                    </div>
  
                      {/* Sort By */}
                    <div className="plumbing-filter-section">
                        <div className="plumbing-filter-header-collapsible" onClick={() => toggleSection('sortBy')}>
                            <h4>Sort By</h4>
                            <FaChevronDown style={{ transform: collapsed.sortBy ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.sortBy && (
                        <div className="plumbing-filter-sort-buttons">
                            <button 
                                className={`plumbing-filter-sort-btn ${sortBy === 'lowToHigh' ? 'active' : ''}`}
                                  onClick={() => setSortBy('lowToHigh')}
                              >
                                  Low to High
                              </button>
                              <button 
                                className={`plumbing-filter-sort-btn ${sortBy === 'highToLow' ? 'active' : ''}`}
                                onClick={() => setSortBy('highToLow')}
                            >
                                High to Low
                            </button>
                            <button 
                                className={`plumbing-filter-sort-btn ${sortBy === 'mostPopular' ? 'active' : ''}`}
                                onClick={() => setSortBy('mostPopular')}
                            >
                                Most Popular
                            </button>
                            <button 
                                className={`plumbing-filter-sort-btn ${sortBy === 'nearest' ? 'active' : ''}`}
                                  onClick={() => setSortBy('nearest')}
                              >
                                  Nearest
                              </button>
                          </div>
                        )}
                      </div>
  
                      {/* Price Range */}
                    <div className="plumbing-filter-section">
                        <div className="plumbing-filter-header-collapsible" onClick={() => toggleSection('priceRange')}>
                            <h4>Price Range</h4>
                            <FaChevronDown style={{ transform: collapsed.priceRange ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.priceRange && (
                        <div className="plumbing-filter-options">
                            <div className="plumbing-filter-price-range-slider">
                                  <input 
                                      type="range" 
                                      min="0" 
                                      max="500" 
                                      value={priceMax}
                                      onChange={(e) => {
                                          setPriceMax(e.target.value);
                                          updateSliderBackground(e);
                                      }}
                                      onLoad={(e) => e.target && updateSliderBackground(e)}
                                  />
                                <div className="plumbing-filter-price-inputs">
                                      <input 
                                          type="number" 
                                          value={priceMin}
                                          onChange={(e) => setPriceMin(e.target.value)}
                                          min="0"
                                      />
                                      <span>to</span>
                                      <input 
                                          type="number" 
                                          value={priceMax}
                                          onChange={(e) => setPriceMax(e.target.value)}
                                          max="500"
                                      />
                                  </div>
                              </div>
                          </div>
                        )}
                      </div>
  
                      {/* Distance */}
                    <div className="plumbing-filter-section">
                        <div className="plumbing-filter-header-collapsible" onClick={() => toggleSection('distance')}>
                            <h4>Distance</h4>
                            <FaChevronDown style={{ transform: collapsed.distance ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.distance && (
                        <div className="plumbing-filter-options">
                            <label className="plumbing-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="distance"
                                      value="within1"
                                      checked={distance === 'within1'}
                                      onChange={(e) => setDistance(e.target.value)}
                                  />
                                  Within 1 Km
                              </label>
                              <label className="plumbing-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="distance"
                                      value="1to5"
                                      checked={distance === '1to5'}
                                      onChange={(e) => setDistance(e.target.value)}
                                  />
                                  1 - 5 Km
                              </label>
                              <label className="plumbing-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="distance"
                                      value="5to10"
                                      checked={distance === '5to10'}
                                      onChange={(e) => setDistance(e.target.value)}
                                  />
                                  5 - 10 Km
                              </label>
                              <label className="plumbing-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="distance"
                                      value="10plus"
                                      checked={distance === '10plus'}
                                      onChange={(e) => setDistance(e.target.value)}
                                  />
                                  10+ Km
                              </label>
                          </div>
                        )}
                      </div>
  
                      {/* Minimum Rating */}
                    <div className="plumbing-filter-section">
                        <div className="plumbing-filter-header-collapsible" onClick={() => toggleSection('rating')}>
                            <h4>Minimum Rating</h4>
                            <FaChevronDown style={{ transform: collapsed.rating ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.rating && (
                        <div className="plumbing-filter-options">
                            <div className="plumbing-filter-rating-slider">
                                  <input 
                                      type="range" 
                                      min="0" 
                                      max="5" 
                                      step="1"
                                      value={minRating}
                                      onChange={(e) => {
                                          setMinRating(parseInt(e.target.value));
                                          updateSliderBackground(e);
                                      }}
                                  />
                                <div className="plumbing-filter-rating-display">
                                    <div className="plumbing-filter-stars">
                                          {[1, 2, 3, 4, 5].map((star) => (
                                              star <= minRating ? 
                                            <AiFillStar key={star} className="plumbing-filter-star-icon filled" /> : 
                                            <AiOutlineStar key={star} className="plumbing-filter-star-icon" />
                                        ))}
                                    </div>
                                    <span className="plumbing-filter-rating-text">{minRating}+</span>
                                  </div>
                              </div>
                          </div>
                        )}
                      </div>
  
                      {/* Availability */}
                    <div className="plumbing-filter-section">
                        <div className="plumbing-filter-header-collapsible" onClick={() => toggleSection('availability')}>
                            <h4>Availability</h4>
                            <FaChevronDown style={{ transform: collapsed.availability ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.availability && (
                        <div className="plumbing-filter-options">
                            <label className="plumbing-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="availability"
                                      value="today"
                                      checked={availability === 'today'}
                                      onChange={(e) => setAvailability(e.target.value)}
                                  />
                                  Available Today
                              </label>
                              <label className="plumbing-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="availability"
                                      value="tomorrow"
                                      checked={availability === 'tomorrow'}
                                      onChange={(e) => setAvailability(e.target.value)}
                                  />
                                  Tomorrow
                              </label>
                              <label className="plumbing-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="availability"
                                      value="weekend"
                                      checked={availability === 'weekend'}
                                      onChange={(e) => setAvailability(e.target.value)}
                                  />
                                  This Weekend
                              </label>
                              <label className="plumbing-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="availability"
                                      value="anytime"
                                      checked={availability === 'anytime'}
                                      onChange={(e) => setAvailability(e.target.value)}
                                  />
                                  Any Time
                              </label>
                          </div>
                        )}
                      </div>
  
                      {/* Service Type */}
                    <div className="plumbing-filter-section">
                        <div className="plumbing-filter-header-collapsible" onClick={() => toggleSection('serviceType')}>
                            <h4>Service Type</h4>
                            <FaChevronDown style={{ transform: collapsed.serviceType ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.serviceType && (
                        <div className="plumbing-filter-options">
                            <label className="plumbing-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="leakrepair"
                                      checked={serviceType === 'leakrepair'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Leak Repair
                              </label>
                              <label className="plumbing-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="drainage"
                                      checked={serviceType === 'drainage'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Drainage Cleaning
                              </label>
                              <label className="plumbing-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="installation"
                                      checked={serviceType === 'installation'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Pipe Installation
                              </label>
                              <label className="plumbing-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="bathroom"
                                      checked={serviceType === 'bathroom'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Bathroom Fitting
                              </label>
                          </div>
                        )}
                      </div>
  
                      <button className="plumbing-filter-apply-btn">Apply Filters</button>
                  </div>
  
                  {/* Service Cards Grid */}
                  <div className="plumbing-filter-services-grid">
                      {services.map((service) => (
                        <div key={service.id} className="plumbing-filter-service-card">
                            <div className="plumbing-filter-card-image">
                                  <img src={service.image} alt={service.name} />
                              </div>
                            <div className="plumbing-filter-card-content">
                                <h3 className="plumbing-filter-card-name">{service.name}</h3>
                                <div className="plumbing-filter-card-price">
                                    <span className="plumbing-filter-price-amount">₹{service.price}</span>
                                    <span className="plumbing-filter-price-unit">{service.unit}</span>
                                  </div>
                                <div className="plumbing-filter-card-address">
                                    <IoLocationOutline className="plumbing-filter-location-icon" />
                                    <p>{service.address}</p>
                                </div>
                                <div className="plumbing-filter-card-rating">
                                      ★ {service.rating} ({service.reviews})
                                  </div>
                                  <button className="plumbing-filter-book-button">Book Now</button>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
        );
}

export default PlumbingServicesFilterServiceCards;