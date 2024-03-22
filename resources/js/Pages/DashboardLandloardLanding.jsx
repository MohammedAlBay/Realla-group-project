import React from 'react';
import "../../css/Dashboard.css"
import DashboardLandloardBar from "@/Components/DashboardLandloardBar.jsx";

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

            < DashboardLandloardBar/>

            <div className="content">

            </div>
        </div>
    );
};
export default DashboardTenantLanding;

