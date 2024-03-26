import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../../css/Dashboard.css";
import DashboardTenantBar from "@/Components/DashboardTenantBar.jsx";
import DashboardTenantLanding from "@/Pages/DashboardTenantLanding.jsx";
import PayNow from "@/Pages/PayNow.jsx";
import Mailbox from "@/Pages/MailboxTenant";
import Documents from "@/Pages/Documents.jsx";
import Gallery from "@/Pages/Gallery.jsx";


const DashboardTenant = () => {
    return (
        <Router>
            <div className="dashboard">
                <DashboardTenantBar />
                <div className="content">
                    <Routes>
                        <Route exact path="/dashboard-tenant" component={DashboardTenantLanding} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/pay-now" component={PayNow} />
                        <Route path="/mailbox" component={Mailbox} />
                        <Route path="/documents" component={Documents} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default DashboardTenant;
