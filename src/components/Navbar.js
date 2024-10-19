import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="logo">nischal0<span className='x'>x</span>01</div>
            <div className="desktop-nav">
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="https://nischal0x01.hashnode.dev" target="_blank" rel="noopener noreferrer">Blogs</a></li>
                </ul>
            </div>
            <div className="hamburger-nav">
                <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu-links ${isOpen ? 'open' : ''}`}>
                        <ul>
                            <li><a href="#about" onClick={toggleMenu}>About</a></li>
                            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
