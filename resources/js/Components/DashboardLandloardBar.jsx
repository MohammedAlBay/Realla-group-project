import React from 'react';


const DashboardLandloardBar = ({ onPageChange }) => {
    return (
        <div className="sidebar">
            <ul className="sidebar-menu">
                <li className="sidebar-menu-item">
                    <button onClick={() => onPageChange('dashboard-tenant')} className="sidebar-menu-content">
                        <i className='bx bxs-dashboard' style={{color: '#FDB414'}}/>
                        <span className="sidebar-menu-link">Home</span>
                    </button>
                </li>

                <li className="sidebar-menu-item">
                    <button onClick={() => onPageChange('gallery')} className="sidebar-menu-content">
                        <i className='bx bxs-compass' style={{color: '#FDB414'}}/>
                        <span className="sidebar-menu-link">Explore</span>
                    </button>
                </li>

                <li className="sidebar-menu-item">
                    <button onClick={() => onPageChange('mailbox-landloard')} className="sidebar-menu-content">
                        <i className='bx bxs-message-detail' style={{color: '#FDB414'}}></i>
                        <span className="sidebar-menu-link">Message</span>
                    </button>
                </li>

                <li className="sidebar-menu-item">
                    <button onClick={() => onPageChange('appointment-landloard')} className="sidebar-menu-content">
                        <i className='bx bx-calendar' style={{color: '#FDB414'}}></i>
                        <span className="sidebar-menu-link">Appointments</span>
                    </button>
                </li>

                <li className="sidebar-menu-item">
                    <button onClick={() => onPageChange('search-real-estate')} className="sidebar-menu-content">
                        <i className='bx bxs-home-heart' style={{color: '#FDB414'}}></i>
                        <span className="sidebar-menu-link">Find a real estate</span>
                      </button>
                </li>

    <li className="sidebar-menu-item">
        <button onClick={() => onPageChange('search-tenant')} className="sidebar-menu-content">
            <i className='bx bx-font-family' style={{color: '#FDB414'}}></i>
            <span className="sidebar-menu-link">Find a tenant</span>
        </button>
    </li>
                <li className="sidebar-menu-item">
                    <button onClick={() => onPageChange('follow-up-problems-tenant')} className="sidebar-menu-content">
                        <i className='bx bx-loader-circle' style={{color: '#FDB414'}}></i>
                        <span className="sidebar-menu-link">Follow up problems</span>
                    </button>
                </li>

                <li className="sidebar-menu-item">
                    <button onClick={() => onPageChange('tenant-profile')} className="sidebar-menu-content">
                        <i className='bx bxs-user-circle' style={{color: '#FDB414'}}></i>
                        <span className="sidebar-menu-link">My Profile</span>
                    </button>
                </li>
            </ul>
        </div>
    )
        ;
};

export default DashboardLandloardBar;

