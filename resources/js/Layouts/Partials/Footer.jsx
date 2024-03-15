// resources/js/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* Subscription Section */}
      <div className="subscribe">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      
      {/* Logo Section */}
      <div className="logo">
      <img src="./images/realla_logo.png" className="logo" alt="Logo"/>
      </div>
      
      {/* Links Section */}
      <ul className="footer-links">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        {/* Add more links as needed */}
      </ul>
      
      {/* Copyright */}
      <div className="copyright">
        <p>&copy; 2024 Realla. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
