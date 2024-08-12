import React,{useState} from 'react'

function Velocity() {
    const[distance,SetDistance]=useState('');
    const[time,SetTime]=useState('');
    const[velocity,SetVelocity]=useState('');

    
    const calculateVelocity = () => {
      const dist = parseFloat(distance);
      const t = parseFloat(time);
      const vel = dist / t;
      SetVelocity(vel);
    }
  return (
    <div>
      <h3>(4)Find velocity from given distance and time</h3>
      
       <label>
        Distance:
        <input
          type="number"
          value={distance}
          onChange={(e) => SetDistance(e.target.value)}
        />
      </label>
      <label>
        Time :
        <input
          type="number"
          value={time}
          onChange={(e) => SetTime(e.target.value)}
        />
      </label>
      <button onClick={calculateVelocity}>Calculate Velocity</button>
      <input
          type="number"
          value={velocity} 
        />
    </div>
  );
 
  
}


export default Velocity
