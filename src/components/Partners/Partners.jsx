import React from 'react';
import './Partners.css';

// Import all partner logos
import partnerLogo2 from '../../assets/images/partners/partner_logo_2.svg';
import pancakeswapLogo from '../../assets/images/partners/logo-dark.svg';
import coinMarketCapLogo from '../../assets/images/partners/coin-market-cap.webp';
import binanceLogo from '../../assets/images/partners/binance.webp';
import afLogo from '../../assets/images/partners/af-logo.webp';
import coingeckoLogo from '../../assets/images/partners/coingeck.webp';

const Partners = () => {
    const partners = [
        { name: 'WBTC', logo: partnerLogo2 },
        { name: 'PancakeSwap', logo: pancakeswapLogo },
        { name: 'CoinMarketCap', logo: coinMarketCapLogo },
        { name: 'Binance', logo: binanceLogo },
        { name: 'Alieus Finance', logo: afLogo },
        { name: 'CoinGecko', logo: coingeckoLogo },
    ];

    return (
        <section className="partners-section">
            <div className="container">
                <div className="section-header">
                    <span className="dot-left"></span>
                    <h2 className="highlight-title">OUR TOP PARTNER</h2>
                    <span className="dot-right"></span>
                </div>

                <div className="partners-carousel">
                    <div className="partners-track">
                        {[...partners, ...partners].map((partner, index) => (
                            <div key={index} className="partner-item">
                                <div className="partner-logo">
                                    <a href="#!" className="logo-wrap">
                                        <img src={partner.logo} alt={partner.name} />
                                        <span className="corner corner-tl"></span>
                                        <span className="corner corner-tr"></span>
                                        <span className="corner corner-bl"></span>
                                        <span className="corner corner-br"></span>
                                        <span className="dot dot-1"></span>
                                        <span className="dot dot-2"></span>
                                        <span className="dot dot-3"></span>
                                        <span className="dot dot-4"></span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
