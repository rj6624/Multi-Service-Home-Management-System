import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack, IoMdShare, IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';
import './ElectricalServiceDetails-SideBar.css';
import laundryImg from '../assets/images/Laundry.jpg';
import cleaningImg from '../assets/images/Cleaning sevice.avif';
import applianceImg from '../assets/images/Appliance.avif';
import carwashImg from '../assets/images/Carwash.avif';
import personalImg from '../assets/images/PersonalServant.avif';
import tailorImg from '../assets/images/stitch.avif';

function ElectricalServiceDetailsSideBar() {
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState('wiring');
    const [quantity, setQuantity] = useState(1);
    const [isLiked, setIsLiked] = useState(false);

    const serviceTypes = [
        { id: 'wiring', name: 'Wiring & Rewiring', price: 599 },
        { id: 'switchboard', name: 'Switchboard Repair', price: 399 },
        { id: 'fan', name: 'Fan Installation', price: 299 },
        { id: 'lighting', name: 'Lighting Setup', price: 499 }
    ];

    const ratingStats = [
        { stars: 5, count: 180, percentage: 80 },
        { stars: 4, count: 30, percentage: 13 },
        { stars: 3, count: 10, percentage: 4 },
        { stars: 2, count: 5, percentage: 2 },
        { stars: 1, count: 2, percentage: 1 }
    ];

    const reviews = [
        {
            id: 1,
            name: 'Vikram Singh',
            rating: 5,
            comment: 'Excellent electrical service! They fixed my wiring issues quickly and professionally. The electrician was knowledgeable and explained everything clearly.'
        },
        {
            id: 2,
            name: 'Sneha Reddy',
            rating: 5,
            comment: 'Amazing fan installation service! The team was efficient and installed the ceiling fan perfectly. Very satisfied with their work and punctuality.'
        },
        {
            id: 3,
            name: 'Karthik Nair',
            rating: 5,
            comment: 'Quick response for switchboard repair. They identified the fault immediately and fixed it within an hour. Great service at a reasonable price!'
        }
    ];

    const relatedServices = [
        {
            id: 1,
            name: 'VoltTech Electricians',
            price: 349,
            unit: 'per service',
            image: cleaningImg,
            rating: 4.6,
            reviews: 175,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        },
        {
            id: 2,
            name: 'CircuitMaster Services',
            price: 399,
            unit: 'per service',
            image: cleaningImg,
            rating: 4.7,
            reviews: 160,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        },
        {
            id: 3,
            name: 'BrightSpark Electrical',
            price: 329,
            unit: 'per service',
            image: cleaningImg,
            rating: 4.8,
            reviews: 195,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        }
    ];

    const galleryImages = [
        laundryImg,
        cleaningImg,
        applianceImg,
        carwashImg,
        personalImg,
        tailorImg,
        laundryImg,
        cleaningImg
    ];

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => prev > 0 ? prev - 1 : 0);

    return (
        <div className="electrical-details-container">
            <div className="electrical-details-main">
                {/* Image Overlay Text */}
                <div className="electrical-details-image-container">
                    <img src={laundryImg} alt="Electrical Service" className="electrical-details-image" />
                    
                    {/* Header Overlay */}
                    <div className="electrical-details-header">
                        <button className="electrical-details-back-btn" onClick={() => navigate(-1)}>
                            <IoMdArrowRoundBack />
                        </button>
                        <h3 className="electrical-details-page-title">Electrical service</h3>
                        <button className="electrical-details-share-btn">
                            <IoMdShare />
                        </button>
                    </div>

                    {/* Bottom Badges Overlay on image*/}
                    <div className="electrical-details-image-badges">
                        <span className="electrical-details-badge">
                            <span className="badge-icon">⏰</span> 24 - 48 Delivery
                        </span>
                        <span className="electrical-details-badge">
                            <span className="badge-icon">🚚</span> Free Pickup & Drop
                        </span>
                    </div>
                </div>

                <div className="electrical-details-info">
                    <div className="electrical-details-title-row">
                        <h3 className="electrical-details-title">PowerLine Electrical Services</h3>
                        <button 
                            className="electrical-details-like-btn"
                            onClick={() => setIsLiked(!isLiked)}
                        >
                            {isLiked ? <IoMdHeart className="liked" /> : <IoMdHeartEmpty />}
                        </button>
                    </div>
                    <div className="electrical-details-rating-row">
                        <span className="electrical-details-rating">
                            ⭐ 4.6
                        </span>
                        <span className="electrical-details-reviews">(333 reviews)</span>
                    </div>
                    <p className="electrical-details-price">₹299 onwards</p>
                    <div className="electrical-details-location">
                        <IoLocationOutline className="electrical-details-location-icon" />
                        <p>Koramangala, Bangalore • 2.3 km away</p>
                    </div>
                </div>

                <div className="electrical-details-section">
                    <h4 className="electrical-details-section-title">About this service</h4>
                    <p className="electrical-details-about-text">
                        PowerLine Electrical Services is your trusted partner for all electrical needs. We provide certified electricians, 
                        emergency electrical repairs 24/7, and use quality materials to ensure safe and reliable electrical solutions...
                    </p>
                </div>

                <div className="electrical-details-section">
                    <h4 className="electrical-details-section-title">Select Service Type</h4>
                    <div className="electrical-details-service-types">
                        {serviceTypes.map(service => (
                            <button
                                key={service.id}
                                className={`electrical-details-service-type-btn ${
                                    selectedService === service.id ? 'active' : ''
                                }`}
                                onClick={() => setSelectedService(service.id)}
                            >
                                {service.name} ₹{service.price}
                            </button>
                        ))}
                    </div>
                    <button className="electrical-details-book-btn">Book Service</button>
                </div>

                <div className="electrical-details-section">
                    <h4 className="electrical-details-section-title">Photo Gallery</h4>
                    <div className="electrical-details-gallery">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="electrical-details-gallery-item">
                                <img src={image} alt={`Gallery ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="electrical-details-section">
                    <h4 className="electrical-details-section-title">Ratings & Reviews</h4>
                    <div className="electrical-details-ratings">
                        <div className="electrical-details-rating-summary">
                            <div className="electrical-details-rating-score">
                                <h2 className="electrical-details-score">4.9</h2>
                                <p className="electrical-details-total-reviews">(223)</p>
                            </div>
                        </div>
                        <div className="electrical-details-rating-bars">
                            {ratingStats.map(stat => (
                                <div key={stat.stars} className="electrical-details-rating-bar-row">
                                    <div className="electrical-details-stars-display">
                                        {[...Array(stat.stars)].map((_, index) => (
                                            <AiFillStar key={index} className="electrical-details-star-icon" />
                                        ))}
                                    </div>
                                    <div className="electrical-details-bar-container">
                                        <div 
                                            className="electrical-details-bar-fill"
                                            style={{ width: `${stat.percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="electrical-details-bar-count">{stat.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="electrical-details-reviews-list">
                        {reviews.map(review => (
                            <div key={review.id} className="electrical-details-review">
                                <div className="electrical-details-review-avatar">P</div>
                                <div className="electrical-details-review-content">
                                    <div className="electrical-details-review-header">
                                        <h4 className="electrical-details-reviewer-name">{review.name}</h4>
                                        <div className="electrical-details-review-stars">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <AiFillStar key={i} className="electrical-details-review-star" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="electrical-details-review-text">{review.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="electrical-details-view-more-btn">View more</button>
                </div>
            </div>

            {/* Sidebar*/}
            <div className="electrical-details-sidebar">
                {relatedServices.map(service => (
                    <div key={service.id} className="electrical-details-related-card">
                        <div className="electrical-details-related-image">
                            <img src={service.image} alt={service.name} />
                            <div className="electrical-details-related-rating">
                                {service.rating} ⭐ | {service.reviews}
                            </div>
                        </div>
                        <div className="electrical-details-related-info">
                            <h4 className="electrical-details-related-name">{service.name}</h4>
                            <p className="electrical-details-related-price">₹ {service.price} {service.unit}</p>
                            <div className="electrical-details-related-address">
                                <IoLocationOutline className="electrical-details-related-location-icon" />
                                <p>{service.address}</p>
                            </div>
                            <div className="electrical-details-related-actions">
                                <button className="electrical-details-view-details-btn">View Details</button>
                                <button className="electrical-details-add-cart-btn">Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ElectricalServiceDetailsSideBar;