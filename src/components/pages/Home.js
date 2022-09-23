/* eslint-disable */
import React from 'react';
import Navigation from '../Navbar';

// eslint-disable-next-line react/prefer-stateless-function
const Home = () => {
  const margins = {
    marginTop: '5%',
    textAlign: 'center',
  };

  const Pmargin = {
    margin: '0 5%',
    marginTop: '5%',
  };

  return (
    <div>
      <Navigation />
      <h2 style={margins}> Welcome to our page!</h2>
      <p style={Pmargin}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
      </p>
      <p style={Pmargin}>
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>
    </div>
  );
};

export default Home;
