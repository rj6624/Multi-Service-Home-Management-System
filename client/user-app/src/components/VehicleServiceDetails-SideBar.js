import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack, IoMdShare, IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';
import './VehicleServiceDetails-SideBar.css';
import laundryImg from '../assets/images/Laundry.jpg';
import cleaningImg from '../assets/images/Cleaning sevice.avif';
import applianceImg from '../assets/images/Appliance.avif';
import carwashImg from '../assets/images/Carwash.avif';
import personalImg from '../assets/images/PersonalServant.avif';
import tailorImg from '../assets/images/stitch.avif';

function VehicleServiceDetailsSideBar() {
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState('carwash');
    const [quantity, setQuantity] = useState(1);
    const [isLiked, setIsLiked] = useState(false);

    const serviceTypes = [
        { id: 'carwash', name: 'Car Wash & Cleaning', price: 499 },
        { id: 'service', name: 'General Service', price: 1999 },
        { id: 'detailing', name: 'Interior Detailing', price: 1499 },
        { id: 'polish', name: 'Polish & Coating', price: 2999 }
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
            name: 'Arjun Mehta',
            rating: 5,
            comment: 'Outstanding car wash service! My car looks brand new after their premium cleaning. The interior detailing was thorough and they used quality products.'
        },
        {
            id: 2,
            name: 'Deepika Rao',
            rating: 5,
            comment: 'Excellent general service for my sedan. They checked everything thoroughly and explained all the work done. Very professional and reasonable pricing.'
        },
        {
            id: 3,
            name: 'Rohit Sharma',
            rating: 5,
            comment: 'Amazing polish and coating service! The paint looks showroom fresh. They took great care and the results exceeded my expectations. Highly recommended!'
        }
    ];

    const relatedServices = [
        {
            id: 1,
            name: 'SpeedWash Car Care',
            price: 549,
            unit: 'onwards',
            image: carwashImg,
            rating: 4.7,
            reviews: 195,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        },
        {
            id: 2,
            name: 'Premium Auto Detailing',
            price: 699,
            unit: 'onwards',
            image: carwashImg,
            rating: 4.6,
            reviews: 175,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        },
        {
            id: 3,
            name: 'Elite Car Services',
            price: 599,
            unit: 'onwards',
            image: carwashImg,
            rating: 4.8,
            reviews: 220,
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
        <div className="vehicle-details-container">
            <div className="vehicle-details-main">
                {/* Image Overlay Text */}
                <div className="vehicle-details-image-container">
                    <img src={carwashImg} alt="Vehicle Service" className="vehicle-details-image" />
                    
                    {/* Header Overlay */}
                    <div className="vehicle-details-header">
                        <button className="vehicle-details-back-btn" onClick={() => navigate(-1)}>
                            <IoMdArrowRoundBack />
                        </button>
                        <h3 className="vehicle-details-page-title">Vehicle service</h3>
                        <button className="vehicle-details-share-btn">
                            <IoMdShare />
                        </button>
                    </div>

                    {/* Bottom Badges Overlay on image*/}
                    <div className="vehicle-details-image-badges">
                        <span className="vehicle-details-badge">
                            <span className="badge-icon">⏰</span> Same Day Service
                        </span>
                        <span className="vehicle-details-badge">
                            <span className="badge-icon">🚗</span> Doorstep Service Available
                        </span>
                    </div>
                </div>

                <div className="vehicle-details-info">
                    <div className="vehicle-details-title-row">
                        <h3 className="vehicle-details-title">AutoCare Pro Services</h3>
                        <button 
                            className="vehicle-details-like-btn"
                            onClick={() => setIsLiked(!isLiked)}
                        >
                            {isLiked ? <IoMdHeart className="liked" /> : <IoMdHeartEmpty />}
                        </button>
                    </div>
                    <div className="vehicle-details-rating-row">
                        <span className="vehicle-details-rating">
                            ⭐ 4.6
                        </span>
                        <span className="vehicle-details-reviews">(333 reviews)</span>
                    </div>
                    <p className="vehicle-details-price">₹499 onwards</p>
                    <div className="vehicle-details-location">
                        <IoLocationOutline className="vehicle-details-location-icon" />
                        <p>Koramangala, Bangalore • 2.3 km away</p>
                    </div>
                </div>

                <div className="vehicle-details-section">
                    <h4 className="vehicle-details-section-title">About this service</h4>
                    <p className="vehicle-details-about-text">
                        AutoCare Pro Services is your trusted partner for all vehicle maintenance needs. We provide professional car wash, 
                        general servicing, interior detailing, and paint protection with trained mechanics and premium products...
                    </p>
                </div>

                <div className="vehicle-details-section">
                    <h4 className="vehicle-details-section-title">Select Service Type</h4>
                    <div className="vehicle-details-service-types">
                        {serviceTypes.map(service => (
                            <button
                                key={service.id}
                                className={`vehicle-details-service-type-btn ${
                                    selectedService === service.id ? 'active' : ''
                                }`}
                                onClick={() => setSelectedService(service.id)}
                            >
                                {service.name} ₹{service.price}
                            </button>
                        ))}
                    </div>
                    <button className="vehicle-details-book-btn">Book Service</button>
                </div>

                <div className="vehicle-details-section">
                    <h4 className="vehicle-details-section-title">Photo Gallery</h4>
                    <div className="vehicle-details-gallery">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="vehicle-details-gallery-item">
                                <img src={image} alt={`Gallery ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="vehicle-details-section">
                    <h4 className="vehicle-details-section-title">Ratings & Reviews</h4>
                    <div className="vehicle-details-ratings">
                        <div className="vehicle-details-rating-summary">
                            <div className="vehicle-details-rating-score">
                                <h2 className="vehicle-details-score">4.9</h2>
                                <p className="vehicle-details-total-reviews">(223)</p>
                            </div>
                        </div>
                        <div className="vehicle-details-rating-bars">
                            {ratingStats.map(stat => (
                                <div key={stat.stars} className="vehicle-details-rating-bar-row">
                                    <div className="vehicle-details-stars-display">
                                        {[...Array(stat.stars)].map((_, index) => (
                                            <AiFillStar key={index} className="vehicle-details-star-icon" />
                                        ))}
                                    </div>
                                    <div className="vehicle-details-bar-container">
                                        <div 
                                            className="vehicle-details-bar-fill"
                                            style={{ width: `${stat.percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="vehicle-details-bar-count">{stat.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="vehicle-details-reviews-list">
                        {reviews.map(review => (
                            <div key={review.id} className="vehicle-details-review">
                                <div className="vehicle-details-review-avatar">P</div>
                                <div className="vehicle-details-review-content">
                                    <div className="vehicle-details-review-header">
                                        <h4 className="vehicle-details-reviewer-name">{review.name}</h4>
                                        <div className="vehicle-details-review-stars">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <AiFillStar key={i} className="vehicle-details-review-star" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="vehicle-details-review-text">{review.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="vehicle-details-view-more-btn">View more</button>
                </div>
            </div>

            {/* Sidebar*/}
            <div className="vehicle-details-sidebar">
                {relatedServices.map(service => (
                    <div key={service.id} className="vehicle-details-related-card">
                        <div className="vehicle-details-related-image">
                            <img src={service.image} alt={service.name} />
                            <div className="vehicle-details-related-rating">
                                {service.rating} ⭐ | {service.reviews}
                            </div>
                        </div>
                        <div className="vehicle-details-related-info">
                            <h4 className="vehicle-details-related-name">{service.name}</h4>
                            <p className="vehicle-details-related-price">₹ {service.price} {service.unit}</p>
                            <div className="vehicle-details-related-address">
                                <IoLocationOutline className="vehicle-details-related-location-icon" />
                                <p>{service.address}</p>
                            </div>
                            <div className="vehicle-details-related-actions">
                                <button className="vehicle-details-view-details-btn">View Details</button>
                                <button className="vehicle-details-add-cart-btn">Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VehicleServiceDetailsSideBar;