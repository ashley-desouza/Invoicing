import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../../actions';

import InvoiceForm from './InvoiceForm';

class InvoiceNew extends Component {
  onSubmit = (invoice) => {
    // Submit the new Invoice to the Action Creator
    this.props.submitInvoice(invoice, this.props.history);
  };

  render() {
    return (
      <div>
        <h3>Create New Invoice</h3>
        <InvoiceForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, actions)(InvoiceNew);