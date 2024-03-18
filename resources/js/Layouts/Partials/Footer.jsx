import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4 md:px-20 flex flex-wrap justify-between items-start md:items-center" style={{backgroundColor: '#292f36'}}>
      {/* Text on the Left */}
      <div className="w-full md:w-auto mb-8 md:mb-0 md:order-1">
        <p className="text-yellow-500 text-sm mb-4">
          Still You Need Our Support?
        </p>
        <p className="text-white text-sm mb-4">
          Don’t wait, make a smart & logical quote here. It's pretty easy.
        </p>
      </div>

      {/* Subscribe Section */}
      <div className="w-full md:w-auto mb-8 md:mb-0 md:order-2">
        <div className="flex items-center justify-end">
          <input type="email" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none placeholder-yellow-500" />
          <button className="bg-yellow-400 text-white px-4 py-2 rounded-r-md hover:bg-yellow-500 focus:outline-none">Subscribe</button>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-full md:w-auto flex flex-col md:flex-row items-start md:items-center md:order-4">
        
        {/* CONTACT Section */}
        <div className="md:mr-12 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">CONTACT</h3>
          <ul className="text-gray-400">
          <li><i className='bx bx-phone icon'></i>123 456 789</li>
          <li><i className='bx bx-envelope icon'></i>info@realla.com</li>
          <li><i className='bx bx-map icon'></i>Gaston Crommenlaan 4S <br /> 9050 Ghent, Belgium</li>
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
        
    </footer>
  );
}

export default Footer;
