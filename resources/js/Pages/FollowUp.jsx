import React from 'react';
import '../../css/app.css';

 {/* Timeline */}
const timelineData = [
  { id: 1, text: 'The problem report sent', date: '01.04.24', time: '8:00 AM' },
  { id: 2, text: 'The landlord contacted a repairman', date: '02.04.24', time: '9:15 AM' },
  { id: 3, text: 'The repairman made an appointment', date: '02.04.24', time: '1:00 PM' },
  { id: 4, text: 'The repairman is on the way', date: '03.04.24', time: '2:30 PM', current: true },
];

const FollowUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen relative -mt-14 ml-10">
      <div className="w-full max-w-4xl rounded-lg p-24" style={{ minHeight: '500px' }}>
        <h2 className="text-2xl font-bold text-center text-white mb-32">Follow The Reported Problem</h2>
        <div className="relative" style={{ top: '-40px' }}>
          <div className="absolute w-full h-1" style={{ top: '50%', backgroundColor: '#292f36' }} />
          <div className="flex justify-between items-center">
            {timelineData.map((item, index) => (
             <div key={item.id} className="relative flex flex-col items-center">
             <div className={`w-10 h-10 rounded-full shadow-md ${item.current ? 'bg-yellow-500' : 'bg-white border-4 border-#292f36'}`} />
             
             <div className="absolute mt-16 text-center bg-white p-2 rounded shadow-lg z-10 transition duration-200 transform hover:scale-105 border border-solid" style={{ minWidth: '180px', minHeight: '80px', padding: '8px', borderColor: '#fdb514' }}>
               
               <p className="font-semibold text-gray-700 text-xs leading-tight">{item.text}</p>
               <time className="text-xs text-gray-500">{item.date}</time>&nbsp;
               <span className="text-xs text-gray-500">{item.time}</span>
             </div>
             {index < timelineData.length - 1 && (
               <div className="absolute top-1/2 -right-1/2 w-1/2 h-1" style={{ backgroundColor: '#292f36' }} />
             )}
           </div>
           
           
            ))}
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex justify-end mt-32 space-x-8">
          
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-14 rounded-lg" style={{ backgroundColor: '#fdb514' }} onClick={() => window.history.back()}>Back</button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-8 rounded-lg" style={{ backgroundColor: '#fdb514' }} onClick={() => { /* Handle see details action */ }}>See Details</button>
        </div>
      </div>
    </div>
  );
};

export default FollowUp;
