/*******************************************************************
 Import the React, React-Router-DOM and React-Redux modules
********************************************************************/
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

/*******************************************************************
 Import the Action Creators
********************************************************************/
import * as actions from '../actions';

/*******************************************************************
 Import the Components that will be part of the App Route Matching
 Components
********************************************************************/
import Header from './Header';
import Home from './Home';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import InvoiceNew from './invoices/InvoiceNew';

class App extends Component {
  componentDidMount() {
    // Fetch the current user
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/invoices" component={Dashboard} />
              <Route exact path="/invoices/new" component={InvoiceNew} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);