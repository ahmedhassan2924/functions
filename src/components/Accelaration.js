import React, { useState } from 'react';

function Acceleration() {
  const [initialVelocity, setInitialVelocity] = useState('');
  const [finalVelocity, setFinalVelocity] = useState('');
  const [time, setTime] = useState('');
  const [acceleration, setAcceleration] = useState('');

  const calculateAcceleration = () => {
    const initialVel = parseFloat(initialVelocity);
    const finalVel = parseFloat(finalVelocity);
    const t = parseFloat(time);
    const changeInVelocity = finalVel - initialVel;
    const accel = changeInVelocity / t;
    setAcceleration(accel);
  };

  return (
    <div>
        <h3>(5)Find acceleration from given velocity and time</h3>
      
      <label>
        Initial Velocity :
        <input
          type="number"
          value={initialVelocity}
          onChange={(e) => setInitialVelocity(e.target.value)}
        />
      </label>
      <label>
        Final Velocity :
        <input
          type="number"
          value={finalVelocity}
          onChange={(e) => setFinalVelocity(e.target.value)}
        />
      </label>
      <label>
        Time :
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <button onClick={calculateAcceleration}>Calculate Acceleration</button>
      <input
      type='number'
      value={acceleration}/>
    </div>
  );
}

export default Acceleration;

