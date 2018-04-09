import { FETCH_USER } from '../actions/types';

/*******************************************************************
 The Auth Reducer which is concerned with handling User data
********************************************************************/
export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
