import { all } from 'redux-saga/effects';
import account from './account/sagas';
import lancamento from './lancamento/sagas';
import corCategoria from './corCategoria/sagas';
import usuario from './usuario/sagas';

export default function* rootSaga(): Generator<any> {
  return yield all([account, lancamento, corCategoria, usuario]);
}
