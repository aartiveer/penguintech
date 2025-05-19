import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col left">
          <h2>PenguinTech</h2>
          <p>Work towards improving the products</p>
          <div className="social-icons">
            <i className="fab fa-youtube"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-google"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>Our Services</li>
            <li>Trainings</li>
            <li>Blogs</li>
            <li>About Us</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Get Help</h3>
          <ul>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Subscribe</h3>
          <p>Don't miss to subscribe to our new feeds.</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter email address" />
            <button>➤</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Copyright ©2024 PenguinTech | Designed by Aarti Veer</p>
      </div>
    </footer>
  );
};

export default FooterSection;
