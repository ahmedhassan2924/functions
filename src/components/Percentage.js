import React, { useState } from 'react';

function MarksPercentageCalculator() {
  const [marksObtained, setMarksObtained] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [percentage, setPercentage] = useState('');

  const calculatePercentage = () => {
    const obtained = parseFloat(marksObtained);
    const total = parseFloat(totalMarks);
    const percent = (obtained / total) * 100;
    setPercentage(percent);
  };

  return (
    <div>
        <h3> (7)Calculate marks percentage ( marks percentage = marks obtained / total * 100 )</h3>
     
      <label>
        Marks Obtained:
        <input
          type="number"
          value={marksObtained}
          onChange={(e) => setMarksObtained(e.target.value)}
        />
      </label>
      <label>
        Total Marks:
        <input
          type="number"
          value={totalMarks}
          onChange={(e) => setTotalMarks(e.target.value)}
        />
      </label>
      <button onClick={calculatePercentage}>Calculate Percentage</button>
      {percentage !== '' && (
        <input type='number'
        value={percentage}/>
      )}
    </div>
  );
}

export default MarksPercentageCalculator;

