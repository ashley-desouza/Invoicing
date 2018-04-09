import { FETCH_INVOICES, CREATE_INVOICE } from './../actions/types';

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
