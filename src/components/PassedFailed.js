import React, { useState } from 'react';

function PassedFailed() {
  const [marks, setMarks] = useState('');
  const [result, setResult] = useState('');

  const handleMarksChange = (e) => {
    setMarks(parseFloat(e.target.value));
  };

  const FinalResult = () => {
    if (marks >= 50) {
      setResult('passed');
    } else {
      setResult('failed');
    }
  };

  return (
    <div>
        <h3>Determine whether a student is ‘passed’ or ‘failed’ from his marks</h3>
      <input type="number" value={marks} onChange={handleMarksChange} />
      <button onClick={FinalResult}>Check Result</button>
      {result && <p> Required marks(50)The student has {result}.</p>}
    </div>
  );
}

export default PassedFailed;
