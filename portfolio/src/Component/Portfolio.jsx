import React from 'react';
import './Portfolio.css'; 
import Pages from './Pages/Pages';
const Portfolio = () => {
    return (
        <div className="portfolio">
            <aside className="sidebar" data-sidebar>
                <div className="sidebar-info">
                    <img src="sriramv2.jpg" alt="sriramv" width="100" />
                    <div className="info-content">
                        <h1 className="name" title="sriramv">SRIRAM V</h1>
                        <p className="title">Full Stack developer</p>
                        <p className="title">Data Science Enthusiast</p>
                        <p className="title">Artificial Intelligence</p>
                    </div>
                    
                </div>
                <div className="separator"></div>
                    <ul className="social-list">
                        <li className="social-item">
                            <a href="https://github.com/sriram1015" className="social-link">
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="https://www.linkedin.com/in/sriramvenkatachalapathy/" className="social-link">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </li>
                        
                    </ul>
                <div className="sidebar-info_more">
                    <div className="separator"></div>
                    <ul className="contacts-list">
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Email</p>
                                <a href="mailto:sriramvenkatachalpathy2601@gmail.com" className="contact-link">sriramvenkatachalpathy2601@gmail.com</a>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="phone-portrait-outline"></ion-icon>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Phone</p>
                                <a href="tel:+91 9361500992" className="contact-link">+91 9361500992</a>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="calendar-outline"></ion-icon>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Birthday</p>
                                <time dateTime="2005-01-26">January 26 2005</time>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="location-outline"></ion-icon>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Location</p>
                                <address>Uthangarai, Krishnagiri, Tamilnadu, India</address>
                            </div>
                        </li>
                    </ul>
                    <div className="separator"></div>

                </div>
            </aside>
            <Pages />
        </div>
    );
};
export default Portfolio;