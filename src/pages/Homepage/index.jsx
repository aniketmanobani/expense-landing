import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Homepage() {
    return (
        <>
            {/* MENU */}
            <header className="menu-bg">
                <div className="menu">
                    <div>
                        <img src="/img/mobile-app-logo.png" alt="Mobile App logo" />
                    </div>
                    <nav className="menu-nav">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><Link to="/p/privacy-policy">Privacy Policy</Link></li>
                            <li><a href="#">About</a></li>
                            <li className="btn-menu"><a href="#">Download</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* INTRO */}
            <section className="intro-bg">
                <div className="intro">
                    <div>
                        <h1>D2 Wallet <br /><span>Budgets & Expense Tracker App</span></h1>
                        <p>Easy and Smart way to manage all Expenses</p>
                        <a href="#">Download</a>
                    </div>
                    <div className="intro-img">
                        <img src="img/mocukup.png" alt="" />
                    </div>
                </div>
            </section>

            {/* INFO */}
            <section className="info-bg">
                <div className="info">
                    <h3>Get in touch by</h3>
                    <img src="/img/facebook-mesenger-icon.png" alt="Mesenger Logo" />
                    <p>Smart Expense Tracker app on playstore</p>
                </div>
            </section>

            {/* FEATURE */}
            {/* <section className="feature">
                <div className="feature-item">
                    <h4>Easy to Edit</h4>
                    <img src="/img/easy-to-edit.png" alt="Easy To Edit Logo" />
                    <p>Creative Mobile App Landing Template for Photoshop, Sketch, Adobe Xd & Figma</p>
                </div>
                <div className="feature-item">
                    <h4>Full Vector</h4>
                    <img src="/img/full-vector.png" alt="Full Vector Logo" />
                    <p>Creative Mobile App Landing Template for Photoshop, Sketch, Adobe Xd & Figma</p>
                </div>
                <div className="feature-item">
                    <h4>UX & UI Kit</h4>
                    <img src="/img/ux-ui-kit.png" alt="UX & UI Kit Logo" />
                    <p>Creative Mobile App Landing Template for Photoshop, Sketch, Adobe Xd & Figma</p>
                </div>
            </section> */}

            {/* ABOUT1 */}
            {/* <section className="about-bg">
                <div className="about">
                    <div className="about-img">
                        <img src="/img/Mockup2.png" alt="Mockup2" />
                    </div>
                    <div className="about-info">
                        <h4>Active Shipments</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <a href="#">Download</a>
                    </div>
                </div>
            </section> */}

            {/* ABOUT2 */}
            {/* <section className="about-bg2">
                <div className="about">
                    <div className="about-info2">
                        <h4>Track Shipments</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <a href="#">Download</a>
                    </div>
                    <div className="about-img">
                        <img src="/img/Mockup3.png" alt="Mockup2" />
                    </div>
                </div>
            </section> */}

            {/* REDE-SOCIAL */}
            {/* <section className="rede-social-bg">
                <div className="rede-social">
                    <img src="/img/instagram-icon.png" alt="Instagram Logo" />
                    <img src="/img/facebook-icon.png" alt="Instagram Logo" />
                    <img src="/img/youtube-icon.png" alt="Instagram Logo" />
                    <img src="/img/linkedin-icon.png" alt="Instagram Logo" />
                </div>
            </section> */}

            {/* FOOTER */}
            <footer className="footer-bg">
                <div className="footer">
                    <div className="menu">
                        <ul>
                            <p>MENU</p>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Showcase</a></li>
                            <li><a href="#">Download</a></li>
                        </ul>
                    </div>
                    <div className="menu">
                        <ul>
                            <p>ABOUT</p>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Journal</a></li>
                        </ul>
                    </div>
                    <div className="menu">
                        <ul>
                            <p>PANOPLY</p>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Showcase</a></li>
                            <li><a href="#">Download</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Homepage