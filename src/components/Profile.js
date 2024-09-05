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
            <p className="title">Software Engineer</p>
            <div className="btn-container">
                <Button className="btn-download">Download CV</Button>
                <Button className="btn-contact">Contact Info</Button>
            </div>
            <div className="socials-container">
                <SocialIcon
                    src="./assets/linkedin.png"
                    alt="My LinkedIn profile"
                    link="https://linkedin.com/nischal0x01"
                />
                <SocialIcon
                    src="./assets/github.png"
                    alt="My Github profile"
                    link="https://github.com/nischal0x01"
                />
                <SocialIcon
                    src="./assets/facebook.png"
                    alt="My Facebook profile"
                    link="https://facebook.com/nischal0x01"
                />
                <SocialIcon
                    src="./assets/instagram.png"
                    alt="My Instagram profile"
                    link="https://instagram.com/nischal0x01"
                />
                <SocialIcon
                    src="./assets/twitter.png"
                    alt="My Twitter profile"
                    link="https://twitter.com/nischal0x01"
                />
            </div>
        </div>
    </section>
);

export default Profile;
