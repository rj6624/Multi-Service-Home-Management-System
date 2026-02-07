import React, { useState } from 'react';
import { FaBell, FaShoppingCart, FaUser, FaCog, FaClipboardList, FaHome, FaWallet, FaSearch, FaMicrophone } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import './HeaderLogin.css';

function HeaderLogin() {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    const closeProfileMenu = () => {
        setIsProfileMenuOpen(false);
    };

    const handleMenuClick = (action) => {
        closeProfileMenu();
        
        // Navigation logic
        if (action === 'profile') {
            navigate('/profile');
        } else if (action === 'cart') {
            navigate('/cart');
        } else if (action === 'orders') {
            navigate('/orders');
        } else if (action === 'settings') {
            navigate('/settings');
        }
    };

    return (
        <>
            <header className="header-login">
                <div className="header-login-content">
                    {/* Logo */}
                    <div className="header-logo">
                        <h2>HomeServe</h2>
                    </div>

                    {/* Search Bar - Desktop/Tablet */}
                    <div className="search-container">
                        <FaSearch className="search-icon" />
                        <input 
                            type="text" 
                            placeholder="Search services here..." 
                            className="search-input"
                        />
                        <button className="mic-button">
                            <FaMicrophone />
                        </button>
                    </div>

                    {/* Right Icons */}
                    <div className="header-icons">
                        {/* Wallet */}
                        <div className="wallet-container">
                            <FaWallet className="wallet-icon" />
                            <span className="wallet-amount">₹2,545</span>
                        </div>
                        
                        <button className="icon-btn notification-btn">
                            <FaBell />
                            <span className="badge">3</span>
                        </button>
                        <div className="profile-dropdown">
                            <button className="icon-btn profile-btn" onClick={toggleProfileMenu}>
                                <span className="profile-circle">RJ</span>
                            </button>
                            
                            {/* Profile Dropdown Menu */}
                            {isProfileMenuOpen && (
                                <>
                                    <div className="dropdown-overlay" onClick={closeProfileMenu}></div>
                                    <div className="profile-menu">
                                        <button onClick={() => handleMenuClick('cart')}>
                                            <FaShoppingCart /> Cart
                                        </button>
                                        <button onClick={() => handleMenuClick('orders')}>
                                            <FaClipboardList /> Orders
                                        </button>
                                        <button onClick={() => handleMenuClick('settings')}>
                                            <FaCog /> Settings
                                        </button>
                                        <button onClick={() => handleMenuClick('profile')}>
                                            <FaUser /> Profile
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Search Bar - Mobile */}
                <div className="mobile-search-container">
                    <FaSearch className="search-icon" />
                    <input 
                        type="text" 
                        placeholder="Search services here..." 
                        className="search-input"
                    />
                    <button className="mic-button">
                        <FaMicrophone />
                    </button>
                </div>
            </header>

            {/* Mobile Footer Navigation */}
            <nav className="mobile-footer">
                <button 
                    className={`footer-nav-btn ${location.pathname === '/dashboard' ? 'active' : ''}`}
                    onClick={() => navigate('/dashboard')}
                >
                    <FaHome />
                    <span>Home</span>
                </button>
                <button 
                    className={`footer-nav-btn ${location.pathname === '/cart' ? 'active' : ''}`}
                    onClick={() => navigate('/cart')}
                >
                    <FaShoppingCart />
                    <span>Cart</span>
                </button>
                <button 
                    className={`footer-nav-btn ${location.pathname === '/orders' ? 'active' : ''}`}
                    onClick={() => navigate('/orders')}
                >
                    <FaClipboardList />
                    <span>Orders</span>
                </button>
                <button 
                    className={`footer-nav-btn ${location.pathname === '/settings' ? 'active' : ''}`}
                    onClick={() => navigate('/settings')}
                >
                    <FaCog />
                    <span>Settings</span>
                </button>
                <button 
                    className={`footer-nav-btn ${location.pathname === '/profile' ? 'active' : ''}`}
                    onClick={() => navigate('/profile')}
                >
                    <FaUser />
                    <span>Profile</span>
                </button>
            </nav>
        </>
    );
}

export default HeaderLogin;