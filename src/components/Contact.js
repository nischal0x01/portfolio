import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <p className="intro-text">Get in Touch</p>
            <h1 className="section-title">Contact Me</h1>

            <div className="contact-info-container">
                {/* Email */}
                <div className="contact-card">
                    <img src="./assets/email.png" alt="Email" className="contact-icon" />
                    <p><a href="mailto:nischal1337@gmail.com">nischal1337@gmail.com</a></p>
                </div>

                {/* LinkedIn */}
                <div className="contact-card">
                    <img src="./assets/linkedin.png" alt="LinkedIn" className="contact-icon" />
                    <p><a href="https://www.linkedin.com/in/nischal0x01" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                </div>

                {/* Twitter */}
                <div className="contact-card">
                    <img src="./assets/twitter.png" alt="Twitter" className="contact-icon" />
                    <p><a href="https://twitter.com/nischal0x01" target="_blank" rel="noopener noreferrer">Twitter</a></p>
                </div>

                {/* Instagram */}
                <div className="contact-card">
                    <img src="./assets/instagram.png" alt="Instagram" className="contact-icon" />
                    <p><a href="https://instagram.com/nischal0x01" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                </div>

                {/* Facebook */}
                <div className="contact-card">
                    <img src="./assets/facebook.png" alt="Facebook" className="contact-icon" />
                    <p><a href="https://facebook.com/nischal0x01" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                </div>

                {/* GitHub */}
                <div className="contact-card">
                    <img src="./assets/github.png" alt="GitHub" className="contact-icon" />
                    <p><a href="https://github.com/nischal0x01" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
