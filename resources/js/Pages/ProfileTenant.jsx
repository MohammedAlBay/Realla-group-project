import React from 'react';
// import DashboardTenantBar from "@/Components/DashboardTenantBar.jsx";
import PropertyBookmarks from "@/Components/PropertyBookmarks.jsx";
import ProfileInfo from "@/Components/ProfileInfo.jsx";
import '../../css/Profile.css';

const ProfileTenant = () => {
  return(
    <>
      <ProfileInfo />
      <PropertyBookmarks />
    </>
  );
}

export default ProfileTenant;
