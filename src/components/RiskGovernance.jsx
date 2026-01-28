import React from 'react';
import { Link } from 'react-router-dom';

const RiskGovernance = () => {
    return (
        <section id="risk">
            <h2 className="section-title gradient-text scroll-reveal">Risk & Governance</h2>
            <div className="governance-grid">
                <div className="governance-card scroll-reveal stagger-1">
                    <div className="governance-label">AHF2</div>
                    <h4>Macro signal update</h4>
                    <p>Tracking more coverage to a good/risk, goods in externatal this explained</p>
                    <a href="#" className="read-more">Read</a>
                </div>
                <div className="governance-card scroll-reveal stagger-2">
                    <div className="governance-label">AHF2</div>
                    <h4>Volatility regimes</h4>
                    <p>Allocating inves re test outs treaw, volatities, a interpretng performance.</p>
                    <a href="#" className="read-more">Read</a>
                </div>
                <div className="governance-card scroll-reveal stagger-3">
                    <div className="governance-label">AHF2</div>
                    <h4>Execution intelligence</h4>
                    <p>Bollnar risk, fass, base action, prevd order a server action.</p>
                    <a href="#" className="read-more">Read</a>
                </div>
            </div>

            <div className="footer-cta">
                <Link to="/insights">
                    <button className="explore-btn scroll-reveal-scale">
                        Explore More Insights <span>↓</span>
                    </button>
                </Link>
            </div>
        </section>
    );
};
export default RiskGovernance;
