import React, { useState } from 'react';


const ReportProblem = () => {
  const [problem, setProblem] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const icons = [
    // icon data
    { id: 1, src: './images/DALL·E 2024-03-26 01.21.15.webp', alt: 'Technical Problem' },
    { id: 2, src: './images/DALL·E 2024-03-26 01.21.33.webp', alt: 'Plumbing Problem' },
    { id: 3, src: './images/DALL·E 2024-03-26 01.22.14.webp', alt: 'Electrical Problem' },
 ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % icons.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + icons.length) % icons.length);
  };

  const submitProblem = (e) => {
    e.preventDefault();
    Inertia.post('/report-problem', { problem });
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-yellow-500 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Report a Problem</h2>
        
        {/* Carousel */}
        <div className="relative flex items-center justify-center mb-6">
          <button onClick={handlePrev} className="absolute left-0 text-gray-700 z-10">Prev</button>
          <div className="overflow-hidden">
            <div className="whitespace-nowrap transition-transform duration-300"
                 style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {icons.map((icon) => (
                <img key={icon.id} src={icon.src} alt={icon.alt} className="inline-block w-full h-24" />
              ))}
            </div>
          </div>
          <button onClick={handleNext} className="absolute right-0 text-gray-700 z-10">Next</button>
        </div>
        
        {/* Form */}
        <form onSubmit={submitProblem} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="problem" className="block text-gray-700 font-bold mb-2">Describe the issue:</label>
            <textarea
              id="problem"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              rows="4"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Provide a detailed description of the problem."
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-200">
              Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportProblem;
