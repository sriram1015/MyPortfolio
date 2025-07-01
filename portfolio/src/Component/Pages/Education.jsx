import React from 'react';
import './Education.css'; 
const educationData = [
    {   
        title:"Bachelor of Technology (Artificial Intelligence and Data Science)",
        school: "Kongu Engineering College",
        years: "2022-2026",
        desc: "CGPA:7.71(till 6th semester)"
    },
    {
        title:"Higher Secondary (Bio-Math)",
        school: "Dheeran Chinnamalai International Residential School (CBSE)",
        years: "2021-2022",
        desc: "Percentage:74.6%"
    },
    {
        title:"SSLC (Mathematics,Science,Social Science,English,Tamil)",
        school: "Dheeran Chinnamalai International Residential School (CBSE)",
        years: "2019-2020",
        desc: "Percentage:75.4%"
    }
];

const Education = () => (
    <section className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
            {educationData.map((edu, idx) => (
    <div className="timeline-item" key={idx}>
        <div className="timeline-dot"></div>
        <div className="timeline-content">
            <h3 className="edu-title">{edu.title}</h3>
            <h4 className="edu-school">{edu.school}</h4>
            <p className="edu-desc">{edu.desc}</p>
        </div>
        <div className="timeline-year">{edu.years}</div>
    </div>
))}
        </div>
        <div className="certification">
            <h2>Certification</h2>
            <ul>
                <li>
                    <h2>MongoDB Associate Developer in NodeJS</h2>
                    <a href='#' target="_blank" rel="noopener noreferrer">View Certification</a>
                </li>
            </ul>

        </div>
    </section>
);

export default Education;