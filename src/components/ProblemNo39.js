import React, { useState } from 'react';

function ProblemNo39() {
  const [salary, setSalary] = useState('');
  const [payGrade, setPayGrade] = useState('');
  const [employeeType, setEmployeeType] = useState('');

  const handleSalaryChange = (e) => {
    setSalary(parseFloat(e.target.value));
  };

  const handlePayGradeChange = (e) => {
    setPayGrade(parseFloat(e.target.value));
  };

  const determineEmployeeType = () => {
    if ((salary >= 50000 && salary <= 80000) || (payGrade >= 19 && payGrade <= 22)) {
      setEmployeeType('Manager');
    } else {
      setEmployeeType('Not a manager');
    }
  };

  return (
    <div>
      <h3>39. Determine whether an employee is Manager or not, from given salary and pay grade.
An employee is considered a “Manager”, if his salary is between
50,000 to 80,000 or his pay grade is from 19 to 22</h3>
      <p>Enter salary:</p>
      <input type="number" value={salary} onChange={handleSalaryChange} />
      <p>Enter pay grade:</p>
      <input type="number" value={payGrade} onChange={handlePayGradeChange} />
      <button onClick={determineEmployeeType}>Check Employee Type</button>
      {employeeType && <p>Employee Type: {employeeType}</p>}
    </div>
  );
}

export default ProblemNo39;
