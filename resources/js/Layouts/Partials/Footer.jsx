import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white" style={{ backgroundColor: '#292f36' }}>
       <div className="py-8 px-4 md:flex md:items-center md:justify-between md:px-20">
    <div className="md:flex-1 md:ml-12">
      <p className="text-yellow-500 text-sm font-bold mb-1">STAY INFORMED</p>
      <p className="text-sm mb-2 md:mb-0">Don’t wait, subscribe now and get the latest updates!</p>
    </div>

    <div className="flex items-center">
      <form onSubmit={handleSubscribe} className="flex">
        <input type="email" placeholder="Enter Your Email" className="text-gray-800 px-6 py-2 border border-gray-300 rounded-l-md focus:outline-none placeholder-yellow-500" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" className="px-6 py-2 rounded-r-md hover:bg-orange-500 focus:outline-none" style={{ backgroundColor: '#fdb514' }}>Subscribe</button>
      </form>
    </div>
      </div>

      <div className="px-4 md:px-20 py-4 flex flex-col md:flex-row md:justify-between items-start space-y-6 md:space-y-0 md:space-x-6">
  {/* Logo Image Section */}
  <div className="flex items-center">
    <img src="/images/realla_logo.png" alt="Logo" className="mr-2 h-14" />
    <div>
      <h3 className="text-yellow-500 font-bold mb-2">CONTACT</h3>
      <p className="text-sm space-y-4">
        <span className="flex items-center"><i className='bx bx-phone icon text-yellow-500'></i>123 456 789</span>
        <span className="flex items-center"><i className='bx bx-envelope icon text-yellow-500'></i>info@realla.com</span>
        <span className="flex items-center"><i className='bx bx-map icon text-yellow-500'></i>9050 Gent, Belgium</span>
      </p>
    </div>
  </div>

  <div className="flex flex-col">
    <h3 className="text-yellow-500 font-bold mb-2">LINKS</h3>
    <ul className="text-sm space-y-3">
      <li><a href="/about">About</a></li>
      <li><a href="/gallery">Gallery</a></li>
      <li><a href="#">Payments</a></li>
      <li><a href="#">Team</a></li>
    </ul>
  </div>

  <div className="flex flex-col">
    <h3 className="text-yellow-500 font-bold mb-2">HELP</h3>
    <ul className="text-sm space-y-3">
      <li><a href="#">Terms</a></li>
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Cookies</a></li>
      <li><a href="#">FAQ</a></li>
    </ul>
  </div>
</div>



      <div className="flex justify-between items-center bg-yellow-500 py-2 px-4 md:px-40" style={{ backgroundColor: '#fdb514' }}>
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
