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
                            <p>2+ years<br />Frontend Development</p>
                        </div>
                        <div className="details-box">
                            <img src="./assets/education.png" alt="Education icon" className="icon" />
                            <h3>Education</h3>
                            <p>B.Sc. Bachelor's Degree<br />M.Sc. Master's Degree</p>
                        </div>
                    </div>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                        reprehenderit et laborum, rem, dolore eum quod voluptate exercitationem
                        nobis, nihil esse debitis maxime facere minus sint delectus velit in eos
                        quo officiis explicabo deleniti dignissimos.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default About;
