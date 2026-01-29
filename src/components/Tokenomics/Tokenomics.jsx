import React, { useEffect, useRef, useState } from 'react';
import './Tokenomics.css';
import tokenImage from '../../assets/images/newImages/card-1.jpeg';

const Tokenomics = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const distributionData = [
        { percent: '10%', title: 'Advisory, Marketing & Development', value: '100,000,000' },
        { percent: '10%', title: 'Liquidity Provision', value: '100,000,000' },
        { percent: '10%', title: 'ICO (Initial Coin Offering)', value: '100,000,000' },
        { percent: '2%', title: 'Charity', value: '20,000,000' },
        { percent: '3%', title: 'Reserve Fund', value: '30,000,000' },
        { percent: '45%', title: 'Staking Rewards', value: '450,000,000' },
        { percent: '20%', title: 'Ecosystem Development', value: '200,000,000' }
    ];

    const tokenInfo = [
        { title: 'Total Supply', value: '1B AHF2' },
        { title: 'Technology', value: 'Binance Smart Chain' },
        { title: 'Token Name', value: 'Alieus 2.0' },
        { title: 'Ticker', value: 'AHF2' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="tokenomics" className="tokenomics-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="heading-text">AHF Tokenomics</h2>
                </div>

                <div className="tokenomics-content">
                    <div className="distribution-list">
                        {distributionData.map((item, index) => (
                            <div
                                key={index}
                                className={`distribution-item ${isVisible ? 'animate' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="percent-badge">{item.percent}</div>
                                <div className="distribution-info">
                                    <h4 className="distribution-title">{item.title}</h4>
                                    <div className="distribution-value">
                                        [{item.value}]
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="token-image">
                        <img src={tokenImage} alt="AHF Token" />
                        <div className="token-glow"></div>
                    </div>

                    <div className="token-info-list">
                        {tokenInfo.map((item, index) => (
                            <div
                                key={index}
                                className={`token-info-item ${isVisible ? 'animate' : ''}`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="info-icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
                                    </svg>
                                </div>
                                <div className="info-content">
                                    <h3 className="info-title">{item.title}</h3>
                                    <p className="info-value">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bsc-button-wrapper">
                    <a
                        href="https://bscscan.com/token/0xf4b84ae679a8a69aa4d0395a029c0503cad6c2fb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bsc-btn"
                    >
                        <span className="btn-content">
                            <span className="arrow-left">
                                <svg viewBox="0 0 28 23" fill="currentColor">
                                    <path d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z" />
                                    <path d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z" />
                                    <path d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z" />
                                </svg>
                            </span>
                            <span className="btn-text">BSC SCAN</span>
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
        </section>
    );
};

export default Tokenomics;
