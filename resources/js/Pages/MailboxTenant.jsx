import React, { useState } from 'react';
import Button from '../Components/MailboxButton';
import { Link } from '@inertiajs/react';
import DashboardLandlordBar from '@/Components/DashboardTenantBar.jsx';

const MailboxTenant = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);

    return (
        <div className="relative h-screen flex justify-start items-start">
            <div className="mr-8 mt-10 w-9/12 h-2/3 flex-shrink-0 rounded-xl bg-white shadow-lg relative" style={{ width: '95%', height: '70%' }}>
                <div style={{ padding: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3 style={{ marginLeft: '10px', fontSize: '1.3rem', marginRight: '10px' }}>Message</h3>
                        <Button text="+ New" color="#FDB514" textColor="white" style={{ padding: '15px 40px', fontSize: '1rem', height: '40px', width: '150px' }} />
                    </div>
                    <input type="text" placeholder="Search Message" style={{ fontSize: '0.85rem', marginTop: '20px', marginLeft: '10px' ,padding: '5px', width: '27%', height: '25px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginLeft: '30px', display: 'flex', flexDirection: 'column', fontSize: '0.85rem', marginBottom: '-10px' }}>
                    <div className="message-role" style={{ marginBottom: '5px' }}>
                        Gardener
                        <span style={{ marginLeft: '90px' }}>11:15 AM</span>
                    </div>
                    <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>

                    <div className="message-role" style={{ marginTop: '15px', marginBottom: '5px' }}>
                        Cleaner
                        <span style={{ marginLeft: '100px' }}>11:15 AM</span>
                    </div>
                    <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>

                    <div className="message-role" style={{ marginTop: '15px', marginBottom: '5px' }}>
                        Landlord
                        <span style={{ marginLeft: '95px' }}>11:15 AM</span>
                    </div>
                    <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>

                    <div className="message-role" style={{ marginTop: '15px', marginBottom: '5px' }}>
                        Painter
                        <span style={{ marginLeft: '105px' }}>11:15 AM</span>
                    </div>
                    <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>

                    <div className="message-role" style={{ marginTop: '15px', marginBottom: '5px' }}>
                        Repair Man
                        <span style={{ marginLeft: '78px' }}>11:15 AM</span>
                    </div>
                    <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>

                    <div className="message-role" style={{ marginTop: '15px', marginBottom: '5px' }}>
                        Electrician
                        <span style={{ marginLeft: '85px' }}>11:15 AM</span>
                    </div>
                    <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>
                </div>
                <input type="text" placeholder="Write message down here ..." style={{ fontSize: '0.85rem', marginLeft: '300px' ,padding: '5px', width: '50%', height: '35px', borderRadius: '5px', border: '1px solid #ccc' }} />
                <div>
                    {/* Other content goes here */}
                </div>
            </div>
        </div>
    );
}

export default MailboxTenant;