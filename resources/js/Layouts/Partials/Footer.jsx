import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { Link } from '@inertiajs/react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Subscribed successfully!');
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white" style={{ backgroundColor: '#292f36' }}>
      <div className="py-8 px-4 md:flex md:items-center md:justify-between md:px-48">
        <div className="md:flex-1 md:mr-12">
          <p className="text-yellow-500 text-sm font-bold mb-1">STAY INFORMED</p>
          <p className="text-sm mb-2 md:mb-0">Don't wait, subscribe now and receive special offers and the latest updates!"</p>
        </div>

        <div className="flex items-center">
          <form onSubmit={handleSubscribe} className="flex">
            <input type="email" placeholder="Enter Your Email" className="text-gray-800 px-16 py-2 border border-gray-300 rounded-l-md focus:outline-none placeholder-yellow-500" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" className="px-8 py-2 rounded-r-md hover:bg-orange-500 focus:outline-none" style={{ backgroundColor: '#fdb514' }}>Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="w-3/4 mx-auto">
          <hr className="my-4 border-b-1 border-yellow-500" />
      </div>

      <div className="px-4 md:px-20 py-10 flex flex-col md:flex-row md:justify-between items-start space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex items-center">
          <img src="/images/realla_logo.png" alt="Logo" className="mr-8 mt-8 ml-28 h-14" />
        </div>

        <div className="flex flex-col"> 
            <h3 className="text-yellow-500 font-bold mb-2">CONTACT</h3>
            <p className="text-sm space-y-3">
              <span className="flex items-center"><i className='bx bx-phone icon text-yellow-500 mr-2'></i>123 456 789</span>
              <span className="flex items-center"><i className='bx bx-envelope icon text-yellow-500 mr-3'></i>info@realla.com</span>
              <span className="flex items-center"><i className='bx bx-map icon text-yellow-500 mr-3'></i>9050 Gent, Belgium</span>
            </p>
          </div>

        <div className="flex flex-col">
          <h3 className="text-yellow-500 font-bold mb-2">PROPERTIES</h3>
          <ul className="text-sm space-y-3">
            <li><Link href="/about">Flemish Brabant</Link></li>
            <li><Link href="/gallery">West Flanders</Link></li>
            <li><Link href="#">Walloon Brabant</Link></li>
            <li><Link href="#">East Flanders</Link></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-yellow-500 font-bold mb-2">DISCOVER</h3>
          <ul className="text-sm space-y-3">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="#">Explore</Link></li>
            <li><Link href="#">Dashboard</Link></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-yellow-500 font-bold mb-2 mr-32">POLICIES</h3>
          <ul className="text-sm space-y-3">
            <li><Link href="#">Terms</Link></li>
            <li><Link href="#">Privacy</Link></li>
            <li><Link href="#">Cookies</Link></li>
            <li><Link href="#">Info</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center bg-yellow-500 py-2 px-4 md:px-48" style={{ backgroundColor: '#fdb514' }}>
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
