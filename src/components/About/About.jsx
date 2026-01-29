import React from 'react';
import './About.css';
import aboutImage from '../../assets/images/newImages/card 2.jpeg';
import videoCard from '../../assets/images/newImages/video-card.mp4';

import ProblemSolution from '../ProblemSolution/ProblemSolution';
import Features from '../Features/Features';
import Services from '../Services/Services';

const About = () => {
    const aboutItems = [
        {
            title: 'What is AHF?',
            description: "AHF is a next-generation decentralized digital currency designed to power seamless, secure, and borderless peer-to-peer transactions. Built to support real-world applications and future-ready innovations, AHF is more than just a cryptocurrency—it's the foundation of a growing ecosystem that bridges digital finance with practical utility."
        },
        {
            title: 'Why AHF is Needed',
            description: "In a world where financial systems are often restrictive, AHF offers an open, decentralized alternative. It enables fast, transparent, and cost-effective transactions without reliance on banks or central authorities. By returning control to users, AHF promotes true financial freedom and inclusion on a global scale."
        },
        {
            title: 'Why AHF Represents Wealth',
            description: "AHF is designed to be a store of value and a tool for financial empowerment. With a limited supply, decentralized governance, and increasing demand, it has the potential for long-term value appreciation. AHF offers both accessibility and security, making it a powerful asset for wealth preservation and growth."
        }
    ];

    return (
        <>
            <section id="about" className="about-section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <div className="section-header">
                                <h2 className="heading-text">Introducing AHF</h2>
                            </div>



                            <ul className="about-list">
                                {aboutItems.map((item, index) => (
                                    <li key={index} className="about-item" data-aos="fade-up" data-aos-delay={index * 100}>
                                        <h3 className="item-title">{item.title}</h3>
                                        <p className="item-description">{item.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="about-visual">
                            <div className="about-item market-opportunity" data-aos="fade-up">
                                <h3 className="item-title">Market Opportunity</h3>
                                <p className="item-description">
                                    AHF is strategically positioned to capitalize on the explosive growth of digital finance. As more individuals, businesses, and institutions adopt crypto for payments, investments, and decentralized applications, AHF stands at the forefront—offering real-world utility, innovative technology, and a clear path to mainstream adoption.
                                </p>
                            </div>

                            <div className="about-image">
                                <div className="ripple-container">
                                    <div className="ripple ripple-1"></div>
                                    <div className="ripple ripple-2"></div>
                                    <div className="ripple ripple-3"></div>
                                    <div className="ripple ripple-4"></div>
                                </div>
                                <div className="coin-image">
                                    {/* Video Card Section */}
                                    <div className="video-card-wrapper" data-aos="fade-up">
                                        <div className="video-card">
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="intro-video"
                                            >
                                                <source src={videoCard} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape-shadow shape-1"></div>
                <div className="shape-shadow shape-2"></div>
            </section>
            <ProblemSolution />
            <Features />
            <Services />
        </>
    );
};

export default About;
