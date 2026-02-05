import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { TbReload } from 'react-icons/tb';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import { LuSlidersHorizontal } from 'react-icons/lu';
import './PersonalServicesFilter-ServiceCards.css';
import personalImg from '../assets/images/PersonalServant.avif';

function PersonalServicesFilterServiceCards() {
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
          const priceSlider = document.querySelector('.personal-filter-price-range-slider input[type="range"]');
          const ratingSlider = document.querySelector('.personal-filter-rating-slider input[type="range"]');
          
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
              name: 'Elite Home Care Services',
              price: 399,
              unit: 'per day',
              image: personalImg,
              address: 'Kalawad Road, Rajkot',
              rating: 4.6,
              reviews: 167
          },
          {
              id: 2,
              name: 'TrustedHelp Personal Care',
              price: 599,
              unit: 'per day',
              image: personalImg,
              address: 'University Road, Rajkot',
              rating: 4.8,
              reviews: 215
          },
          {
              id: 3,
              name: 'QuickAssist Home Help',
              price: 299,
              unit: 'per day',
              image: personalImg,
              address: 'Gondal Road, Rajkot',
              rating: 4.4,
              reviews: 98
          },
          {
              id: 4,
              name: 'Premium Care Providers',
              price: 749,
              unit: 'per day',
              image: personalImg,
              address: 'Rajkot City Center',
              rating: 4.9,
              reviews: 243
          },
          {
              id: 5,
              name: 'Reliable Home Support',
              price: 449,
              unit: 'per day',
              image: personalImg,
              address: 'Near Railway Station, Rajkot',
              rating: 4.5,
              reviews: 134
          },
          {
              id: 6,
              name: '24/7 Personal Assistance',
              price: 699,
              unit: 'per day',
              image: personalImg,
              address: 'Mavdi Main Road, Rajkot',
              rating: 4.7,
              reviews: 189
          }
      ];
  
      return (
          <div className="personal-filter-container">
              {/* Header */}
              <div className="personal-filter-header">
                  <button className="personal-filter-back-button" onClick={() => navigate(-1)}>
                      <IoMdArrowRoundBack />
                  </button>
                  <h3 className="personal-filter-title">Personal Service</h3>
                  <button className="personal-filter-mobile-filter-btn" onClick={() => setIsMobileFilterOpen(true)}>
                      <LuSlidersHorizontal />
                  </button>
              </div>
  
              {/* Main Content */}
              <div className="personal-filter-content">
                  {/* Mobile Filter Overlay */}
                  {isMobileFilterOpen && (
                      <div className="personal-filter-mobile-overlay" onClick={() => setIsMobileFilterOpen(false)}></div>
                  )}
                  
                  {/* Filters Sidebar */}
                  <div className={`personal-filter-sidebar ${isMobileFilterOpen ? 'mobile-open' : ''}`}>
                    <div className="personal-filter-header-top">
                        <h3 className="personal-filter-heading">Refine By</h3>
                        <div className="personal-filter-header-actions">
                            <button className="personal-filter-reset-button" onClick={handleReset}>
                                <TbReload /> Reset
                            </button>
                            <button className="laundry-filter-close-button" onClick={() => setIsMobileFilterOpen(false)}>
                                ×
                            </button>
                        </div>
                    </div>
  
                      {/* Sort By */}
                    <div className="personal-filter-section">
                        <div className="personal-filter-header-collapsible" onClick={() => toggleSection('sortBy')}>
                            <h4>Sort By</h4>
                            <FaChevronDown style={{ transform: collapsed.sortBy ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.sortBy && (
                        <div className="personal-filter-sort-buttons">
                            <button 
                                className={`personal-filter-sort-btn ${sortBy === 'lowToHigh' ? 'active' : ''}`}
                                  onClick={() => setSortBy('lowToHigh')}
                              >
                                  Low to High
                              </button>
                              <button 
                                className={`personal-filter-sort-btn ${sortBy === 'highToLow' ? 'active' : ''}`}
                                onClick={() => setSortBy('highToLow')}
                            >
                                High to Low
                            </button>
                            <button 
                                className={`personal-filter-sort-btn ${sortBy === 'mostPopular' ? 'active' : ''}`}
                                onClick={() => setSortBy('mostPopular')}
                            >
                                Most Popular
                            </button>
                            <button 
                                className={`personal-filter-sort-btn ${sortBy === 'nearest' ? 'active' : ''}`}
                                  onClick={() => setSortBy('nearest')}
                              >
                                  Nearest
                              </button>
                          </div>
                        )}
                      </div>
  
                      {/* Price Range */}
                    <div className="personal-filter-section">
                        <div className="personal-filter-header-collapsible" onClick={() => toggleSection('priceRange')}>
                            <h4>Price Range</h4>
                            <FaChevronDown style={{ transform: collapsed.priceRange ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.priceRange && (
                        <div className="personal-filter-options">
                            <div className="personal-filter-price-range-slider">
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
                                <div className="personal-filter-price-inputs">
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
                    <div className="personal-filter-section">
                        <div className="personal-filter-header-collapsible" onClick={() => toggleSection('distance')}>
                            <h4>Distance</h4>
                            <FaChevronDown style={{ transform: collapsed.distance ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.distance && (
                        <div className="personal-filter-options">
                            <label className="personal-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="distance"
                                      value="within1"
                                      checked={distance === 'within1'}
                                      onChange={(e) => setDistance(e.target.value)}
                                  />
                                  Within 1 Km
                              </label>
                              <label className="personal-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="distance"
                                      value="1to5"
                                      checked={distance === '1to5'}
                                      onChange={(e) => setDistance(e.target.value)}
                                  />
                                  1 - 5 Km
                              </label>
                              <label className="personal-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="distance"
                                      value="5to10"
                                      checked={distance === '5to10'}
                                      onChange={(e) => setDistance(e.target.value)}
                                  />
                                  5 - 10 Km
                              </label>
                              <label className="personal-filter-radio-label">
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
                    <div className="personal-filter-section">
                        <div className="personal-filter-header-collapsible" onClick={() => toggleSection('rating')}>
                            <h4>Minimum Rating</h4>
                            <FaChevronDown style={{ transform: collapsed.rating ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.rating && (
                        <div className="personal-filter-options">
                            <div className="personal-filter-rating-slider">
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
                                <div className="personal-filter-rating-display">
                                    <div className="personal-filter-stars">
                                          {[1, 2, 3, 4, 5].map((star) => (
                                              star <= minRating ? 
                                            <AiFillStar key={star} className="personal-filter-star-icon filled" /> : 
                                            <AiOutlineStar key={star} className="personal-filter-star-icon" />
                                        ))}
                                    </div>
                                    <span className="personal-filter-rating-text">{minRating}+</span>
                                  </div>
                              </div>
                          </div>
                        )}
                      </div>
  
                      {/* Availability */}
                    <div className="personal-filter-section">
                        <div className="personal-filter-header-collapsible" onClick={() => toggleSection('availability')}>
                            <h4>Availability</h4>
                            <FaChevronDown style={{ transform: collapsed.availability ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.availability && (
                        <div className="personal-filter-options">
                            <label className="personal-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="availability"
                                      value="today"
                                      checked={availability === 'today'}
                                      onChange={(e) => setAvailability(e.target.value)}
                                  />
                                  Available Today
                              </label>
                              <label className="personal-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="availability"
                                      value="tomorrow"
                                      checked={availability === 'tomorrow'}
                                      onChange={(e) => setAvailability(e.target.value)}
                                  />
                                  Tomorrow
                              </label>
                              <label className="personal-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="availability"
                                      value="weekend"
                                      checked={availability === 'weekend'}
                                      onChange={(e) => setAvailability(e.target.value)}
                                  />
                                  This Weekend
                              </label>
                              <label className="personal-filter-radio-label">
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
                    <div className="personal-filter-section">
                        <div className="personal-filter-header-collapsible" onClick={() => toggleSection('serviceType')}>
                            <h4>Service Type</h4>
                            <FaChevronDown style={{ transform: collapsed.serviceType ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.serviceType && (
                        <div className="personal-filter-options">
                            <label className="personal-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="babysitter"
                                      checked={serviceType === 'babysitter'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Babysitter
                              </label>
                              <label className="personal-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="eldercare"
                                      checked={serviceType === 'eldercare'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Elder Care
                              </label>
                              <label className="personal-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="househelp"
                                      checked={serviceType === 'househelp'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  House Help
                              </label>
                              <label className="personal-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="cook"
                                      checked={serviceType === 'cook'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Cook
                              </label>
                          </div>
                        )}
                      </div>
  
                      <button className="personal-filter-apply-btn">Apply Filters</button>
                  </div>
  
                  {/* Service Cards Grid */}
                  <div className="personal-filter-services-grid">
                      {services.map((service) => (
                        <div key={service.id} className="personal-filter-service-card">
                            <div className="personal-filter-card-image">
                                  <img src={service.image} alt={service.name} />
                              </div>
                            <div className="personal-filter-card-content">
                                <h3 className="personal-filter-card-name">{service.name}</h3>
                                <div className="personal-filter-card-price">
                                    <span className="personal-filter-price-amount">₹{service.price}</span>
                                    <span className="personal-filter-price-unit">{service.unit}</span>
                                  </div>
                                <div className="personal-filter-card-address">
                                    <IoLocationOutline className="personal-filter-location-icon" />
                                    <p>{service.address}</p>
                                </div>
                                <div className="personal-filter-card-rating">
                                      ★ {service.rating} ({service.reviews})
                                  </div>
                                  <button className="personal-filter-book-button">Book Now</button>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
        );
}

export default PersonalServicesFilterServiceCards;