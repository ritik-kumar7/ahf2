import React, { useState } from 'react';
import './Features.css';
import iconDollar from '../../assets/images/logos/icon_dollar.svg';
import iconChart from '../../assets/images/logos/icon_chart.svg';
import calculatorBg from '../../assets/images/logos/2024-11-26T22-52-20.602Z-94-JXF8U9xKddyhk84TQVd9NuxC4_bUBB.webp';

const Features = () => {
    const [amount, setAmount] = useState(10000);
    const [interest, setInterest] = useState(1);

    const features = [
        {
            icon: iconDollar,
            title: 'Real Use, Real Value',
            description: "AHF works in real life—payments, real estate, smart apps. Not just hype, but real utility."
        },
        {
            icon: iconChart,
            title: 'Early Growth Stage',
            description: "Get in early. AHF is building fast, with room to grow in value and use."
        },
        {
            icon: null, // Using SVG fallback
            title: 'Limited Supply',
            description: "Only a fixed amount. More demand, higher value. AHF is built to hold strong."
        }
    ];

    const calculateReturns = () => {
        const monthlyReturn = amount * (interest / 100);
        return monthlyReturn.toFixed(2);
    };

    const updateSliderBackground = (value, max) => {
        const percent = (value / max) * 100;
        return `linear-gradient(90deg, #c9a855 ${percent}%, #1e1e1e ${percent}%)`;
    };

    return (
        <section className="features-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="heading-text">Why AHF is Worth Buying Today?</h2>
                </div>

                <div className="features-content">
                    <div className="features-list">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">
                                    {feature.icon ? (
                                        <img src={feature.icon} alt={feature.title} />
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z" />
                                        </svg>
                                    )}
                                </div>
                                <div className="feature-info">
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-description">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="calculator-card" style={{ backgroundImage: `url("${calculatorBg}")` }}>
                        <h2 className="calculator-title">ROI Calculator</h2>

                        <div className="slider-container">
                            <div className="slider-label">
                                <span>Initial Capital</span>
                                <span className="value-display">${amount.toLocaleString()}</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100000"
                                step="100"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className="slider"
                                style={{ background: updateSliderBackground(amount, 100000) }}
                            />
                        </div>

                        <div className="slider-container">
                            <div className="slider-label">
                                <span>Expected Monthly Return</span>
                                <span className="value-display">{interest}%</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="100"
                                step="1"
                                value={interest}
                                onChange={(e) => setInterest(Number(e.target.value))}
                                className="slider"
                                style={{ background: updateSliderBackground(interest, 100) }}
                            />
                        </div>

                        <div className="result-container">
                            <div className="result-label">Projected Monthly Profit:</div>
                            <div className="result-value">${calculateReturns()}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape-shadow shape-1"></div>
            <div className="shape-shadow shape-2"></div>
        </section>
    );
};

export default Features;
