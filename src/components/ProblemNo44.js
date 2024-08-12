import React, { useState } from "react";

function ProblemNo44() {
  const [ConversationType, setconversationType] = useState("");
  const [temperature, setTemperature] = useState("");
  const [result, setResult] = useState("");
  const Basic = [
    { ConversationType: 1, discription: "Celsius" },
    { ConversationType: 2, discription: "Fahrenheit" },
    { ConversationType: 3, discription: "Kelvin" },
    { ConversationType: 4, discription: "Rankie" },
  ];
  const handleChange = (e) => {
    setconversationType(e.target.value);
  };
  const handleChange1 = (e) => {
    setTemperature(e.target.value);
  };
  const Calculate = () => {
    if (ConversationType == "" || temperature == "") {
      alert("please enter info ");
      return;
    } else {
      if (ConversationType == 1) {
        const formula = 32 + parseInt(temperature) * 1.8;
        setResult(formula+" C ");
      } else if (ConversationType == 2) {
        const formula = parseInt(temperature) - 32 / 1.8;
        setResult(formula+"F");
      } else if (ConversationType == 3) {
        const formula = 273.15 + parseInt(temperature);
        setResult(formula+"K");
      } else if (ConversationType == 4) {
        const formula = (parseInt(temperature) * 5) / 9;
        setResult(formula+"R");
      } else if (ConversationType > 4) {
        setResult("invalid conversion type");
      }
    }
  };

  return (
    <div>
        <h3>Find temperate in Celsius or Fahrenheit from given temperature and conversion type</h3>
      {Basic.map((item, index) => (
        <li key={index}>
          {item.ConversationType} - Temperature in : {item.discription}
        </li>
      ))}
      <input
        type="number"
        value={ConversationType}
        onChange={handleChange}
        placeholder="Enter conversationType"
      />
      <input
        type="number"
        value={temperature}
        onChange={handleChange1}
        placeholder="Enter Temperature"
      />
      <button onClick={Calculate}>Temperature in</button>
      <p>Ans.{result} </p>
    </div>
  );
}

export default ProblemNo44;
