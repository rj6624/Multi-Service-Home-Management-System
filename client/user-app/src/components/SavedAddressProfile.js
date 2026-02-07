import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPlus, FaTimes } from 'react-icons/fa';
import { TbEdit } from 'react-icons/tb';
import { LuSave } from 'react-icons/lu';
import { MdDelete } from 'react-icons/md';
import './SavedAddressProfile.css';

function SavedAddressProfile() {
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            label: 'Home',
            address: 'Koramangala 5th Block, Bangalore • 560034',
            isEditing: false
        },
        {
            id: 2,
            label: 'Home',
            address: 'Koramangala 5th Block, Bangalore • 560034',
            isEditing: false
        }
    ]);
    
    const [isAdding, setIsAdding] = useState(false);
    const [newAddress, setNewAddress] = useState({ label: '', address: '' });

    const handleEdit = (id) => {
        setAddresses(addresses.map(addr => 
            addr.id === id ? { ...addr, isEditing: true, tempLabel: addr.label, tempAddress: addr.address } : addr
        ));
    };

    const handleSave = (id) => {
        setAddresses(addresses.map(addr => 
            addr.id === id ? { 
                ...addr, 
                label: addr.tempLabel, 
                address: addr.tempAddress, 
                isEditing: false 
            } : addr
        ));
    };

    const handleCancel = (id) => {
        setAddresses(addresses.map(addr => 
            addr.id === id ? { ...addr, isEditing: false } : addr
        ));
    };

    const handleChange = (id, field, value) => {
        setAddresses(addresses.map(addr => 
            addr.id === id ? { ...addr, [field]: value } : addr
        ));
    };

    const handleDelete = (id) => {
        setAddresses(addresses.filter(addr => addr.id !== id));
    };

    const handleAddAddress = () => {
        setIsAdding(true);
        setNewAddress({ label: '', address: '' });
    };

    const handleSaveNewAddress = () => {
        if (newAddress.label.trim() && newAddress.address.trim()) {
            const newId = addresses.length > 0 ? Math.max(...addresses.map(a => a.id)) + 1 : 1;
            setAddresses([...addresses, { 
                id: newId, 
                label: newAddress.label, 
                address: newAddress.address,
                isEditing: false 
            }]);
            setIsAdding(false);
            setNewAddress({ label: '', address: '' });
        }
    };

    const handleCancelNewAddress = () => {
        setIsAdding(false);
        setNewAddress({ label: '', address: '' });
    };

    return (
        <div className="saved-address-container">
            <div className="saved-address-header">
                <div className="header-left">
                    <FaMapMarkerAlt className="address-header-icon" />
                    <h2 className="saved-address-title">Saved Addresses</h2>
                </div>
                <button className="add-address-btn" onClick={handleAddAddress}>
                    <FaPlus />
                </button>
            </div>

            <div className="address-list">
                {isAdding && (
                    <div className="address-card adding">
                        <div className="address-info editing">
                            <input 
                                type="text"
                                className="address-input"
                                placeholder="Label (e.g., Home, Office)"
                                value={newAddress.label}
                                onChange={(e) => setNewAddress({...newAddress, label: e.target.value})}
                            />
                            <input 
                                type="text"
                                className="address-input"
                                placeholder="Enter full address"
                                value={newAddress.address}
                                onChange={(e) => setNewAddress({...newAddress, address: e.target.value})}
                            />
                        </div>
                        <div className="address-actions">
                            <button 
                                className="action-btn save-btn" 
                                onClick={handleSaveNewAddress}
                            >
                                <LuSave />
                            </button>
                            <button 
                                className="action-btn cancel-btn" 
                                onClick={handleCancelNewAddress}
                            >
                                <FaTimes />
                            </button>
                        </div>
                    </div>
                )}

                {addresses.map((addr) => (
                    <div key={addr.id} className="address-card">
                        <div className={`address-info ${addr.isEditing ? 'editing' : ''}`}>
                            {addr.isEditing ? (
                                <>
                                    <input 
                                        type="text"
                                        className="address-input"
                                        value={addr.tempLabel}
                                        onChange={(e) => handleChange(addr.id, 'tempLabel', e.target.value)}
                                    />
                                    <input 
                                        type="text"
                                        className="address-input"
                                        value={addr.tempAddress}
                                        onChange={(e) => handleChange(addr.id, 'tempAddress', e.target.value)}
                                    />
                                </>
                            ) : (
                                <>
                                    <h3 className="address-label">{addr.label}</h3>
                                    <p className="address-text">{addr.address}</p>
                                </>
                            )}
                        </div>
                        <div className="address-actions">
                            {addr.isEditing ? (
                                <>
                                    <button 
                                        className="action-btn save-btn" 
                                        onClick={() => handleSave(addr.id)}
                                    >
                                        <LuSave />
                                    </button>
                                    <button 
                                        className="action-btn cancel-btn" 
                                        onClick={() => handleCancel(addr.id)}
                                    >
                                        <FaTimes />
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button 
                                        className="action-btn edit-btn" 
                                        onClick={() => handleEdit(addr.id)}
                                    >
                                        <TbEdit />
                                    </button>
                                    <button 
                                        className="action-btn delete-btn" 
                                        onClick={() => handleDelete(addr.id)}
                                    >
                                        <MdDelete />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SavedAddressProfile;