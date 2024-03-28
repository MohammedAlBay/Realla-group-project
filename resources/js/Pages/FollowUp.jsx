import React from 'react';
import '../../css/app.css';


const timelineData = [
  { id: 1, text: 'Problem report sent', date: '28.03.24', time: '8:00 AM' },
  { id: 2, text: 'The landlord contacted a repairman', date: '01.04.24', time: '9:15 AM' },
  { id: 3, text: 'The repairman made an appointment', date: '03.04.24', time: '1:00 PM' },
  { id: 4, text: 'The repairman is on the way', date: '04.04.24', time: '2:30 PM', current: true },
];

const FollowUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen" style={{ backgroundColor: '#292f36' }}>
      <div className="w-full max-w-6xl  rounded-lg p-28 my-10" style={{ backgroundColor: '#444D57', minHeight: '500px' }}>
        <h2 className="text-2xl font-bold text-center text-white mb-32">Follow up of the reported problem:</h2>
        <div className="relative">
          
          {/* Timeline */}
          <div className="absolute w-full h-1 bg-black" style={{ top: '50%' }} />

          <div className="flex justify-between items-center">
            
            {/* Timeline items */}
            {timelineData.map((item, index) => (
              <div key={item.id} className="relative flex flex-col items-center">
                
                <div className={`w-10 h-10 rounded-full shadow-md ${item.current ? 'bg-yellow-500' : 'bg-white border-4 border-black'}`} />
                {/* Message boxes */}
                <div className="absolute -mt-20 text-center bg-white p-3 rounded shadow-lg z-10" style={{ minWidth: '160px' }}>
                  <p className="font-semibold text-gray-800">{item.text}</p>
                  <time className="text-xs">{item.date}</time>
                  <span className="text-xs text-gray-500">{item.time}</span>
                </div>
               
                {index < timelineData.length - 1 && (
                  <div className="absolute top-1/2 -right-1/2 w-1/2 h-1 bg-black" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUp;






