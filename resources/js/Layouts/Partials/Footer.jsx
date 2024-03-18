import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4 md:px-20 flex flex-wrap justify-between items-start md:items-center">
      {/* Text on the Left */}
      <div className="w-full md:w-auto mb-8 md:mb-0 md:order-1">
        <p className="text-yellow-500 text-sm mb-4">
          Still You Need Our Support?
        </p>
        <p className="text-white text-sm mb-4">
          Don’t wait, make a smart & logical quote here. It's pretty easy.
        </p>
      </div>

      {/* Subscribe Section on the Right */}
      <div className="w-full md:w-auto mb-8 md:mb-0 md:order-2">
        <div className="flex items-center justify-end">
          <input type="email" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none placeholder-yellow-500" />
          <button className="bg-yellow-400 text-white px-4 py-2 rounded-r-md hover:bg-yellow-500 focus:outline-none">Subscribe</button>
        </div>
      </div>

      {/* Logo Section */}
      <div className="w-full md:w-auto mb-8 md:mb-0 md:order-3">
        <img src="./images/realla_logo.png" className="w-20 bg-500" alt="Logo"/>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-auto flex flex-col md:flex-row items-start md:items-center md:order-4">
        {/* CONTACT Section */}
        <div className="md:mr-12 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">CONTACT</h3>
          <ul className="text-gray-400">
            <li><a href="#">123 456 78</a></li>
            <li><a href="#">info@realla.com</a></li>
            <li><a href="#">Gaston Crommenlaan 4 S, 9050 Gent</a></li>
          </ul>
        </div>

        {/* LINKS Section */}
        <div className="md:mr-12 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">LINKS</h3>
          <ul className="text-gray-400">
            <li><a href="#">About</a></li>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Menu</a></li>
          </ul>
        </div>

        {/* HELP Section */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">HELP</h3>
          <ul className="text-gray-400">
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-white text-sm mt-4 md:order-5 w-full" style={{backgroundColor: '#ff9f0d'}}>
        &copy; 2024 Realla. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
