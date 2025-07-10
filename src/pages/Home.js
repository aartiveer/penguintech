import React from 'react';

import HeroSection from  "../components/HeroSection"; 
import AboutSection from '../components/AboutSection';
import ExpertiseSection from '../components/ExpertiseSection';
import VisionSection from '../components/VisionSection';
import FooterSection from '../components/FooterSection';



const Home = () => (
    <div>
        <HeroSection />   
        <AboutSection />
        <ExpertiseSection />
        <VisionSection />
        <FooterSection />        
    </div>
);

export default Home;