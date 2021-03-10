import { combineReducers } from 'redux';
import account from './account/reducer';
import titulo from './titulo/reducer';
import modal from './modal';

export default combineReducers({
  account,
  titulo,
  modal,
});
