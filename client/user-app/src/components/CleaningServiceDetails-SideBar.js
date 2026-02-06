import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack, IoMdShare, IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';
import './CleaningServiceDetails-SideBar.css';
import laundryImg from '../assets/images/Laundry.jpg';
import cleaningImg from '../assets/images/Cleaning sevice.avif';
import applianceImg from '../assets/images/Appliance.avif';
import carwashImg from '../assets/images/Carwash.avif';
import personalImg from '../assets/images/PersonalServant.avif';
import tailorImg from '../assets/images/stitch.avif';

function CleaningServiceDetailsSideBar() {
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState('regular');
    const [quantity, setQuantity] = useState(1);
    const [isLiked, setIsLiked] = useState(false);

    const serviceTypes = [
        { id: 'regular', name: 'Regular Cleaning', price: 299 },
        { id: 'deep', name: 'Deep Cleaning', price: 599 },
        { id: 'kitchen', name: 'Kitchen Cleaning', price: 399 },
        { id: 'bathroom', name: 'Bathroom Cleaning', price: 249 }
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
            name: 'Pooja Sharma',
            rating: 5,
            comment: 'Excellent service! My home was spotlessly clean and the team was very professional. They arrived on time and finished within the estimated time.'
        },
        {
            id: 2,
            name: 'Rahul Kumar',
            rating: 5,
            comment: 'Amazing deep cleaning service! Every corner of my house is sparkling. The staff used eco-friendly products and were very careful with my furniture.'
        },
        {
            id: 3,
            name: 'Anjali Mehta',
            rating: 5,
            comment: 'Very satisfied with the bathroom cleaning service. They removed all the tough stains and the tiles look brand new. Highly recommend!'
        }
    ];

    const relatedServices = [
        {
            id: 1,
            name: 'SparkleClean Pro',
            price: 299,
            unit: 'per room',
            image: cleaningImg,
            rating: 4.7,
            reviews: 120,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        },
        {
            id: 2,
            name: 'Crystal Clear Services',
            price: 349,
            unit: 'per room',
            image: cleaningImg,
            rating: 4.5,
            reviews: 95,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        },
        {
            id: 3,
            name: 'Fresh Home Cleaners',
            price: 279,
            unit: 'per room',
            image: cleaningImg,
            rating: 4.8,
            reviews: 150,
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
        <div className="cleaning-details-container">
            <div className="cleaning-details-main">
                {/* Image Overlay Text */}
                <div className="cleaning-details-image-container">
                    <img src={laundryImg} alt="Laundry Service" className="cleaning-details-image" />
                    
                    {/* Header Overlay */}
                    <div className="cleaning-details-header">
                        <button className="cleaning-details-back-btn" onClick={() => navigate(-1)}>
                            <IoMdArrowRoundBack />
                        </button>
                        <h3 className="cleaning-details-page-title">Cleaning service</h3>
                        <button className="cleaning-details-share-btn">
                            <IoMdShare />
                        </button>
                    </div>

                    {/* Bottom Badges Overlay on image*/}
                    <div className="cleaning-details-image-badges">
                        <span className="cleaning-details-badge">
                            <span className="badge-icon">⏰</span> 24 - 48 Delivery
                        </span>
                        <span className="cleaning-details-badge">
                            <span className="badge-icon">🚚</span> Free Pickup & Drop
                        </span>
                    </div>
                </div>

                <div className="cleaning-details-info">
                    <div className="cleaning-details-title-row">
                        <h3 className="cleaning-details-title">SparkleClean Home Services</h3>
                        <button 
                            className="cleaning-details-like-btn"
                            onClick={() => setIsLiked(!isLiked)}
                        >
                            {isLiked ? <IoMdHeart className="liked" /> : <IoMdHeartEmpty />}
                        </button>
                    </div>
                    <div className="cleaning-details-rating-row">
                        <span className="cleaning-details-rating">
                            ⭐ 4.6
                        </span>
                        <span className="cleaning-details-reviews">(333 reviews)</span>
                    </div>
                    <p className="cleaning-details-price">₹249 onwards</p>
                    <div className="cleaning-details-location">
                        <IoLocationOutline className="cleaning-details-location-icon" />
                        <p>Koramangala, Bangalore • 2.3 km away</p>
                    </div>
                </div>

                <div className="cleaning-details-section">
                    <h4 className="cleaning-details-section-title">About this service</h4>
                    <p className="cleaning-details-about-text">
                        SparkleClean Home Services is your trusted partner for all cleaning needs. We use eco-friendly cleaning products, 
                        professional-grade equipment, and employ trained staff to ensure your home sparkles...
                    </p>
                </div>

                <div className="cleaning-details-section">
                    <h4 className="cleaning-details-section-title">Select Service Type</h4>
                    <div className="cleaning-details-service-types">
                        {serviceTypes.map(service => (
                            <button
                                key={service.id}
                                className={`cleaning-details-service-type-btn ${
                                    selectedService === service.id ? 'active' : ''
                                }`}
                                onClick={() => setSelectedService(service.id)}
                            >
                                {service.name} ₹{service.price}
                            </button>
                        ))}
                    </div>
                    <button className="cleaning-details-book-btn">Book Service</button>
                </div>

                <div className="cleaning-details-section">
                    <h4 className="cleaning-details-section-title">Photo Gallery</h4>
                    <div className="cleaning-details-gallery">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="cleaning-details-gallery-item">
                                <img src={image} alt={`Gallery ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="cleaning-details-section">
                    <h4 className="cleaning-details-section-title">Ratings & Reviews</h4>
                    <div className="cleaning-details-ratings">
                        <div className="cleaning-details-rating-summary">
                            <div className="cleaning-details-rating-score">
                                <h2 className="cleaning-details-score">4.9</h2>
                                <p className="cleaning-details-total-reviews">(223)</p>
                            </div>
                        </div>
                        <div className="cleaning-details-rating-bars">
                            {ratingStats.map(stat => (
                                <div key={stat.stars} className="cleaning-details-rating-bar-row">
                                    <div className="cleaning-details-stars-display">
                                        {[...Array(stat.stars)].map((_, index) => (
                                            <AiFillStar key={index} className="cleaning-details-star-icon" />
                                        ))}
                                    </div>
                                    <div className="cleaning-details-bar-container">
                                        <div 
                                            className="cleaning-details-bar-fill"
                                            style={{ width: `${stat.percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="cleaning-details-bar-count">{stat.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="cleaning-details-reviews-list">
                        {reviews.map(review => (
                            <div key={review.id} className="cleaning-details-review">
                                <div className="cleaning-details-review-avatar">P</div>
                                <div className="cleaning-details-review-content">
                                    <div className="cleaning-details-review-header">
                                        <h4 className="cleaning-details-reviewer-name">{review.name}</h4>
                                        <div className="cleaning-details-review-stars">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <AiFillStar key={i} className="cleaning-details-review-star" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="cleaning-details-review-text">{review.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="cleaning-details-view-more-btn">View more</button>
                </div>
            </div>

            {/* Sidebar*/}
            <div className="cleaning-details-sidebar">
                {relatedServices.map(service => (
                    <div key={service.id} className="cleaning-details-related-card">
                        <div className="cleaning-details-related-image">
                            <img src={service.image} alt={service.name} />
                            <div className="cleaning-details-related-rating">
                                {service.rating} ⭐ | {service.reviews}
                            </div>
                        </div>
                        <div className="cleaning-details-related-info">
                            <h4 className="cleaning-details-related-name">{service.name}</h4>
                            <p className="cleaning-details-related-price">₹ {service.price} {service.unit}</p>
                            <div className="cleaning-details-related-address">
                                <IoLocationOutline className="cleaning-details-related-location-icon" />
                                <p>{service.address}</p>
                            </div>
                            <div className="cleaning-details-related-actions">
                                <button className="cleaning-details-view-details-btn">View Details</button>
                                <button className="cleaning-details-add-cart-btn">Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CleaningServiceDetailsSideBar;