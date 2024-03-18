import React from 'react';
import SocialMediaLinks from './SocialMediaLinks';

function ContactInfo() {
  return (
    <div className="contact-info-container">
      <div className="contact-info-header">
        <h2>Contact Information</h2>
        <p>Say something to start a live chat!</p>
      </div>
      <div className="contact-info-main">
        <ul>
          <li><i className='bx bx-phone icon'></i>123 456 789</li>
          <li><i className='bx bx-envelope icon'></i>info@realla.com</li>
          <li><i className='bx bx-map icon'></i>Gaston Crommenlaan 4S <br /> 9050 Ghent, Belgium</li>
        </ul>
      </div>
      <div className="social-media">
        <SocialMediaLinks />
      </div>
    </div>
  );
}

export default ContactInfo;