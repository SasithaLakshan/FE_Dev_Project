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
        setIsMenuOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <div className='logo' onClick={scrollToTop}>
                    <img src={logoDesktop} alt='Desktop Logo' className='logo_desktop' />
                </div>
                <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
                <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <div className='wrapper'>
                        <li><a href='#services_section' onClick={handleNavLinkClick}>Services</a></li>
                        <li><a href='#about_section' onClick={handleNavLinkClick}>About Us</a></li>
                        <li><a href='#contact_section' onClick={handleNavLinkClick}>Contact Us</a></li>
                        <li><a href='#career_section' onClick={handleNavLinkClick}>Careers</a></li>
                        <button className="close-btn" onClick={closeMenu}>×</button>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
