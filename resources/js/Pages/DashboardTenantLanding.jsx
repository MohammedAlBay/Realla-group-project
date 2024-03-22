import React from 'react';
import "../../css/Dashboard.css"
import CircularSliderCarousel from "@/Components/CircularSliderCarousel.jsx";
import DashboardTenantBar from "@/Components/DashboardTenantBar.jsx";




const DashboardTenantLanding = () => {
    return (
        <div className="dashboard">

            <DashboardTenantBar />

            <div className="content">
                 <CircularSliderCarousel />
            </div>


        </div>
    );
};
export default DashboardTenantLanding;

