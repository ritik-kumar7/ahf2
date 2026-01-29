import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaCoins, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <>
            <header>
                <Link to="/" className="logo">
                    <div className="logo-icon">
                        <img src="/fav.webp" alt="AHF2 Logo" />
                    </div>
                    <span className="logo-text">AHF2</span>
                </Link>

                <button
                    className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={isMenuOpen ? 'active' : ''}>
                    <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
                    <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
                    <NavLink to="/tokenomics" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Tokenomics</NavLink>
                    <NavLink to="/roadmap" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Roadmap</NavLink>
                    <NavLink to="/whitepaper" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Whitepaper</NavLink>
                    <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
                    <Link to="/login" className="mobile-login-btn" onClick={closeMenu}>Investor Login</Link>
                </nav>

                <Link to="/login" className="nav-cta">Investor Login</Link>
            </header>

            {/* Mobile Bottom Navigation */}
            <div className="mobile-bottom-nav">
                <div className="mobile-nav-container">
                    <NavLink to="/" className={({ isActive }) => isActive ? "mobile-nav-item active" : "mobile-nav-item"}>
                        <div className="icon"><FaHome /></div>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "mobile-nav-item active" : "mobile-nav-item"}>
                        <div className="icon"><FaInfoCircle /></div>
                        <span>About</span>
                    </NavLink>
                    <NavLink to="/tokenomics" className={({ isActive }) => isActive ? "mobile-nav-item active" : "mobile-nav-item"}>
                        <div className="icon"><FaCoins /></div>
                        <span>Tokenomics</span>
                    </NavLink>
                    <NavLink to="/whitepaper" className={({ isActive }) => isActive ? "mobile-nav-item active" : "mobile-nav-item"}>
                        <div className="icon"><FaFileAlt /></div>
                        <span>Whitepaper</span>
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "mobile-nav-item active" : "mobile-nav-item"}>
                        <div className="icon"><FaEnvelope /></div>
                        <span>Contact</span>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Navbar;
