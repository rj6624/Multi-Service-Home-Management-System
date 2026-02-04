import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './SignUp.css';

function SignUp() {
    const [isSignUp, setIsSignUp] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/');
    };

    const toggleCard = () => {
        setIsSignUp(!isSignUp);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleGoogleAuth = () => {
    };

    return (
        <div className="auth-container">
            <div className="auth-overlay">
                <div className={`auth-card ${isSignUp ? 'signup-mode' : 'login-mode'}`}>
                    <button className="close-btn" onClick={handleClose}>×</button>
                    
                    {/* Sign Up Form */}
                    <div className={`form-container ${isSignUp ? 'active' : 'inactive'}`}>
                        <h2 className="auth-title">Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <FaUser className="input-icon" />
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    required
                                />
                            </div>
                            
                            <div className="input-group">
                                <FaLock className="input-icon" />
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password" 
                                    required
                                />
                                <button 
                                    type="button" 
                                    className="toggle-password"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            
                            <div className="input-group">
                                <FaLock className="input-icon" />
                                <input 
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm password" 
                                    required
                                />
                                <button 
                                    type="button" 
                                    className="toggle-password"
                                    onClick={toggleConfirmPasswordVisibility}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            
                            <button type="submit" className="auth-btn">Sign Up</button>
                        </form>
                        
                        <p className="toggle-text">
                            Already have an account? <span onClick={toggleCard} className="toggle-link">Log In</span>
                        </p>
                        
                        <div className="divider">
                            <span>or</span>
                        </div>
                        
                        <button className="google-btn" onClick={handleGoogleAuth}>
                            <FcGoogle className="google-icon" />
                            Sign up with Google
                        </button>
                    </div>

                    {/* Log In Form */}
                    <div className={`form-container ${!isSignUp ? 'active' : 'inactive'}`}>
                        <h2 className="auth-title">Log In</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <FaUser className="input-icon" />
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    required
                                />
                            </div>
                            
                            <div className="input-group">
                                <FaLock className="input-icon" />
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password" 
                                    required
                                />
                                <button 
                                    type="button" 
                                    className="toggle-password"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            
                            <div className="login-options">
                                <label className="remember-me">
                                    <input 
                                        type="checkbox" 
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    <span>Remember me</span>
                                </label>
                                <a href="#" className="forgot-password">Forgot Password</a>
                            </div>
                            
                            <button type="submit" className="auth-btn">Log In</button>
                        </form>
                        
                        <p className="toggle-text">
                            Don't have an account? <span onClick={toggleCard} className="toggle-link">Register</span>
                        </p>
                        
                        <div className="divider">
                            <span>or</span>
                        </div>
                        
                        <button className="google-btn" onClick={handleGoogleAuth}>
                            <FcGoogle className="google-icon" />
                            Sign up with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;