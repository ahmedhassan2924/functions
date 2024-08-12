import React, { useState } from 'react';

function Square() {
    const [number, setNumber] = useState("");
    const [square, setSquare] = useState(null);

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value);
        setNumber(value);
    };

    const calculateSquare = () => {
        const result = number * number;
        setSquare(result);
    };

    return (
        <div>
            <h3>Find Square of a Number</h3>
            <input
                type="number"
                value={number}
                onChange={handleInputChange}
                placeholder="Enter a number"
            />
            <button onClick={calculateSquare}>Calculate Square</button>
            { (
                <div>
                    <h5>Square of {number}:</h5>
                    <p>{square}</p>
                </div>
            )}
        </div>
    );
}

export default Square;
