import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                    <li><Link to="#about">About</Link></li>
                    <li><Link to="#experience">Experience</Link></li>
                    <li><Link to="#projects">Projects</Link></li>
                    <li><Link to="#contact">Contact</Link></li>
                    <li><Link to="#blogs">Blogs</Link></li>

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
                            <li><Link to="#about" onClick={toggleMenu}>About</Link></li>
                            <li><Link to="#experience" onClick={toggleMenu}>Experience</Link></li>
                            <li><Link to="#projects" onClick={toggleMenu}>Projects</Link></li>
                            <li><Link to="#contact" onClick={toggleMenu}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
