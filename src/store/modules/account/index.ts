import { combineReducers } from 'redux';
import tryLogin from './actions/tryLogin';
import signUp from './actions/signUp';
import resetPassword from './actions/resetPassword';

export default combineReducers({
  login: tryLogin,
  signUp,
  resetPassword,
});
