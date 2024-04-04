import React, { useState } from 'react';
import { Link } from '@inertiajs/react'; 
import '../../css/app.css';

const problems = [
  { id: 1, icon: '/images/temperature.png', alt: 'Heating' },
  { id: 2, icon: '/images/smart-house.png', alt: 'Electricity' },
  { id: 3, icon: '/images/wash-basin.png', alt: 'Plumbing' },
  { id: 4, icon: '/images/alert.png', alt: 'Alert' },
  { id: 5, icon: '/images/face-scan.png', alt: 'Security' },
  { id: 6, icon: '/images/smart-washing-machine.png', alt: 'Devices' },
  { id: 7, icon: '/images/solar-cell.png', alt: 'Solar panel' },
  { id: 8, icon: '/images/smarthome.png', alt: 'Network ' },
  { id: 9, icon: '/images/air-conditioner.png', alt: 'Cooling' },
  { id: 10, icon: '/images/garage.png', alt: 'Garage' },
  { id: 11, icon: '/images/camera.png', alt: 'Camera' },
  { id: 12, icon: '/images/toilet.png', alt: 'Leak' },
];

const ReportProblem = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const problemsPerPage = 4;
  const [problemDescription, setProblemDescription] = useState('');
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const indexOfLastProblem = (currentPage + 1) * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = problems.slice(indexOfFirstProblem, indexOfLastProblem);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => {
      if (indexOfLastProblem >= problems.length) {
        return 0;
      } else {
        return prevPage + 1;
      }
    });
  };
  
  const goToPrevPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage === 0) {
        return Math.ceil(problems.length / problemsPerPage) - 1;
      } else {
        return prevPage - 1;
      }
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setUploadedPhotos(prevPhotos => [...prevPhotos, file]);
    const plural = uploadedPhotos.length + 1 > 1 ? 's' : '';
    setProblemDescription(prevDescription => prevDescription ? `${prevDescription}\n${uploadedPhotos.length + 1} photo${plural} added` : `${uploadedPhotos.length + 1} photo${plural} added`);
  };

  const handleSend = () => {
    alert("Problem description sent!");
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center relative -mt-8 ml-10" style={{ backgroundColor: '#1e2127' }}>
      <div className="text-gray-200 p-10 rounded-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-8">Report a Problem</h1>

        {/* Carousel */}
        <div className="flex items-center justify-center mb-6">
          {/* Previous Button */}
          <button onClick={goToPrevPage} className="flex items-center justify-center p-0 rounded-full w-8 h-8 bg-yellow-600 text-white-600" style={{ backgroundColor: '#fdb514' }} aria-label="Previous problem">&lt;</button>

          {/* Carousel Items */}
          <div className="flex justify-center space-x-4 mx-6">
            {currentProblems.map((problem, index) => (
              <div key={problem.id} className="flex-shrink-0 w-28 h-28 m-2 rounded-lg bg-gray-700 flex flex-col items-center justify-center">
                <img src={problem.icon} alt={problem.alt} className="w-3/4 h-3/4 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <span className="text-sm text-white">{problem.alt}</span>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button onClick={goToNextPage} className="flex items-center justify-center p-0 rounded-full w-8 h-8 bg-yellow-600 text-white-600" style={{ backgroundColor: '#fdb514' }} aria-label="Next problem">&gt;</button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-12">
          <div className="mb-10 mx-8 px-6">
            <textarea id="problem" value={problemDescription} onChange={(e) => setProblemDescription(e.target.value)} rows="4" className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-gray-600" placeholder="Provide a detailed description of the problem..."></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center w-full mt-4">
            <div className="flex items-center mx-14">
              <label htmlFor="upload-photo" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center" style={{ backgroundColor: '#fdb514', cursor: 'pointer' }} aria-label="Add a photo">
                <span className="text-xl">+</span>
                <input id="upload-photo" type="file" className="hidden" onChange={handlePhotoUpload} />
              </label>
              <span className="text-white font-bold ml-4">Add a photo</span>
            </div>
            <div className="flex space-x-4 mx-14">
              <button type="submit" onClick={handleSend} className="bg-yellow-500 hover:bg-gray-500 text-white font-bold py-2 px-10 rounded-lg" style={{ backgroundColor: '#fdb514' }}>Send</button>
              <Link href="/followup" className="bg-yellow-500 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-lg" style={{ backgroundColor: '#fdb514' }}>Follow up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportProblem;
