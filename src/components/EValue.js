import React, { useState } from "react";

function EValue() {
  const [mass, setMass] = useState("");
  const [velocity, setVelocity] = useState("");
  const [gravitationalAcceleration, setGravitationalAcceleration] = useState("");
  const [height, setHeight] = useState("");
  const [totalEnergy, setTotalEnergy] = useState(null);

  const handleChange = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  const calculateTotalEnergy = () => {
    if (mass && velocity && gravitationalAcceleration && height) {
      const E = (parseFloat(mass) * parseFloat(velocity) ** 2) / 2 + parseFloat(mass) * parseFloat(gravitationalAcceleration) * parseFloat(height);
      setTotalEnergy(E);
    } else {
      setTotalEnergy("Invalid");
    }
  };

  return (
    <div>
      <h3>14.Find the value of E (total energy) for given values of ‘m’, ‘v’, ‘g’, ‘h’
(where E = mv2 / 2 + mgh)</h3>
      <div>
        <label htmlFor="mass">Enter value for mass (m): </label>
        <input
          type="number"
          id="mass"
          value={mass}
          onChange={(e) => handleChange(e, setMass)}
        />
      </div>
      <div>
        <label htmlFor="velocity">Enter value for velocity (v): </label>
        <input
          type="number"
          id="velocity"
          value={velocity}
          onChange={(e) => handleChange(e, setVelocity)}
        />
      </div>
      <div>
        <label htmlFor="gravitationalAcceleration">Enter value for gravitational acceleration (g): </label>
        <input
          type="number"
          id="gravitationalAcceleration"
          value={gravitationalAcceleration}
          onChange={(e) => handleChange(e, setGravitationalAcceleration)}
        />
      </div>
      <div>
        <label htmlFor="height">Enter value for height (h): </label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => handleChange(e, setHeight)}
        />
      </div>
      <button onClick={calculateTotalEnergy}>Calculate Total Energy</button>
      {totalEnergy !== null && <p>Total Energy (E): {totalEnergy}</p>}
    </div>
  );
}

export default EValue;
