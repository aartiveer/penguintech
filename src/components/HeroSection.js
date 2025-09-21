import React from 'react';
import './HeroSection.css';
import women from '../resources/Women.png';
import { useTypingText } from "./hero/useTypingtext";

const HeroSection = () => 
  {
  // words for offerrings-texts
  const { word } = useTypingText(
    ["Embedded Linux", "Yocto project", "Linux BSP", "DevOps"],
    50,
    20,
  );

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Tech Mastery</h1>
          <p>Your Gateway to {word} </p>
          <button className="btn">Get Started →</button>
        </div>

        <img src={women} alt="Working Woman" className="hero-img" />

        {/* Animated Shapes */}
        <div className="square"></div>
        <div className="circle"></div>
        <div className="rectangle"></div>

        <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </section>
  </>
  );
}

export default HeroSection;
