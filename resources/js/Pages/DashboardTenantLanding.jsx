import React from 'react';
import DashboardTenantBar from "@/Components/DashboardTenantBar.jsx";
import "../../css/Dashboard.css"
import CircularSliderCarousel from "@/Components/CircularSliderCarousel.jsx";
import PayNow from "@/Pages/PayNow.jsx";

const DashboardTenantLanding = () => {
    return (
        <div className="dashboard">



            < DashboardTenantBar/>


            <div className="content">
                <CircularSliderCarousel />

            </div>


        </div>
    );
};
export default DashboardTenantLanding;

