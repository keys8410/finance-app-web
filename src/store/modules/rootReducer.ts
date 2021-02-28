import { combineReducers } from 'redux';
import account from './account/reducer';
import titulo from './titulo/reducer';

export default combineReducers({
  account,
  titulo,
});
