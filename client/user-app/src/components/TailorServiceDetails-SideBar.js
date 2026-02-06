import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack, IoMdShare, IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';
import './TailorServiceDetails-SideBar.css';
import laundryImg from '../assets/images/Laundry.jpg';
import cleaningImg from '../assets/images/Cleaning sevice.avif';
import applianceImg from '../assets/images/Appliance.avif';
import carwashImg from '../assets/images/Carwash.avif';
import personalImg from '../assets/images/PersonalServant.avif';
import tailorImg from '../assets/images/stitch.avif';

function TailorServiceDetailsSideBar() {
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState('shirt');
    const [quantity, setQuantity] = useState(1);
    const [isLiked, setIsLiked] = useState(false);

    const serviceTypes = [
        { id: 'shirt', name: 'Shirt Stitching', price: 350 },
        { id: 'pant', name: 'Pant Stitching', price: 450 },
        { id: 'dress', name: 'Dress Alteration', price: 250 },
        { id: 'blouse', name: 'Blouse Stitching', price: 400 }
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
            name: 'Priya Desai',
            rating: 5,
            comment: 'Perfect stitching! My wedding blouse was beautifully crafted with intricate details. The fitting was absolutely perfect and delivered on time.'
        },
        {
            id: 2,
            name: 'Sanjay Malhotra',
            rating: 5,
            comment: 'Got my suits altered and they fit like they were custom made! The tailor understood exactly what I needed. Highly skilled craftsman.'
        },
        {
            id: 3,
            name: 'Kavita Singh',
            rating: 5,
            comment: 'Excellent dress alteration service! They took precise measurements and the final result exceeded my expectations. Very professional work.'
        }
    ];

    const relatedServices = [
        {
            id: 1,
            name: 'Fashion Stitch Boutique',
            price: 299,
            unit: 'onwards',
            image: tailorImg,
            rating: 4.7,
            reviews: 165,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        },
        {
            id: 2,
            name: 'Master Tailor Services',
            price: 349,
            unit: 'onwards',
            image: tailorImg,
            rating: 4.6,
            reviews: 140,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        },
        {
            id: 3,
            name: 'Perfect Fit Tailors',
            price: 279,
            unit: 'onwards',
            image: tailorImg,
            rating: 4.8,
            reviews: 190,
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
        <div className="tailor-details-container">
            <div className="tailor-details-main">
                {/* Image Overlay Text */}
                <div className="tailor-details-image-container">
                    <img src={tailorImg} alt="Tailor Service" className="tailor-details-image" />
                    
                    {/* Header Overlay */}
                    <div className="tailor-details-header">
                        <button className="tailor-details-back-btn" onClick={() => navigate(-1)}>
                            <IoMdArrowRoundBack />
                        </button>
                        <h3 className="tailor-details-page-title">Tailor service</h3>
                        <button className="tailor-details-share-btn">
                            <IoMdShare />
                        </button>
                    </div>

                    {/* Bottom Badges Overlay on image*/}
                    <div className="tailor-details-image-badges">
                        <span className="tailor-details-badge">
                            <span className="badge-icon">⏰</span> 3 - 5 Days Delivery
                        </span>
                        <span className="tailor-details-badge">
                            <span className="badge-icon">📏</span> Free Measurements
                        </span>
                    </div>
                </div>

                <div className="tailor-details-info">
                    <div className="tailor-details-title-row">
                        <h3 className="tailor-details-title">StitchPerfect Tailoring</h3>
                        <button 
                            className="tailor-details-like-btn"
                            onClick={() => setIsLiked(!isLiked)}
                        >
                            {isLiked ? <IoMdHeart className="liked" /> : <IoMdHeartEmpty />}
                        </button>
                    </div>
                    <div className="tailor-details-rating-row">
                        <span className="tailor-details-rating">
                            ⭐ 4.6
                        </span>
                        <span className="tailor-details-reviews">(333 reviews)</span>
                    </div>
                    <p className="tailor-details-price">₹250 onwards</p>
                    <div className="tailor-details-location">
                        <IoLocationOutline className="tailor-details-location-icon" />
                        <p>Koramangala, Bangalore • 2.3 km away</p>
                    </div>
                </div>

                <div className="tailor-details-section">
                    <h4 className="tailor-details-section-title">About this service</h4>
                    <p className="tailor-details-about-text">
                        StitchPerfect Tailoring is your trusted partner for all stitching and alteration needs. We offer custom tailoring, 
                        perfect fitting alterations, and expert craftsmanship with years of experience in garment designing...
                    </p>
                </div>

                <div className="tailor-details-section">
                    <h4 className="tailor-details-section-title">Select Service Type</h4>
                    <div className="tailor-details-service-types">
                        {serviceTypes.map(service => (
                            <button
                                key={service.id}
                                className={`tailor-details-service-type-btn ${
                                    selectedService === service.id ? 'active' : ''
                                }`}
                                onClick={() => setSelectedService(service.id)}
                            >
                                {service.name} ₹{service.price}
                            </button>
                        ))}
                    </div>
                    <button className="tailor-details-book-btn">Book Service</button>
                </div>

                <div className="tailor-details-section">
                    <h4 className="tailor-details-section-title">Photo Gallery</h4>
                    <div className="tailor-details-gallery">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="tailor-details-gallery-item">
                                <img src={image} alt={`Gallery ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tailor-details-section">
                    <h4 className="tailor-details-section-title">Ratings & Reviews</h4>
                    <div className="tailor-details-ratings">
                        <div className="tailor-details-rating-summary">
                            <div className="tailor-details-rating-score">
                                <h2 className="tailor-details-score">4.9</h2>
                                <p className="tailor-details-total-reviews">(223)</p>
                            </div>
                        </div>
                        <div className="tailor-details-rating-bars">
                            {ratingStats.map(stat => (
                                <div key={stat.stars} className="tailor-details-rating-bar-row">
                                    <div className="tailor-details-stars-display">
                                        {[...Array(stat.stars)].map((_, index) => (
                                            <AiFillStar key={index} className="tailor-details-star-icon" />
                                        ))}
                                    </div>
                                    <div className="tailor-details-bar-container">
                                        <div 
                                            className="tailor-details-bar-fill"
                                            style={{ width: `${stat.percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="tailor-details-bar-count">{stat.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="tailor-details-reviews-list">
                        {reviews.map(review => (
                            <div key={review.id} className="tailor-details-review">
                                <div className="tailor-details-review-avatar">P</div>
                                <div className="tailor-details-review-content">
                                    <div className="tailor-details-review-header">
                                        <h4 className="tailor-details-reviewer-name">{review.name}</h4>
                                        <div className="tailor-details-review-stars">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <AiFillStar key={i} className="tailor-details-review-star" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="tailor-details-review-text">{review.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="tailor-details-view-more-btn">View more</button>
                </div>
            </div>

            {/* Sidebar*/}
            <div className="tailor-details-sidebar">
                {relatedServices.map(service => (
                    <div key={service.id} className="tailor-details-related-card">
                        <div className="tailor-details-related-image">
                            <img src={service.image} alt={service.name} />
                            <div className="tailor-details-related-rating">
                                {service.rating} ⭐ | {service.reviews}
                            </div>
                        </div>
                        <div className="tailor-details-related-info">
                            <h4 className="tailor-details-related-name">{service.name}</h4>
                            <p className="tailor-details-related-price">₹ {service.price} {service.unit}</p>
                            <div className="tailor-details-related-address">
                                <IoLocationOutline className="tailor-details-related-location-icon" />
                                <p>{service.address}</p>
                            </div>
                            <div className="tailor-details-related-actions">
                                <button className="tailor-details-view-details-btn">View Details</button>
                                <button className="tailor-details-add-cart-btn">Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TailorServiceDetailsSideBar;