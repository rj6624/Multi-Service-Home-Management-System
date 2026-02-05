import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { TbReload } from 'react-icons/tb';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import { LuSlidersHorizontal } from 'react-icons/lu';
import './CleaningServicesFilter-ServiceCards.css';
import cleaningImg from '../assets/images/Cleaning sevice.avif';

function CleaningServicesFilterServiceCards() {
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
          const priceSlider = document.querySelector('.cleaning-filter-price-range-slider input[type="range"]');
          const ratingSlider = document.querySelector('.cleaning-filter-rating-slider input[type="range"]');
          
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
              name: 'SparkleClean Services',
              price: 499,
              unit: 'per room',
              image: cleaningImg,
              address: 'Near rajkot, Gujarat',
              rating: 4.5,
              reviews: 120
          },
          {
              id: 2,
              name: 'Fresh Home Cleaning',
              price: 899,
              unit: 'per house',
              image: cleaningImg,
              address: 'Rajkot City Center',
              rating: 4.8,
              reviews: 85
          },
          {
              id: 3,
              name: 'DeepClean Experts',
              price: 699,
              unit: 'per session',
              image: cleaningImg,
              address: 'Kalawad Road, Rajkot',
              rating: 4.3,
              reviews: 67
          },
          {
              id: 4,
              name: 'Premium Clean Co.',
              price: 1299,
              unit: 'per house',
              image: cleaningImg,
              address: 'University Road, Rajkot',
              rating: 4.9,
              reviews: 150
          },
          {
              id: 5,
              name: 'Quick Clean Services',
              price: 399,
              unit: 'per room',
              image: cleaningImg,
              address: 'Near Railway Station, Rajkot',
              rating: 4.2,
              reviews: 95
          },
          {
              id: 6,
              name: 'EcoClean Solutions',
              price: 799,
              unit: 'per house',
              image: cleaningImg,
              address: 'Gondal Road, Rajkot',
              rating: 4.6,
              reviews: 110
          }
      ];
  
      return (
          <div className="cleaning-filter-container">
              {/* Header */}
              <div className="cleaning-filter-header">
                  <button className="cleaning-filter-back-button" onClick={() => navigate(-1)}>
                      <IoMdArrowRoundBack />
                  </button>
                  <h3 className="cleaning-filter-title">Cleaning Service</h3>
                  <button className="cleaning-filter-mobile-filter-btn" onClick={() => setIsMobileFilterOpen(true)}>
                      <LuSlidersHorizontal />
                  </button>
              </div>
  
              {/* Main Content */}
              <div className="cleaning-filter-content">
                  {/* Mobile Filter Overlay */}
                  {isMobileFilterOpen && (
                      <div className="cleaning-filter-mobile-overlay" onClick={() => setIsMobileFilterOpen(false)}></div>
                  )}
                  
                  {/* Filters Sidebar */}
                  <div className={`cleaning-filter-sidebar ${isMobileFilterOpen ? 'mobile-open' : ''}`}>
                    <div className="cleaning-filter-header-top">
                        <h3 className="cleaning-filter-heading">Refine By</h3>
                        <div className="cleaning-filter-header-actions">
                            <button className="cleaning-filter-reset-button" onClick={handleReset}>
                                <TbReload /> Reset
                            </button>
                            <button className="laundry-filter-close-button" onClick={() => setIsMobileFilterOpen(false)}>
                                ×
                            </button>
                        </div>
                    </div>
  
                      {/* Sort By */}
                    <div className="cleaning-filter-section">
                        <div className="cleaning-filter-header-collapsible" onClick={() => toggleSection('sortBy')}>
                            <h4>Sort By</h4>
                            <FaChevronDown style={{ transform: collapsed.sortBy ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.sortBy && (
                        <div className="cleaning-filter-sort-buttons">
                            <button 
                                className={`cleaning-filter-sort-btn ${sortBy === 'lowToHigh' ? 'active' : ''}`}
                                  onClick={() => setSortBy('lowToHigh')}
                              >
                                  Low to High
                              </button>
                              <button 
                                className={`cleaning-filter-sort-btn ${sortBy === 'highToLow' ? 'active' : ''}`}
                                onClick={() => setSortBy('highToLow')}
                            >
                                High to Low
                            </button>
                            <button 
                                className={`cleaning-filter-sort-btn ${sortBy === 'mostPopular' ? 'active' : ''}`}
                                onClick={() => setSortBy('mostPopular')}
                            >
                                Most Popular
                            </button>
                            <button 
                                className={`cleaning-filter-sort-btn ${sortBy === 'nearest' ? 'active' : ''}`}
                                  onClick={() => setSortBy('nearest')}
                              >
                                  Nearest
                              </button>
                          </div>
                        )}
                      </div>
  
                      {/* Price Range */}
                    <div className="cleaning-filter-section">
                        <div className="cleaning-filter-header-collapsible" onClick={() => toggleSection('priceRange')}>
                            <h4>Price Range</h4>
                            <FaChevronDown style={{ transform: collapsed.priceRange ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.priceRange && (
                        <div className="cleaning-filter-options">
                            <div className="cleaning-filter-price-range-slider">
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
                                <div className="cleaning-filter-price-inputs">
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
                    <div className="cleaning-filter-section">
                        <div className="cleaning-filter-header-collapsible" onClick={() => toggleSection('distance')}>
                            <h4>Distance</h4>
                            <FaChevronDown style={{ transform: collapsed.distance ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.distance && (
                        <div className="cleaning-filter-options">
                            <label className="cleaning-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="distance"
                                      value="within1"
                                      checked={distance === 'within1'}
                                      onChange={(e) => setDistance(e.target.value)}
                                  />
                                  Within 1 Km
                              </label>
                              <label className="cleaning-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="distance"
                                      value="1to5"
                                      checked={distance === '1to5'}
                                      onChange={(e) => setDistance(e.target.value)}
                                  />
                                  1 - 5 Km
                              </label>
                              <label className="cleaning-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="distance"
                                      value="5to10"
                                      checked={distance === '5to10'}
                                      onChange={(e) => setDistance(e.target.value)}
                                  />
                                  5 - 10 Km
                              </label>
                              <label className="cleaning-filter-radio-label">
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
                    <div className="cleaning-filter-section">
                        <div className="cleaning-filter-header-collapsible" onClick={() => toggleSection('rating')}>
                            <h4>Minimum Rating</h4>
                            <FaChevronDown style={{ transform: collapsed.rating ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.rating && (
                        <div className="cleaning-filter-options">
                            <div className="cleaning-filter-rating-slider">
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
                                <div className="cleaning-filter-rating-display">
                                    <div className="cleaning-filter-stars">
                                          {[1, 2, 3, 4, 5].map((star) => (
                                              star <= minRating ? 
                                            <AiFillStar key={star} className="cleaning-filter-star-icon filled" /> : 
                                            <AiOutlineStar key={star} className="cleaning-filter-star-icon" />
                                        ))}
                                    </div>
                                    <span className="cleaning-filter-rating-text">{minRating}+</span>
                                  </div>
                              </div>
                          </div>
                        )}
                      </div>
  
                      {/* Availability */}
                    <div className="cleaning-filter-section">
                        <div className="cleaning-filter-header-collapsible" onClick={() => toggleSection('availability')}>
                            <h4>Availability</h4>
                            <FaChevronDown style={{ transform: collapsed.availability ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.availability && (
                        <div className="cleaning-filter-options">
                            <label className="cleaning-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="availability"
                                      value="today"
                                      checked={availability === 'today'}
                                      onChange={(e) => setAvailability(e.target.value)}
                                  />
                                  Available Today
                              </label>
                              <label className="cleaning-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="availability"
                                      value="tomorrow"
                                      checked={availability === 'tomorrow'}
                                      onChange={(e) => setAvailability(e.target.value)}
                                  />
                                  Tomorrow
                              </label>
                              <label className="cleaning-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="availability"
                                      value="weekend"
                                      checked={availability === 'weekend'}
                                      onChange={(e) => setAvailability(e.target.value)}
                                  />
                                  This Weekend
                              </label>
                              <label className="cleaning-filter-radio-label">
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
                    <div className="cleaning-filter-section">
                        <div className="cleaning-filter-header-collapsible" onClick={() => toggleSection('serviceType')}>
                            <h4>Service Type</h4>
                            <FaChevronDown style={{ transform: collapsed.serviceType ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.serviceType && (
                        <div className="cleaning-filter-options">
                            <label className="cleaning-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="deepcleaning"
                                      checked={serviceType === 'deepcleaning'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Deep Cleaning
                              </label>
                              <label className="cleaning-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="regular"
                                      checked={serviceType === 'regular'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Regular Cleaning
                              </label>
                              <label className="cleaning-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="carpet"
                                      checked={serviceType === 'carpet'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Carpet Cleaning
                              </label>
                              <label className="cleaning-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="window"
                                      checked={serviceType === 'window'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Window Cleaning
                              </label>
                          </div>
                        )}
                      </div>
  
                      <button className="cleaning-filter-apply-btn">Apply Filters</button>
                  </div>
  
                  {/* Service Cards Grid */}
                  <div className="cleaning-filter-services-grid">
                      {services.map((service) => (
                        <div key={service.id} className="cleaning-filter-service-card">
                            <div className="cleaning-filter-card-image">
                                  <img src={service.image} alt={service.name} />
                              </div>
                            <div className="cleaning-filter-card-content">
                                <h3 className="cleaning-filter-card-name">{service.name}</h3>
                                <div className="cleaning-filter-card-price">
                                    <span className="cleaning-filter-price-amount">₹{service.price}</span>
                                    <span className="cleaning-filter-price-unit">{service.unit}</span>
                                  </div>
                                <div className="cleaning-filter-card-address">
                                    <IoLocationOutline className="cleaning-filter-location-icon" />
                                    <p>{service.address}</p>
                                </div>
                                <div className="cleaning-filter-card-rating">
                                      ★ {service.rating} ({service.reviews})
                                  </div>
                                  <button className="cleaning-filter-book-button">Book Now</button>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
        );
}

export default CleaningServicesFilterServiceCards;