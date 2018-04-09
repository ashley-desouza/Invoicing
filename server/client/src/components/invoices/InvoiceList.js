/*******************************************************************
 Import the React and React-Redux modules
********************************************************************/
import React, { Component } from 'react';
import { connect } from 'react-redux';

/*******************************************************************
 Import the Action Creators
********************************************************************/
import { fetchInvoices } from './../../actions';

class InvoiceList extends Component {
  componentDidMount() {
    // Fetch the List of Invoices for the Logged in User
    this.props.fetchInvoices();
  }
  /*******************************************************************
   Render the Line Item elements for each Invoice
  ********************************************************************/
  renderLineItems(invoiceLineItems) {
    if (invoiceLineItems && invoiceLineItems.length) {
      return invoiceLineItems.map(({ _id, description, amount }) => {
        return (
          <li key={_id}>
            <span>Item Description: {description} -  Item Amount: {amount}</span>
          </li>
        );
      });
    } else {
      return;
    }
  }

  /*******************************************************************
   Render the Invoices returned from the server
  ********************************************************************/
  renderInvoices() {
    // Sort the Invoice to display the one with nearest Due Date first
    this.props.invoices.sort((a, b) => a.dueDate > b.dueDate ? 1 : -1);

    return this.props.invoices.map(invoice => {
      return (
        <div className="row" key={invoice._id}>
          <div className="col s12 m12 l12">
            <div className="card blue-grey lighten-2">
              <div className="card-content">
                <h3 className="card-title">Invoice for Buyer {invoice.name}</h3>
                <p className="right">
                  Due Date: {new Date(invoice.dueDate).toLocaleDateString()}
                </p>
                <p>Buyer's Email: {invoice.email}</p>
                <ol>{this.renderLineItems(invoice.lineItems)}</ol>
                <p>Invoice Total: ${invoice.totalAmount}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderInvoices()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    invoices: state.invoices
  };
}

export default connect(mapStateToProps, { fetchInvoices })(InvoiceList);
