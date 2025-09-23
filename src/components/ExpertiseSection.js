import React from "react";
import VarisciteImage from '../resources/variscite.png';
import VarsomImage from '../resources/var-som.webp';
import STImage from '../resources/ST.png';
import NXPImage from '../resources/NXP.png';
import './ExpertiseSection.css';

const ExpertiseSection = () => {
    return (
        <section className="expertise-section">
            <h1>Our Clients</h1>

            <div className="expertise-logos">
                <img src={VarisciteImage} className="varisciteimg" alt="Varscite" />
                {/* <img src={VarsomImage} className="varsom" alt="Var-som" /> */}
                <img src={STImage} className="STimg" alt="STimg" />
                <img src={NXPImage} className="NXPimg" alt="NXPimg" />
            </div>
        </section>

    );
};

export default ExpertiseSection;
