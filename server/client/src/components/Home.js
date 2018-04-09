/*******************************************************************
 Import the React module
********************************************************************/
import React, { Component } from 'react';

/*******************************************************************
 This is the Home Page Welcome Component
********************************************************************/
class Home extends Component {
  render() {
    return (
      <div style={{ 'textAlign': 'center' }}>
        <h2>Welcome to Invoice App</h2>
      </div>
    );
  }
}

export default Home;