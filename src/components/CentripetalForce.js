import React, { useState } from 'react';

function CentripetalForce() {
  const [mass, setMass] = useState('');
  const [velocity, setVelocity] = useState('');
  const [radius, setRadius] = useState('');
  const [force, setForce] = useState('');

  const handleChange = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  const calculateForce = () => {
    console.log(mass,velocity,radius);
    console.log(isNaN(mass),isNaN(velocity),isNaN(radius));
    if (mass && velocity && radius) {
        console.log('if working');
      const calculatedForce = (parseFloat(mass) * parseFloat(velocity) ** 2) / parseFloat(radius);
      setForce(calculatedForce.toFixed(2)); 
    } else {
      setForce('Invalid input. ');
    }
  };

  return (
    <div>
        <h3>10. Find the value of F (centripetal force) for given values of mass ‘m’, velocity ‘v’ and radius ‘r’ (where F= mv2 / r)
</h3>
      <div>
        <label>Mass (kg):</label>
        <input
          type="text"
          value={mass}
          onChange={(e) => handleChange(e, setMass)}
          
        />
      </div>
      <div>
        <label>Velocity (m/s):</label>
        <input
          type="text"
          value={velocity}
          onChange={(e) => handleChange(e, setVelocity)}
          
        />
      </div>
      <div>
        <label>Radius (m):</label>
        <input
          type="text"
          value={radius}
          onChange={(e) => handleChange(e, setRadius)}
         
        />
      </div>
      <button onClick={calculateForce}>Calculate Force</button>
      <div>
        <p>Centripetal Force: {force} </p>
      </div>
    </div>
  );
}

export default CentripetalForce;
