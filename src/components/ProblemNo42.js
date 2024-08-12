import React, { useState } from 'react'

function ProblemNo42() {
    const[dayNumber,setdayNumber]= useState("")
    const [ result, setResult ] = useState("");

    const Week= [
        {name:"monday" , day:1},
        {name:"tuesday", day:2},
        {name:"wednesday", day:3},
        {name:"thursday", day:4},
        {name:"friday", day:5},
        {name:"saturday",day:6},
        {name:"sunday",day:7}
    ]
    const handleChange = (e)=>{
        setdayNumber (e.target.value);
    }
    const findDay = () => {
        const response = Week.find((item)=>{
          return  item.day==parseInt(dayNumber)
        }
    )
    if(response){
        setResult(response.name)
    }else{
        setResult('not found')
    }

    
    }
 
    
  return (
    <div>
        <h3>45. For given day number of the week, display the corresponding day</h3>
        {Week.map((item,index)=>(
            <li key={index}> {item.name}- Day number: {item.day}  </li>
        )
    )}
    <input type="number" value={dayNumber} onChange={handleChange} />
    <button onClick={findDay}>Find Name</button>
      <p>Ans.{result} </p>
      
    </div>
  )
}

export default ProblemNo42
