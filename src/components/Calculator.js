import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";

import "../styles/App.css";
import "react-input-range/lib/css/index.css";

class Calculator extends Component {
  state = {
    amountValue: 5000,
    monthsValue: 1
      
  };

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleYearChange = value => {
    this.setState({ monthsValue: value });
  };

  render() {
    let { amountValue, monthsValue } = this.state;

    return (
      <div className="App">
        <header>
           <h2>A Simple Loan Calculator</h2>
        </header>
        <h4>I want to borrow ${amountValue}</h4>
        <InputRange
          step={100}
          maxValue={5000}
          minValue={500}
          value={amountValue}
          onChange={this.handleAmountChange}
        />
        <h4>
          Over {monthsValue} year{monthsValue > 0.6 && "s"}
        </h4>
        <InputRange
          step={0.5}
          maxValue={2}
          minValue={0.5}
          value={monthsValue}
          onChange={this.handleYearChange}
        />
        <Display years={monthsValue} amount={amountValue} />
      
      </div>
    );
  }
}

export default Calculator;
