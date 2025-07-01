import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import './Pages.css';

const sections = [
    { id: 'about', label: 'About', component: <About /> },
    { id: 'education', label: 'Education', component: <Education /> },
    { id: 'projects', label: 'Projects', component: <Projects /> },
    { id: 'contact', label: 'Contact', component: <Contact /> },
];

const Pages = () => {
    const [activeSection, setActiveSection] = useState('about');

    return (
        <div className="pages">
            <Navbar
                sections={sections}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <div className="page-content">
                {sections
                    .filter(section => section.id === activeSection)
                    .map(section => (
                        <div key={section.id}>{section.component}</div>
                    ))}
            </div>
        </div>
    );
};

export default Pages;