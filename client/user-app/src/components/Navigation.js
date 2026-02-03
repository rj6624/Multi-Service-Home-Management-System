import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#become-provider">Become a Provider</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;