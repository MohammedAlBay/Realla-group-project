import React from 'react';
import DashboardTenantBar from "@/Components/DashboardTenantBar.jsx";
import "../../css/Dashboard.css"
import CircularSliderCarousel from "@/Components/CircularSliderCarousel.jsx";

const DashboardTenantLanding = () => {
    return (
        <div className="dashboard">
            <div className="header-user-name">

                <div className="user-info">
                    <i className='bx bxs-bell' style={{color: '#FDB414'}}></i>
                    <i className='bx bxs-user-circle' style={{color: '#FDB414'}}></i>
                    <span>User Name</span>
                </div>
            </div>


            < DashboardTenantBar/>


            <div className="content">
                <CircularSliderCarousel />

            </div>
        </div>
    );
};
export default DashboardTenantLanding;

