import { combineReducers } from 'redux';
import criar from './actions/criar';
import editar from './actions/editar';

export default combineReducers({
  editar,
  criar,
});
