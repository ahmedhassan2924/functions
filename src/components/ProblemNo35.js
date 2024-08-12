import React, { useState } from 'react';

function ProblemNo35() {
  const [subject1MarksInput, setSubject1MarksInput] = useState('');
  const [subject2MarksInput, setSubject2MarksInput] = useState('');
  const [gpaMarksInput,setGpaMarksInput] = useState('');
  const [status, setStatus] = useState('');

  const handleSubject1MarksChange = (e) => {
    setSubject1MarksInput(parseFloat(e.target.value));
  };

  const handleSubject2MarksChange = (e) => {
    setSubject2MarksInput(parseFloat(e.target.value));
  };
  const handleGpaMarksChange = (e) => {
    setGpaMarksInput(parseFloat(e.target.value));
  };
  const subject1Marks= parseFloat(subject1MarksInput);
  const subject2Marks= parseFloat(subject2MarksInput);
  const gpaMarks= parseFloat(gpaMarksInput);

  const determineStatus = () => {

    if (subject1Marks > 40 && subject2Marks > 40) {
      setStatus('Passed');
    } else if (gpaMarks>2) {
        console.log('here');
      setStatus('Passed');
    } else {
      setStatus('Failed');
    }
  };

  return (
    <div>
      <h3>35. Determine status of a student from marks of two of this subjects and his GPA
If either the marks for both of the subjects are greater than 40 or
GPA is greater than 2, he’s considered passed
</h3>
      <p>Enter marks for subject 1:</p>
      <input type="number" value={subject1Marks} onChange={handleSubject1MarksChange} />
      <p>Enter marks for subject 2:</p>
      <input type="number" value={subject2Marks} onChange={handleSubject2MarksChange} />
      <p>Enter GPA Marks</p>
      <input type="number" value={gpaMarks} onChange={handleGpaMarksChange} />
      <button onClick={determineStatus}>Check Status</button>
      {<p>Status: {status}</p>}
    </div>
  );
}

export default ProblemNo35;