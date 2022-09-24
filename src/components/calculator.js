/* eslint-disable */
import React, { useState } from 'react';
import calculate from './logic/calculate';
import Navigation from './Navbar';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [values, setValues] = useState({ total: '0', operation: null, next: null });

  const EventFunc = (eve) => {
    const inputValue = eve.target.value;
    const changingValue = calculate(values, inputValue);
    // changing the value and replacing setState
    setValues(changingValue);
  };

  const mainContainer = {
    marginTop: '8%',
    display: 'flex',
    justifyContent: 'space-around',
  };

  return (
    <div>
      <Navigation />
      <div style={mainContainer}>
        {/* // eslint-disable-next-line no-use-before-define */}
        <h2>Let's do some math!</h2>
        <div className="caclContainer">
          <div className="theCalculator">
            <p className="editable">
              {' '}
              {values.total}
              {' '}
              {values.operation}
              {' '}
              {values.next}
              {' '}
            </p>
            <div className="inputValues">
              <div className="row1">
                <button type="button" className="AC" value="AC" onClick={EventFunc}>AC</button>
                <button type="button" className="plusNminus" value="+/-" onClick={EventFunc}>+/-</button>
                <button type="button" className="percentage" value="%" onClick={EventFunc}>%</button>
                <button type="button" className="division  arithmetic" value="÷" onClick={EventFunc}>÷</button>
              </div>

              <div className="row2">
                <button type="button" className="seven" value={7} onClick={EventFunc}>7</button>
                <button type="button" className="eight" value={8} onClick={EventFunc}>8</button>
                <button type="button" className="nine" value={9} onClick={EventFunc}>9</button>
                <button type="button" className="multiply  arithmetic" value="x" onClick={EventFunc}>x</button>
              </div>

              <div className="row3">
                <button type="button" className="four" value={4} onClick={EventFunc}>4</button>
                <button type="button" className="five" value={5} onClick={EventFunc}>5</button>
                <button type="button" className="six" value={6} onClick={EventFunc}>6</button>
                <button type="button" className="minus  arithmetic" value="-" onClick={EventFunc}>-</button>
              </div>

              <div className="row4">
                <button type="button" className="one" value={1} onClick={EventFunc}>1</button>
                <button type="button" className="two" value={2} onClick={EventFunc}>2</button>
                <button type="button" className="three" value={3} onClick={EventFunc}>3</button>
                <button type="button" className="plus  arithmetic" value="+" onClick={EventFunc}>+</button>
              </div>

              <div className="row5">
                <button type="button" className="zero" value={0} onClick={EventFunc}>0</button>
                <button type="button" className="dot" value="." onClick={EventFunc}>.</button>
                <button type="button" className="equals  arithmetic" value="=" onClick={EventFunc}>=</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
