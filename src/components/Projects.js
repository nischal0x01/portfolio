import React from 'react';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <p className="intro-text">Browse My Recent</p>
            <h1 className="section-title">Projects</h1>
            <div className="projects-container">
                <div className="project-card">
                    <img src="./assets/project-1.png" alt="Project One" className="project-img" />
                    <h2>Project One</h2>
                    <div className="project-btns">
                        <button onClick={() => window.open('https://github.com', '_blank')}>Github</button>
                        <button onClick={() => window.open('https://github.com', '_blank')}>Live Demo</button>
                    </div>
                </div>
                <div className="project-card">
                    <img src="./assets/project-2.png" alt="Project Two" className="project-img" />
                    <h2>Project Two</h2>
                    <div className="project-btns">
                        <button onClick={() => window.open('https://github.com', '_blank')}>Github</button>
                        <button onClick={() => window.open('https://github.com', '_blank')}>Live Demo</button>
                    </div>
                </div>
                <div className="project-card">
                    <img src="./assets/project-3.png" alt="Project Three" className="project-img" />
                    <h2>Project Three</h2>
                    <div className="project-btns">
                        <button onClick={() => window.open('https://github.com', '_blank')}>Github</button>
                        <button onClick={() => window.open('https://github.com', '_blank')}>Live Demo</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Projects;
