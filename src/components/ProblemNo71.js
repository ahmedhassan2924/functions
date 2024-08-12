import React, { useState } from 'react';

function ProblemNo71() {
    const [number, setNumber] = useState("");
    const [sign, setSign] = useState(null);

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value);
        setNumber(value);
    };

    const checkSign = () => {
        if (number > 0) {
            setSign("Positive");
        } else if (number < 0) {
            setSign("Negative");
        } else {
            setSign("Zero");
        }
    };

    return (
        <div>
            <h3>Check Number Sign</h3>
            <input
                type="number"
                value={number}
                onChange={handleInputChange}
                placeholder="Enter a number"
            />
            <button onClick={checkSign}>Check Sign</button>
            {(
                <div>
                    <h5>Sign of {number}:</h5>
                    <p>{sign}</p>
                </div>
            )}
        </div>
    );
}

export default ProblemNo71;
