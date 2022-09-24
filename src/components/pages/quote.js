import React from 'react';
import Navigation from '../Navbar';

// eslint-disable-next-line react/prefer-stateless-function
const Quote = () => {
  const styles = {
    textAlign: 'center',
    margin: '5%',
  };

  return (
    <div>
      <Navigation />
      <h3 style={styles}>
        Mathematics is not about numbers, equations, computations, or algorithms:
        it is about understanding. - William Paul Thurston.
      </h3>
    </div>
  );
};

export default Quote;
