import { combineReducers } from 'redux';
import tryLogin from './actions/tryLogin';
import signUp from './actions/signUp';
import resetPassword from './actions/resetPassword';
import changePassword from './actions/changePassword';

export default combineReducers({
  login: tryLogin,
  signUp,
  resetPassword,
  changePassword,
});
