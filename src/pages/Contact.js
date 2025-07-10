import React from "react";
import './Contact.css';


const Contact = () => (
        <section className="contact" id="contact">
            <h1>Contact Us</h1>
            <p>We're open for any suggestion or just to have a chat</p>
   
                <div className="box-grid">
                    <div className="box">
                        <h4>ADDRESS:</h4>
                        <p>Bengaluru,India.560034</p>
                    </div>

                    <div className="box">
                        <h4>EMAIL:</h4>
                        <p>aartiveer1212@gmail.com</p>
                    </div>

                    <div className="box">
                        <h4>PHONE:</h4>
                        <p>7385753636</p>
                    </div>
                </div>
                    
                <form className="contact-form">
                    <input type="text" placeholder="First Name" className="inputField" />
                    <input type="text" placeholder="Last Name" className="inputField" /> <br /><br /> 

                    <input type="email" placeholder="Email" className="EmailBox" /> <br /> <br /> 
                    <input type="text" placeholder="Subject" className="SubjectBox" /> <br/> <br /> 

                    <textarea rows="10" placeholder="Message" className="Message-Box" /> <br /><br />

                    <button type="submit" className="SubmitButton">Submit</button> 
                </form>


                    
            
        </section>
    
);

export default Contact;