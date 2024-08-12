import React, { useState } from 'react';

function ProblemNo37() {
  const [price, setPrice] = useState('');
  const [engineCapacity, setEngineCapacity] = useState('');
  const [carType, setCarType] = useState('');

  const handlePriceChange = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  const handleEngineCapacityChange = (e) => {
    setEngineCapacity(parseFloat(e.target.value));
  };

  const determineCarType = () => {
    if ((price >= 1 && price <= 2) || (engineCapacity >= 1000 && engineCapacity <= 1500)) {
      setCarType('Mid-size');
    } else {
      setCarType('Not mid-size');
    }
  };

  return (
    <div>
      <h3>37. Determine whether a car is of mid-size type or not from its price (in millions) and engine capacity (in
cc)
If price is between 1 million and 2 million or if engine capacity is
between 1000 and 1500, a car is considered to be a mid-size car</h3>
      <p>Enter price (in millions):</p>
      <input type="number" value={price} onChange={handlePriceChange} />
      <p>Enter engine capacity (in cc):</p>
      <input type="number" value={engineCapacity} onChange={handleEngineCapacityChange} />
      <button onClick={determineCarType}>Check Car Type</button>
      {carType && <p>Car Type: {carType}</p>}
    </div>
  );
}

export default ProblemNo37;
