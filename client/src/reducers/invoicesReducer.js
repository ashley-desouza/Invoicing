import { FETCH_INVOICES, CREATE_INVOICE } from './../actions/types';

/*******************************************************************
 The Invoice Reducer which is concerned with handling Invoice data
********************************************************************/
export default function (state = [], action) {
  switch (action.type) {
    case FETCH_INVOICES:
      return action.payload;
    case CREATE_INVOICE:
      return [...state, action.payload]
    default:
      return state;
  }
}
