import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack, IoMdShare, IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';
import './ApplianceRepairServiceDetails-SideBar.css';
import laundryImg from '../assets/images/Laundry.jpg';
import cleaningImg from '../assets/images/Cleaning sevice.avif';
import applianceImg from '../assets/images/Appliance.avif';
import carwashImg from '../assets/images/Carwash.avif';
import personalImg from '../assets/images/PersonalServant.avif';
import tailorImg from '../assets/images/stitch.avif';

function ApplianceRepairServiceDetailsSideBar() {
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState('fridge');
    const [quantity, setQuantity] = useState(1);
    const [isLiked, setIsLiked] = useState(false);

    const serviceTypes = [
        { id: 'fridge', name: 'Refrigerator Repair', price: 499 },
        { id: 'washing', name: 'Washing Machine Repair', price: 599 },
        { id: 'ac', name: 'AC Repair & Service', price: 799 },
        { id: 'microwave', name: 'Microwave Repair', price: 399 }
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
            name: 'Suresh Iyer',
            rating: 5,
            comment: 'My refrigerator stopped cooling and they fixed it within 2 hours! The technician was very professional and explained the issue clearly. Great service!'
        },
        {
            id: 2,
            name: 'Neha Gupta',
            rating: 5,
            comment: 'Washing machine was making loud noises. The technician diagnosed and fixed it efficiently. Used genuine parts and the price was reasonable.'
        },
        {
            id: 3,
            name: 'Ramesh Patel',
            rating: 5,
            comment: 'AC service was excellent! They cleaned the filters, checked gas levels, and now it\'s cooling perfectly. Very satisfied with their work.'
        }
    ];

    const relatedServices = [
        {
            id: 1,
            name: 'QuickFix Appliances',
            price: 449,
            unit: 'onwards',
            image: applianceImg,
            rating: 4.7,
            reviews: 180,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        },
        {
            id: 2,
            name: 'HomeTech Repair Services',
            price: 499,
            unit: 'onwards',
            image: applianceImg,
            rating: 4.6,
            reviews: 145,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        },
        {
            id: 3,
            name: 'ElectroCare Solutions',
            price: 429,
            unit: 'onwards',
            image: applianceImg,
            rating: 4.8,
            reviews: 210,
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
        <div className="appliance-details-container">
            <div className="appliance-details-main">
                {/* Image Overlay Text */}
                <div className="appliance-details-image-container">
                    <img src={applianceImg} alt="Appliance Repair Service" className="appliance-details-image" />
                    
                    {/* Header Overlay */}
                    <div className="appliance-details-header">
                        <button className="appliance-details-back-btn" onClick={() => navigate(-1)}>
                            <IoMdArrowRoundBack />
                        </button>
                        <h3 className="appliance-details-page-title">Appliance Repair service</h3>
                        <button className="appliance-details-share-btn">
                            <IoMdShare />
                        </button>
                    </div>

                    {/* Bottom Badges Overlay on image*/}
                    <div className="appliance-details-image-badges">
                        <span className="appliance-details-badge">
                            <span className="badge-icon">⏰</span> 24 - 48 Delivery
                        </span>
                        <span className="appliance-details-badge">
                            <span className="badge-icon">🚚</span> Free Pickup & Drop
                        </span>
                    </div>
                </div>

                <div className="appliance-details-info">
                    <div className="appliance-details-title-row">
                        <h3 className="appliance-details-title">TechFix Appliance Repair</h3>
                        <button 
                            className="appliance-details-like-btn"
                            onClick={() => setIsLiked(!isLiked)}
                        >
                            {isLiked ? <IoMdHeart className="liked" /> : <IoMdHeartEmpty />}
                        </button>
                    </div>
                    <div className="appliance-details-rating-row">
                        <span className="appliance-details-rating">
                            ⭐ 4.6
                        </span>
                        <span className="appliance-details-reviews">(333 reviews)</span>
                    </div>
                    <p className="appliance-details-price">₹399 onwards</p>
                    <div className="appliance-details-location">
                        <IoLocationOutline className="appliance-details-location-icon" />
                        <p>Koramangala, Bangalore • 2.3 km away</p>
                    </div>
                </div>

                <div className="appliance-details-section">
                    <h4 className="appliance-details-section-title">About this service</h4>
                    <p className="appliance-details-about-text">
                        TechFix Appliance Repair is your trusted partner for all appliance repair needs. We specialize in repairing refrigerators, 
                        washing machines, AC units, microwaves, and more with certified technicians and genuine spare parts...
                    </p>
                </div>

                <div className="appliance-details-section">
                    <h4 className="appliance-details-section-title">Select Service Type</h4>
                    <div className="appliance-details-service-types">
                        {serviceTypes.map(service => (
                            <button
                                key={service.id}
                                className={`appliance-details-service-type-btn ${
                                    selectedService === service.id ? 'active' : ''
                                }`}
                                onClick={() => setSelectedService(service.id)}
                            >
                                {service.name} ₹{service.price}
                            </button>
                        ))}
                    </div>
                    <button className="appliance-details-book-btn">Book Service</button>
                </div>

                <div className="appliance-details-section">
                    <h4 className="appliance-details-section-title">Photo Gallery</h4>
                    <div className="appliance-details-gallery">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="appliance-details-gallery-item">
                                <img src={image} alt={`Gallery ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="appliance-details-section">
                    <h4 className="appliance-details-section-title">Ratings & Reviews</h4>
                    <div className="appliance-details-ratings">
                        <div className="appliance-details-rating-summary">
                            <div className="appliance-details-rating-score">
                                <h2 className="appliance-details-score">4.9</h2>
                                <p className="appliance-details-total-reviews">(223)</p>
                            </div>
                        </div>
                        <div className="appliance-details-rating-bars">
                            {ratingStats.map(stat => (
                                <div key={stat.stars} className="appliance-details-rating-bar-row">
                                    <div className="appliance-details-stars-display">
                                        {[...Array(stat.stars)].map((_, index) => (
                                            <AiFillStar key={index} className="appliance-details-star-icon" />
                                        ))}
                                    </div>
                                    <div className="appliance-details-bar-container">
                                        <div 
                                            className="appliance-details-bar-fill"
                                            style={{ width: `${stat.percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="appliance-details-bar-count">{stat.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="appliance-details-reviews-list">
                        {reviews.map(review => (
                            <div key={review.id} className="appliance-details-review">
                                <div className="appliance-details-review-avatar">P</div>
                                <div className="appliance-details-review-content">
                                    <div className="appliance-details-review-header">
                                        <h4 className="appliance-details-reviewer-name">{review.name}</h4>
                                        <div className="appliance-details-review-stars">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <AiFillStar key={i} className="appliance-details-review-star" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="appliance-details-review-text">{review.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="appliance-details-view-more-btn">View more</button>
                </div>
            </div>

            {/* Sidebar*/}
            <div className="appliance-details-sidebar">
                {relatedServices.map(service => (
                    <div key={service.id} className="appliance-details-related-card">
                        <div className="appliance-details-related-image">
                            <img src={service.image} alt={service.name} />
                            <div className="appliance-details-related-rating">
                                {service.rating} ⭐ | {service.reviews}
                            </div>
                        </div>
                        <div className="appliance-details-related-info">
                            <h4 className="appliance-details-related-name">{service.name}</h4>
                            <p className="appliance-details-related-price">₹ {service.price} {service.unit}</p>
                            <div className="appliance-details-related-address">
                                <IoLocationOutline className="appliance-details-related-location-icon" />
                                <p>{service.address}</p>
                            </div>
                            <div className="appliance-details-related-actions">
                                <button className="appliance-details-view-details-btn">View Details</button>
                                <button className="appliance-details-add-cart-btn">Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ApplianceRepairServiceDetailsSideBar;