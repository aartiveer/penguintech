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
      </section>
  </>
  );
}

export default HeroSection;
