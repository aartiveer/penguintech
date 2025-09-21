import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col left">
          <h2>PenguinTech</h2>
          <p>Work towards improving the products</p>
          <div className="footersocialicons">
                <a href="https://youtube.com" className="icon-button youtube" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="https://github.com/aartiveer" className="icon-button github" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/aarti-veer/" className="icon-button linkedin" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:aartiveer1212@gmail.com" className="icon-button google">
                    <i className="fab fa-google"></i>
                </a>
                <a href="https://twitter.com" className="icon-button twitter" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">our services</a></li>
            <li><a href="/trainings">trainings</a></li>
            <li><a href="/blogs">blogs</a></li>
            <li><a href="/about">about us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Get Help</h3>
          <ul>
            <li><a href="/FAQ">FAQ</a></li>
            <li><a href="/Contact">Contact us</a></li>
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
        <p>Copyright ©2025 PenguinTech | Designed by Aarti Veer</p>
      </div>
    </footer>
  );
};

export default FooterSection;
