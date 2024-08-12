import React, { useState } from 'react';

function ProblemNo34() {
  const [subject1Marks, setSubject1Marks] = useState('');
  const [subject2Marks, setSubject2Marks] = useState('');
  const [status, setStatus] = useState('');

  const handleSubject1MarksChange = (e) => {
    setSubject1Marks(parseFloat(e.target.value));
  };

  const handleSubject2MarksChange = (e) => {
    setSubject2Marks(parseFloat(e.target.value));
  };

  const determineStatus = () => {
    if (subject1Marks > 40 && subject2Marks > 40) {
      setStatus('Passed');
    } else if (subject1Marks > 40 || subject2Marks > 40) {
      setStatus('Passed');
    } else {
      setStatus('Failed');
    }
  };

  return (
    <div>
      <h3>34. Determine status of a student from marks of two of his subjects for following:
a. If marks for both the subjects are greater than 40, he’s passed
b. If marks for either of the subjects are greater than 40, he’s passed
</h3>
      <p>Enter marks for subject 1:</p>
      <input type="number" value={subject1Marks} onChange={handleSubject1MarksChange} />
      <p>Enter marks for subject 2:</p>
      <input type="number" value={subject2Marks} onChange={handleSubject2MarksChange} />
      <button onClick={determineStatus}>Check Status</button>
      {<p>Status: {status}</p>}
    </div>
  );
}

export default ProblemNo34;
