// DashboardTenant.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "../../css/Dashboard.css";
import DashboardTenantBar from "@/Components/DashboardTenantBar.jsx";

import PayNow from "@/Pages/PayNow.jsx";
import Mailbox from "@/Pages/MailboxTenant";
import Documents from "@/Pages/Documents.jsx";
import Gallery from "@/Pages/Gallery.jsx";
import AppointmentTenant from "@/Pages/AppointmentTenant.jsx";
import ReportProblem from "@/Pages/ReportProblem.jsx";
import CircularSliderCarousel from "@/Components/CircularSliderCarousel.jsx";

const DashboardTenantLanding = () => {
    // State to track the current page
    const [currentPage, setCurrentPage] = useState('dashboard-tenant');

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Render the current page/component based on the state
    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard-tenant':
                return <CircularSliderCarousel/>;
            case 'gallery':
                return <Gallery />;
            case 'reportproblem':
                return <ReportProblem />;
            case 'mailbox-tenant':
                return <Mailbox />;
            case 'paynow':
                return <PayNow />;
            case 'documents':
                return <Documents />;
            case 'appointment-tenant':
                return <AppointmentTenant />;
            default:
                return < CircularSliderCarousel  />;
        }
    };

    return (
        <Router>
            <div className="dashboard">
                <DashboardTenantBar onPageChange={handlePageChange} />
                <div className="content">
                    {renderPage()}
                </div>
            </div>
        </Router>
    );
};

export default DashboardTenantLanding;
