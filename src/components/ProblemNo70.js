import React, { useState } from 'react';

function ProblemNo70 () {
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [sum, setSum] = useState(null);

    const handleInputChange = (event, setter) => {
        const value = parseInt(event.target.value);
        setter(value);
    };

    const calculateSum = () => {
        const result = number1 + number2;
        setSum(result);
    };

    return (
        <div>
            <h3>Find Sum of Two Numbers</h3>
            <input
                type="number"
                value={number1}
                onChange={(event) => handleInputChange(event, setNumber1)}
                placeholder="Enter first number"
            />
            <input
                type="number"
                value={number2}
                onChange={(event) => handleInputChange(event, setNumber2)}
                placeholder="Enter second number"
            />
            <button onClick={calculateSum}>Calculate Sum</button>
            { (
                <div>
                    <h5>Sum of {number1} and {number2}:</h5>
                    <p>{sum}</p>
                </div>
            )}
        </div>
    );
}

export default ProblemNo70;
