import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <nav>
                <div className="nav-links-container">
                    <ul className="nav-links">
                        <li><Link to="#about">About</Link></li>
                        <li><Link to="#experience">Experience</Link></li>
                        <li><Link to="#projects">Projects</Link></li>
                        <li><Link to="#contact">Contact</Link></li>
                        <li><a href="https://nischal0x01.hashnode.dev">Blogs</a></li>
                    </ul>
                </div>
            </nav>
            <p>Copyright © 2024 Nischal Subedi. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;