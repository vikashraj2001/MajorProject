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
        Looking for a comfortable and affordable Paying Guest (PG) accommodation? Look no further! PG Finder is your go-to platform for discovering the perfect PG that suits your needs.
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