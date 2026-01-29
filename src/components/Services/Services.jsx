import React from 'react';
import './Services.css';
import serviceImage from '../../assets/images/newImages/card 2.jpeg';

const Services = () => {
    const services = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-5h2v5zm0-7h-2V8h2v2z" />
                </svg>
            ),
            title: 'Real-World Utility',
            description: 'Use it for payments, real estate, staking, and accessing dApps—true everyday use.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                </svg>
            ),
            title: 'AI-Driven Ecosystem',
            description: 'Powered by AI/ML for smart features like Agents Marketplace and automated tools.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
            ),
            title: 'Secure & Scalable',
            description: 'Built on a strong blockchain that supports smart contracts and cross-chain use.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
            ),
            title: 'Limited Supply, High Potential',
            description: 'Fixed supply means long-term value. Early adoption = early gains.'
        }
    ];

    return (
        <section className="services-section">
            <div className="section-divider top"></div>

            <div className="container">
                <div className="section-header">
                    <h2 className="heading-text">Why You Choose Alieus Coin?</h2>
                </div>

                <div className="services-grid">
                    <div className="service-col left">
                        <div className="service-card">
                            <div className="service-icon">{services[0].icon}</div>
                            <div className="service-info">
                                <h3>{services[0].title}</h3>
                                <p>{services[0].description}</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">{services[2].icon}</div>
                            <div className="service-info">
                                <h3>{services[2].title}</h3>
                                <p>{services[2].description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="service-image">
                        <img src={serviceImage} alt="Alieus Coin Services" />
                        <div className="image-glow"></div>
                    </div>

                    <div className="service-col right">
                        <div className="service-card">
                            <div className="service-icon">{services[1].icon}</div>
                            <div className="service-info">
                                <h3>{services[1].title}</h3>
                                <p>{services[1].description}</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">{services[3].icon}</div>
                            <div className="service-info">
                                <h3>{services[3].title}</h3>
                                <p>{services[3].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape-shadow shape-1"></div>
            <div className="shape-shadow shape-2"></div>
        </section>
    );
};

export default Services;
