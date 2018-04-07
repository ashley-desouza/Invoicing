import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}