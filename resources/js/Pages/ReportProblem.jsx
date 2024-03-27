import React, { useState } from 'react';
import '../../css/app.css'

const problems = [
    
    { id: 1, icon: '', label: 'Heating Issue' },
    { id: 2, icon: '', label: 'Electricity Issue' },
    { id: 3, icon: '', label: 'Plumbing Issue' },
    { id: 4, icon: '', label: 'Leaks Issue' },
    { id: 5, icon: '', label: 'Security Issue' },
    { id: 6, icon: '', label: 'Network Issue' },
    { id: 7, icon: '', label: 'Appliances Issue' },
    { id: 8, icon: '', label: 'Pests Issue' },
  ];
  
  const ReportProblem = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [problemDescription, setProblemDescription] = useState('');
  
    const nextProblem = () => {
      setActiveIndex((index) => (index + 1) % problems.length);
    };
  
    const prevProblem = () => {
      setActiveIndex((index) => (index === 0 ? problems.length - 1 : index - 1));
    };
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle the submit action
    };
  
    return (
      <div className="min-h-screen bg-gray-800 p-6 flex flex-col items-center justify-center">
        <div className="bg-gray-900 text-gray-200 p-6 rounded-lg w-full max-w-4xl">
          <h1 className="text-2xl font-bold text-center mb-6">Report a Problem</h1>
  
          <div className="flex items-center justify-between">
            <button
              onClick={prevProblem}
              className="p-2 rounded-full bg-gray-700 text-gray-300"
              aria-label="Previous problem"
            >
              &lt;
            </button>
  
            {/* Carousel */}
            <div className="flex overflow-x-auto space-x-4">
              {problems.map((problem, index) => (
                <div
                  key={problem.id}
                  className={`p-4 rounded-full ${index === activeIndex ? 'bg-yellow-500' : 'bg-gray-700'}`}
                >
                  <img src={problem.src} alt={problem.alt} className="w-16 h-16 object-cover" />
                </div>
              ))}
            </div>
  
            <button
              onClick={nextProblem}
              className="p-2 rounded-full bg-gray-700 text-gray-300"
              aria-label="Next problem"
            >
              &gt;
            </button>
          </div>
  
          {/* Input form */}
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <textarea
                id="problem"
                value={problemDescription}
                onChange={(e) => setProblemDescription(e.target.value)}
                rows="4"
                className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-gray-200"
                placeholder="Provide a detailed description of the problem."
              ></textarea>
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                Send
              </button>
              <button
              type="button"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Follow up Problems
            </button>
            <button
              type="button"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Choose a photo
            </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default ReportProblem;