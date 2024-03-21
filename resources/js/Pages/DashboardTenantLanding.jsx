import React from 'react';
import DashboardTenant from "@/Components/DashboardTenant.jsx";
import "../../css/Dashboard.css"

const DashboardTenantLanding = () => {
    return (
        <div className="dashboard">
            <div className="header">
                <div className="user-info">
                    <i className='bx bxs-user-circle' style={{color: '#FDB414'}}></i>
                    <span>User Name</span>
                </div>
            </div>


            < DashboardTenant/>


            <div className="content">

            </div>
        </div>
    );
};
export default DashboardTenantLanding;

