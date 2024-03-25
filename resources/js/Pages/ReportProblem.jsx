import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const ReportProblem = () => {
  const [problem, setProblem] = React.useState('');

  const submitProblem = (e) => {
    e.preventDefault();
    Inertia.post('/report-problem', { problem });
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-orange-300 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Report a Problem</h2>
        
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
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-200">
              Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportProblem;
