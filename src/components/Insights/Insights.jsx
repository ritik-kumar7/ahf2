import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import BackgroundParticles from '../BackgroundParticles';
import './Insights.css';

const Insights = () => {
    // Scroll To Top on Mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const insightsData = [
        {
            year: '2025',
            quarters: [
                { title: 'Q1 - 2025', items: ['Research and Analysis – Comprehensive market and technical study to outline ecosystem requirements.'] },
                { title: 'Q2 - 2025', items: ['Token Launch – Launch of both AHF1 & AHF2 tokens with initial community and investor engagement.'] },
                { title: 'Q3 - 2025', items: ['PR and Social Media – Global marketing campaigns to raise awareness and build community trust.'] },
                { title: 'Q4 - 2025', items: ['Launch of AI Marketplace Beta – Official website release and initial rollout of the Agent AI Marketplace.'] }
            ]
        },
        {
            year: '2026',
            quarters: [
                { title: 'Q2 - 2026', items: ['Listing on Tier 1 International Exchanges – Enhancing liquidity and global reach.'] },
                { title: 'Q3 - 2026', items: ['Listing on CoinMarketCap (CMC) and CoinGecko and major platform – Increasing market transparency and attracting global investment.'] },
                { title: 'Q4 - 2026', items: ['AI/ML Project Alpha & Developer SDK Release – Early access to AI tools and developer kits to foster third-party innovation.'] }
            ]
        },
        {
            year: '2027',
            quarters: [
                { title: 'Q1 - 2027', items: ['Alieus Card Launch and Real Estate Marketplace Beta – Debut of the payment card system and real estate tokenization platform.'] },
                { title: 'Q2 - 2027', items: ['AI/ML Project Alpha & Developer SDK Update – Continued enhancements and broader developer engagement.'] },
                { title: 'Q4 - 2027', items: ['Full Blockchain Deployment and Cross-Chain Integrations – Rollout of the complete blockchain ecosystem for seamless interoperability.'] }
            ]
        },
        {
            year: '2028',
            quarters: [
                { title: 'Q2 - 2028', items: ['Global Expansion and Enterprise Partnerships – Strategic international partnerships and enterprise-level adoption.'] }
            ]
        }
    ];

    return (
        <div className="insights-page">
            <BackgroundParticles />
            <Navbar />

            <section className="insights-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-text">Insights</h2>
                        <p className="section-description">
                            The Alieus Coin project is organized into distinct phases designed to ensure strategic development, community engagement, and global expansion:
                        </p>
                    </div>

                    <div className="insights-grid">
                        {insightsData.map((yearData, yearIndex) => (
                            <div key={yearIndex} className="insights-block">
                                <div className="year-badge">{yearData.year}</div>
                                <div className="quarters-list">
                                    {yearData.quarters.map((quarter, quarterIndex) => (
                                        <div key={quarterIndex} className="quarter-item">
                                            <h3 className="quarter-title">{quarter.title}</h3>
                                            <ul className="quarter-items">
                                                {quarter.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <span className="bullet">
                                                            <svg viewBox="0 0 640 640" fill="currentColor">
                                                                <path d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
                                                            </svg>
                                                        </span>
                                                        <span className="item-text">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="hover-shape"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section-divider"></div>
            </section>

            <Footer />
        </div>
    );
};

export default Insights;
