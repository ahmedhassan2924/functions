import React, { useState } from "react";

function ProblemNo43() {
  const [paytype, setPayType] = useState("");
  const [salary, setSalary] = useState("");
  const [basepay, setBasePay] = useState("");
  const Basic = [
    { PayType: 1, discription: "Weekly", dividingFactor: 52 },
    { PayType: 2, discription: "Bi-Monthly", dividingFactor: 24 },
    { PayType: 3, discription: "Monthly", dividingFactor: 12 },
  ];
  const handleChange = (e) => {
    setPayType(e.target.value);
  };
  const handleChange1 = (e) => {
    setSalary(e.target.value);
  };
  const Calculate = () => {
    if (paytype == "" || salary == "") {
        alert("please enter info ");
      return;
    }

    
      const selectedObject = Basic.find((item) => {
        return item.PayType == parseInt(paytype);
      });
      console.log("selectedObject",selectedObject);
      if (selectedObject){
        
      const result = parseInt(salary) / selectedObject.dividingFactor;

      setBasePay(result)}
      else {
        setBasePay("Invalid PayType");
      };
    
  };

  return (
    <div>
      <h3>
        47. Calculate base pay from given annual salary and pay type Base pay =
        salary / Dividing Factor
      </h3>
      {Basic.map((item, index) => (
        <li key={index}>
          
          {item.PayType} - PAY TYPE : {item.discription}
        </li>
      ))}

      <input
        type="number"
        value={paytype}
        onChange={handleChange}
        placeholder="Enter paytype"
      />
      <input
        type="number"
        value={salary}
        onChange={handleChange1}
        placeholder="Enter Salary"
      />
      <button onClick={Calculate}>BasePay</button>
      <p>Ans.{basepay} </p>
    </div>
  );
}

export default ProblemNo43;
