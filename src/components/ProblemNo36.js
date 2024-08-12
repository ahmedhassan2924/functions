import React,{useState} from 'react'

function ProblemNo36() {
    const [studentMarksInput,setStudentMarksInput] = useState('');
    const [gpaMarksInput,setGpaMarksInput] = useState('');
    const [status,setStatus] = useState('');
    const handleSudentMarkChange = (e) => {
        setStudentMarksInput(parseFloat(e.target.value));
      };
      const handleGpaMarksChange = (e) => {
        setGpaMarksInput(parseFloat(e.target.value));
      };

      const studentMarks= parseFloat(studentMarksInput);
  const gpaMarks= parseFloat(gpaMarksInput);

  const determineStatus = () => {

    if (studentMarks>80 && studentMarks<90) {
      setStatus('Grade A');
    } else if (gpaMarks>3.7 && gpaMarks<3.8) {
        console.log('here');
      setStatus('Grade A');
    } else {
      setStatus('Failed');
    }
  };

  return (
    <div>
      <h3>36. Determine whether a student has got ‘Grade A’ from his total marks and his GPA
If marks are greater than 80 and less than 90 OR GPA is greater than
3.7 and less than 3.8, he’ll be graded ‘A’
</h3>
      <p>Enter marks for subject 1:</p>
      <input type="number" value={studentMarks} onChange={handleSudentMarkChange} />
     
      <p>Enter GPA Marks</p>
      <input type="number" value={gpaMarks} onChange={handleGpaMarksChange} />
      <button onClick={determineStatus}>Check Status</button>
      {<p>Status: {status}</p>}
    </div>
  );
}

export default ProblemNo36;