import React, { useState } from 'react';

function ProblemNo38() {
  const [price, setPrice] = useState('');
  const [displayWidth, setDisplayWidth] = useState('');
  const [phoneType, setPhoneType] = useState('');

  const handlePriceChange = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  const handleDisplayWidthChange = (e) => {
    setDisplayWidth(parseFloat(e.target.value));
  };

  const determinePhoneType = () => {
    if ((price >= 20000 && price <= 30000) || (displayWidth >= 5 && displayWidth <= 8)) {
      setPhoneType('Smartphone');
    } else {
      setPhoneType('Not smartphone');
    }
  };

  return (
    <div>
      <h3>38. Determine whether a cell-phone is a “smart phone” or not, from its price and display width
A cell-phone is considered a “smart-phone”, if its price is from
20,000 to 30,000 or its display width is from 5 to 8 inches</h3>
      <p>Enter price:</p>
      <input type="number" value={price} onChange={handlePriceChange} />
      <p>Enter display width (in inches):</p>
      <input type="number" value={displayWidth} onChange={handleDisplayWidthChange} />
      <button onClick={determinePhoneType}>Check Phone Type</button>
      {phoneType && <p>Phone Type: {phoneType}</p>}
    </div>
  );
}

export default ProblemNo38;
