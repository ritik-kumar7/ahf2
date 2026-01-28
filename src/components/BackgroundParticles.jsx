import React, { useEffect } from 'react';

const BackgroundParticles = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const particles = document.querySelectorAll('.particle');
            particles.forEach((particle, index) => {
                const speed = 0.03 + (index * 0.01);
                const yOffset = scrollY * speed;
                particle.style.transform = `translateY(${yOffset}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);

        const handleMouseMove = (e) => {
            const particles = document.querySelectorAll('.particle');
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            particles.forEach((particle) => {
                const rect = particle.getBoundingClientRect();
                const particleX = rect.left + rect.width / 2;
                const particleY = rect.top + rect.height / 2;
                const distX = mouseX - particleX;
                const distY = mouseY - particleY;
                const distance = Math.sqrt(distX * distX + distY * distY);
                if (distance < 200) {
                    const force = (200 - distance) / 200;
                    const moveX = (distX / distance) * force * -30;
                    const moveY = (distY / distance) * force * -30;
                    // Combine yOffset and mouse offset? 
                    // Since scroll sets translateY, and this sets translate(x,y), they conflict in 'transform' property.
                    // The simple way is to use a wrapper for scroll or separate transforms.
                    // But for now, faithfully replicating the potential bug or simple behavior:
                    particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
                    // This will override scroll position until next scroll event.
                }
            });
        };
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <div className="particles-container" aria-hidden="true">
            {[...Array(12)].map((_, i) => (
                <div key={i} className="particle"></div>
            ))}
        </div>
    );
};
export default BackgroundParticles;
