import React, { useState } from 'react';
import './Header.css';

function Header(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <header className="App-header">
                <div className="header-content">
                    <button className="hamburger-header" onClick={toggleSidebar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    
                    <h2 className="logo">HomeServe</h2>
                    <div className="header-buttons">
                        <button className="sign-in-btn">Sign In</button>
                        <button className="sign-up-btn">Sign Up</button>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
            <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <button className="close-btn" onClick={closeSidebar}>&times;</button>
                <ul className="sidebar-links">
                    <li><a href="#about" onClick={closeSidebar}>About</a></li>
                    <li><a href="#services" onClick={closeSidebar}>Services</a></li>
                    <li><a href="#how-it-works" onClick={closeSidebar}>How It Works</a></li>
                    <li><a href="#become-provider" onClick={closeSidebar}>Become a Provider</a></li>
                    <li><a href="#contact" onClick={closeSidebar}>Contact</a></li>
                </ul>
            </div>
        </>
    );
}

export default Header;