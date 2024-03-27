import React, { useState } from 'react';
import Button from '../Components/RegisterButton'; 
import { Link } from '@inertiajs/react'; 
import '../../css/Dashboard.css';
import DashboardLandlordBar from '@/Components/DashboardTenantBar.jsx';

const MailboxTenant = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);
    

    return (
        <div className="relative bg-gray-200 h-screen flex justify-end items-center">
            <DashboardLandlordBar className="mr-8" />
            <div className="mr-8 mt-8 w-2/3 h-3/4 flex-shrink-0 rounded-xl bg-white shadow-lg relative" style={{ boxShadow: '0 12px 16px rgba(0.1, 0.1, 0.1, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)' }}>
                <div style={{ padding: '20px' }}>
                    <h3 style={{ marginTop: '10px', marginLeft: '10px' }}>Message</h3>
                </div>
                <div>
                    {/* Other content goes here */}
                </div>
            </div>
        </div>
    );
}

export default MailboxTenant;
