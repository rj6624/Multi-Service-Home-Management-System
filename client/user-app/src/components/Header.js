import React from 'react';
import './Header.css';

function Header(){
    return (
        <header className="App-header">
            <div className="header-content">
                <h2 className="logo">HomeServe</h2>
                <div className="header-buttons">
                    <button className="sign-in-btn">Sign In</button>
                    <button className="sign-up-btn">Sign Up</button>
                </div>
            </div>
        </header>
    );
}

export default Header;