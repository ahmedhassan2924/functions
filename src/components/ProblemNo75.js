import React, { useState } from 'react';

function PrimeCheck() {
    const [number, setNumber] = useState("");
    const [isPrime, setIsPrime] = useState("");

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value);
        setNumber(value);
    };

    const checkPrime = () => {
       
        for (let i = 2; i <= number/2; i++) {
            if (number % i === 0) {
                setIsPrime(false);
                return;
            }
        }
        setIsPrime(true);
    };
    

    const enter = () => {
        setNumber(number => number + 1);
        checkPrime();
    };

    return (
        <div>
            <h3>Check if Number is Prime</h3>
            <input
                type="number"
                value={number}
                onChange={handleInputChange}
                placeholder="Enter a number"
            />
            <button onClick={checkPrime}>Check Prime</button>
            <button onClick={enter}>Enter</button>
            { (
                <div>
                    <h5>{number} is {isPrime ? "prime" : "not prime"}</h5>
                </div>
            )}
        </div>
    );
}

export default PrimeCheck;