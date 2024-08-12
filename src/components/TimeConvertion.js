import React, { useState } from 'react';

function TimeConversion() {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const convertTime = () => {
    const hoursValue = parseFloat(hours);
   

    const totalMinutes = hoursValue * 60;
    const totalSeconds = totalMinutes * 60;
console.log(totalMinutes,totalSeconds);
  

    setMinutes(totalMinutes);
    setSeconds(totalSeconds);
  };

  return (
    <div>
        <h3>9 Find ‘no. of minutes’ and ‘no. of seconds’ from given ‘no. of hours</h3>
     
      <label>
        Hours:
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
      </label>
      <button onClick={convertTime}>Convert</button>
      <label> Hours<input type='number'
    value={hours}/></label>
    <label>minutes <input type='number'
    value={minutes}/></label>
    <label> seconds<input type='number'
    value={seconds}/></label>
    
   
    
    </div>
  );
}

export default TimeConversion;


