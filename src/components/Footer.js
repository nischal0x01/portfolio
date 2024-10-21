import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    // State to handle mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <footer>
            <nav>
                <div className="logo">
                    nischal0<span className="x">x</span>01
                </div>

                {/* Desktop Navigation */}
                <div className="desktop-nav">
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li>
                            <a
                                href="https://nischal0x01.hashnode.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Blogs
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="hamburger-nav" onClick={toggleMenu}>
                    <div className="hamburger-menu">
                        <span className="hamburger-icon"></span>
                        <span className="hamburger-icon"></span>
                        <span className="hamburger-icon"></span>
                    </div>
                </div>

                {/* Mobile Menu Links, shown only when hamburger is clicked */}
                {isOpen && (
                    <div className="menu-links">
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="https://nischal0x01.hashnode.dev" target="_blank" rel="noopener noreferrer">Blogs</a></li>
                        </ul>
                    </div>
                )}
            </nav>
            <p>Copyright © 2024 Nischal Subedi. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
