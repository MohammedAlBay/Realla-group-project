import React, { useState } from 'react';
import Button from '../Components/MailboxButton';
import { Link } from '@inertiajs/react';
import DashboardLandlordBar from '@/Components/DashboardTenantBar.jsx';

const MailboxLandlord = () => {
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
                        <div style={{ width: '42px', height: '42px', flexShrink: 0, position: 'absolute', left: 'calc(52% - 120px)', top: '15px', overflow: 'hidden'  }}>
                        <img src="/images/MailboxLandlordRepair.png" alt="Profile" style={{  width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'  }} /></div>
                        {/* Green dot and Online text */}
                        <div style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', position: 'absolute', left: 'calc(59% - 120px)', top: '35px' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'green', marginRight: '5px' }}></div>
                            <span style={{ marginLeft: '5px', fontSize: '0.7rem' }}>Online</span>
                        </div>
                        <div style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', position: 'absolute', left: 'calc(59% - 120px)', top: '15px' }}>
                            Repairman
                        </div>
                        {/* Vertical grey line */}
                        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '35%', width: '1px', background: '#ccc' }}></div>
                        {/* Horizontal grey line top */}
                        <div style={{ position: 'absolute', left: '35%', right: 0, bottom: '87.3%', height: '1px', background: '#ccc' }}></div>
                        {/* Horizontal grey line bottom */}
                        <div style={{ position: 'absolute', left: '35%', right: 0, bottom: '15%', height: '1px', background: '#ccc' }}></div>
                        {/* First textblock chat left */}
                        <div style={{ width: '220px', height: '30px', flexShrink: 0, borderRadius: '20px 20px 20px 0px', border: 'none', fontSize: '0.85rem', backgroundColor: '#E5E5E5', position: 'absolute', left: '38%', bottom: '75%', padding: '5px 15px' }}>What can we do for you?</div>
                        <span style={{ fontSize: '0.60rem', marginLeft: '250px', position: 'absolute', top: '21.5%' }}>11:15</span>
                        {/* Second textblock chat left */}
                        <div style={{ width: '215px', height: '30px', flexShrink: 0, borderRadius: '20px 20px 20px 0px', border: 'none', fontSize: '0.85rem', backgroundColor: '#E5E5E5', position: 'absolute', left: '38%', bottom: '50%', padding: '5px 15px' }}>What needs to be done?</div>
                        <span style={{ fontSize: '0.60rem', marginLeft: '245px', position: 'absolute', top: '46.5%' }}>11:40</span>                      
                        {/* Third textblock chat left*/}
                        <div style={{ width: '255px', height: '30px', flexShrink: 0, borderRadius: '20px 20px 20px 0px', border: 'none', fontSize: '0.85rem', backgroundColor: '#E5E5E5', position: 'absolute', left: '38%', bottom: '18%', padding: '5px 15px' }}>This will be done by next week.</div>                  
                        <span style={{ fontSize: '0.60rem', marginLeft: '285px', position: 'absolute', top: '78.5%' }}>12:17</span>                                              
                        {/* First textblock chat right*/}
                        <div style={{ width: '200px', height: '60px', flexShrink: 0, borderRadius: '20px 20px 0px 20px', border: 'none', fontSize: '0.85rem', backgroundColor: '#FFF0CF', position: 'absolute', left: '71.5%', bottom: '60%', padding: '10px 15px' }}>I'm contacting you for some lawn maintenance.</div>                   
                        <span style={{ fontSize: '0.60rem', marginLeft: '492px', position: 'absolute', top: '36.3%' }}>11:32</span>                                              
                        {/* Second textblock chat right*/}
                        <div style={{ width: '245px', height: '30px', flexShrink: 0, borderRadius: '20px 20px 0px 20px', border: 'none', fontSize: '0.85rem', backgroundColor: '#FFF0CF', position: 'absolute', left: '65.5%', bottom: '40%', padding: '5px 15px' }}> Mowing, edging and watering.</div>   
                        <span style={{ fontSize: '0.60rem', marginLeft: '492px', position: 'absolute', top: '56.7%' }}>11:56</span>                                                                      
                        {/* Image left, chat right*/}
                        <div style={{ width: '100px', height: '60px', flexShrink: 0, borderRadius: '15px', border: 'none', position: 'absolute', left: '69%', bottom: '27%' }}>
                            <img src="/images/MailboxTenantGrass.jpg" alt="Grass" style={{ width: '100%', height: '100%', borderRadius: '15px' }} />
                        </div>  
                        {/* Image right, chat right*/}
                        <div style={{ width: '100px', height: '60px', flexShrink: 0, borderRadius: '15px', border: 'none', position: 'absolute', left: '84%', bottom: '27%' }}>
                            <img src="/images/MailboxTenantEdging.jpg" alt="Grass" style={{ width: '100%', height: '100%', borderRadius: '15px' }} />                        
                        </div>                    
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', fontSize: '0.85rem', marginBottom: '-10px' }}>
                        <div className='flex'>
                            <div className="message-role" style={{ backgroundColor: '#FDB514', borderRadius: '20px', padding: '10px 10px 3px 10px', marginLeft: '20px' }}>
                            Repairman
                            <span style={{ fontSize: '0.70rem', marginLeft: '98px' }}>12:45 AM</span>
                            <div className="message-role" style={{ marginTop: '5px', marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>

                        <div className='flex'>
                            <div className="message-role" style={{ marginLeft: '30px', marginTop: '15px', marginBottom: '5px' }}>
                            Cleaner
                            <span style={{ fontSize: '0.70rem', marginLeft: '108px' }}>12:36 AM</span>
                            <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>

                        <div className='flex'>
                            <div className="message-role" style={{ marginLeft: '30px', marginTop: '15px', marginBottom: '5px' }}>
                            Tenant
                            <span style={{ fontSize: '0.70rem', marginLeft: '103px' }}>15:49 AM</span>
                            <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>

                        <div className='flex'>
                            <div className="message-role" style={{ marginLeft: '30px', marginTop: '15px', marginBottom: '5px' }}>
                            Painter
                            <span style={{ fontSize: '0.70rem', marginLeft: '112px' }}>11:37 AM</span>
                            <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>

                        <div className='flex'>
                            <div className="message-role" style={{ marginLeft: '30px', marginTop: '15px', marginBottom: '5px' }}>
                            Gardener
                            <span style={{  fontSize: '0.70rem', marginLeft: '83px' }}>10:26 AM</span>
                            <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>

                        <div className='flex'>
                            <div className="message-role" style={{ marginLeft: '30px', marginTop: '15px', marginBottom: '5px' }}>
                            Electrician
                            <span style={{ fontSize: '0.70rem', marginLeft: '93px' }}>14:52 AM</span>
                            <div className="message-role" style={{ marginBottom: '10px' }}>What’s the progress on that task?</div>
                        </div>
                        </div>
                        <div style={{ marginLeft: '430px', position: 'absolute', left: '35%', bottom: '17px', height: '40px', width: '150px' }}>
                            <button style={{ padding: '5px 10px', fontSize: '0.75rem', borderRadius: '20px', border: 'none', cursor: 'pointer', backgroundColor: '#FDB514', color: 'white' }}>Send</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default MailboxLandlord;