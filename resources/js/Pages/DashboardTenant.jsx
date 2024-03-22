import React from 'react';
import "../../css/Dashboard.css"
import DashboardTenantLanding from "@/Pages/DashboardTenantLanding.jsx";
import PayNow from "@/Pages/PayNow.jsx";
import Mailbox from "@/Pages/MailboxTenant"

const DashboardTenant = () => {
    return (
        <div className="dashboard">

            < DashboardTenantLanding />
            < PayNow />
            < Mailbox />



            <div className="content">

            </div>
        </div>
    );
};
export default DashboardTenant;
