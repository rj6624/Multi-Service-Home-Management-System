import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { TbReload } from 'react-icons/tb';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import { LuSlidersHorizontal } from 'react-icons/lu';
import './ElectricalServicesFilter-ServiceCard.css';
import electricalImg from '../assets/images/Appliance.avif';

function ElectricalServicesFilterServiceCard() {
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
          const priceSlider = document.querySelector('.electrical-filter-price-range-slider input[type="range"]');
          const ratingSlider = document.querySelector('.electrical-filter-rating-slider input[type="range"]');
          
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
              name: 'PowerFix Electricians',
              price: 449,
              unit: 'per visit',
              image: electricalImg,
              address: 'Kalawad Road, Rajkot',
              rating: 4.6,
              reviews: 145
          },
          {
              id: 2,
              name: 'VoltMaster Services',
              price: 699,
              unit: 'per service',
              image: electricalImg,
              address: 'University Road, Rajkot',
              rating: 4.8,
              reviews: 128
          },
          {
              id: 3,
              name: 'BrightLight Electrical',
              price: 399,
              unit: 'per hour',
              image: electricalImg,
              address: 'Gondal Road, Rajkot',
              rating: 4.4,
              reviews: 87
          },
          {
              id: 4,
              name: 'SafeWire Solutions',
              price: 799,
              unit: 'per service',
              image: electricalImg,
              address: 'Rajkot City Center',
              rating: 4.7,
              reviews: 156
          },
          {
              id: 5,
              name: 'QuickSpark Electrical',
              price: 549,
              unit: 'per visit',
              image: electricalImg,
              address: 'Near Railway Station, Rajkot',
              rating: 4.5,
              reviews: 103
          },
          {
              id: 6,
              name: 'ElectroTech Experts',
              price: 649,
              unit: 'per service',
              image: electricalImg,
              address: 'Mavdi Main Road, Rajkot',
              rating: 4.3,
              reviews: 94
          }
      ];
  
      return (
          <div className="electrical-filter-container">
              {/* Header */}
              <div className="electrical-filter-header">
                  <button className="electrical-filter-back-button" onClick={() => navigate(-1)}>
                      <IoMdArrowRoundBack />
                  </button>
                  <h3 className="electrical-filter-title">Electrical Service</h3>
                  <button className="electrical-filter-mobile-filter-btn" onClick={() => setIsMobileFilterOpen(true)}>
                      <LuSlidersHorizontal />
                  </button>
              </div>
  
              {/* Main Content */}
              <div className="electrical-filter-content">
                  {/* Mobile Filter Overlay */}
                  {isMobileFilterOpen && (
                      <div className="electrical-filter-mobile-overlay" onClick={() => setIsMobileFilterOpen(false)}></div>
                  )}
                  
                  {/* Filters Sidebar */}
                  <div className={`electrical-filter-sidebar ${isMobileFilterOpen ? 'mobile-open' : ''}`}>
                    <div className="electrical-filter-header-top">
                        <h3 className="electrical-filter-heading">Refine By</h3>
                        <div className="electrical-filter-header-actions">
                            <button className="electrical-filter-reset-button" onClick={handleReset}>
                                <TbReload /> Reset
                            </button>
                            <button className="laundry-filter-close-button" onClick={() => setIsMobileFilterOpen(false)}>
                                ×
                            </button>
                        </div>
                    </div>
  
                      {/* Sort By */}
                    <div className="electrical-filter-section">
                        <div className="electrical-filter-header-collapsible" onClick={() => toggleSection('sortBy')}>
                            <h4>Sort By</h4>
                            <FaChevronDown style={{ transform: collapsed.sortBy ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.sortBy && (
                        <div className="electrical-filter-sort-buttons">
                            <button 
                                className={`electrical-filter-sort-btn ${sortBy === 'lowToHigh' ? 'active' : ''}`}
                                  onClick={() => setSortBy('lowToHigh')}
                              >
                                  Low to High
                              </button>
                              <button 
                                className={`electrical-filter-sort-btn ${sortBy === 'highToLow' ? 'active' : ''}`}
                                onClick={() => setSortBy('highToLow')}
                            >
                                High to Low
                            </button>
                            <button 
                                className={`electrical-filter-sort-btn ${sortBy === 'mostPopular' ? 'active' : ''}`}
                                onClick={() => setSortBy('mostPopular')}
                            >
                                Most Popular
                            </button>
                            <button 
                                className={`electrical-filter-sort-btn ${sortBy === 'nearest' ? 'active' : ''}`}
                                  onClick={() => setSortBy('nearest')}
                              >
                                  Nearest
                              </button>
                          </div>
                        )}
                      </div>
  
                      {/* Price Range */}
                    <div className="electrical-filter-section">
                        <div className="electrical-filter-header-collapsible" onClick={() => toggleSection('priceRange')}>
                            <h4>Price Range</h4>
                            <FaChevronDown style={{ transform: collapsed.priceRange ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.priceRange && (
                        <div className="electrical-filter-options">
                            <div className="electrical-filter-price-range-slider">
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
                                <div className="electrical-filter-price-inputs">
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
                    <div className="electrical-filter-section">
                        <div className="electrical-filter-header-collapsible" onClick={() => toggleSection('distance')}>
                            <h4>Distance</h4>
                            <FaChevronDown style={{ transform: collapsed.distance ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.distance && (
                        <div className="electrical-filter-options">
                            <label className="electrical-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="distance"
                                      value="within1"
                                      checked={distance === 'within1'}
                                      onChange={(e) => setDistance(e.target.value)}
                                  />
                                  Within 1 Km
                              </label>
                              <label className="electrical-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="distance"
                                      value="1to5"
                                      checked={distance === '1to5'}
                                      onChange={(e) => setDistance(e.target.value)}
                                  />
                                  1 - 5 Km
                              </label>
                              <label className="electrical-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="distance"
                                      value="5to10"
                                      checked={distance === '5to10'}
                                      onChange={(e) => setDistance(e.target.value)}
                                  />
                                  5 - 10 Km
                              </label>
                              <label className="electrical-filter-radio-label">
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
                    <div className="electrical-filter-section">
                        <div className="electrical-filter-header-collapsible" onClick={() => toggleSection('rating')}>
                            <h4>Minimum Rating</h4>
                            <FaChevronDown style={{ transform: collapsed.rating ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.rating && (
                        <div className="electrical-filter-options">
                            <div className="electrical-filter-rating-slider">
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
                                <div className="electrical-filter-rating-display">
                                    <div className="electrical-filter-stars">
                                          {[1, 2, 3, 4, 5].map((star) => (
                                              star <= minRating ? 
                                            <AiFillStar key={star} className="electrical-filter-star-icon filled" /> : 
                                            <AiOutlineStar key={star} className="electrical-filter-star-icon" />
                                        ))}
                                    </div>
                                    <span className="electrical-filter-rating-text">{minRating}+</span>
                                  </div>
                              </div>
                          </div>
                        )}
                      </div>
  
                      {/* Availability */}
                    <div className="electrical-filter-section">
                        <div className="electrical-filter-header-collapsible" onClick={() => toggleSection('availability')}>
                            <h4>Availability</h4>
                            <FaChevronDown style={{ transform: collapsed.availability ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.availability && (
                        <div className="electrical-filter-options">
                            <label className="electrical-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="availability"
                                      value="today"
                                      checked={availability === 'today'}
                                      onChange={(e) => setAvailability(e.target.value)}
                                  />
                                  Available Today
                              </label>
                              <label className="electrical-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="availability"
                                      value="tomorrow"
                                      checked={availability === 'tomorrow'}
                                      onChange={(e) => setAvailability(e.target.value)}
                                  />
                                  Tomorrow
                              </label>
                              <label className="electrical-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="availability"
                                      value="weekend"
                                      checked={availability === 'weekend'}
                                      onChange={(e) => setAvailability(e.target.value)}
                                  />
                                  This Weekend
                              </label>
                              <label className="electrical-filter-radio-label">
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
                    <div className="electrical-filter-section">
                        <div className="electrical-filter-header-collapsible" onClick={() => toggleSection('serviceType')}>
                            <h4>Service Type</h4>
                            <FaChevronDown style={{ transform: collapsed.serviceType ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.serviceType && (
                        <div className="electrical-filter-options">
                            <label className="electrical-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="wiring"
                                      checked={serviceType === 'wiring'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Wiring & Rewiring
                              </label>
                              <label className="electrical-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="appliance"
                                      checked={serviceType === 'appliance'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Appliance Repair
                              </label>
                              <label className="electrical-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="lighting"
                                      checked={serviceType === 'lighting'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Lighting Installation
                              </label>
                              <label className="electrical-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="switchboard"
                                      checked={serviceType === 'switchboard'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Switchboard Upgrade
                              </label>
                          </div>
                        )}
                      </div>
  
                      <button className="electrical-filter-apply-btn">Apply Filters</button>
                  </div>
  
                  {/* Service Cards Grid */}
                  <div className="electrical-filter-services-grid">
                      {services.map((service) => (
                        <div key={service.id} className="electrical-filter-service-card">
                            <div className="electrical-filter-card-image">
                                  <img src={service.image} alt={service.name} />
                              </div>
                            <div className="electrical-filter-card-content">
                                <h3 className="electrical-filter-card-name">{service.name}</h3>
                                <div className="electrical-filter-card-price">
                                    <span className="electrical-filter-price-amount">₹{service.price}</span>
                                    <span className="electrical-filter-price-unit">{service.unit}</span>
                                  </div>
                                <div className="electrical-filter-card-address">
                                    <IoLocationOutline className="electrical-filter-location-icon" />
                                    <p>{service.address}</p>
                                </div>
                                <div className="electrical-filter-card-rating">
                                      ★ {service.rating} ({service.reviews})
                                  </div>
                                  <button className="electrical-filter-book-button">Book Now</button>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
        );
}

export default ElectricalServicesFilterServiceCard;