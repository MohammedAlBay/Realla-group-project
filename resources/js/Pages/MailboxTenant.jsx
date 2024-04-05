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
                        <div style={{ width: '220px', height: '30px', flexShrink: 0, borderRadius: '20px 20px 20px 0px', border: 'none', fontSize: '0.85rem', backgroundColor: '#C2C2C2', position: 'absolute', left: '38%', bottom: '75%', padding: '5px 15px' }}>What can we do for you?</div>
                        <span style={{ fontSize: '0.60rem', marginLeft: '250px', position: 'absolute', top: '21.5%' }}>11:15</span>
                        {/* Second textblock chat left */}
                        <div style={{ width: '215px', height: '30px', flexShrink: 0, borderRadius: '20px 20px 20px 0px', border: 'none', fontSize: '0.85rem', backgroundColor: '#C2C2C2', position: 'absolute', left: '38%', bottom: '50%', padding: '5px 15px' }}>What needs to be done?</div>
                        <span style={{ fontSize: '0.60rem', marginLeft: '245px', position: 'absolute', top: '46.5%' }}>11:15</span>                      
                        {/* Third textblock chat left*/}
                        <div style={{ width: '255px', height: '30px', flexShrink: 0, borderRadius: '20px 20px 20px 0px', border: 'none', fontSize: '0.85rem', backgroundColor: '#C2C2C2', position: 'absolute', left: '38%', bottom: '18%', padding: '5px 15px' }}>This will be done by next week.</div>                  
                        <span style={{ fontSize: '0.60rem', marginLeft: '285px', position: 'absolute', top: '78.5%' }}>11:15</span>                                              
                        {/* First textblock chat right*/}
                        <div style={{ width: '200px', height: '60px', flexShrink: 0, borderRadius: '20px 20px 0px 20px', border: 'none', fontSize: '0.85rem', backgroundColor: '#C2C2C2', position: 'absolute', left: '71.5%', bottom: '60%', padding: '10px 15px' }}>I'm contacting you for some lawn maintenance.</div>                   
                        <span style={{ fontSize: '0.60rem', marginLeft: '488px', position: 'absolute', top: '36.3%' }}>11:15</span>                                              
                        {/* Second textblock chat right*/}
                        <div style={{ width: '220px', height: '30px', flexShrink: 0, borderRadius: '20px 20px 0px 20px', border: 'none', fontSize: '0.85rem', backgroundColor: '#C2C2C2', position: 'absolute', left: '69%', bottom: '40%', padding: '5px 15px' }}> Mowing, edging and watering.</div>   
                        {/* Image left, chat right*/}
                        <div style={{ width: '100px', height: '60px', flexShrink: 0, borderRadius: '15px', border: 'none', backgroundColor: '#C2C2C2', position: 'absolute', left: '69%', bottom: '25%' }}></div>  
                        {/* Image right, chat right*/}
                        <div style={{ width: '100px', height: '60px', flexShrink: 0, borderRadius: '15px', border: 'none', backgroundColor: '#C2C2C2', position: 'absolute', left: '84%', bottom: '25%' }}></div>                    
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