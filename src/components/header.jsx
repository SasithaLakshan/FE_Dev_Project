import React, { useState } from 'react';
import logoDesktop from '/Logo.svg';
import './header.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleNavLinkClick = () => {
        setIsMenuOpen(false); // Close the off-canvas menu when a nav link is clicked
    };

    return (
        <header>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <div className='logo'>
                    <img src={logoDesktop} alt='Desktop Logo' className='logo_desktop' />
                </div>
                <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
                <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href='#' onClick={handleNavLinkClick}>Home</a></li>
                    <li><a href='#' onClick={handleNavLinkClick}>Services</a></li>
                    <li><a href='#' onClick={handleNavLinkClick}>About Us</a></li>
                    <li><a href='#' onClick={handleNavLinkClick}>Contact Us</a></li>
                    <li><a href='#' onClick={handleNavLinkClick}>Careers</a></li>
                    <button className="close-btn" onClick={closeMenu}>Close</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
