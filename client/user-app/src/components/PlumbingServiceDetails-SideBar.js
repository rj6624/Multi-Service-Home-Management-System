import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack, IoMdShare, IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';
import './PlumbingServiceDetails-SideBar.css';
import laundryImg from '../assets/images/Laundry.jpg';
import cleaningImg from '../assets/images/Cleaning sevice.avif';
import applianceImg from '../assets/images/Appliance.avif';
import carwashImg from '../assets/images/Carwash.avif';
import personalImg from '../assets/images/PersonalServant.avif';
import tailorImg from '../assets/images/stitch.avif';

function PlumbingServiceDetailsSideBar() {
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState('pipe');
    const [quantity, setQuantity] = useState(1);
    const [isLiked, setIsLiked] = useState(false);

    const serviceTypes = [
        { id: 'pipe', name: 'Pipe Repair', price: 399 },
        { id: 'leak', name: 'Leak Fixing', price: 499 },
        { id: 'drain', name: 'Drain Cleaning', price: 349 },
        { id: 'installation', name: 'Bathroom Installation', price: 2999 }
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
            name: 'Rajesh Kumar',
            rating: 5,
            comment: 'Excellent plumbing service! They fixed my leaking pipe quickly and efficiently. The plumber was professional and cleaned up after the work.'
        },
        {
            id: 2,
            name: 'Priya Verma',
            rating: 5,
            comment: 'Amazing bathroom installation! The team was skilled and completed the work within the promised time. Very satisfied with the quality.'
        },
        {
            id: 3,
            name: 'Amit Patel',
            rating: 5,
            comment: 'Quick response for drain cleaning service. They cleared the blockage in no time and the price was very reasonable. Highly recommend!'
        }
    ];

    const relatedServices = [
        {
            id: 1,
            name: 'RapidFix Plumbing',
            price: 399,
            unit: 'per service',
            image: cleaningImg,
            rating: 4.6,
            reviews: 210,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        },
        {
            id: 2,
            name: 'PipeMaster Services',
            price: 449,
            unit: 'per service',
            image: cleaningImg,
            rating: 4.7,
            reviews: 185,
            address: 'Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot Near rajkot'
        },
        {
            id: 3,
            name: 'AquaFlow Plumbers',
            price: 379,
            unit: 'per service',
            image: cleaningImg,
            rating: 4.8,
            reviews: 230,
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
        <div className="plumbing-details-container">
            <div className="plumbing-details-main">
                {/* Image Overlay Text */}
                <div className="plumbing-details-image-container">
                    <img src={laundryImg} alt="Plumbing Service" className="plumbing-details-image" />
                    
                    {/* Header Overlay */}
                    <div className="plumbing-details-header">
                        <button className="plumbing-details-back-btn" onClick={() => navigate(-1)}>
                            <IoMdArrowRoundBack />
                        </button>
                        <h3 className="plumbing-details-page-title">Plumbing service</h3>
                        <button className="plumbing-details-share-btn">
                            <IoMdShare />
                        </button>
                    </div>

                    {/* Bottom Badges Overlay on image*/}
                    <div className="plumbing-details-image-badges">
                        <span className="plumbing-details-badge">
                            <span className="badge-icon">⏰</span> 24 - 48 Delivery
                        </span>
                        <span className="plumbing-details-badge">
                            <span className="badge-icon">🚚</span> Free Pickup & Drop
                        </span>
                    </div>
                </div>

                <div className="plumbing-details-info">
                    <div className="plumbing-details-title-row">
                        <h3 className="plumbing-details-title">QuickFix Plumbing Solutions</h3>
                        <button 
                            className="plumbing-details-like-btn"
                            onClick={() => setIsLiked(!isLiked)}
                        >
                            {isLiked ? <IoMdHeart className="liked" /> : <IoMdHeartEmpty />}
                        </button>
                    </div>
                    <div className="plumbing-details-rating-row">
                        <span className="plumbing-details-rating">
                            ⭐ 4.6
                        </span>
                        <span className="plumbing-details-reviews">(333 reviews)</span>
                    </div>
                    <p className="plumbing-details-price">₹349 onwards</p>
                    <div className="plumbing-details-location">
                        <IoLocationOutline className="plumbing-details-location-icon" />
                        <p>Koramangala, Bangalore • 2.3 km away</p>
                    </div>
                </div>

                <div className="plumbing-details-section">
                    <h4 className="plumbing-details-section-title">About this service</h4>
                    <p className="plumbing-details-about-text">
                        QuickFix Plumbing Solutions is your trusted partner for all plumbing needs. We provide licensed plumbers, 
                        emergency services 24/7, and use quality materials to ensure long-lasting repairs and installations...
                    </p>
                </div>

                <div className="plumbing-details-section">
                    <h4 className="plumbing-details-section-title">Select Service Type</h4>
                    <div className="plumbing-details-service-types">
                        {serviceTypes.map(service => (
                            <button
                                key={service.id}
                                className={`plumbing-details-service-type-btn ${
                                    selectedService === service.id ? 'active' : ''
                                }`}
                                onClick={() => setSelectedService(service.id)}
                            >
                                {service.name} ₹{service.price}
                            </button>
                        ))}
                    </div>
                    <button className="plumbing-details-book-btn">Book Service</button>
                </div>

                <div className="plumbing-details-section">
                    <h4 className="plumbing-details-section-title">Photo Gallery</h4>
                    <div className="plumbing-details-gallery">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="plumbing-details-gallery-item">
                                <img src={image} alt={`Gallery ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="plumbing-details-section">
                    <h4 className="plumbing-details-section-title">Ratings & Reviews</h4>
                    <div className="plumbing-details-ratings">
                        <div className="plumbing-details-rating-summary">
                            <div className="plumbing-details-rating-score">
                                <h2 className="plumbing-details-score">4.9</h2>
                                <p className="plumbing-details-total-reviews">(223)</p>
                            </div>
                        </div>
                        <div className="plumbing-details-rating-bars">
                            {ratingStats.map(stat => (
                                <div key={stat.stars} className="plumbing-details-rating-bar-row">
                                    <div className="plumbing-details-stars-display">
                                        {[...Array(stat.stars)].map((_, index) => (
                                            <AiFillStar key={index} className="plumbing-details-star-icon" />
                                        ))}
                                    </div>
                                    <div className="plumbing-details-bar-container">
                                        <div 
                                            className="plumbing-details-bar-fill"
                                            style={{ width: `${stat.percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="plumbing-details-bar-count">{stat.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="plumbing-details-reviews-list">
                        {reviews.map(review => (
                            <div key={review.id} className="plumbing-details-review">
                                <div className="plumbing-details-review-avatar">P</div>
                                <div className="plumbing-details-review-content">
                                    <div className="plumbing-details-review-header">
                                        <h4 className="plumbing-details-reviewer-name">{review.name}</h4>
                                        <div className="plumbing-details-review-stars">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <AiFillStar key={i} className="plumbing-details-review-star" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="plumbing-details-review-text">{review.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="plumbing-details-view-more-btn">View more</button>
                </div>
            </div>

            {/* Sidebar*/}
            <div className="plumbing-details-sidebar">
                {relatedServices.map(service => (
                    <div key={service.id} className="plumbing-details-related-card">
                        <div className="plumbing-details-related-image">
                            <img src={service.image} alt={service.name} />
                            <div className="plumbing-details-related-rating">
                                {service.rating} ⭐ | {service.reviews}
                            </div>
                        </div>
                        <div className="plumbing-details-related-info">
                            <h4 className="plumbing-details-related-name">{service.name}</h4>
                            <p className="plumbing-details-related-price">₹ {service.price} {service.unit}</p>
                            <div className="plumbing-details-related-address">
                                <IoLocationOutline className="plumbing-details-related-location-icon" />
                                <p>{service.address}</p>
                            </div>
                            <div className="plumbing-details-related-actions">
                                <button className="plumbing-details-view-details-btn">View Details</button>
                                <button className="plumbing-details-add-cart-btn">Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlumbingServiceDetailsSideBar;