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
                        <li>✔ JavaScript - Experienced</li>
                        <li>✔ React - Intermediate</li>
                        <li>✔ Next.js - Basic</li>
                        <li>✔ Tailwind CSS - Intermediate</li>
                        <li>✔ TypeScript - Intermediate</li>
                        <li>✔ SASS - Intermediate</li>
                    </ul>
                </div>
                <div className="experience-box">
                    <h3>Backend Development</h3>
                    <ul>
                        <li>✔ MongoDB - Intermediate</li>
                        <li>✔ Node.js - Intermediate</li>
                        <li>✔ Express.js - Intermediate</li>
                        <li>✔ Git - Experienced</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
