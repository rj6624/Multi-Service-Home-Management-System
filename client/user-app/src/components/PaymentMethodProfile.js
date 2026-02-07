import React, { useState } from 'react';
import { FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';
import './PaymentMethodProfile.css';

function PaymentMethodProfile() {
    const [selectedMethod, setSelectedMethod] = useState('google-pay');

    const handleMethodSelect = (method) => {
        setSelectedMethod(method);
    };

    return (
        <div className="payment-method-container">
            <div className="payment-method-header">
                <FaCreditCard className="payment-header-icon" />
                <h2 className="payment-method-title">Payment Methods</h2>
            </div>

            <div className="payment-methods-list">
                <div 
                    className={`payment-method-card ${selectedMethod === 'google-pay' ? 'selected' : ''}`}
                    onClick={() => handleMethodSelect('google-pay')}
                >
                    <div className="payment-method-left">
                        <div className="payment-icon google-pay-icon">
                            <FaCreditCard />
                        </div>
                        <span className="payment-method-name">Google Pay</span>
                    </div>
                    <div className="payment-radio">
                        <div className={`radio-button ${selectedMethod === 'google-pay' ? 'selected' : ''}`}>
                            {selectedMethod === 'google-pay' && <div className="radio-inner"></div>}
                        </div>
                    </div>
                </div>

                <div 
                    className={`payment-method-card ${selectedMethod === 'cash-on-delivery' ? 'selected' : ''}`}
                    onClick={() => handleMethodSelect('cash-on-delivery')}
                >
                    <div className="payment-method-left">
                        <div className="payment-icon cash-icon">
                            <FaMoneyBillWave />
                        </div>
                        <span className="payment-method-name">Cash on Delivery</span>
                    </div>
                    <div className="payment-radio">
                        <div className={`radio-button ${selectedMethod === 'cash-on-delivery' ? 'selected' : ''}`}>
                            {selectedMethod === 'cash-on-delivery' && <div className="radio-inner"></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentMethodProfile;