import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../css/app.css'
import '../../css/Documents.css';
import '../../css/Dashboard.css';
import DashboardTenantBar from "@/Components/DashboardTenantBar.jsx";
import PayNow from "@/Pages/PayNow.jsx";
import Mailbox from "@/Pages/MailboxTenant";
import Documents from "@/Pages/Documents.jsx";
import Gallery from "@/Pages/Gallery.jsx";
import AppointmentTenant from "@/Pages/AppointmentTenant.jsx";
import ReportProblem from "@/Pages/ReportProblem.jsx";
import FollowUp from '@/Pages/FollowUp';
import ProfileTenant from '@/Pages/ProfileTenant'
import CircularSliderCarousel from "@/Components/CircularSliderCarousel.jsx";
import Navigation from '@/Components/Navigation';


const DashboardTenantLanding = () => {

    const [currentPage, setCurrentPage] = useState('dashboard-tenant');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const isGalleryWithinDashboard = true;

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard-tenant':
                return <CircularSliderCarousel/>;
            case 'gallery':
                return <Gallery isDashboardGallery={isGalleryWithinDashboard}/>;
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
            case 'followup':
                return <FollowUp />;
            case 'profile-tenant':
                return <ProfileTenant />;
            default:
                return <CircularSliderCarousel  />;
        }
    };

    return (
        <Router>
            <div className="dashboard">
                <Navigation onPageChange={handlePageChange} currentPage={currentPage}/>
                <div className="dashboard-bar-wrapper">
                    <DashboardTenantBar onPageChange={handlePageChange}/>
                </div>

                <div className="content">
                    {renderPage()}
                </div>

                {/* {currentPage === 'dashboard-tenant' && <DashboardTenantBar onPageChange={handlePageChange} />} */}

            </div>
        </Router>
    );
};

export default DashboardTenantLanding;
