import React from 'react';
import '../styles/Profile.css';

const Button = ({ className, children }) => (
    <button className={`btn ${className}`}>{children}</button>
);

const SocialIcon = ({ src, alt, link }) => (
    <img
        src={src}
        alt={alt}
        className="icon"
        onClick={() => window.open(link, '_blank')}
    />
);

const Profile = () => (
    <section id="profile" className="profile-container">
        <div className="pic-container">
            <img src="./assets/profile-pic.png" alt="John Doe profile" className="profile-pic" />
        </div>
        <div className="text-container">
            <p className="greeting">Hello, I'm</p>
            <h1 className="name">Nischal Subedi</h1>
            <p className="title">Frontend Developer</p>
            <div className="btn-container">
                <Button className="btn-download">Download CV</Button>
                <Button className="btn-contact">Contact Info</Button>
            </div>
            <div className="socials-container">
                <SocialIcon
                    src="./assets/linkedin.png"
                    alt="My LinkedIn profile"
                    link="https://linkedin.com/"
                />
                <SocialIcon
                    src="./assets/github.png"
                    alt="My Github profile"
                    link="https://github.com/"
                />
            </div>
        </div>
    </section>
);

export default Profile;
