import React from "react";

import './Testimonial.css';


const Testimonial = () => (

    <div className="Testimonial-Container">
        <h3>TESTIMONIAL</h3>
        <h1>What Customers Says</h1>
            <div className="TestimonialCards">
                <div className="ReviewCards">
                    <p>It is perfect course - very comprehensible based on a practical work done step by step</p>
                    <h3>Prashant Divate</h3>
                    <h5>Tech Lead</h5>
                </div>

                <div className="ReviewCards">
                    <p>This 3-days series teaches Yocto comprehensively, very helpful if you want to get straight to specific Yocto topics.</p>
                    <h3>Sudhir Joona</h3>
                    <h5>Software Developer</h5>
                </div>

                <div className="ReviewCards">
                    <p>Cause and effect of recipes configurations are clearly demonstrated. Trainer knows his Yocto in and out !!!</p>
                    <h3>Aarti Veer</h3>
                    <h5>Fullstack Developer</h5>
                </div>

            </div>
    </div>

    
);
export default Testimonial;