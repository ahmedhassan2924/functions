import React, { useState } from 'react';

function OddPrimes() {
    const [minNumber, setMinNumber] = useState("");
    const [maxNumber, setMaxNumber] = useState("");
    const [oddPrimes, setOddPrimes] = useState([]);

    const handleInputChange = (event, setter) => {
        const value = parseInt(event.target.value);
        setter(value);
    };

    const isPrime = (num) => {
       
        for (let i = 2; i <= num/2; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    const generateOddPrimes = () => {
        const primes = [];
        const min = minNumber 
        const max = maxNumber 

        for (let i = min; i <= max; i++) {
            if (i % 2 !== 0 && isPrime(i)) {
                primes.push(i);
            }
        }
        setOddPrimes(primes);
    };

    return (
        <div>
            <h3>Find Odd Prime Numbers</h3>
            <input
                type="number"
                value={minNumber}
                onChange={(event) => handleInputChange(event, setMinNumber)}
                placeholder="Minimum number (optional)"
            />
            <input
                type="number"
                value={maxNumber}
                onChange={(event) => handleInputChange(event, setMaxNumber)}
                placeholder=" number"
            />
            <button onClick={generateOddPrimes}>Generate Odd Primes</button>
            {oddPrimes.length > 0 && (
                <div>
                    <h5>Odd Prime Numbers:</h5>
                    {oddPrimes.map((prime, index) => (
                        <p key={index}>{prime}</p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default OddPrimes;
