import React from "react";
import './Services.css';
import Service1stimg from '../resources/Service1stimg.png';
import Service2ndimg from '../resources/Service2ndimg.png';
import Service3rdimg from '../resources/Service3rdimg.png';
import Service4thimg from '../resources/Service4thimg.png';
import Service5thimg from '../resources/Service5thimg.png';
import Service6thimg from '../resources/Service6thimg.png';

const Services = () => {
  return (
    <section>
      <div  className="container1">
        <h3>Our Services</h3> <br />
        <h1>WHY CHOOSE US</h1> <br />

        <p>
          At Penguintech, we are passionate about empowering products and software companies with the skills and expertise 
          needed to excel in the world of Embedded Linux. With a strong emphasis on quality, innovation, and hands-on learning, 
          we offer a comprehensive range of services and training programs tailored to meet your needs in the ever-evolving
          landscape of embedded systems.
        </p>
        <p>
          Lastly, in addition to offering platform-specific training, we also provide comprehensive packages that include
          all the assistance you need to realize your software development project from start to finish.
        </p>
      </div>

        <div className="heading"><h1>WHAT WE DO</h1></div>        
      <div className="container2">
        
            <div className="White-Box">
                <div className="White-box" >
                    <img src={Service1stimg} alt="Service 1" />
                </div>
                <h1 className="black-text">Board bringup</h1>
                {/* <div>
                    provide support for setting up software integration or open source projects integration.
                </div> */}
            </div>

            <div className="Black-Box">
                <div className="Black-box" >
                    <img src={Service2ndimg} alt="Service 2" />
                </div>
                <h1>Unified OS platform</h1>
            </div>

            <div className="White-Box">
                <div className="White-box" >
                    <img src={Service3rdimg} alt="Service 3" />
                </div>
                <h1>Toolchain development</h1>

            </div>  

            <div className="Black-Box">
                <div className="Black-box" >
                    <img src={Service4thimg} alt="Service 4" />
                </div>
                <h1>Virtual CI/CD development</h1>
            </div>

            <div className="White-Box">
                <div className="White-box" >
                    <img src={Service5thimg} alt="Service 5" />
                </div>
                <h1>Software Integration</h1>
            </div>

            <div className="Black-Box">
                <div className="Black-box" >
                    <img src={Service6thimg} alt="Service 6" />
                </div>
                <h1>Automated testing</h1>
            </div>  


      </div>
    </section>
  );
}

export default Services;