import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <p className="intro-text">Get in Touch</p>
            <h1 className="section-title">Contact Me</h1>
            <div className="contact-info-container">
                <div className="contact-card">
                    <img src="./assets/email.png" alt="Email" className="contact-icon" />
                    <p><a href="mailto:nischal1337@gmail.com">nischal1337@gmail.com</a></p>
                </div>
                <div className="contact-card">
                    <img src="./assets/linkedin.png" alt="LinkedIn" className="contact-icon" />
                    <p><a href="https://www.linkedin.com/nischal0x01" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                </div>
            </div>
            <footer className="footer">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

            </footer>
        </section>
    );
};

export default Contact;
