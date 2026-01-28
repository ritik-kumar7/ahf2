import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

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

    const isHome = location.pathname === '/';

    const renderLink = (href, label) => {
        if (isHome) {
            return <a href={href} onClick={closeMenu}>{label}</a>;
        }
        return <Link to={`/${href}`} onClick={closeMenu}>{label}</Link>;
    };

    return (
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
                {renderLink('#strategy', 'Strategy')}
                {renderLink('#performance', 'Performance')}
                {renderLink('#risk', 'Risk')}
                <Link to="/insights" onClick={closeMenu}>Insights</Link>
                <Link to="/login" className="mobile-login-btn" onClick={closeMenu}>Investor Login</Link>
            </nav>

            <Link to="/login" className="nav-cta">Investor Login</Link>
        </header>
    );
};

export default Navbar;
