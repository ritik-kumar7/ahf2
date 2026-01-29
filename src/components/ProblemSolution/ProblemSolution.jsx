import React from 'react';
import './ProblemSolution.css';
import iconManQuestion from '../../assets/images/logos/icon_man_question.svg';
import iconBulb from '../../assets/images/logos/icon_bulb.svg';

const ProblemSolution = () => {
    const problems = [
        { title: 'Limited Real Use', description: 'Many coins offer no real-world utility.' },
        { title: 'Lack of Trust', description: 'Without clear purpose, investor trust drops.' },
        { title: 'No Ecosystem Link', description: 'AI, crypto, and real estate stay separate.' },
        { title: 'Complex Access', description: 'Tech-heavy systems block regular users.' },
        { title: 'Slow Adoption', description: 'Without ease or benefits, growth is slow.' }
    ];

    const solutions = [
        { title: 'Real Utility', description: 'Use AHF2 to buy property, pay, or lease AI.' },
        { title: 'Trusted Vision', description: 'Transparent roadmap, real blockchain, real value.' },
        { title: 'All-in-One Platform', description: 'AI, blockchain, and real estate in one place.' },
        { title: 'Simple Access', description: 'Tools and apps for everyone — no coding needed.' },
        { title: 'Future-Ready', description: 'Scalable, secure, and made for global use.' }
    ];

    return (
        <section className="problem-solution-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="heading-text">AHF Problem & Solution</h2>
                </div>

                <div className="ps-table">
                    <div className="ps-column problem-column">
                        <h3 className="column-heading">
                            <span className="icon">
                                <img src={iconManQuestion} alt="Problem" />
                            </span>
                            <span className="text">AHF Problem</span>
                        </h3>

                        <ul className="ps-list">
                            {problems.map((item, index) => (
                                <li key={index} className="ps-item">
                                    <span className="check-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <path d="M5 12l5 5L20 7" />
                                        </svg>
                                    </span>
                                    <div className="item-content">
                                        <span className="item-title">{item.title}</span>
                                        <span className="item-description">{item.description}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="ps-column solution-column">
                        <h3 className="column-heading">
                            <span className="icon">
                                <img src={iconBulb} alt="Solution" />
                            </span>
                            <span className="text">AHF Solution</span>
                        </h3>

                        <ul className="ps-list">
                            {solutions.map((item, index) => (
                                <li key={index} className="ps-item">
                                    <span className="check-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <path d="M5 12l5 5L20 7" />
                                        </svg>
                                    </span>
                                    <div className="item-content">
                                        <span className="item-title">{item.title}</span>
                                        <span className="item-description">{item.description}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
