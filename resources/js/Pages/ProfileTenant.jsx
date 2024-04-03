import React from 'react';
import PropertyBookmarks from "@/Components/PropertyBookmarks.jsx";
import ProfileInfo from "@/Components/ProfileInfo.jsx";
import { Link } from '@inertiajs/react';
import '../../css/Profile.css';

const ProfileTenant = () => {
  return(
    <>
      <div className="profile-container">
        <div className="heading"><h2>My Profile</h2></div>
        <ProfileInfo />
        <PropertyBookmarks />
        <button className="back-button"><Link href="/dashboard-tenant">Back</Link></button>
      </div>
    </>
  );
}

export default ProfileTenant;
