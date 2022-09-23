/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/pages/Home';
import Quote from './components/pages/quote';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Calculator" element={<Calculator />} />
          <Route path="Quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
