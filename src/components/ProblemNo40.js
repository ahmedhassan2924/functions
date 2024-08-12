import React, { useState } from "react";

function ProblemNo40() {
  const [rollNumber, setrollNumber] = useState("");
  const [ result, setResult ] = useState("");

  const students = [
    { name: "Alice", rollNumber: 101 },
    { name: "Bob", rollNumber: 102 },
    { name: "Charlie", rollNumber: 103 },
    { name: "David", rollNumber: 104 },
    { name: "Eve", rollNumber: 105 },
  ];

  const handleChange = (e) => {
    setrollNumber(e.target.value);
  };
  const findRoll = () => {
    const response = students.find((student) => {
      return student.rollNumber == parseInt(rollNumber);
    });
    console.log("response", response);
    if(response){
        setResult(response.name)
    }else{
        setResult('not found')
    }

  };

  return (
    <>
      <div>
        <h3>42. For given roll number of a student, display his name</h3>

        {students.map((student, index) => (
          <li key={index}>
            {student.name} - Roll Number: {student.rollNumber}
          </li>
        ))}
      </div>
      <input type="number" value={rollNumber} onChange={handleChange} />
      <button onClick={findRoll}>Find Name</button>
      <p>Ans.{result} </p>
    </>
  );
}

export default ProblemNo40;
