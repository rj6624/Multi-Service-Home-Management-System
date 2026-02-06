import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack, IoMdShare, IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';
import './LaundryServiceDetails-SideBar.css';
import laundryImg from '../assets/images/Laundry.jpg';
import cleaningImg from '../assets/images/Cleaning sevice.avif';
import applianceImg from '../assets/images/Appliance.avif';
import carwashImg from '../assets/images/Carwash.avif';
import personalImg from '../assets/images/PersonalServant.avif';
import tailorImg from '../assets/images/stitch.avif';

function LaundryServiceDetailsSideBar() {
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState('washfold');
    const [quantity, setQuantity] = useState(10);
    const [isLiked, setIsLiked] = useState(false);

    const serviceTypes = [
        { id: 'washfold', name: 'Wash & Fold', price: 40 },
        { id: 'washiron', name: 'Wash & Iron', price: 45 },
        { id: 'dryclean', name: 'Dry Clean', price: 80 },
        { id: 'steampress', name: 'Steam Press', price: 25 }
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
            comment: 'Excellent service! My clothes came back perfectly pressed and smelling fresh. The pickup and delivery was right on time.'
        },
        {
            id: 2,
            name: 'Pooja Sharma',
            rating: 5,
            comment: 'Excellent service! My clothes came back perfectly pressed and smelling fresh. The pickup and delivery was right on time.'
        },
        {
            id: 3,
            name: 'Pooja Sharma',
            rating: 5,
            comment: 'Excellent service! My clothes came back perfectly pressed and smelling fresh. The pickup and delivery was right on time.'
        }
    ];

    const relatedServices = [
        {
            id: 1,
            name: 'Creative Laundry',
            price: 25,
            unit: 'per cloth',
            image: laundryImg,
            rating: 1.7,
            reviews: 40,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        },
        {
            id: 2,
            name: 'Creative Laundry',
            price: 25,
            unit: 'per cloth',
            image: laundryImg,
            rating: 1.7,
            reviews: 40,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        },
        {
            id: 3,
            name: 'Creative Laundry',
            price: 25,
            unit: 'per cloth',
            image: laundryImg,
            rating: 1.7,
            reviews: 40,
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
        <div className="laundry-details-container">
            <div className="laundry-details-main">
                {/* Image Overlay Text */}
                <div className="laundry-details-image-container">
                    <img src={laundryImg} alt="Laundry Service" className="laundry-details-image" />
                    
                    {/* Header Overlay */}
                    <div className="laundry-details-header">
                        <button className="laundry-details-back-btn" onClick={() => navigate(-1)}>
                            <IoMdArrowRoundBack />
                        </button>
                        <h3 className="laundry-details-page-title">Laundry service</h3>
                        <button className="laundry-details-share-btn">
                            <IoMdShare />
                        </button>
                    </div>

                    {/* Bottom Badges Overlay on image*/}
                    <div className="laundry-details-image-badges">
                        <span className="laundry-details-badge">
                            <span className="badge-icon">⏰</span> 24 - 48 Delivery
                        </span>
                        <span className="laundry-details-badge">
                            <span className="badge-icon">🚚</span> Free Pickup & Drop
                        </span>
                    </div>
                </div>

                <div className="laundry-details-info">
                    <div className="laundry-details-title-row">
                        <h3 className="laundry-details-title">FreshFold Laundry & Dry Clean</h3>
                        <button 
                            className="laundry-details-like-btn"
                            onClick={() => setIsLiked(!isLiked)}
                        >
                            {isLiked ? <IoMdHeart className="liked" /> : <IoMdHeartEmpty />}
                        </button>
                    </div>
                    <div className="laundry-details-rating-row">
                        <span className="laundry-details-rating">
                            ⭐ 4.6
                        </span>
                        <span className="laundry-details-reviews">(333 reviews)</span>
                    </div>
                    <p className="laundry-details-price">₹25 onwards</p>
                    <div className="laundry-details-location">
                        <IoLocationOutline className="laundry-details-location-icon" />
                        <p>Koramangala, Bangalore • 2.3 km away</p>
                    </div>
                </div>

                <div className="laundry-details-section">
                    <h4 className="laundry-details-section-title">About this service</h4>
                    <p className="laundry-details-about-text">
                        FreshFold Laundry & Dry Clean is your trusted partner for all laundry needs. We use eco-friendly detergents, 
                        advanced washing technology, and employ t...
                    </p>
                </div>

                <div className="laundry-details-section">
                    <h4 className="laundry-details-section-title">Select Service Type</h4>
                    <div className="laundry-details-service-types">
                        {serviceTypes.map(service => (
                            <button
                                key={service.id}
                                className={`laundry-details-service-type-btn ${
                                    selectedService === service.id ? 'active' : ''
                                }`}
                                onClick={() => setSelectedService(service.id)}
                            >
                                {service.name} ₹{service.price}pc
                            </button>
                        ))}
                    </div>
                </div>

                <div className="laundry-details-section">
                    <h4 className="laundry-details-section-title">Number of Clothes</h4>
                    <div className="laundry-details-quantity">
                        <button 
                            className="laundry-details-quantity-btn"
                            onClick={handleDecrement}
                        >
                            −
                        </button>
                        <span className="laundry-details-quantity-value">{quantity}</span>
                        <button 
                            className="laundry-details-quantity-btn"
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    </div>
                    <button className="laundry-details-book-btn">Book Service</button>
                </div>

                <div className="laundry-details-section">
                    <h4 className="laundry-details-section-title">Photo Gallery</h4>
                    <div className="laundry-details-gallery">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="laundry-details-gallery-item">
                                <img src={image} alt={`Gallery ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="laundry-details-section">
                    <h4 className="laundry-details-section-title">Ratings & Reviews</h4>
                    <div className="laundry-details-ratings">
                        <div className="laundry-details-rating-summary">
                            <div className="laundry-details-rating-score">
                                <h2 className="laundry-details-score">4.9</h2>
                                <p className="laundry-details-total-reviews">(223)</p>
                            </div>
                        </div>
                        <div className="laundry-details-rating-bars">
                            {ratingStats.map(stat => (
                                <div key={stat.stars} className="laundry-details-rating-bar-row">
                                    <div className="laundry-details-stars-display">
                                        {[...Array(stat.stars)].map((_, index) => (
                                            <AiFillStar key={index} className="laundry-details-star-icon" />
                                        ))}
                                    </div>
                                    <div className="laundry-details-bar-container">
                                        <div 
                                            className="laundry-details-bar-fill"
                                            style={{ width: `${stat.percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="laundry-details-bar-count">{stat.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="laundry-details-reviews-list">
                        {reviews.map(review => (
                            <div key={review.id} className="laundry-details-review">
                                <div className="laundry-details-review-avatar">P</div>
                                <div className="laundry-details-review-content">
                                    <div className="laundry-details-review-header">
                                        <h4 className="laundry-details-reviewer-name">{review.name}</h4>
                                        <div className="laundry-details-review-stars">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <AiFillStar key={i} className="laundry-details-review-star" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="laundry-details-review-text">{review.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="laundry-details-view-more-btn">View more</button>
                </div>
            </div>

            {/* Sidebar*/}
            <div className="laundry-details-sidebar">
                {relatedServices.map(service => (
                    <div key={service.id} className="laundry-details-related-card">
                        <div className="laundry-details-related-image">
                            <img src={service.image} alt={service.name} />
                            <div className="laundry-details-related-rating">
                                {service.rating} ⭐ | {service.reviews}
                            </div>
                        </div>
                        <div className="laundry-details-related-info">
                            <h4 className="laundry-details-related-name">{service.name}</h4>
                            <p className="laundry-details-related-price">₹ {service.price} {service.unit}</p>
                            <div className="laundry-details-related-address">
                                <IoLocationOutline className="laundry-details-related-location-icon" />
                                <p>{service.address}</p>
                            </div>
                            <div className="laundry-details-related-actions">
                                <button className="laundry-details-view-details-btn">View Details</button>
                                <button className="laundry-details-add-cart-btn">Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LaundryServiceDetailsSideBar;