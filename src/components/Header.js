import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import penguin from '../resources/penguin.jpg';

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <header className="header">
            <div className="container flexSB">
                <div
                    className="logo"
                    style={{
                        zIndex: '1',
                        
                    }}
                >
                    <Link
                        to="/"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: isHomePage ? '#3F3F40' : 'black',
                            textDecoration: 'none',
                        }}
                    >
                        <img
                            src={penguin}
                            alt="Penguin Logo"
                            className="penguin-logo"
                        />
                        <div style={{ whiteSpace: 'nowrap' }}>
                            <h1 style={{ margin: '0 0 0 10px' }}>PenguinTech</h1>
                            <span style={{ marginLeft: '10px' }}>Technology meets innovation</span>
                        </div>
                    </Link>
                </div>

                <nav className='flexSB'>
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
