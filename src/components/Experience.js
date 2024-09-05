import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <p className="intro-text">Explore My</p>
            <h1 className="section-title">Experience</h1>
            <div className="experience-container">
                <div className="experience-box">
                    <h3>Frontend Development</h3>
                    <ul>
                        <li>✔ HTML - Experienced</li>
                        <li>✔ CSS - Experienced</li>
                        <li>✔ SASS - Intermediate</li>
                        <li>✔ JavaScript - Basic</li>
                        <li>✔ TypeScript - Basic</li>
                        <li>✔ Material UI - Intermediate</li>
                    </ul>
                </div>
                <div className="experience-box">
                    <h3>Backend Development</h3>
                    <ul>
                        <li>✔ PostgreSQL - Basic</li>
                        <li>✔ Node.js - Intermediate</li>
                        <li>✔ Express.js - Intermediate</li>
                        <li>✔ Git - Intermediate</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
