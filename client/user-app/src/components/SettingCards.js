import React, { useState } from 'react';
import './SettingCards.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdShield, MdDelete } from "react-icons/md";

function SettingCards() {
    const [settings, setSettings] = useState({
        pushNotifications: false,
        emailNotifications: true,
        smsNotifications: true,
        soundEffects: true,
        locationAccess: true
    });

    const handleToggle = (settingName) => {
        setSettings(prev => ({
            ...prev,
            [settingName]: !prev[settingName]
        }));
    };

    return (
        <div className="settings-container">
            <div className="settings-header">
                <button className="back-button" onClick={() => window.history.back()}>
                    <IoMdArrowRoundBack className="back-icon" />
                    <h3>Settings</h3>
                </button>
            </div>

            <div className="settings-section">
                <div className="section-header">
                    <IoMdNotificationsOutline className="section-icon" />
                    <h4>Notifications</h4>
                </div>
                <div className="setting-item">
                    <div className="setting-info">
                        <h4>Push Notifications</h4>
                        <p>Receive website notifications</p>
                    </div>

                    <label className="toggle-switch">
                        <input 
                            type="checkbox" 
                            checked={settings.pushNotifications}
                            onChange={() => handleToggle('pushNotifications')}
                        />
                        <span className="slider"></span>
                    </label>
                </div>

                <div className="setting-item">
                    <div className="setting-info">
                        <h4>Email Notifications</h4>
                        <p>Get updates via email</p>
                    </div>

                    <label className="toggle-switch">
                        <input 
                            type="checkbox" 
                            checked={settings.emailNotifications}
                            onChange={() => handleToggle('emailNotifications')}
                        />
                        <span className="slider"></span>
                    </label>
                </div>

                <div className="setting-item">
                    <div className="setting-info">
                        <h4>SMS Notifications</h4>
                        <p>Receive text messages</p>
                    </div>

                    <label className="toggle-switch">
                        <input 
                            type="checkbox" 
                            checked={settings.smsNotifications}
                            onChange={() => handleToggle('smsNotifications')}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>

            <div className="settings-section">
                <div className="section-header">
                    <IoSettings className="section-icon" />
                    <h4>Preferences</h4>
                </div>

                <div className="setting-item">
                    <div className="setting-info">
                        <h4>Sound Effects</h4>
                        <p>Play website sounds</p>
                    </div>

                    <label className="toggle-switch">
                        <input 
                            type="checkbox" 
                            checked={settings.soundEffects}
                            onChange={() => handleToggle('soundEffects')}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>

            <div className="settings-section">
                <div className="section-header">
                    <MdShield className="section-icon" />
                    <h4>Privacy & Security</h4>
                </div>

                <div className="setting-item">
                    <div className="setting-info">
                        <h4>Location Access</h4>
                    </div>

                    <label className="toggle-switch">
                        <input 
                            type="checkbox" 
                            checked={settings.locationAccess}
                            onChange={() => handleToggle('locationAccess')}
                        />
                        <span className="slider"></span>
                    </label>
                </div>

                <div className="setting-item clickable">
                    <div className="setting-info">
                        <h4>Change Password</h4>
                    </div>
                </div>
            </div>

            <div className="delete-account-section">
                <button className="delete-account-btn">
                    <MdDelete className="delete-icon" />
                    <p>Delete My Account</p>
                </button>
            </div>
        </div>
    );
}

export default SettingCards;