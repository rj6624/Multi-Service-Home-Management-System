import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack, IoMdShare, IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';
import './PersonalServiceDetails-SideBar.css';
import laundryImg from '../assets/images/Laundry.jpg';
import cleaningImg from '../assets/images/Cleaning sevice.avif';
import applianceImg from '../assets/images/Appliance.avif';
import carwashImg from '../assets/images/Carwash.avif';
import personalImg from '../assets/images/PersonalServant.avif';
import tailorImg from '../assets/images/stitch.avif';

function PersonalServiceDetailsSideBar() {
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState('household');
    const [quantity, setQuantity] = useState(1);
    const [isLiked, setIsLiked] = useState(false);

    const serviceTypes = [
        { id: 'household', name: 'Household Help', price: 8000 },
        { id: 'cooking', name: 'Cooking Service', price: 10000 },
        { id: 'babysitting', name: 'Babysitting', price: 12000 },
        { id: 'eldercare', name: 'Elder Care', price: 15000 }
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
            name: 'Meera Krishnan',
            rating: 5,
            comment: 'Excellent household help service! The staff is very reliable, punctual, and trustworthy. They handle all household tasks efficiently and professionally.'
        },
        {
            id: 2,
            name: 'Aditya Verma',
            rating: 5,
            comment: 'Amazing cooking service! The cook prepares healthy, delicious meals and maintains kitchen hygiene. Very satisfied with their professionalism.'
        },
        {
            id: 3,
            name: 'Sneha Kapoor',
            rating: 5,
            comment: 'Great babysitting service! The caretaker is very caring, patient with kids, and ensures their safety at all times. Highly recommend for working parents!'
        }
    ];

    const relatedServices = [
        {
            id: 1,
            name: 'TrustedHelp Services',
            price: 8500,
            unit: 'onwards/month',
            image: personalImg,
            rating: 4.7,
            reviews: 210,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        },
        {
            id: 2,
            name: 'Elite HomeStaff',
            price: 9500,
            unit: 'onwards/month',
            image: personalImg,
            rating: 4.6,
            reviews: 185,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        },
        {
            id: 3,
            name: 'PerfectCare Assistants',
            price: 9000,
            unit: 'onwards/month',
            image: personalImg,
            rating: 4.8,
            reviews: 240,
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
        <div className="personal-details-container">
            <div className="personal-details-main">
                {/* Image Overlay Text */}
                <div className="personal-details-image-container">
                    <img src={personalImg} alt="Personal Service" className="personal-details-image" />
                    
                    {/* Header Overlay */}
                    <div className="personal-details-header">
                        <button className="personal-details-back-btn" onClick={() => navigate(-1)}>
                            <IoMdArrowRoundBack />
                        </button>
                        <h3 className="personal-details-page-title">Personal service</h3>
                        <button className="personal-details-share-btn">
                            <IoMdShare />
                        </button>
                    </div>

                    {/* Bottom Badges Overlay on image*/}
                    <div className="personal-details-image-badges">
                        <span className="personal-details-badge">
                            <span className="badge-icon">✓</span> Verified Professionals
                        </span>
                        <span className="personal-details-badge">
                            <span className="badge-icon">🛡️</span> Background Checked
                        </span>
                    </div>
                </div>

                <div className="personal-details-info">
                    <div className="personal-details-title-row">
                        <h3 className="personal-details-title">HomeCare Personal Services</h3>
                        <button 
                            className="personal-details-like-btn"
                            onClick={() => setIsLiked(!isLiked)}
                        >
                            {isLiked ? <IoMdHeart className="liked" /> : <IoMdHeartEmpty />}
                        </button>
                    </div>
                    <div className="personal-details-rating-row">
                        <span className="personal-details-rating">
                            ⭐ 4.6
                        </span>
                        <span className="personal-details-reviews">(333 reviews)</span>
                    </div>
                    <p className="personal-details-price">₹8000 onwards/month</p>
                    <div className="personal-details-location">
                        <IoLocationOutline className="personal-details-location-icon" />
                        <p>Koramangala, Bangalore • 2.3 km away</p>
                    </div>
                </div>

                <div className="personal-details-section">
                    <h4 className="personal-details-section-title">About this service</h4>
                    <p className="personal-details-about-text">
                        HomeCare Personal Services is your trusted partner for all household and personal assistance needs. We provide verified, 
                        trained professionals for household help, cooking, babysitting, and elder care with complete background verification...
                    </p>
                </div>

                <div className="personal-details-section">
                    <h4 className="personal-details-section-title">Select Service Type</h4>
                    <div className="personal-details-service-types">
                        {serviceTypes.map(service => (
                            <button
                                key={service.id}
                                className={`personal-details-service-type-btn ${
                                    selectedService === service.id ? 'active' : ''
                                }`}
                                onClick={() => setSelectedService(service.id)}
                            >
                                {service.name} ₹{service.price}
                            </button>
                        ))}
                    </div>
                    <button className="personal-details-book-btn">Book Service</button>
                </div>

                <div className="personal-details-section">
                    <h4 className="personal-details-section-title">Photo Gallery</h4>
                    <div className="personal-details-gallery">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="personal-details-gallery-item">
                                <img src={image} alt={`Gallery ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="personal-details-section">
                    <h4 className="personal-details-section-title">Ratings & Reviews</h4>
                    <div className="personal-details-ratings">
                        <div className="personal-details-rating-summary">
                            <div className="personal-details-rating-score">
                                <h2 className="personal-details-score">4.9</h2>
                                <p className="personal-details-total-reviews">(223)</p>
                            </div>
                        </div>
                        <div className="personal-details-rating-bars">
                            {ratingStats.map(stat => (
                                <div key={stat.stars} className="personal-details-rating-bar-row">
                                    <div className="personal-details-stars-display">
                                        {[...Array(stat.stars)].map((_, index) => (
                                            <AiFillStar key={index} className="personal-details-star-icon" />
                                        ))}
                                    </div>
                                    <div className="personal-details-bar-container">
                                        <div 
                                            className="personal-details-bar-fill"
                                            style={{ width: `${stat.percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="personal-details-bar-count">{stat.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="personal-details-reviews-list">
                        {reviews.map(review => (
                            <div key={review.id} className="personal-details-review">
                                <div className="personal-details-review-avatar">P</div>
                                <div className="personal-details-review-content">
                                    <div className="personal-details-review-header">
                                        <h4 className="personal-details-reviewer-name">{review.name}</h4>
                                        <div className="personal-details-review-stars">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <AiFillStar key={i} className="personal-details-review-star" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="personal-details-review-text">{review.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="personal-details-view-more-btn">View more</button>
                </div>
            </div>

            {/* Sidebar*/}
            <div className="personal-details-sidebar">
                {relatedServices.map(service => (
                    <div key={service.id} className="personal-details-related-card">
                        <div className="personal-details-related-image">
                            <img src={service.image} alt={service.name} />
                            <div className="personal-details-related-rating">
                                {service.rating} ⭐ | {service.reviews}
                            </div>
                        </div>
                        <div className="personal-details-related-info">
                            <h4 className="personal-details-related-name">{service.name}</h4>
                            <p className="personal-details-related-price">₹ {service.price} {service.unit}</p>
                            <div className="personal-details-related-address">
                                <IoLocationOutline className="personal-details-related-location-icon" />
                                <p>{service.address}</p>
                            </div>
                            <div className="personal-details-related-actions">
                                <button className="personal-details-view-details-btn">View Details</button>
                                <button className="personal-details-add-cart-btn">Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PersonalServiceDetailsSideBar;