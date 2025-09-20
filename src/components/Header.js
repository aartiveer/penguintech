import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import penguin from '../resources/penguin.png';

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <header className="header">
            <div className="Headercontainer">
                <div className="topRow">
                <div className="logo" style={{ zIndex: '1', }} >
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', color: isHomePage ? '#3F3F40' : 'black', textDecoration: 'none', }} >
                       
                        <img src={penguin} alt="Penguin Logo" className="penguin-logo" />
                        <div style={{ whiteSpace: 'nowrap' }}>
                            <h1 style={{ margin: '0 0 0 10px' }}>PenguinTech</h1>
                            <span style={{ marginLeft: '10px' }}>Technology meets innovation</span>
                        </div>
                    </Link>
                </div>

                <div className="Headersocialicons">
                    <a href="https://youtube.com" className="icon-button youtube" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://github.com/aartiveer" className="icon-button github" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aarti-veer/" className="icon-button linkedin" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:aartiveer1212@gmail.com" className="icon-button google">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="https://twitter.com" className="icon-button twitter" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>


                </div>

                <nav className='navSection'>
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/trainings">Trainings</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
