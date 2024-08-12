import React, { useState } from 'react';

function ProblemNo68() {
    const [numberInput, setNumberInput] = useState("");
    const [primeNumbers, setPrimeNumbers] = useState([]);

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value);
        setNumberInput(value);
    };

    const isPrime = (num) => {
       
        for (let i = 2; i <= num/2; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    const generatePrimes = () => {
        const primes = [];
        let i = 1;
        while (primes.length < parseInt(numberInput)) {
            if (isPrime(i)) {
                primes.push(i);
            }
            i++;
        }
        setPrimeNumbers(primes);
    };

    return (
        <div>
            <h3>Find first n prime numbers</h3>
            <input
                type="number"
                value={numberInput}
                onChange={handleInputChange}
                placeholder="Enter a number"
            />
            <button onClick={generatePrimes}>Generate Primes</button>
            {numberInput > 0 && (
                <div>
                    <h5>Prime Numbers</h5>
                    {primeNumbers.map((prime, index) => (
                        <p key={index}>{prime}</p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProblemNo68;
