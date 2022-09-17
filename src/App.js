import React from 'react';
import Calculator from './components/calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="heading">calculator App(first project Yeah!!!)</h1>
        <Calculator />
      </div>
    );
  }
}
export default App;
