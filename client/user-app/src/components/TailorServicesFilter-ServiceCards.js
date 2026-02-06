import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { TbReload } from 'react-icons/tb';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import { LuSlidersHorizontal } from 'react-icons/lu';
import './TailorServicesFilter-ServiceCards.css';
import tailorImg from '../assets/images/stitch.avif';

function TailorServicesFilterServiceCards() {
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
          const priceSlider = document.querySelector('.tailor-filter-price-range-slider input[type="range"]');
          const ratingSlider = document.querySelector('.tailor-filter-rating-slider input[type="range"]');
          
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
              name: 'Perfect Fit Tailors',
              price: 299,
              unit: 'per dress',
              image: tailorImg,
              address: 'Kalawad Road, Rajkot',
              rating: 4.6,
              reviews: 142
          },
          {
              id: 2,
              name: 'Elite Stitching Studio',
              price: 499,
              unit: 'per suit',
              image: tailorImg,
              address: 'University Road, Rajkot',
              rating: 4.8,
              reviews: 118
          },
          {
              id: 3,
              name: 'QuickStitch Tailors',
              price: 199,
              unit: 'per alteration',
              image: tailorImg,
              address: 'Gondal Road, Rajkot',
              rating: 4.3,
              reviews: 87
          },
          {
              id: 4,
              name: 'Master Tailor Services',
              price: 699,
              unit: 'per suit',
              image: tailorImg,
              address: 'Rajkot City Center',
              rating: 4.9,
              reviews: 176
          },
          {
              id: 5,
              name: 'Fashion Fit Tailoring',
              price: 349,
              unit: 'per dress',
              image: tailorImg,
              address: 'Near Railway Station, Rajkot',
              rating: 4.5,
              reviews: 104
          },
          {
              id: 6,
              name: 'Premium Stitch Works',
              price: 449,
              unit: 'per outfit',
              image: tailorImg,
              address: 'Mavdi Main Road, Rajkot',
              rating: 4.7,
              reviews: 129
          }
      ];
  
      return (
          <div className="tailor-filter-container">
              {/* Header */}
              <div className="tailor-filter-header">
                  <button className="tailor-filter-back-button" onClick={() => navigate(-1)}>
                      <IoMdArrowRoundBack />
                  </button>
                  <h3 className="tailor-filter-title">Tailor Service</h3>
                  <button className="tailor-filter-mobile-filter-btn" onClick={() => setIsMobileFilterOpen(true)}>
                      <LuSlidersHorizontal />
                  </button>
              </div>
  
              {/* Main Content */}
              <div className="tailor-filter-content">
                  {/* Mobile Filter Overlay */}
                  {isMobileFilterOpen && (
                      <div className="tailor-filter-mobile-overlay" onClick={() => setIsMobileFilterOpen(false)}></div>
                  )}
                  
                  {/* Filters Sidebar */}
                  <div className={`tailor-filter-sidebar ${isMobileFilterOpen ? 'mobile-open' : ''}`}>
                    <div className="tailor-filter-header-top">
                        <h3 className="tailor-filter-heading">Refine By</h3>
                        <div className="tailor-filter-header-actions">
                            <button className="tailor-filter-reset-button" onClick={handleReset}>
                                <TbReload /> Reset
                            </button>
                            <button className="laundry-filter-close-button" onClick={() => setIsMobileFilterOpen(false)}>
                                ×
                            </button>
                        </div>
                    </div>
  
                      {/* Sort By */}
                    <div className="tailor-filter-section">
                        <div className="tailor-filter-header-collapsible" onClick={() => toggleSection('sortBy')}>
                            <h4>Sort By</h4>
                            <FaChevronDown style={{ transform: collapsed.sortBy ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.sortBy && (
                        <div className="tailor-filter-sort-buttons">
                            <button 
                                className={`tailor-filter-sort-btn ${sortBy === 'lowToHigh' ? 'active' : ''}`}
                                  onClick={() => setSortBy('lowToHigh')}
                              >
                                  Low to High
                              </button>
                              <button 
                                className={`tailor-filter-sort-btn ${sortBy === 'highToLow' ? 'active' : ''}`}
                                onClick={() => setSortBy('highToLow')}
                            >
                                High to Low
                            </button>
                            <button 
                                className={`tailor-filter-sort-btn ${sortBy === 'mostPopular' ? 'active' : ''}`}
                                onClick={() => setSortBy('mostPopular')}
                            >
                                Most Popular
                            </button>
                            <button 
                                className={`tailor-filter-sort-btn ${sortBy === 'nearest' ? 'active' : ''}`}
                                  onClick={() => setSortBy('nearest')}
                              >
                                  Nearest
                              </button>
                          </div>
                        )}
                      </div>
  
                      {/* Price Range */}
                    <div className="tailor-filter-section">
                        <div className="tailor-filter-header-collapsible" onClick={() => toggleSection('priceRange')}>
                            <h4>Price Range</h4>
                            <FaChevronDown style={{ transform: collapsed.priceRange ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.priceRange && (
                        <div className="tailor-filter-options">
                            <div className="tailor-filter-price-range-slider">
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
                                <div className="tailor-filter-price-inputs">
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
                    <div className="tailor-filter-section">
                        <div className="tailor-filter-header-collapsible" onClick={() => toggleSection('distance')}>
                            <h4>Distance</h4>
                            <FaChevronDown style={{ transform: collapsed.distance ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.distance && (
                        <div className="tailor-filter-options">
                            <label className="tailor-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="distance"
                                      value="within1"
                                      checked={distance === 'within1'}
                                      onChange={(e) => setDistance(e.target.value)}
                                  />
                                  Within 1 Km
                              </label>
                              <label className="tailor-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="distance"
                                      value="1to5"
                                      checked={distance === '1to5'}
                                      onChange={(e) => setDistance(e.target.value)}
                                  />
                                  1 - 5 Km
                              </label>
                              <label className="tailor-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="distance"
                                      value="5to10"
                                      checked={distance === '5to10'}
                                      onChange={(e) => setDistance(e.target.value)}
                                  />
                                  5 - 10 Km
                              </label>
                              <label className="tailor-filter-radio-label">
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
                    <div className="tailor-filter-section">
                        <div className="tailor-filter-header-collapsible" onClick={() => toggleSection('rating')}>
                            <h4>Minimum Rating</h4>
                            <FaChevronDown style={{ transform: collapsed.rating ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.rating && (
                        <div className="tailor-filter-options">
                            <div className="tailor-filter-rating-slider">
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
                                <div className="tailor-filter-rating-display">
                                    <div className="tailor-filter-stars">
                                          {[1, 2, 3, 4, 5].map((star) => (
                                              star <= minRating ? 
                                            <AiFillStar key={star} className="tailor-filter-star-icon filled" /> : 
                                            <AiOutlineStar key={star} className="tailor-filter-star-icon" />
                                        ))}
                                    </div>
                                    <span className="tailor-filter-rating-text">{minRating}+</span>
                                  </div>
                              </div>
                          </div>
                        )}
                      </div>
  
                      {/* Availability */}
                    <div className="tailor-filter-section">
                        <div className="tailor-filter-header-collapsible" onClick={() => toggleSection('availability')}>
                            <h4>Availability</h4>
                            <FaChevronDown style={{ transform: collapsed.availability ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.availability && (
                        <div className="tailor-filter-options">
                            <label className="tailor-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="availability"
                                      value="today"
                                      checked={availability === 'today'}
                                      onChange={(e) => setAvailability(e.target.value)}
                                  />
                                  Available Today
                              </label>
                              <label className="tailor-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="availability"
                                      value="tomorrow"
                                      checked={availability === 'tomorrow'}
                                      onChange={(e) => setAvailability(e.target.value)}
                                  />
                                  Tomorrow
                              </label>
                              <label className="tailor-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="availability"
                                      value="weekend"
                                      checked={availability === 'weekend'}
                                      onChange={(e) => setAvailability(e.target.value)}
                                  />
                                  This Weekend
                              </label>
                              <label className="tailor-filter-radio-label">
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
                    <div className="tailor-filter-section">
                        <div className="tailor-filter-header-collapsible" onClick={() => toggleSection('serviceType')}>
                            <h4>Service Type</h4>
                            <FaChevronDown style={{ transform: collapsed.serviceType ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                        </div>
                        {!collapsed.serviceType && (
                        <div className="tailor-filter-options">
                            <label className="tailor-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="stitching"
                                      checked={serviceType === 'stitching'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Custom Stitching
                              </label>
                              <label className="tailor-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="alteration"
                                      checked={serviceType === 'alteration'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Alterations
                              </label>
                              <label className="tailor-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="embroidery"
                                      checked={serviceType === 'embroidery'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Embroidery Work
                              </label>
                              <label className="tailor-filter-radio-label">
                                  <input 
                                      type="radio"
                                      name="serviceType"
                                      value="designer"
                                      checked={serviceType === 'designer'}
                                      onChange={(e) => setServiceType(e.target.value)}
                                  />
                                  Designer Outfits
                              </label>
                          </div>
                        )}
                      </div>
  
                      <button className="tailor-filter-apply-btn">Apply Filters</button>
                  </div>
  
                  {/* Service Cards Grid */}
                  <div className="tailor-filter-services-grid">
                      {services.map((service) => (
                        <div key={service.id} className="tailor-filter-service-card">
                            <div className="tailor-filter-card-image">
                                  <img src={service.image} alt={service.name} />
                              </div>
                            <div className="tailor-filter-card-content">
                                <h3 className="tailor-filter-card-name">{service.name}</h3>
                                <div className="tailor-filter-card-price">
                                    <span className="tailor-filter-price-amount">₹{service.price}</span>
                                    <span className="tailor-filter-price-unit">{service.unit}</span>
                                  </div>
                                <div className="tailor-filter-card-address">
                                    <IoLocationOutline className="tailor-filter-location-icon" />
                                    <p>{service.address}</p>
                                </div>
                                <div className="tailor-filter-card-rating">
                                      ★ {service.rating} ({service.reviews})
                                  </div>
                                  <button className="tailor-filter-book-button" onClick={() => navigate('/tailor-service-list/details')}>Book Now</button>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
        );
}

export default TailorServicesFilterServiceCards;