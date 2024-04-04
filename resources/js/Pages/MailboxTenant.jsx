import React, { useState } from 'react';
import Button from '../Components/MailboxButton';
import { Link } from '@inertiajs/react';
import DashboardLandlordBar from '@/Components/DashboardTenantBar.jsx';

const MailboxTenant = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);

    return (
        <div className="overflow-hidden relative h-screen flex justify-start items-start">
            <div className="mr-8 mt-10 w-9/12 h-2/3 flex-shrink-0 rounded-xl bg-white shadow-lg relative" style={{ width: '95%', height: '70%' }}>
                <div>
                    <div style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h3 style={{ marginLeft: '10px', fontSize: '1.3rem', marginRight: '10px' }}>Message</h3>
                            <Button text="+ New" color="#FDB514" textColor="white" style={{ padding: '15px 40px', fontSize: '1rem', height: '40px', width: '150px' }} />
                        </div>
                        <input type="text" placeholder="Search Message" style={{ fontSize: '0.85rem', marginTop: '20px', marginLeft: '10px' ,padding: '5px', width: '27%', height: '25px', borderRadius: '5px', border: '1px solid #ccc' }} />
                        {/* Input */}
                        <input type="text" placeholder="Write message down here ..." style={{ fontSize: '0.85rem', marginBottom: '20px', marginLeft: '20px', padding: '5px', width: '50%', height: '35px', borderRadius: '5px', border: '1px solid #ccc', position: 'absolute', left: '35%', bottom: '5px' }} />
                        {/* Profile picture */}
                        <div style={{ width: '42px', height: '42px', flexShrink: 0, borderRadius: '50%', border: '3px solid rgba(0, 0, 0, 0.00)', background: '#D9D9D9', position: 'absolute', left: 'calc(52% - 120px)', top: '15px' }}></div>
                            {/* Green dot and Online text */}
                            <div style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', position: 'absolute', left: 'calc(59% - 120px)', top: '15px' }}>
                            Gardener
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'green', marginRight: '5px' }}></div>
                            <span style={{ marginLeft: '5px', fontSize: '0.7rem' }}>Online</span>
                        </div>
                        {/* Vertical grey line */}
                        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '35%', width: '1px', background: '#ccc' }}></div>
                        {/* Horizontal grey line top */}
                        <div style={{ position: 'absolute', left: '35%', right: 0, bottom: '87.3%', height: '1px', background: '#ccc' }}></div>
                        {/* Horizontal grey line bottom */}
                        <div style={{ position: 'absolute', left: '35%', right: 0, bottom: '15%', height: '1px', background: '#ccc' }}></div>
                    </div>
                    <div style={{ marginLeft: '30px', display: 'flex', flexDirection: 'column', fontSize: '0.85rem', marginBottom: '-10px' }}>

                        <div className='flex'>
                        <div style={{ width: '42px', height: '42px', flexShrink: 0, borderRadius: '50%', border: '3px solid rgba(0, 0, 0, 0.00)', background: '#D9D9D9', position: 'absolute',  left: 'calc(18% - 120px)',  top: '117px', backgroundImage: 'url(gardener.png)', backgroundSize: 'cover', backgroundPosition: 'center', }}></div>   
                            <div className="message-role" style={{ marginBottom: '5px' }}>
                            Gardener
                            <span style={{ marginLeft: '90px' }}>11:15 AM</span>
                            <div className="message-role" style={{ marginTop: '5px', marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>

                        <div className='flex'>
                        <div style={{ width: '42px', height: '42px', flexShrink: 0, borderRadius: '50%', border: '3px solid rgba(0, 0, 0, 0.00)', background: '#D9D9D9', position: 'absolute',  left: 'calc(18% - 120px)',  top: '190px', backgroundImage: 'url(gardener.png)', backgroundSize: 'cover', backgroundPosition: 'center', }}></div>   
                            <div className="message-role" style={{ marginTop: '15px', marginBottom: '5px' }}>
                            Cleaner
                            <span style={{ marginLeft: '100px' }}>11:15 AM</span>
                            <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>

                        <div className='flex'>
                        <div style={{ width: '42px', height: '42px', flexShrink: 0, borderRadius: '50%', border: '3px solid rgba(0, 0, 0, 0.00)', background: '#D9D9D9', position: 'absolute',  left: 'calc(18% - 120px)',  top: '260px', backgroundImage: 'url(gardener.png)', backgroundSize: 'cover', backgroundPosition: 'center', }}></div>   
                            <div className="message-role" style={{ marginTop: '15px', marginBottom: '5px' }}>
                            Landlord
                            <span style={{ marginLeft: '95px' }}>11:15 AM</span>
                            <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>

                        <div className='flex'>
                        <div style={{ width: '42px', height: '42px', flexShrink: 0, borderRadius: '50%', border: '3px solid rgba(0, 0, 0, 0.00)', background: '#D9D9D9', position: 'absolute',  left: 'calc(18% - 120px)',  top: '330px', backgroundImage: 'url(gardener.png)', backgroundSize: 'cover', backgroundPosition: 'center', }}></div>   
                            <div className="message-role" style={{ marginTop: '15px', marginBottom: '5px' }}>
                            Painter
                            <span style={{ marginLeft: '105px' }}>11:15 AM</span>
                            <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>

                        <div className='flex'>
                        <div style={{ width: '42px', height: '42px', flexShrink: 0, borderRadius: '50%', border: '3px solid rgba(0, 0, 0, 0.00)', background: '#D9D9D9', position: 'absolute',  left: 'calc(18% - 120px)',  top: '400px', backgroundImage: 'url(gardener.png)', backgroundSize: 'cover', backgroundPosition: 'center', }}></div>   
                            <div className="message-role" style={{ marginTop: '15px', marginBottom: '5px' }}>
                            Repair Man
                            <span style={{ marginLeft: '78px' }}>11:15 AM</span>
                            <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>

                        <div className='flex'>
                        <div style={{ width: '42px', height: '42px', flexShrink: 0, borderRadius: '50%', border: '3px solid rgba(0, 0, 0, 0.00)', background: '#D9D9D9', position: 'absolute',  left: 'calc(18% - 120px)',  top: '470px', backgroundImage: 'url(gardener.png)', backgroundSize: 'cover', backgroundPosition: 'center', }}></div>   
                            <div className="message-role" style={{ marginTop: '15px', marginBottom: '5px' }}>
                            Electrician
                            <span style={{ marginLeft: '85px' }}>11:15 AM</span>
                            <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>

                    </div>
                </div> 
                <Button text="Send" color="#FDB514" textColor="white" style={{ padding: '15px 40px', fontSize: '1rem', height: '40px', width: '150px' }} />

                <div>
                    {/* Other content goes here */}
                </div>

            </div>
        </div>
    );
}

export default MailboxTenant;
