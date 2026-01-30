import React, { useState, useEffect, useRef } from 'react';
import './SectionTracker.css';

const SectionTracker = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isNearStation, setIsNearStation] = useState(false);
    const indicatorRef = useRef(null);

    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'strategy', label: 'Strategy' },
        { id: 'performance', label: 'Performance' },
        { id: 'risk', label: 'Risk & Governance' },
        { id: 'contact', label: 'Connect' },
    ];

    useEffect(() => {
        // ========== ACTIVE SECTION DETECTION ==========
        const observerOptions = {
            root: null,
            rootMargin: '-45% 0px -45% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        // ========== PREMIUM INDICATOR MOVEMENT ==========
        const handleScroll = () => {
            if (!indicatorRef.current) return;

            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;

            // Calculate section offsets
            const offsetMap = sections.map(s => {
                const el = document.getElementById(s.id);
                return el ? el.offsetTop : 0;
            });

            offsetMap.push(document.documentElement.scrollHeight);

            let activeIndex = 0;
            let segmentProgress = 0;

            // Smooth trigger point for premium feel
            const triggerPoint = scrollY + (viewportHeight * 0.4);

            for (let i = 0; i < sections.length; i++) {
                const start = offsetMap[i];
                const end = offsetMap[i + 1];

                if (triggerPoint >= start && triggerPoint < end) {
                    activeIndex = i;
                    const segmentHeight = end - start;
                    const relativePos = triggerPoint - start;
                    segmentProgress = Math.min(Math.max(relativePos / segmentHeight, 0), 1);
                    break;
                } else if (i === sections.length - 1 && triggerPoint >= start) {
                    activeIndex = i;
                    segmentProgress = 1;
                }
            }

            // Map to tracker positions with smooth interpolation
            const trackerItems = document.querySelectorAll('.tracker-item');
            const trackerContainer = document.querySelector('.section-tracker');

            if (!trackerItems.length || !trackerContainer) return;
            if (trackerItems.length !== sections.length) return;

            const containerRect = trackerContainer.getBoundingClientRect();

            const getDotCenterY = (index) => {
                if (index < 0) index = 0;
                if (index >= trackerItems.length) index = trackerItems.length - 1;

                const itemRect = trackerItems[index].getBoundingClientRect();
                return (itemRect.top + itemRect.height / 2) - containerRect.top;
            };

            const startY = getDotCenterY(activeIndex);
            const endY = getDotCenterY(activeIndex + 1);

            // Smooth cubic interpolation for premium movement
            const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            const smoothProgress = easeInOutCubic(segmentProgress);
            const currentY = startY + (endY - startY) * smoothProgress;

            // Apply position with offset for indicator size
            indicatorRef.current.style.top = `${currentY - 5.5}px`;

            // Enhanced glow logic - more sensitive for premium feel
            const isNear = (segmentProgress < 0.15 || segmentProgress > 0.85);
            const wasNear = indicatorRef.current.classList.contains('active-glow');
            
            if (isNear && !wasNear) {
                indicatorRef.current.classList.add('active-glow');
                // Add subtle haptic feedback simulation
                if (navigator.vibrate) {
                    navigator.vibrate(10);
                }
            } else if (!isNear && wasNear) {
                indicatorRef.current.classList.remove('active-glow');
            }
        };

        // Throttled scroll for smooth performance
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });
        handleScroll(); // Initial call

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', throttledScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Smooth scroll with premium easing
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="section-tracker">
            <div className="tracker-indicator" ref={indicatorRef}></div>
            {sections.map(({ id, label }) => (
                <div
                    key={id}
                    className={`tracker-item ${activeSection === id ? 'active' : ''}`}
                    onClick={() => scrollToSection(id)}
                    title={label} // Tooltip for accessibility
                >
                    <div className="tracker-dot"></div>
                </div>
            ))}
        </div>
    );
};

export default SectionTracker;
