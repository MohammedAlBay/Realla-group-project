import React, { useState } from 'react'; 
import Button from '../Components/RegisterButton'; 
import { Link } from '@inertiajs/react'; 
import DashboardLandlordBar from '@/Components/DashboardTenantBar.jsx';

const MailboxTenant = () => { 
    const [selectedPerson, setSelectedPerson] = useState(null);
    
    return (
        <div className="relative h-screen flex justify-center items-center">
            <div className="mr-8 w-4/5 h-2/3 flex-shrink-0 rounded-xl bg-white shadow-lg relative" style={{ boxShadow: '0 12px 16px rgba(0.1, 0.1, 0.1, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)' }}>
                <div style={{ padding: '20px' }}>
                    <h3 style={{ marginTop: '10px', marginLeft: '10px' }}>Message</h3>
                </div>
                <div className="message-role">Gardener</div>
                <div className="message-role">11:15 AM</div>
                <div className="message-role">Subject</div>

                <div class="message-role">Cleaner</div>
                <div class="message-role">11:15 AM</div>
                <div class="message-role">Subject</div>

                <div class="message-role">Landlord</div>
                <div class="message-role">11:15 AM</div>
                <div class="message-role">Subject</div>

                <div class="message-role">Painter</div>
                <div class="message-role">11:15 AM</div>
                <div class="message-role">Subject</div>

                <div class="message-role">Repair Man</div>
                <div class="message-role">11:15 AM</div>
                <div class="message-role">Subject</div>

                <div class="message-role">Electrician</div>
                <div class="message-role">11:15 AM</div>
                <div class="message-role">Subject</div>

                <div>
                    {/* Other content goes here */}
                </div>
            </div>
        </div>
    );
}

export default MailboxTenant;
