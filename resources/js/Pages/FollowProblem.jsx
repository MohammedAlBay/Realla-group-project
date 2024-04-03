import React, { useState } from 'react';
import ReportProblem from './ReportProblem';
import FollowUp from './FollowUp'; 
const FollowProblem = () => {
  const [showFollowUp, setShowFollowUp] = useState(false);

  return (
    <div>
      {!showFollowUp ? (
        <ReportProblem onFollowUpClick={() => setShowFollowUp(true)} />
      ) : (
        <FollowUp onBackClick={() => setShowFollowUp(false)} />
      )}
    </div>
  );
};

export default FollowProblem;
