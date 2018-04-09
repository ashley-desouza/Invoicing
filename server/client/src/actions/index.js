import axios from 'axios';

import { FETCH_USER, FETCH_INVOICES, CREATE_INVOICE } from './types';

/*******************************************************************
 Action Generators for User and Invoice data
********************************************************************/
export const fetchUser = () => async dispatch =>
  dispatch({
    type: FETCH_USER,
    payload: (await axios.get('/api/current_user')).data
  });

export const submitInvoice = (values, history) => async dispatch => {
  const res = await axios.post('/api/invoice', values);

  // Redirect the user the /invoices route - The Dashboard
  history.push('/invoices');

  dispatch({ type: CREATE_INVOICE, payload: res.data });
  // dispatch({ type: CREATE_INVOICE, payload: values });
};

export const fetchInvoices = () => async dispatch => {
  const res = await axios.get('/api/invoices');

  dispatch({ type: FETCH_INVOICES, payload: res.data });
};
