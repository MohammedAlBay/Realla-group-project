import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../css/app.css'
import "../../css/Dashboard.css";
import '../../css/Appointment.css'
import DashboardTenantBar from "@/Components/DashboardTenantBar.jsx";
import PayNow from "@/Pages/PayNow.jsx";
import Mailbox from "@/Pages/MailboxTenant";
import Documents from "@/Pages/Documents.jsx";
import Gallery from "@/Pages/Gallery.jsx";
import AppointmentTenant from "@/Pages/AppointmentTenant.jsx";
import ReportProblem from "@/Pages/ReportProblem.jsx";
import CircularSliderCarousel from "@/Components/CircularSliderCarousel.jsx";

const DashboardTenantLanding = () => {

    const [currentPage, setCurrentPage] = useState('dashboard-tenant');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

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
            case 'follow-up-problems-tenant':
                return <FollowUpTenant />;
            case 'profile-tenant':
                return <ProfileTenant />;
            default:
                return <CircularSliderCarousel  />;
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
