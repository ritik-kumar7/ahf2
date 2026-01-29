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

        // ========== ROBUST INDICATOR MOVEMENT ==========
        const handleScroll = () => {
            if (!indicatorRef.current) return;

            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;

            // 1. Determine which "segment" of the page we are within
            // We need the offsets of all sections to map scrollY to a segment index + progress
            const offsetMap = sections.map(s => {
                const el = document.getElementById(s.id);
                return el ? el.offsetTop : 0;
            });

            // Add a virtual "end" point for the last section equal to document height
            offsetMap.push(document.documentElement.scrollHeight);

            let activeIndex = 0;
            let segmentProgress = 0;

            // Find current segment in relation to viewport center
            const triggerPoint = scrollY + (viewportHeight * 0.4); // 40% down the screen

            for (let i = 0; i < sections.length; i++) {
                const start = offsetMap[i];
                const end = offsetMap[i + 1];

                // If trigger point is within this section's bounds
                if (triggerPoint >= start && triggerPoint < end) {
                    activeIndex = i;
                    const segmentHeight = end - start;
                    const relativePos = triggerPoint - start;
                    segmentProgress = Math.min(Math.max(relativePos / segmentHeight, 0), 1);
                    break;
                } else if (i === sections.length - 1 && triggerPoint >= start) {
                    // Past the start of the last section
                    activeIndex = i;
                    segmentProgress = 1;
                }
            }

            // 2. Map to Tracker Dot Positions (Visual)
            // We calculate the Y position relative to the tracker container
            const trackerItems = document.querySelectorAll('.tracker-item');
            const trackerContainer = document.querySelector('.section-tracker');

            if (!trackerItems.length || !trackerContainer) return;
            // Only proceed if counts match (react render sync)
            if (trackerItems.length !== sections.length) return;

            const containerRect = trackerContainer.getBoundingClientRect();

            const getDotCenterY = (index) => {
                if (index < 0) index = 0;
                if (index >= trackerItems.length) index = trackerItems.length - 1;

                const itemRect = trackerItems[index].getBoundingClientRect();
                // Return center of dot relative to container top
                return (itemRect.top + itemRect.height / 2) - containerRect.top;
            };

            const startY = getDotCenterY(activeIndex);
            const endY = getDotCenterY(activeIndex + 1); // getDotCenterY clamps internally if out of bounds

            // Interpolate position
            const currentY = startY + (endY - startY) * segmentProgress;

            // Apply (minus half indicator height of 10px = 5px)
            indicatorRef.current.style.top = `${currentY - 5}px`;


            // Glow Logic (Near a dot)
            const isNear = (segmentProgress < 0.1 || segmentProgress > 0.9);
            if (isNear) {
                indicatorRef.current.classList.add('active-glow');
            } else {
                indicatorRef.current.classList.remove('active-glow');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
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
                >
                    <div className="tracker-dot"></div>
                </div>
            ))}
        </div>
    );
};

export default SectionTracker;
