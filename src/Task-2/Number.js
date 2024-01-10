import React, { useState } from 'react';

const AddNumbers = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const value1 = parseInt(num1) || 0; // If num1 is not a number, default to 0
    const value2 = parseInt(num2) || 0; // If num2 is not a number, default to 0
    const sum = value1 + value2;
    setResult(`Result: ${sum}`);
  };

  return (
    <div>
      <label>
        Enter number 1:
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Enter number 2:
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleAddition}>Add</button>
      <br />
      <p>{result}</p>
    </div>
  );
};

export default AddNumbers;
