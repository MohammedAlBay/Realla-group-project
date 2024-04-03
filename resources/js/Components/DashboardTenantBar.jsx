import React from 'react';
import '../../css/DashboardBar.css'

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
                        <button onClick={() => onPageChange('reportproblem')} className="sidebar-menu-content">
                            <i className='bx bxs-hand' style={{color: '#FDB414'}}></i>
                            <span className="sidebar-menu-link">Report a Problem</span>
                        </button>
                    </li>
                    <li className="sidebar-menu-item">
                        <button onClick={() => onPageChange('mailbox-tenant')} className="sidebar-menu-content">
                            <i className='bx bxs-message-detail' style={{color: '#FDB414'}}></i>
                            <span className="sidebar-menu-link">Message</span>
                        </button>
                    </li>
                    <li className="sidebar-menu-item">
                        <button onClick={() => onPageChange('paynow')} className="sidebar-menu-content">
                            <i className='bx bxs-wallet' style={{color: '#FDB414'}}></i>
                            <span className="sidebar-menu-link">Payment</span>
                        </button>
                    </li>
                    <li className="sidebar-menu-item">
                        <button onClick={() => onPageChange('documents')} className="sidebar-menu-content">
                            <i className='bx bx-folder-open' style={{color: '#FDB414'}}></i>
                            <span className="sidebar-menu-link">Documents</span>
                        </button>
                    </li>
                    <li className="sidebar-menu-item">
                        <button onClick={() => onPageChange('appointment-tenant')} className="sidebar-menu-content">
                            <i className='bx bx-calendar' style={{color: '#FDB414'}}></i>
                            <span className="sidebar-menu-link">Appointments</span>
                        </button>
                    </li>

                    <li className="sidebar-menu-item">
                        <button onClick={() => onPageChange('followup')} className="sidebar-menu-content">
                            <i className='bx bx-loader-circle' style={{color: '#FDB414'}}></i>
                            <span className="sidebar-menu-link">Follow up problems</span>
                         </button>
                    </li>

                    <li className="sidebar-menu-item">
                          <button onClick={() => onPageChange('profile-tenant')} className="sidebar-menu-content">
                             <i className='bx bxs-user-circle' style={{color: '#FDB414'}}></i>
                             <span className="sidebar-menu-link">My Profile</span>
                          </button>
                   </li>
            </ul>
        </div>
    )
        ;
};

export default DashboardTenantBar;
