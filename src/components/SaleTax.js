import React, { useState } from 'react';

function SalesTaxCalculator() {
  const [amount, setAmount] = useState('');
  const [taxPercentage, setTaxPercentage] = useState('');
  const [tax, setTax] = useState('');

  const calculateTax = () => {
    const amt = parseFloat(amount);
    const percentage = parseFloat(taxPercentage);
    const salesTax = (amt * percentage) / 100;
    setTax(salesTax);
  };

  return (
    <div>
        <h3>(8)Calculate sales tax ( tax = amount * tax percentage / 100 )</h3>
      
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <label>
        Tax Percentage:
        <input
          type="number"
          value={taxPercentage}
          onChange={(e) => setTaxPercentage(e.target.value)}
        />
      </label>
      <button onClick={calculateTax}>Calculate Tax</button>
      {tax !== '' && (
       <input type='number'
       value={tax}/>
      )}
    </div>
  );
}

export default SalesTaxCalculator;
