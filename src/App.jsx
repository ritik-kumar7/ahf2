import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About/About';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Roadmap from './components/Roadmap/Roadmap';
import Whitepaper from './components/Whitepaper/Whitepaper';
import Partners from './components/Partners/Partners';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';
import AIChatBot from './components/AIChatBot/AIChatBot';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Main() {
  useEffect(() => {
    // Global effects (ripple, tilt, cursor glow)

    const handleRipple = (e) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement('span');
      ripple.style.cssText = `
                position: absolute;
                background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
                width: 200px; height: 200px;
                left: ${x - 100}px; top: ${y - 100}px;
                border-radius: 50%; pointer-events: none;
                transform: scale(0); animation: rippleEffect 0.6s ease-out forwards;
            `;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    // Add keyframes dynamically
    if (!document.querySelector('#rippleStyles')) {
      const style = document.createElement('style');
      style.id = 'rippleStyles';
      style.textContent = `
                 @keyframes rippleEffect {
                     to { transform: scale(2); opacity: 0; }
                 }
             `;
      document.head.appendChild(style);
    }

    // Mouse glow
    let cursorGlow;
    if (!document.querySelector('.cursor-glow')) {
      cursorGlow = document.createElement('div');
      cursorGlow.className = 'cursor-glow';
      cursorGlow.style.cssText = `
                position: fixed; width: 300px; height: 300px;
                background: radial-gradient(circle, rgba(201, 168, 85, 0.06) 0%, transparent 70%);
                pointer-events: none; z-index: 9999;
                transform: translate(-50%, -50%); transition: opacity 0.3s ease; opacity: 0;
             `;
      document.body.appendChild(cursorGlow);
    } else {
      cursorGlow = document.querySelector('.cursor-glow');
    }

    const mouseMoveGlow = (e) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
      cursorGlow.style.opacity = '1';
    };
    const mouseLeaveGlow = () => { cursorGlow.style.opacity = '0'; };
    document.addEventListener('mousemove', mouseMoveGlow);
    document.addEventListener('mouseleave', mouseLeaveGlow);

    // Event delegation for ripples
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('.btn, .explore-btn, .nav-cta, .login-btn, .social-btn')) {
        // Ensure ripple listener is attached or handle it directly
      }
    });

  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <BackgroundParticles />
      <Navbar />
      <AIChatBot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Partners />
      <Footer />
    </BrowserRouter>
  );
}

export default Main;
