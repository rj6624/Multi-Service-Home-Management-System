import React from 'react';
import { FaQuestionCircle, FaGift, FaSignOutAlt } from 'react-icons/fa';
import './ButtonsProfile.css';

function ButtonsProfile() {
    const handleHelpSupport = () => {
        console.log('Help & Support clicked');
    };

    const handleInviteEarn = () => {
        console.log('Invite & Earn clicked');
    };

    const handleLogout = () => {
        console.log('Logout clicked');
    };

    return (
        <div className="buttons-profile">
            <div className="button-row">
                <button className="profile-action-btn" onClick={handleHelpSupport}>
                    <FaQuestionCircle className="btn-icon" />
                    <span>Help & Support</span>
                </button>
                <button className="profile-action-btn" onClick={handleInviteEarn}>
                    <FaGift className="btn-icon" />
                    <span>Invite & Earn</span>
                </button>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
                <FaSignOutAlt className="logout-icon" />
                <span>Logout</span>
            </button>
        </div>
    );
}

export default ButtonsProfile;