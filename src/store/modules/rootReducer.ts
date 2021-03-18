import { combineReducers } from 'redux';
import account from './account';
import titulo from './titulo';
import modal from './modal';
import lancamento from './lancamento';

export default combineReducers({
  account,
  titulo,
  modal,
  lancamento,
});
