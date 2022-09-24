import React from 'react';
import caculate from './logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(property) {
    super(property);

    this.state = { total: '0', operation: null, next: null };
  }

  EventFunc = (eve) => {
    const inputValue = eve.target.value;
    const stateValue = caculate(this.state, inputValue);
    // changing state and it's value
    this.setState(stateValue);
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="caclContainer">
        <div className="theCalculator">
          <p className="editable">
            {' '}
            {total}
            {' '}
            {operation}
            {' '}
            {next}
            {' '}
          </p>
          <div className="inputValues">
            <div className="row1">
              <button type="button" className="AC" value="AC" onClick={this.EventFunc}>AC</button>
              <button type="button" className="plusNminus" value="+/-" onClick={this.EventFunc}>+/-</button>
              <button type="button" className="percentage" value="%" onClick={this.EventFunc}>%</button>
              <button type="button" className="division  arithmetic" value="÷" onClick={this.EventFunc}>÷</button>
            </div>

            <div className="row2">
              <button type="button" className="seven" value={7} onClick={this.EventFunc}>7</button>
              <button type="button" className="eight" value={8} onClick={this.EventFunc}>8</button>
              <button type="button" className="nine" value={9} onClick={this.EventFunc}>9</button>
              <button type="button" className="multiply  arithmetic" value="x" onClick={this.EventFunc}>x</button>
            </div>

            <div className="row3">
              <button type="button" className="four" value={4} onClick={this.EventFunc}>4</button>
              <button type="button" className="five" value={5} onClick={this.EventFunc}>5</button>
              <button type="button" className="six" value={6} onClick={this.EventFunc}>6</button>
              <button type="button" className="minus  arithmetic" value="-" onClick={this.EventFunc}>-</button>
            </div>

            <div className="row4">
              <button type="button" className="one" value={1} onClick={this.EventFunc}>1</button>
              <button type="button" className="two" value={2} onClick={this.EventFunc}>2</button>
              <button type="button" className="three" value={3} onClick={this.EventFunc}>3</button>
              <button type="button" className="plus  arithmetic" value="+" onClick={this.EventFunc}>+</button>
            </div>

            <div className="row5">
              <button type="button" className="zero" value={0} onClick={this.EventFunc}>0</button>
              <button type="button" className="dot" value="." onClick={this.EventFunc}>.</button>
              <button type="button" className="equals  arithmetic" value="=" onClick={this.EventFunc}>=</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
