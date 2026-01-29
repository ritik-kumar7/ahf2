import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeTab, setActiveTab] = useState('general');
    const [activeAccordion, setActiveAccordion] = useState({ general: 0, card: 0, listings: 0, realestate: 0 });

    const faqData = {
        general: [
            { question: 'What is Alieus Coin (AHF2)?', answer: 'Alieus Coin (AHF2) is a next-gen digital asset built on the Binance Smart Chain, designed to power real-world utilities like AI, real estate, and blockchain transactions.' },
            { question: 'What is the total supply of AHF2?', answer: 'AHF2 has a fixed supply of 1 billion tokens, each priced at $1 USD.' },
            { question: 'What makes Alieus different from other crypto projects?', answer: 'Alieus combines practical use cases—like a crypto card, property buying, and an AI marketplace—into one token ecosystem.' },
            { question: 'Is there a whitepaper for Alieus Coin?', answer: 'Yes, the whitepaper details the full vision, tokenomics, and roadmap of AHF2.' },
            { question: 'Where can I store my AHF2 tokens?', answer: 'You can store AHF2 in any BSC-compatible wallet such as MetaMask, Trust Wallet, or the Alieus Wallet (coming soon).' }
        ],
        card: [
            { question: 'What is the Alieus Card?', answer: 'The Alieus Card is a crypto debit card allowing you to spend AHF2 globally.' },
            { question: 'Can I use the card for both online and offline payments?', answer: "Yes, it's accepted at thousands of locations worldwide, online and offline." },
            { question: 'Will I earn rewards by using the Alieus Card?', answer: 'Yes, users will earn token-based rewards and cashback for eligible purchases.' },
            { question: 'Is the card safe to use?', answer: 'Absolutely. It comes with secure features like 2FA, encrypted transactions, and real-time tracking.' },
            { question: 'How can I apply for the card?', answer: 'Card applications will open during Q4 2026 through the official Alieus platform.' }
        ],
        listings: [
            { question: 'When will AHF2 be listed on exchanges?', answer: 'CMC and CoinGecko listings are expected in Q2 2026, followed by Tier-1 exchanges in Q3 2026.' },
            { question: 'Will AHF2 be available for trading globally?', answer: 'Yes, we are working with international exchanges to ensure worldwide availability.' },
            { question: 'What trading pairs will be offered?', answer: 'AHF2 will be paired with USDT, BNB, and other major cryptocurrencies.' },
            { question: 'Can I track live price and volume data?', answer: 'Yes, data will be available on exchanges and major crypto tracking platforms.' },
            { question: 'Will Alieus offer staking or farming on exchanges?', answer: 'Yes, AHF2 will explore DeFi options including staking pools and liquidity farming.' }
        ],
        realestate: [
            { question: 'Can I really buy property with AHF2?', answer: 'Yes! Through the Alieus Real Estate Marketplace, users can buy properties using AHF2 tokens.' },
            { question: 'What types of properties will be listed?', answer: 'Options include residential, commercial, and tokenized real estate in the metaverse.' },
            { question: 'How is ownership validated?', answer: 'Blockchain smart contracts will be used for transparent and tamper-proof ownership records.' },
            { question: 'Do I need to convert AHF2 into fiat for real estate purchases?', answer: 'No conversion needed. Properties listed on our marketplace will accept AHF2 directly.' },
            { question: 'Will there be global property listings?', answer: 'Yes, starting with select countries and expanding internationally in 2027.' }
        ]
    };

    const tabs = [
        { id: 'general', label: 'General Question' },
        { id: 'card', label: 'Card Utility' },
        { id: 'listings', label: 'Listings' },
        { id: 'realestate', label: 'Real Estate' }
    ];

    const toggleAccordion = (index) => {
        setActiveAccordion(prev => ({
            ...prev,
            [activeTab]: prev[activeTab] === index ? -1 : index
        }));
    };

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="heading-text">Faq</h2>
                </div>

                <div className="faq-tabs">
                    <div className="tabs-list">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="accordion-container">
                        {faqData[activeTab].map((item, index) => (
                            <div key={index} className={`accordion-item ${activeAccordion[activeTab] === index ? 'active' : ''}`}>
                                <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                    <span className="accordion-icon">
                                        <svg viewBox="0 0 23 27" fill="currentColor">
                                            <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                            <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                            <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                        </svg>
                                    </span>
                                    <span className="accordion-title">
                                        {String(index + 1).padStart(2, '0')}- {item.question}
                                    </span>
                                </div>
                                <div className="accordion-body">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
