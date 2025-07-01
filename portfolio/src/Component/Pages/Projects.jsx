import React, { useState } from 'react';
import './Project.css';

const projects = [
    {
        title: 'Construction Monitoring System',
        description: 'Monitoring and Reporting the Construction Progress through Our Web Application',
        technologies: ['ReactJS', 'Flask', 'Machine Learning', 'Deep Learning', 'MongoDB', 'NodeJS', 'OpenCV'],
        link: 'https://livesite.onesrv.tech'
    },
    {
        title: 'Apartment Management System',
        description: 'A web application for managing apartment complexes, I was responsible for the backend development.',
        technologies: ['ReactJS', 'NodeJS', 'MongoDB'],
        link: '#'
    },
    {
        title: 'Sleep Disorder Detection',
        description: 'A web application for detecting and monitoring sleep disorders using Machine Learning algorithms.',
        technologies: ['Flask', 'Machine Learning','Python'],
        link: 'https://sleepdisorderprediction.onrender.com'
    },
    {
        title: 'Vehicle Model Detection',
        description: 'A web application for detecting and classifying vehicle models using image processing and machine learning techniques.',
        technologies: ['Flask', 'DeepLearning', 'OpenCV'],
        link: '#'
    }
];

const publications = [
    {
        title: 'Predicting Liver Cirrhosis Using Machine Learning',
        description: 'Published in International Journal of AI Research, 2025.',
        link: 'https://ieeexplore.ieee.org/abstract/document/10912182'
    },
    {
        title: 'Automated Detection of Tomato Leaf Disease Using Convolutional Neural Networks',
        description: 'Published in International Journal of AI Research, 2025.',
        link: 'https://ieeexplore.ieee.org/abstract/document/10910930'
    }
];

const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' }
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState('projects');

    return (
        <section className="projects-section">
            <div className="projects-tabs">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`projects-tab${activeTab === tab.id ? ' active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="projects-list">
                {activeTab === 'projects' && (
                    <div className="card-grid">
                        {projects.map((project, idx) => (
                            <div className="project-card" key={idx}>
                                {project.image && (
                                    <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                                )}
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="tech-list">
                                        <span className="tech-label">Technologies:</span>
                                        {project.technologies.map((tech, i) => (
                                            <span className="tech-tag" key={i}>{tech}</span>
                                        ))}
                                    </div>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                            View Project
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === 'publications' && (
                    <div className="card-grid">
                        {publications.map((pub, idx) => (
                            <div className="project-card" key={idx}>
                                <div className="project-content">
                                    <h3>{pub.title}</h3>
                                    <p>{pub.description}</p>
                                    {pub.link && (
                                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                            View Publication
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;