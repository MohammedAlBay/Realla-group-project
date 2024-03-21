import React from 'react';
import DashboardTenantBar from "@/Components/DashboardTenantBar.jsx";
import "../../css/Dashboard.css"

const DashboardTenantLanding = () => {
    return (
        <div className="dashboard">
            <div className="header-user-name">
                <div className="user-info">
                    <i className='bx bxs-user-circle' style={{color: '#FDB414'}}></i>
                    <span>User Name</span>
                </div>
            </div>


            < DashboardTenantBar/>


            <div className="content">

            </div>
        </div>
    );
};
export default DashboardTenantLanding;

