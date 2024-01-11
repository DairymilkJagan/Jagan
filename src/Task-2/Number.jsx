import React, { Component } from 'react';
import './style.css'; // Import the CSS file for styling

class AddNumbersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: '',
      number2: '',
      result: null,
    };
  }

  handleAdd = () => {
    const { number1, number2 } = this.state;
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    // If num2 is NaN, use 0 as the default value
    const result = (!isNaN(num1) ? num1 : 0) + (!isNaN(num2) ? num2 : 0);
    this.setState({ result });

    // if (!isNaN(num1) && !isNaN(num2)) {
    //   this.setState({ result: num1 + num2 });
    // } else {
    //   this.setState({ result: null });
    // }
  };

  render() {
    const { number1, number2, result } = this.state;

    return (
      <div className="add-numbers-container">
        <h2>Add Two Numbers</h2>
        <div className="input-container">
          <label htmlFor="number1">Number 1:</label>
          <input
            type="text"
            id="number1"
            value={number1}
            onChange={(e) => this.setState({ number1: e.target.value })}
            placeholder="Enter number"
          />
        </div>
        <div className="input-container">
          <label htmlFor="number2">Number 2:</label>
          <input
            type="text"
            id="number2"
            value={number2}
            onChange={(e) => this.setState({ number2: e.target.value })}
            placeholder="Enter number"
          />
        </div>
        <button onClick={this.handleAdd}>Add</button>
        {result !== null && <p className="result">Result: {result}</p>}
      </div>
    );
  }
}

export default AddNumbersComponent;