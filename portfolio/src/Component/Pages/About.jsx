import React from 'react';
import './About.css';

const skillGroups = [
  {
    title: 'Languages',
    color: '#1976d2',
    icon: '💻',
    skills: [
      { name: 'C', icon: <i className="devicon-c-plain colored"></i> },
      { name: 'Python', icon: <i className="devicon-python-plain colored"></i> },
      { name: 'Java', icon: <i className="devicon-java-plain colored"></i> },
    ],
  },
  {
    title: 'Front-end',
    color: '#e53935',
    icon: '🎨',
    skills: [
      { name: 'HTML', icon: <i className="devicon-html5-plain colored"></i> },
      { name: 'CSS', icon: <i className="devicon-css3-plain colored"></i> },
      { name: 'JavaScript', icon: <i className="devicon-javascript-plain colored"></i> },
      { name: 'React', icon: <i className="devicon-react-original colored"></i> },
    ],
  },
  {
    title: 'Back-end',
    color: '#43a047',
    icon: '⚙️',
    skills: [
      { name: 'Flask', icon: <i className="devicon-flask-original"></i> },
      { name: 'NodeJS', icon: <i className="devicon-nodejs-plain colored"></i> },
    ],
  },
  {
    title: 'Database',
    color: '#ffa000',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', icon: <i className="devicon-mysql-plain colored"></i> },
      { name: 'MongoDB', icon: <i className="devicon-mongodb-plain colored"></i> },
    ],
  },
  {
    title: 'Tools',
    color: '#8e24aa',
    icon: '🛠️',
    skills: [
      { name: 'PowerBI', icon: <i className="devicon-powerbi-plain colored"></i> },
      { name: 'Tableau', icon: <i className="devicon-tableau-plain colored"></i> },
      { name: 'GitHub', icon: <i className="devicon-github-original colored"></i> },
      { name: 'Linux', icon: <i className="devicon-linux-plain colored"></i> },
    ],
  },
  {
    title: 'AI Tools',
    color: '#000',
    icon: '🧠',
    skills: [
      { name: 'Scikit-learn', icon: <i className="devicon-scikitlearn-plain colored"></i> },
      { name: 'TensorFlow', icon: <i className="devicon-tensorflow-original colored"></i> },
      { name: 'OpenCV', icon: <i className="devicon-opencv-plain colored"></i> },
      { name: 'Pandas', icon: <i className="devicon-pandas-original colored"></i> },
    ],
  },
];

const About = () => (
  <div>
    <div className="about">
      <h1>About Me</h1>
      <p>Hi, I'm Sriram, a passionate Full-Stack Developer with a focus on building modern, user-friendly web applications. I specialize in React, Node.js, MongoDB, and have a growing interest in AI and Machine Learning.</p>
      <p>I love turning ideas into real-world solutions, writing clean code, and constantly learning new tech. Whether it's frontend design or backend logic, I enjoy working across the stack to deliver end-to-end experiences.</p>
    </div>
    <div className="skills-grid">
      {skillGroups.map((group, idx) => (
        <div className="skill-card" key={idx} style={{ borderTop: `4px solid ${group.color}` }}>
          <div className="skill-card-title">
            <span className="skill-card-icon">{group.icon}</span>
            <span>{group.title}</span>
          </div>
          <ul>
            {group.skills.map((skill, i) => (
              <li key={i}>
                <span className="skill-icon">{skill.icon}</span>
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default About;