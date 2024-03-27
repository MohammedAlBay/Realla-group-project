// DashboardTenantBar.js

import React from 'react';

const DashboardTenantBar = ({ onPageChange }) => {
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
                    <div className="sidebar-menu-content">
                        <i className='bx bxs-hand' style={{color: '#FDB414'}}></i>
                        <a href="#" className="sidebar-menu-link">Report a problem</a>
                    </div>
                </li>

                <li className="sidebar-menu-item">
                    <Link href="/mailbox-tenant" className="sidebar-menu-content">
                        <i className='bx bxs-message-detail' style={{color: '#FDB414'}}></i>
                        <a href="#" className="sidebar-menu-link">Message</a>
                    </Link>
                </li>
                <li className="sidebar-menu-item">
                    <Link href="/appointment-tenant" className="sidebar-menu-content">
                        <i className='bx bx-calendar' style={{color: '#FDB414'}}></i>
                        <a href="#" className="sidebar-menu-link">Appointment</a>
                    </Link>
                </li>
                <li className="sidebar-menu-item">
                    <Link href="/paynow" className="sidebar-menu-content">
                        <i className='bx bxs-wallet' style={{color: '#FDB414'}}></i>
                        <a href="#" className="sidebar-menu-link">Payment</a>
                    </Link>
                </li>
                <li className="sidebar-menu-item">
                    <Link href="/documents" className="sidebar-menu-content">
                        <i className='bx bx-folder-open' style={{color: '#FDB414'}}></i>
                        <a href="#" className="sidebar-menu-link">Documents</a>
                    </Link>
                </li>
                <li className="sidebar-menu-item">
                    <div className="sidebar-menu-content">
                        <i className='bx bx-loader-circle' style={{color: '#FDB414'}}></i>
                        <a href="#" className="sidebar-menu-link">Follow up problems</a>
                    </div>
                </li>
                <li className="sidebar-menu-item">
                    <div className="sidebar-menu-content">
                        <i className='bx bxs-user-circle' style={{color: '#FDB414'}}></i>
                        <a href="#" className="sidebar-menu-link">My Profile</a>
                    </div>
                </li>

    {/* Add other navigation buttons similarly */
    }
</ul>
</div>
)
    ;
};

export default DashboardTenantBar;
