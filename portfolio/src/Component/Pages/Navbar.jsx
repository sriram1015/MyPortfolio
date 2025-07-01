import React from 'react';
import './Navbar.css';

const Navbar = ({ sections, activeSection, setActiveSection }) => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                {sections.map(section => (
                    <li className="nav-item" key={section.id}>
                        <button
                            className={`nav-link${activeSection === section.id ? ' active' : ''}`}
                            onClick={() => setActiveSection(section.id)}
                        >
                            {section.label}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="nav-logo">
                <ul className="social-list">
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;