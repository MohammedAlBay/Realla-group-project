import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../css/app.css'
import "../../css/Dashboard.css";
import '../../css/Appointment.css'
import DashboardLandloardBar from "@/Components/DashboardLandloardBar.jsx";
import MailboxLandlord from "@/Pages/MailboxLandlord.jsx";
import Gallery from "@/Pages/Gallery.jsx";
import ProfileLandlord from "@/Pages/ProfileLandlord.jsx";
import LandingLandloard from "@/Components/LandingLandloard.jsx";
import Navigation from "@/Components/Navigation.jsx";
import DashboardTenantBar from "@/Components/DashboardTenantBar.jsx";

const DashboardLandloardLanding = () => {

    const [currentPage, setCurrentPage] = useState('dashboard-landloard');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard-landloard':
                return <LandingLandloard/>;
            case 'gallery':
                return <Gallery />;
            case 'mailbox-landlord':
                return <MailboxLandlord />;
            case 'appointment-landlord':
                return <AppointmentLandloard/>;
            case 'search-real-estate':
                return <FindRealEstate />;
            case 'search-tenant':
                return <FindTenant />;
            case 'follow-up-landloard':
                return <FollowUpProblemLandloard />;
            case 'profile-landlord':
                return <ProfileLandlord />;
            default:
                return <LandingLandloard/>;        }
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
            </div>
        </Router>
    );
};

export default DashboardLandloardLanding;
