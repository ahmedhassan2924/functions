import React,{useState} from 'react'

function ProblemNo66() {

    const [numberInput, setNumberInput] = useState("");
    const [Pintegers, setPintegers] = useState([]);
    
  
    const handleInputChange = (event) => {
      const value = parseInt(event.target.value);
  
      setNumberInput(value);
    };

    const generateIntegers = () => {
        const primes = [];
        for (let i = 1; i <= parseInt(numberInput); i++) {
            let isPrime = true;
            for (let j = 2; j <= i/2; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes.push(i);
            }
        }
        setPintegers(primes);
    };
  return (
    <div>
        <h3>Find prime numbers from first n integer</h3>

        <input
        type="number"
        value={numberInput}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={generateIntegers}>Generate Integers</button>
      {numberInput > 0 && (
        <div>
            <h5>Prime Numbers</h5>
          {Pintegers.map((item) => {
            return <p>{item}</p>;
          })}
        </div>

      )}
      
    </div>
  )
}

export default ProblemNo66
