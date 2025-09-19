import React from "react";
import yoctoImage from '../resources/YoctoImage.png'; 
import dockerImage from '../resources/dockerimg.png';
import gitImage from '../resources/gitimg.png';
import './Trainings.css';


const Trainings = () => (

    <div className="Training-Container">

        <div className="Training-heading">
            <h3>LEARN WITH US</h3>
            <h1>PROFESSIONAL TRAININGS</h1>
        </div>

        <div className="courses">
            <div className="card">
                <img src= {yoctoImage} alt="Yocto Image"></img>
                <h2>Embedded Linux Development</h2>
            </div>
            

            <div className="card">
                <img src= {dockerImage} alt="Docker Image"></img>
                <h2>Introduction to Docker Containers</h2>
            </div>

            <div className="card">
                <img src= {gitImage} alt="Git Image"></img>
                <h2>Introduction to Git and Github</h2>
            </div>
        </div>
    </div>

    
)
export default Trainings;