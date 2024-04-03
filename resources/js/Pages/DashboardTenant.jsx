import React from 'react';
import "../../css/Dashboard.css";

import DashboardTenantLanding from "@/Pages/DashboardTenantLanding.jsx";

const DashboardTenant = () => {
    return (
            <div className="dashboard">

                <div className="content">
                    <DashboardTenantLanding />
                </div>
            </div>
    );
};

export default DashboardTenant;
