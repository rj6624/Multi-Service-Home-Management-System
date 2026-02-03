import React, { useState } from 'react';
import './Navigation.css';

function Navigation() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <nav className="navigation">
                <button className="hamburger" onClick={toggleSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#become-provider">Become a Provider</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

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

export default Navigation;