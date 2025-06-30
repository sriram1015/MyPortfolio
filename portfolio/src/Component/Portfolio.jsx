import React from 'react';
import './Portfolio.css'; 
const Portfolio = () => {
    return (
        <div className="portfolio">
            <aside className="sidebar" data-sidebar>
                <div className="sidebar-info">
                    <figure className="avatar-box">
                        <img src="./assets/images/my-avatar.png" alt="Richard hanrick" width="80" />
                    </figure>
                    <div className="info-content">
                        <h1 className="name" title="Richard hanrick">SRIRAM V</h1>
                        <p className="title">Web developer</p>
                    </div>
                    <button className="info_more-btn" data-sidebar-btn>
                        <span>Show Contacts</span>
                        <ion-icon name="chevron-down"></ion-icon>
                    </button>
                </div>
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
            </aside>
        </div>
    );
};
export default Portfolio;