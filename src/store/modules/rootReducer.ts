import { combineReducers } from 'redux';
import account from './account';
import titulo from './titulo';
import modal from './modal';
import lancamento from './lancamento';
import corCategoria from './corCategoria';
import usuario from './usuario';

export default combineReducers({
  account,
  titulo,
  modal,
  corCategoria,
  lancamento,
  usuario,
});
