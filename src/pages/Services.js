import React from "react";
import './Services.css';
import Service1stimg from '../resources/Service1stimg.png';
import Service2ndimg from '../resources/Service2ndimg.png';
import Service3rdimg from '../resources/Service3rdimg.png';
import Service4thimg from '../resources/Service4thimg.png';
import Service5thimg from '../resources/Service5thimg.png';
import Service6thimg from '../resources/Service6thimg.png';
import LinuxFoundation from '../resources/Linux_Foundation_logo.webp';
import SoftwareIntegration from '../resources/bash.webp';
import yoctoImg from '../resources/Yocto_logo.webp';

const Services = () => {
  return (
    <section>
      <div className="container1">
        <h3>Our Services</h3>
        <h1>WHY CHOOSE US</h1>
        <p>
          At Penguintech, we are passionate about empowering products and software companies with the skills and expertise 
          needed to excel in the world of Embedded Linux. With a strong emphasis on quality, innovation, and hands-on learning, 
          we offer a comprehensive range of services and training programs tailored to meet your needs in the ever-evolving
          landscape of embedded systems.
          <br /><br />
          Lastly, in addition to offering platform-specific training, we also provide comprehensive packages that include
          all the assistance you need to realize your software development project from start to finish.
        </p>
      </div>



      <div className="heading"><h1>WHAT WE DO</h1></div>        
      <div className="container2">

        <div className="White-Box">
          <div className="White-box">
            <img src={Service1stimg} alt="Service 1" />
          </div>
          <h1 className="black-text">Board bringup</h1>
          <div className="service-description">
            Provide support for setting up software integration or open source projects integration.
          </div>
        </div>

        <div className="Black-Box">
          <div className="Black-box">
            <img src={Service2ndimg} alt="Service 2" />
          </div>
          <h1>Unified OS platform</h1>
          <div className="service-description">
            Unified OS platform with multi arch support in single distro.
          </div>
        </div>

        <div className="White-Box">
          <div className="White-box">
            <img src={Service3rdimg} alt="Service 3" />
          </div>
          <h1>Toolchain development</h1>
          <div className="service-description">
            Develops common SDK for all project to streamline software development.
          </div>
        </div>  

        <div className="Black-Box">
          <div className="Black-box">
            <img src={Service4thimg} alt="Service 4" />
          </div>
          <h1>Virtual CI/CD development</h1>
          <div className="service-description">
            Cloud based CI/CD pipeline to make it on-board new projects using Microsoft Azure, Bitbucket Bamboo and GitHub Actions.
          </div>
        </div>

        <div className="White-Box">
          <div className="White-box">
            <img src={Service5thimg} alt="Service 5" />
          </div>
          <h1>Software Integration</h1>
          <div className="service-description">
            Provide support for setting up software integration or open source projects integration.
          </div>
        </div>

        <div className="Black-Box">
          <div className="Black-box">
            <img src={Service6thimg} alt="Service 6" />
          </div>
          <h1>Automated testing</h1>
          <div className="service-description">
            Support Automated test validation for every build with accuracy.
          </div>
        </div>
      </div>



      <div className="container3">

        <div className="Image1">  
          <img src={LinuxFoundation} alt="Linux Foundation" />
          <div className="Image-Description">
            <h1>Linux and Embedded Linux</h1>
            <p>
              We believe in the open-source operating system, which is why we use Linux in our products, 
              support the source code, and team have in-depth experience with the industry.
            </p>
          </div>
        </div>

        <div className="Image2">
          <img src={SoftwareIntegration} alt="Software Integration" />
          <div className="Image-Description">
            <h1>Software Integration</h1>
            <p>
              We write scripts for your missing components and cross-compile software for application integration. 
              Also do Linux process management for better performance.
            </p>
          </div>
        </div>

        <div className="Image3">
          <img src={yoctoImg} alt="Yocto Engineering" />
          <div className="Image-Description">
            <h1>Yocto Engineering</h1>
            <p>
              With the open-source Yocto project, we help you with setup (board, toolchain, kernel, and bootloader), 
              configuration of Yocto distro features (init system) Setting up of Yocto security features, Integration of third-party 
              layers(components), Development of product-specific Yocto meta-layers Development of BitBake/yocto recipes, Compilation of target
              images and SDK bundles, Update of Yocto-based BSPs (core layer, recipes) Container-based Yocto build environment and Review of existing 
              Yocto systems.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
