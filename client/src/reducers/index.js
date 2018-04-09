/*******************************************************************
 Import the Redux module for Combining App Reducers
********************************************************************/
import { combineReducers } from 'redux';

/*******************************************************************
 Import the different Reducers used in the App
********************************************************************/
import authReducer from './authReducer';
import invoicesReducer from './invoicesReducer';

/*******************************************************************
 Combine all the App Reducers
********************************************************************/
export default combineReducers({
  user: authReducer,
  invoices: invoicesReducer
});

