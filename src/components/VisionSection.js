import React from "react";
import vision from '../resources/VisionSection.webp';
import './VisionSection.css';

const VisionSection = () => {
    return (
        <section className="vision">
            <h1>Our Vision</h1>
            <div className="imgcontainer" style={{alignItems:"center"}} >
                <img className="vision-img" src={vision} alt='' />
            </div>
        </section>
    );
};

export default VisionSection;
