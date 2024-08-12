import React, { useState } from "react";

function Header() {
  const [number, setNumber] = useState("");
  const [square, setSquare] = useState(null);
  const [cube, setCube] = useState(null);

  const handleChange = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  const calculateSquare = () => {
    console.log(number, square);
    if (number) {
      const squareValue = parseInt(number) ** 2;
      setSquare(squareValue);
    } else {
      setSquare("Invalid");
    }
  };

  const calculateCube = () => {
    if (number) {
      const cubeValue = parseInt(number ** 3);
      setCube(cubeValue);
    } else {
      setCube("invalid");
    }
  };

  return (
    <div>
      {" "}
      <h3>1.Find square/cube of a function</h3>
      
      <input
        type="number"
        value={number}
        onChange={(e) => handleChange(e, setNumber)}
      ></input>
      <button onClick={calculateSquare}>Find Square</button>
      {square !== null && <input type="text" value={square} />}
      <button onClick={calculateCube}>Find cube</button>
      {cube !== null && <input type="text" value={cube} />}
    </div>
  );
}

export default Header;
