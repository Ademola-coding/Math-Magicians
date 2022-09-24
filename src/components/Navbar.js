/* eslint-disable */
import React from 'react';
// eslint-disable-next-line no-use-before-define
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
const Navigation = () => {
  const heady = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: '2%',
    fontSize: 'xx-large',
    backgroundColor: 'aliceblue',
    alignContent: 'center',
  };

  const logo = {
    display: 'flex',
    alignSelf: 'center',
  };

  const Navs = {
    display: 'flex',
    listStyle: 'none',
  };

  const li = {
    padding: '0 2%',
    fontSize: 'large',
  };

  return (
    <header style={heady}>
      <div style={logo}> Math Magicians </div>
      <ul style={Navs}>
        <li style={li}>
          {' '}
          <Link to="/"> Home </Link>
          {' '}
        </li>
        <li style={li}>|</li>
        <li style={li}>
          {' '}
          <Link to="/Calculator"> Calculator </Link>
          {' '}
        </li>
        <li style={li}>|</li>
        <li style={li}>
          {' '}
          <Link to="/Quote"> Quote  </Link>
          {' '}
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
