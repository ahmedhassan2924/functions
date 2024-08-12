import React, { useState } from 'react';

function AreaRectangle() {
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [area, setArea] = useState('');

  const calculateArea = () => {
    const b = parseFloat(base);
    const h = parseFloat(height);
    const rectangleArea = b * h;
    setArea(rectangleArea);
  };

  return (
    <div>
        <h3>(6)Calculate area of a rectangle ( area = base * height )</h3>
      
      <label>
        Base :
        <input
          type="number"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        />
      </label>
      <label>
        Height :
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <button onClick={calculateArea}>Calculate Area</button>
      {area !== '' && (
        <input type='number'
        value={area}/>
      )}
    </div>
  );
}

export default AreaRectangle;

