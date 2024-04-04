import React, { useState } from 'react';
import Button from '../Components/MailboxButton';
import { Link } from '@inertiajs/react';
import DashboardLandlordBar from '@/Components/DashboardTenantBar.jsx';

const MailboxTenant = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);

    return (
        <div className="overflow-hidden relative h-screen flex justify-start items-start">
            <div className="mr-8 ml-5 mt-32 w-9/12 h-2/3 flex-shrink-0 rounded-xl bg-white shadow-lg relative" style={{ width: '95%', height: '70%' }}>
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
                        <div style={{ width: '42px', height: '42px', flexShrink: 0, borderRadius: '50%', border: '3px solid rgba(0, 0, 0, 0.00)', position: 'absolute', left: 'calc(52% - 120px)', top: '15px', backgroundImage: 'url(/images/gardener.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        {/* Green dot and Online text */}
                        <div style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', position: 'absolute', left: 'calc(59% - 120px)', top: '35px' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'green', marginRight: '5px' }}></div>
                            <span style={{ marginLeft: '5px', fontSize: '0.7rem' }}>Online</span>
                        </div>
                        <div style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', position: 'absolute', left: 'calc(59% - 120px)', top: '15px' }}>
                            Gardener
                        </div>
                        {/* Vertical grey line */}
                        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '35%', width: '1px', background: '#ccc' }}></div>
                        {/* Horizontal grey line top */}
                        <div style={{ position: 'absolute', left: '35%', right: 0, bottom: '87.3%', height: '1px', background: '#ccc' }}></div>
                        {/* Horizontal grey line bottom */}
                        <div style={{ position: 'absolute', left: '35%', right: 0, bottom: '15%', height: '1px', background: '#ccc' }}></div>
                        {/* First textblock chat left */}
                        <div style={{ width: '220px', height: '30px', flexShrink: 0, borderRadius: '20px 20px 20px 0px', border: 'none', backgroundColor: '#C2C2C2', position: 'absolute', left: '38%', bottom: '75%' }}></div>
                        {/* Second textblock chat left */}
                        <div style={{ width: '220px', height: '40px', flexShrink: 0, borderRadius: '20px 20px 20px 0px', border: 'none', backgroundColor: '#C2C2C2', position: 'absolute', left: '38%', bottom: '50%' }}></div>
                        {/* Third textblock chat left*/}
                        <div style={{ width: '220px', height: '40px', flexShrink: 0, borderRadius: '20px 20px 20px 0px', border: 'none', backgroundColor: '#C2C2C2', position: 'absolute', left: '38%', bottom: '18%' }}></div>                  
                        {/* First textblock chat right*/}
                        <div style={{ width: '220px', height: '65px', flexShrink: 0, borderRadius: '20px 20px 0px 20px', border: 'none', backgroundColor: '#C2C2C2', position: 'absolute', left: '69%', bottom: '60%' }}></div>                   
                        {/* Second textblock chat right*/}
                        <div style={{ width: '220px', height: '40px', flexShrink: 0, borderRadius: '20px 20px 0px 20px', border: 'none', backgroundColor: '#C2C2C2', position: 'absolute', left: '69%', bottom: '40%' }}></div>   
                        {/* Image left chat right*/}
                        <div style={{ width: '100px', height: '50px', flexShrink: 0, borderRadius: '15px', border: 'none', backgroundColor: '#C2C2C2', position: 'absolute', left: '69%', bottom: '30%' }}></div>                      
                    </div>
                    <div style={{ marginLeft: '30px', display: 'flex', flexDirection: 'column', fontSize: '0.85rem', marginBottom: '-10px' }}>

                        <div className='flex'>
                            <div className="message-role" style={{ marginBottom: '5px' }}>
                            Gardener
                            <span style={{ marginLeft: '90px' }}>11:15 AM</span>
                            <div className="message-role" style={{ marginTop: '5px', marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>

                        <div className='flex'>
                            <div className="message-role" style={{ marginTop: '15px', marginBottom: '5px' }}>
                            Cleaner
                            <span style={{ marginLeft: '100px' }}>11:15 AM</span>
                            <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>

                        <div className='flex'>
                            <div className="message-role" style={{ marginTop: '15px', marginBottom: '5px' }}>
                            Landlord
                            <span style={{ marginLeft: '95px' }}>11:15 AM</span>
                            <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>

                        <div className='flex'>
                            <div className="message-role" style={{ marginTop: '15px', marginBottom: '5px' }}>
                            Painter
                            <span style={{ marginLeft: '105px' }}>11:15 AM</span>
                            <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>

                        <div className='flex'>
                            <div className="message-role" style={{ marginTop: '15px', marginBottom: '5px' }}>
                            Repair Man
                            <span style={{ marginLeft: '78px' }}>11:15 AM</span>
                            <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>

                        <div className='flex'>
                            <div className="message-role" style={{ marginTop: '15px', marginBottom: '5px' }}>
                            Electrician
                            <span style={{ marginLeft: '85px' }}>11:15 AM</span>
                            <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>
                        <div style={{ marginLeft: '430px', position: 'absolute', left: '35%', bottom: '17px', height: '40px', width: '150px' }}>
                            <button style={{ padding: '5px 10px', fontSize: '0.75rem', borderRadius: '20px', border: 'none', cursor: 'pointer', backgroundColor: '#FDB514', color: 'white' }}>Send</button>
                        </div>
                    </div> 
                    <div>
                        {/* Other content goes here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MailboxTenant;