import React from 'react';

import HeroSection from  "../components/HeroSection"; 
import AboutSection from '../components/AboutSection';
import ExpertiseSection from '../components/ExpertiseSection';
import VisionSection from '../components/VisionSection';
import OurMission from '../components/OurMission';
import Testimonial from '../components/Testimonial';



const Home = () => (
    <div>
        <HeroSection />   
        <AboutSection />
        <ExpertiseSection />
        <VisionSection />
        <OurMission />
        <Testimonial />       
    </div>
);

export default Home;