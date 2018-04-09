/*******************************************************************
 Import the React, React-Router-DOM, React-Redux modules
********************************************************************/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/*******************************************************************
 This Component determines what is displayed in the App Header
 based on whether the user is logged in or not
 It will be displayed on every Route
********************************************************************/
class Header extends Component {
  renderContent() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return [
          <li key="1">
            <a href="/auth/github">Login With Github</a>
          </li>
        ]
      default:
        return [
          <li key="1" style={{ margin: '0 10px' }}>
            <Link to="/invoices">My Invoices</Link>
          </li>,
          <li key="2" style={{ margin: '0 10px' }}>
            <Link to="/invoices/new">Create Invoice</Link>
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link
              to={this.props.user ? '/invoices' : '/'}
              className="center brand-logo"
            >Invoicing App
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Header);