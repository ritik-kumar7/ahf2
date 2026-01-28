import React from 'react';

const Strategy = () => {
    return (
        <section id="strategy">
            <h2 className="section-title gradient-text scroll-reveal">Strategy</h2>
            <div className="strategy-grid">
                <div className="strategy-card scroll-reveal stagger-1">
                    <div className="strategy-header">
                        <div className="strategy-icon">
                            <svg viewBox="0 0 48 48">
                                <rect x="8" y="8" width="32" height="32" rx="4" />
                                <path d="M16 24h16M24 16v16" />
                                <circle cx="24" cy="24" r="8" />
                            </svg>
                        </div>
                        <h4>Quant Signals</h4>
                    </div>
                    <p>AI models analysing market structure to identify quant-driven trading signals.</p>
                </div>
                <div className="strategy-card scroll-reveal stagger-2">
                    <div className="strategy-header">
                        <div className="strategy-icon">
                            <svg viewBox="0 0 48 48">
                                <path d="M8 40V20l10-12 10 8 12-8v32" />
                                <circle cx="18" cy="20" r="4" />
                                <circle cx="28" cy="16" r="4" />
                                <circle cx="40" cy="8" r="4" />
                            </svg>
                        </div>
                        <h4>Portfolio Construction</h4>
                    </div>
                    <p>Risk-balanced asset allocation driven by systematic quantitative algorithms.</p>
                </div>
                <div className="strategy-card scroll-reveal stagger-3">
                    <div className="strategy-header">
                        <div className="strategy-icon">
                            <svg viewBox="0 0 48 48">
                                <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" />
                                <path d="M24 24v20" />
                                <path d="M4 14l20 10 20-10" />
                            </svg>
                        </div>
                        <h4>Risk Engine</h4>
                    </div>
                    <p>Proprietary risk engine with drawdown control and volatility filters.</p>
                </div>
            </div>
        </section>
    );
};
export default Strategy;
