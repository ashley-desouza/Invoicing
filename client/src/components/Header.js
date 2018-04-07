import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a className="center brand-logo">Invoicing App</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a>Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}