import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class NotFound extends Component {
  render() {
    return (
      <div className="row">
        <div className="grid-example col s12 m12 l12 offset-l2 offset-m1">
          <span className="flow-text">
            <h2>404! Page Not Found</h2>
            <Link to="/" className="grid-example col s12 m12 l12 offset-l2 offset-m1">Go to home</Link>
          </span>
        </div>
      </div>
    );
  }
}