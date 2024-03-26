import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white" style={{ backgroundColor: '#292f36' }}>
      <div className="py-8 px-4 md:flex md:items-center md:justify-between md:px-20">
        <div className="mb-6 md: mb-0 ml-12">
          <p className="text-yellow-500 text-sm mb-1">Still You Need Our Support?</p>
          <p className="text-sm mb-2">Don’t wait, make a smart & logical quote here. It's pretty easy.</p>
        </div>
         
         {/* Subscribe Section */}
        <div className="mb-6 md: mb-0">
          <input type="email" placeholder="Enter Your Email" className="text-gray-800 px-6 py-2 border border-gray-300 rounded-l-md focus:outline-none placeholder-yellow-500" />
          <button className="px-6 py-2 rounded-r-md hover:bg-orange-500 focus:outline-none" style={{ backgroundColor: '#fdb514' }}>Subscribe</button>
        </div>

        <div className="px-4 md:px-20 py-4 flex flex-col md:flex-row md:justify-between items-start">
    
        {/* Contact Section */}
        <div className="mb-6 md:mb-0 ml-18">
          <h3 className="text-yellow-500 font-bold mb-2">CONTACT</h3>
          <p className="text-white-500 text-sm space-y-4">
            <span className="flex items-center"><i className='bx bx-phone icon text-yellow-500'></i>123 456 789</span>
            <span className="flex items-center"><i className='bx bx-envelope icon text-yellow-500'></i>info@realla.com</span>
            <span className="flex items-center"><i className='bx bx-map icon text-yellow-500'></i>9050 Gent, Belgium</span>
          </p>
        </div>

        {/* Links Section */}
        <div className="mb-6 md:mb-0 ml-16">
          <h3 className="text-yellow-500 font-bold mb-2">LINKS</h3>
          <ul className="text-white-500 text-sm space-y-3">
            <li><a href="#">About</a></li>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Menu</a></li>
          </ul>
        </div>

        {/* Help Section*/}
        <div className="mb-6 md:mb-0 ml-16">
          <h3 className="text-yellow-500 font-bold mb-2">HELP</h3>
          <ul className="text-white-500 text-sm space-y-3">
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
    </div>

        {/* Bottom Bar */}
      <div className="flex justify-between items-center bg-yellow-500 py-2 px-4 md:px-40"  style={{ backgroundColor: '#fdb514' }}>
        <div className="text-sm">
          Copyright © 2024 by Realla. All Rights Reserved.
        </div>

        <div>
          <a href="#" className="text-white mx-4"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="text-white mx-4"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="text-white mx-4"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="text-white mx-4"><FontAwesomeIcon icon={faPinterestP} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
