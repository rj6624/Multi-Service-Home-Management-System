import React from 'react';
import { IoMdArrowRoundBack, IoMdSettings } from 'react-icons/io';
import { FaPhone, FaEnvelope, FaBox, FaWallet, FaBookmark } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ProfileCard.css';

function ProfileCard() {
    const navigate = useNavigate();

    return (
        <div className="profile-card-container">
            <div className="profile-card">
                <div className="profile-card-header">
                    <h2 className="profile-card-title">My Profile</h2>
                </div>

                <div className="profile-user-info">
                    <div className="profile-avatar">
                        <span>JR</span>
                    </div>
                    <div className="profile-details">
                        <h3 className="profile-name">Jay Rupareliya</h3>
                        <div className="profile-contact">
                            <FaPhone className="contact-icon" />
                            <span>+91 8320486720</span>
                        </div>
                        <div className="profile-contact">
                            <FaEnvelope className="contact-icon" />
                            <span>jayrupareliya@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-stats">
                <div className="stat-card">
                    <FaBox className="stat-icon" />
                    <span className="stat-value">12</span>
                </div>
                <div className="stat-card">
                    <FaWallet className="stat-icon" />
                    <span className="stat-value">₹0</span>
                </div>
                <div className="stat-card">
                    <FaBookmark className="stat-icon" />
                    <span className="stat-value">12</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
