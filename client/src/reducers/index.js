import { combineReducers } from 'redux';

import authReducer from './authReducer';
import invoicesReducer from './invoicesReducer';

export default combineReducers({
  user: authReducer,
  invoices: invoicesReducer
});

