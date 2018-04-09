/*******************************************************************
 Import the React and React-Router-DOM modules along with the
 Date Picker Module
********************************************************************/
import 'react-dates/initialize';
import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import { Link } from 'react-router-dom';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

class InvoiceForm extends Component {
  constructor(props) {
    super(props);

    // Define Initial Component State
    this.state = {
      name: '',
      email: '',
      description: '',
      amount: '',
      dueDate: moment(),
      calendarFocused: false,
      lineItems: [],
      totalAmount: 0,
      error: {
        name: '',
        email: '',
        dueDate: '',
        description: '',
        amount: ''
      }
    };

    this.renderLineItems = this.renderLineItems.bind(this);
    this.computeInvoiceTotal = this.computeInvoiceTotal.bind(this);
    this.addLineItem = this.addLineItem.bind(this);
  }

  /*******************************************************************
   Render the Line Item elements for each Invoice as they are
   entered by the User
  ********************************************************************/
  renderLineItems() {
    if (this.state.lineItems.length) {
      return this.state.lineItems.map(({ description, amount }, idx) => {
        return (<div className="row" key={idx}>
          <div className="input-field col s6">
            <input
              type="text"
              className="text-input"
              value={description}
              readOnly
              style={{ marginBottom: '5px' }}
            />
          </div>
          <div className="input-field col s6">
            <input
              type="text"
              className="text-input"
              value={amount}
              readOnly
              style={{ marginBottom: '5px' }}
            />
          </div>
        </div>);
      });
    } else {
      return <div></div>;
    }
  }

  /*******************************************************************
    Method to update the lineItems Component State when a new
    Line Item is entered
  ********************************************************************/
  addLineItem() {
    if (!this.state.description) {
      // The Description Field is not filled
      this.setState({
        error: {
          description: 'Please provide an invoice description'
        }
      });
    } else if (!this.state.amount) {
      // The Amount Field is not filled
      this.setState({
        error: {
          amount: 'Please provide an invoice amount'
        }
      });
    } else {
      // Populate the lineItems Array
      this.setState({
        lineItems: this.state.lineItems.concat({
          description: this.state.description,
          amount: this.state.amount
        })
      });

      // Update the Invoice Total
      this.computeInvoiceTotal();

      // Reset state values
      this.setState({
        error: {
          name: '',
          email: '',
          dueDate: '',
          description: '',
          amount: ''
        },
        description: '',
        amount: ''
      });
    }
  }

  /*******************************************************************
   Method to calculate the Invoice Total
  ********************************************************************/
  computeInvoiceTotal() {
    this.setState((prevState) => {
      return {
        totalAmount: prevState.totalAmount + parseFloat(prevState.amount, 10)
      }
    });
  }

  /*******************************************************************
   Validation Methods
  ********************************************************************/
  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    });
  }

  onAmountChange = (e) => {
    const amount = e.target.value;

    if (amount === '' || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      // Only update the amount if it begins with a number 
      // and has an optional 2-digit decimal part
      // For Example - 123 and 123.45 are valid and 123.4343 is not valid
      this.setState(() => ({ amount }));
    }
  }

  onDateChange = (dueDate) => {
    if (dueDate) {
      // Only update the Due Date if there is an actual date entered
      // Do not update if the Due Date field has been deleted by the user
      this.setState({ dueDate });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };

  /*******************************************************************
   Method to handle Form Submission
  ********************************************************************/
  onSubmit = (e) => {
    // Prevent Default browser action for form submission
    e.preventDefault();

    // Perform field validation before submitting
    if (!this.state.name) {
      // The Name Field is not filled
      this.setState({
        error: {
          name: 'Please provide the customer name'
        }
      });
    } else if (!this.state.email) {
      // The Email Field is not filled
      this.setState({
        error: {
          email: 'Please provide the customer email'
        }
      });
    } else if (!this.state.description) {
      // The Description Field is not filled
      this.setState({
        error: {
          description: 'Please provide an invoice description'
        }
      });
    } else if (!this.state.amount) {
      // The Amount Field is not filled
      this.setState({
        error: {
          amount: 'Please provide an invoice amount'
        }
      });
    } else {
      // Reset state values
      this.setState({
        error: {
          name: '',
          email: '',
          dueDate: '',
          description: '',
          amount: ''
        }
      });

      // Populate the lineItems Array with the latest Invoice line item
      this.setState(() => {
        return {
          lineItems: this.state.lineItems.concat({
            description: this.state.description,
            amount: this.state.amount
          })
        }
      }, () => {
        // Calculate the final Invoice Total
        return this.setState((prevState) => {
          return {
            totalAmount: prevState.totalAmount + parseFloat(prevState.amount, 10)
          }
        }, () => {
          // Submit the Form
          return this.props.onSubmit({
            name: this.state.name,
            email: this.state.email,
            dueDate: moment(this.state.dueDate).valueOf(),
            lineItems: this.state.lineItems,
            totalAmount: parseFloat(this.state.totalAmount, 10)
          })
        });
      });
    }
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              Name:
              <input
                id="name"
                type="text"
                placeholder="Name"
                autoFocus
                className="text-input validate"
                value={this.state.name}
                onChange={this.onNameChange}
                style={{ marginBottom: '5px' }}
              />
              {
                this.state.error.name &&
                <div className="red-text" style={{ marginBottom: '20px' }}>
                  {this.state.error.name}
                </div>
              }
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              Email:
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="text-input validate"
                value={this.state.email}
                onChange={this.onEmailChange}
                style={{ marginBottom: '5px' }}
              />
              {
                this.state.error.email &&
                <div className="red-text" style={{ marginBottom: '20px' }}>
                  {this.state.error.email}
                </div>
              }
            </div>
          </div>
          Due Date:
          <SingleDatePicker
            id="dueDate"
            required={true}
            date={this.state.dueDate}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            block
            noBorder
          />
          <h5>Invoice Line Items:</h5>
          {this.renderLineItems()}
          <div className="row">
            <div className="input-field col s6">
              Description:
              <input
                id="description"
                type="text"
                placeholder="Description"
                className="text-input validate"
                value={this.state.description}
                onChange={this.onDescriptionChange}
                style={{ marginBottom: '5px' }}
              />
              {
                this.state.error.description &&
                <div className="red-text" style={{ marginBottom: '20px' }}>
                  {this.state.error.description}
                </div>
              }
            </div>
            <div className="input-field col s6">
              Amount:
              <input
                id="amount"
                type="text"
                placeholder="Amount"
                className="text-input"
                value={this.state.amount}
                onChange={this.onAmountChange}
                style={{ marginBottom: '5px' }}
              />
              {
                this.state.error.amount &&
                <div className="red-text" style={{ marginBottom: '20px' }}>
                  {this.state.error.amount}
                </div>
              }
            </div>
          </div>
          <button type="button" className="blue btn-flat left white-text" onClick={this.addLineItem}>
            <i className="large material-icons">add</i>
          </button>
          <div className="row">
            <div className="input-field col s6 offset-s10">
              Total: ${this.state.totalAmount}
            </div>
          </div>
          <div className="row">
            <Link to="/invoices" className="red lighten-2 btn-flat left white-text">Cancel</Link>
            <button type="submit" className="teal btn-flat right white-text">Send</button>
          </div>
        </form>
      </div >
    );
  }
}

export default InvoiceForm;