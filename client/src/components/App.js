import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <h2>Home Page</h2>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}