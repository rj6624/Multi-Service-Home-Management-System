import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { TbEdit } from 'react-icons/tb';
import { LuSave } from 'react-icons/lu';
import './PersonalInfo.css';

function PersonalInfo() {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        fullName: 'Jay Rupareliya',
        gender: 'Male',
        phoneNumber: '+91 8320486720',
        dateOfBirth: '2004-06-06',
        email: 'jayrupareliya@gmail.com'
    });

    const [tempData, setTempData] = useState({ ...formData });

    const handleEdit = () => {
        setIsEditing(true);
        setTempData({ ...formData });
    };

    const handleSave = () => {
        setFormData({ ...tempData });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempData({ ...formData });
        setIsEditing(false);
    };

    const handleChange = (field, value) => {
        setTempData({ ...tempData, [field]: value });
    };

    return (
        <div className="personal-info-container">
            <div className="personal-info-header">
                <h2 className="personal-info-title">Personal Information</h2>
                {!isEditing ? (
                    <button className="edit-info-btn" onClick={handleEdit}>
                        <TbEdit />
                        <span>Edit</span>
                    </button>
                ) : (
                    <div className="edit-actions">
                        <button className="save-info-btn" onClick={handleSave}>
                            <LuSave />
                            <span>Save</span>
                        </button>
                        <button className="cancel-info-btn" onClick={handleCancel}>
                            <FaTimes />
                            <span>Cancel</span>
                        </button>
                    </div>
                )}
            </div>
            
            <div className="personal-info-grid">
                <div className="info-field">
                    <label className="info-label">Full Name</label>
                    {isEditing ? (
                        <input
                            type="text"
                            className="info-input"
                            value={tempData.fullName}
                            onChange={(e) => handleChange('fullName', e.target.value)}
                        />
                    ) : (
                        <p className="info-value">{formData.fullName}</p>
                    )}
                </div>
                
                <div className="info-field">
                    <label className="info-label">Gender</label>
                    {isEditing ? (
                        <select
                            className="info-input"
                            value={tempData.gender}
                            onChange={(e) => handleChange('gender', e.target.value)}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    ) : (
                        <p className="info-value">{formData.gender}</p>
                    )}
                </div>
                
                <div className="info-field">
                    <label className="info-label">Phone Number</label>
                    {isEditing ? (
                        <input
                            type="tel"
                            className="info-input"
                            value={tempData.phoneNumber}
                            onChange={(e) => handleChange('phoneNumber', e.target.value)}
                        />
                    ) : (
                        <p className="info-value">{formData.phoneNumber}</p>
                    )}
                </div>
                
                <div className="info-field">
                    <label className="info-label">Date of Birth</label>
                    {isEditing ? (
                        <input
                            type="date"
                            className="info-input"
                            value={tempData.dateOfBirth}
                            onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                        />
                    ) : (
                        <p className="info-value">{new Date(formData.dateOfBirth).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-')}</p>
                    )}
                </div>
                
                <div className="info-field info-field-full">
                    <label className="info-label">Email</label>
                    <p className="info-value">{formData.email}</p>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;