import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import TaglineStrip from './TaglineStrip';
import Strategy from './Strategy';
import Performance from './Performance';
import RiskGovernance from './RiskGovernance';
import Footer from './Footer';
import BackgroundParticles from './BackgroundParticles';
import SectionTracker from './SectionTracker';

const Home = () => {
    useEffect(() => {
        // ========== SCROLL REVEAL ANIMATIONS ==========
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        const scrollElements = document.querySelectorAll(
            '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .stagger-1, .stagger-2, .stagger-3'
        );
        scrollElements.forEach(el => scrollObserver.observe(el));

        // ========== RIPPLE EFFECT ==========
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

        const buttons = document.querySelectorAll('.btn, .explore-btn, .nav-cta, .login-btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', handleRipple);
        });

        // ========== 3D TILT EFFECT ==========
        const attachTilt = () => {
            const cards = document.querySelectorAll('.strategy-card, .governance-card');
            cards.forEach(card => {
                if (card.dataset.tiltInitialized) return;
                card.dataset.tiltInitialized = "true";

                if (!card.querySelector('.spotlight')) {
                    const spotlight = document.createElement('div');
                    spotlight.className = 'spotlight';
                    card.appendChild(spotlight);
                    const shine = document.createElement('div');
                    shine.className = 'shine';
                    card.appendChild(shine);
                }

                const moveHandler = (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -8;
                    const rotateY = ((x - centerX) / centerX) * 8;
                    card.style.setProperty('--rotateX', `${rotateX}deg`);
                    card.style.setProperty('--rotateY', `${rotateY}deg`);
                    const spotlightX = (x / rect.width) * 100;
                    const spotlightY = (y / rect.height) * 100;
                    card.style.setProperty('--mouse-x', `${spotlightX}%`);
                    card.style.setProperty('--mouse-y', `${spotlightY}%`);
                };

                const leaveHandler = () => {
                    card.style.setProperty('--rotateX', '0deg');
                    card.style.setProperty('--rotateY', '0deg');
                    card.style.setProperty('--mouse-x', '50%');
                    card.style.setProperty('--mouse-y', '50%');
                };

                const enterHandler = () => {
                    const shineEl = card.querySelector('.shine');
                    if (shineEl) {
                        shineEl.style.animation = 'none';
                        shineEl.offsetHeight;
                        shineEl.style.animation = 'shine 1.5s ease forwards';
                    }
                };

                card.addEventListener('mousemove', moveHandler);
                card.addEventListener('mouseleave', leaveHandler);
                card.addEventListener('mouseenter', enterHandler);

                card._handlers = { moveHandler, leaveHandler, enterHandler };
            });
        };

        // Delay slighty to ensure children are mounted/styles applied
        setTimeout(attachTilt, 100);

        return () => {
            scrollObserver.disconnect();
            buttons.forEach(btn => btn.removeEventListener('mouseenter', handleRipple));
            document.querySelectorAll('.strategy-card, .governance-card').forEach(card => {
                if (card._handlers) {
                    card.removeEventListener('mousemove', card._handlers.moveHandler);
                    card.removeEventListener('mouseleave', card._handlers.leaveHandler);
                    card.removeEventListener('mouseenter', card._handlers.enterHandler);
                }
            });
        };
    }, []);

    return (
        <>
            <BackgroundParticles />
            <SectionTracker />
            <Navbar />
            <main>
                <Hero />
                <TaglineStrip />
                <Strategy />
                <Performance />
                <RiskGovernance />
            </main>
            <Footer />
        </>
    );
};
export default Home;
