import { combineReducers } from 'redux';
import criar from './actions/criar';
import editar from './actions/editar';
import deletar from './actions/deletar';

export default combineReducers({
  editar,
  criar,
  deletar,
});
