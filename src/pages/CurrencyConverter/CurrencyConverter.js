import React, { useState } from 'react';

const currencyRates = {
  USD: 1,  // Base currency (US Dollar)
  EUR: 0.85,
  GBP: 0.73,
  JPY: 110.62,
  // Add more currencies and their rates here
};

const CurrencyConverter = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [amount, setAmount] = useState(100);
  const [targetCurrency, setTargetCurrency] = useState('USD');

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  const convertedAmount = (amount / currencyRates[baseCurrency]) * currencyRates[targetCurrency];

  return (
    <div className='text-black'>
      <h1>Currency Converter</h1>
      <div>
        <label>From Currency:</label>
        <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
          {Object.keys(currencyRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>To Currency:</label>
        <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
          {Object.keys(currencyRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>
          {amount} {baseCurrency} is approximately {convertedAmount.toFixed(2)} {targetCurrency}.
        </p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
