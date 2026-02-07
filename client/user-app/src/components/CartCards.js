import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack, IoLocationOutline, IoTrashOutline } from 'react-icons/io5';
import { IoMdStar } from 'react-icons/io';
import LaundryImg from '../assets/images/Laundry.jpg';
import CleaningImg from '../assets/images/Cleaning.png';
import './CartCards.css';
import { IoMdArrowRoundBack } from "react-icons/io";

function CartCards() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'FreshFold Laundry & Dry Clean',
            category: 'Laundry',
            rating: 4.6,
            reviews: 333,
            location: 'Koramangala, Bangalore',
            distance: '2.3 km away',
            service: 'Wash & Fold',
            price: 40,
            quantity: 10,
            image: LaundryImg
        },
        {
            id: 2,
            name: 'SparkleHome Deep Cleaning',
            category: 'Cleaning',
            rating: 4.8,
            reviews: 512,
            location: 'Indiranagar, Bangalore',
            distance: '3.1 km away',
            service: 'Deep Clean',
            price: 120,
            quantity: 1,
            image: CleaningImg
        }
    ]);

    const handleQuantityChange = (id, change) => {
        setCartItems(cartItems.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + change;
                return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
            }
            return item;
        }));
    };

    const handleDelete = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className="cart-cards">
            <div className="cart-header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    <IoMdArrowRoundBack />
                </button>
                <h2 className="cart-title">Cart</h2>
            </div>

            <div className="cart-items-container">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item-card">
                        <div className="cart-item-image">
                            <img src={item.image} alt={item.name} />
                        </div>

                        <div className="cart-item-content">
                            <div className="cart-item-header">
                                <h4 className="service-name">{item.name}</h4>
                                <span className="service-category">{item.category}</span>
                            </div>

                            <div className="service-rating">
                                <IoMdStar className="star-icon" />
                                <span className="rating-value">{item.rating}</span>
                                <span className="rating-reviews">({item.reviews} reviews)</span>
                            </div>

                            <div className="service-location">
                                <IoLocationOutline className="location-icon" />
                                <span>{item.location} • {item.distance}</span>
                            </div>

                            <div className="service-pricing">
                                <span className="service-type">{item.service}</span>
                                <span className="service-price">₹{item.price}/pc</span>
                            </div>

                            <div className="cart-item-actions">

                                <div className='spbt'>
                                <div className="quantity-controls">
                                    <button 
                                        className="quantity-btn"
                                        onClick={() => handleQuantityChange(item.id, -1)}
                                    >
                                        −
                                    </button>
                                    <span className="quantity-value">{item.quantity}</span>
                                    <button 
                                        className="quantity-btn"
                                        onClick={() => handleQuantityChange(item.id, 1)}
                                    >
                                        +
                                    </button>
                                </div>

                                <div className='buttonsmore'>
                                    <button className="quick-buy-btn">Quick Buy</button>
                                    <div className="view-delete-row">
                                        <button className="view-details-btn">View details</button>
                                        <button 
                                            className="delete-btn"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            <IoTrashOutline size={20} />
                                        </button>
                                    </div>
                                </div>

                                </div>

                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CartCards;
