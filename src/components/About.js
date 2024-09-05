import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <p className="intro-text">Get To Know More</p>
            <h1 className="section-title">About Me</h1>
            <div className="about-container">
                <div className="pic-container">
                    <img src="./assets/about-pic.png" alt="Profile picture" className="about-pic" />
                </div>
                <div className="details-section">
                    <div className="about-details">
                        <div className="details-box">
                            <img src="./assets/experience.png" alt="Experience icon" className="icon" />
                            <h3>Experience</h3>
                            <p>2+ years<br />Software Development</p>
                        </div>
                        <div className="details-box">
                            <img src="./assets/education.png" alt="Education icon" className="icon" />
                            <h3>Education</h3>
                            <p>B.Sc. Computer Science<br /></p>
                        </div>
                    </div>
                    <p className="description">
                        I am a CS student enrolled in my undergraduate program at Kathmandu University. I have a keen interest in areas such as web development, finance, FinTech, DevOps and Cyber Security. I am a driven individual with the ability to adapt effectively to various situations, aiming to contribute to personal growth as well as team development.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default About;
