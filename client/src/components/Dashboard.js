import React from 'react';
import { Link } from 'react-router-dom';

import InvoiceList from './invoices/InvoiceList';

export default () => {
  return (
    <div>
      <InvoiceList />
      <div className="fixed-action-btn">
        <Link to="/invoices/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};