import React from 'react';
import '../stylesheets/Footer.css'; 

// Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Follow Us</h2>
        <div className="social-icons">
        
          <a href="#" className="icon">
          <i className="fab fa-twitter"></i>
          </a>
        
          <a href="#" className="icon">
            <i className="fab fa-facebook"></i>
          </a>
        
          <a href="#" className="icon">
            <i className="fab fa-twitter"></i>
          </a>
        
          <a href="#" className="icon">
            <i className="fab fa-instagram"></i>
          </a>
          
          <a href="#" className="icon">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      <div className="footer-section">
        <h2>Company</h2>
        <ul>
          <li><a href="#">Mission</a></li>
          <li><a href="#">Vision</a></li>
          <li><a href="#">Values</a></li>
          {/* Add more company-related links */}
        </ul>
      </div>

      <div className="footer-section">
        <h2>About Us</h2>
        <p>

        LOOKING FOR A COMFORTABLE AND AFFORDABLE PAYING GUEST (PG) ACCOMMODATION? LOOK NO FURTHER! PG FINDER IS YOUR GO-TO PLATFORM FOR DISCOVERING THE PERFECT PG THAT SUITS YOUR NEEDS."

        </p>
      </div>
      <div className="copyright-section">
        <h2>Copyright © 2023 Your Company</h2>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;