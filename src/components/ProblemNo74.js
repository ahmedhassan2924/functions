import React, { useState } from 'react';

function EvenPrimes() {
    const [minNumber, setMinNumber] = useState("");
    const [maxNumber, setMaxNumber] = useState("");
    const [evenPrimes, setEvenPrimes] = useState([]);

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

    const generatevenPrimes = () => {
        const primes = [];
        const min = minNumber 
        const max = maxNumber 

        for (let i = min; i <= max; i++) {
            if (i % 2 == 0 && isPrime(i)) {
                primes.push(i);
            }
        }
        setEvenPrimes(primes);
    };

    return (
        <div>
            <h3>Find Even Prime Numbers</h3>
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
            <button onClick={generatevenPrimes}>Generate Even Primes</button>
            {evenPrimes.length > 0 && (
                <div>
                    <h5>Even Prime Numbers:</h5>
                    {evenPrimes.map((prime, index) => (
                        <p key={index}>{prime}</p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default EvenPrimes;
