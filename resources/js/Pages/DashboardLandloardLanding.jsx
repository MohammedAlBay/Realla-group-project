import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../css/app.css'
import "../../css/Dashboard.css";
import '../../css/Appointment.css'
import DashboardLandloardBar from "@/Components/DashboardLandloardBar.jsx";
import MailboxLandlord from "@/Pages/MailboxLandlord.jsx";
import Gallery from "@/Pages/Gallery.jsx";
import CircularSliderCarousel from "@/Components/CircularSliderCarousel.jsx";
import ProfileLandlord from "@/Pages/ProfileLandlord.jsx";

const DashboardLandloardLanding = () => {

    const [currentPage, setCurrentPage] = useState('dashboard-tenant');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard-landloard':
                return <CircularSliderCarousel/>;
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
                return <CircularSliderCarousel  />;
        }
    };

    return (
        <Router>
            <div className="dashboard">
                <DashboardLandloardBar onPageChange={handlePageChange} />
                <div className="content">
                    {renderPage()}
                </div>
            </div>
        </Router>
    );
};

export default DashboardLandloardLanding;
