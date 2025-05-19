import React from "react";
import vision from '../resources/VisionSection.webp';
import './VisionSection.css';

const VisionSection = () => {
    return (
        <section className="vision">
            <h1>Our Vision</h1>
            <img src={vision} className="vision-img" alt="Vision" />
        </section>
    );
};

export default VisionSection;
