import React from 'react';
import './AboutSection.css';
import offerings from '../resources/offerings.jpg';

const AboutSection = () => (
  <section className="about-section">
    <div className="about-content">
      {/* Left side image */}
      <div className="image-container">
        <img 
          src={offerings} 
          alt="About us" 
          className="about-image" 
        />
      </div>

      {/* Right side benefits */}
      <div className="benefits-container">
        <h2>Benefits About Our Services Expertise</h2>
        <div className="benefits">
          <div className="benefit-card">
            <img 
              src="https://img.icons8.com/?size=160&id=101827&format=png" 
              className="benefit-icon" 
              alt="Industry Knowledge" 
            />
            <div>
              <h3>Unparallel Industry Knowledge</h3>
              <p>
                Our team brings years of experience and deep understanding of Embedded Systems to the table.
                Benefit from our insights and stay ahead in the competitive landscape.
              </p>
            </div>
          </div>

          <div className="benefit-card">
            <img 
              src="https://img.icons8.com/?size=100&id=101797&format=png&color=000000" 
              className="benefit-icon" 
              alt="Faster Project Development" 
            />
            <div>
              <h3>Faster New Project Development</h3>
              <p>
                We help you reuse components, CI setup, and build infrastructure across projects to lower development cost with fewer resources.
              </p>
            </div>
          </div>

          <div className="benefit-card">
            <img 
              src="https://img.icons8.com/?size=100&id=53376&format=png&color=000000" 
              className="benefit-icon" 
              alt="Easy Maintenance" 
            />
            <div>
              <h3>Easy to Maintain</h3>
              <p>
                For more than one device, we help you maintain the software with ease. Fix one, fix all – simplified support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
