import React from 'react';
import './HeroSection.css';
import women from '../resources/Women.png';

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Empowering Tech Mastery</h1>
      <p>Your Gateway to Embedded</p>
      <button className="btn">Get Started →</button>
    </div>

    <img src={women} alt="Working Woman" className="hero-img" />

    {/* Animated Shapes */}
    <div className="square"></div>
    <div className="circle"></div>
    <div className="rectangle"></div>
  </section>
);

export default HeroSection;
