import React from 'react';
import "../../css/Dashboard.css"
import DashboardTenantBar from "@/Components/DashboardTenantBar.jsx";
import DashboardTenantLanding from "@/Pages/DashboardTenantLanding.jsx";
import PayNow from "@/Pages/PayNow.jsx";
import Mailbox from "@/Pages/MailboxTenant"



const DashboardTenant = () => {
    return (
        <div className="dashboard">
            <DashboardTenantBar />


            < DashboardTenantLanding />
            < PayNow />
            < Mailbox />

            <div className="content">

            </div>
        </div>
    );
};
export default DashboardTenant;
