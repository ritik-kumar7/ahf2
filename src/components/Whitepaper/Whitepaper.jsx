import React from 'react';
import './Whitepaper.css';
import whitepaperImage from '../../assets/images/ico_whitepager_image.webp';
import whitepaperPdf from '../../assets/AHF2_WhitePaper_V1.pdf';

const Whitepaper = () => {
    const features = [
        'Built on BNB Smart Chain',
        'Transparent Supply & Pricing',
        'Backed by real-world utilities'
    ];

    const documents = [
        { left: ['White Paper.', 'Project Vision & Strategy'], right: ['Tokenomics & Distribution', 'Quick Start Summary.'] }
    ];

    return (
        <section id="whitepaper" className="whitepaper-section">
            <div className="section-divider top"></div>

            <div className="container">
                <div className="section-header">
                    <h2 className="heading-text">Whitepaper</h2>
                </div>

                <div className="whitepaper-content">
                    <div className="whitepaper-image">
                        <div className="image-wrapper">
                            <img src={whitepaperImage} alt="AHF Whitepaper" />
                            <div className="image-glow"></div>
                        </div>
                    </div>

                    <div className="whitepaper-info">
                        <div className="info-block">
                            <h3>Project Transparency</h3>
                            <p>
                                Alieus Coin is built with a clear focus on openness and long-term vision. Our whitepaper outlines every detail — from tokenomics to real-world use cases — so users understand exactly what we stand for.
                            </p>
                            <ul className="feature-list">
                                {features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="info-block">
                            <h3>Explore Whitepaper</h3>
                            <p>
                                Dive deeper into the Alieus ecosystem. Our documents outline everything from vision to execution — built to ensure clarity, trust, and innovation.
                            </p>

                            <div className="documents-grid">
                                <ul className="doc-list">
                                    {documents[0].left.map((doc, index) => (
                                        <li key={index}>
                                            <span className="check-icon">✓</span>
                                            {doc}
                                        </li>
                                    ))}
                                </ul>
                                <ul className="doc-list">
                                    {documents[0].right.map((doc, index) => (
                                        <li key={index}>
                                            <span className="check-icon">✓</span>
                                            {doc}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a href={whitepaperPdf} download="AHF2_WhitePaper.pdf" className="download-btn">
                                <span className="btn-content">
                                    <span className="arrow-left">
                                        <svg viewBox="0 0 28 23" fill="currentColor">
                                            <path d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z" />
                                            <path d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z" />
                                            <path d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z" />
                                        </svg>
                                    </span>
                                    <span className="btn-text">Download White Paper</span>
                                    <span className="arrow-right">
                                        <svg viewBox="0 0 27 23" fill="currentColor">
                                            <path d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z" />
                                            <path d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z" />
                                            <path d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z" />
                                        </svg>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Whitepaper;
