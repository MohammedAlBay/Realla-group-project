import React from 'react';
import 'boxicons/css/boxicons.min.css';
import { Link } from '@inertiajs/react';

const ProfileInfo = () => {

  return (
    <div className="container">
      <div className="profile-section">
        <h2 className="profile-heading">My Profile</h2>
        <div className="cover-picture">
          <img src="../images/profile/profile-cover-image2.png" alt="Cover image of the profile" />
          <button className="change-picture-button">Change Picture</button>
        </div>
        <div className="profile-avatar">
          <img src="../images/profile/avatar2.png" alt="avatar of the user" />
          {/* Image of the user goes here */}
        </div>
        <div className="user-info">
          <div className="user-details">
            <h3 className="user-name">Alvert Flore</h3>
            <p className="timestamp">Joined 6 months ago</p>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">&#8226;&#8226;&#8226;</button>
            <div className="dropdown-content" id="myDropdown">
              <Link href="/edit-profile" className="profile-dropdown-links"><i class='bx bxs-edit-alt' style={{color:'#fdb514'}}></i>Edit Profile</Link>
              <Link href="/documents" className="profile-dropdown-links"><i class='bx bxs-file' style={{color:'#fdb514'}}></i>Documents</Link>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-address">
              <p><i className='bx bxs-map' style={{color:'#fdb514'}}></i>0000 Gallifry Lane, Galaxy 0000</p>
              <small className="data-description">Address</small>
            </div>
            <div className="contact-mail">
              <p><i className='bx bxs-envelope' style={{color:'#fdb514'}}></i>Example@example.com</p>
              <small class="data-description">Email</small>
            </div>
            <div className="contact-number">
              <p><i className='bx bxs-phone' style={{color:'#fdb514'}}></i>0123 456 789</p>
              <small className="data-description">Phone</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;