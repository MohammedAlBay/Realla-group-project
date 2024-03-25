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
            <div className="mr-8 w-2/3 h-2/3 flex-shrink-0 rounded-xl border-2 border-gray-300 bg-white shadow-lg relative">
                {/* Your JSX content goes here */}
                <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 border-t border-gray-400"></div>
            </div>
        </div>
    );f
}

export default MailboxTenant;

