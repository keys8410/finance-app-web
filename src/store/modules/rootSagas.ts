import { all } from 'redux-saga/effects';
import account from './account/sagas';

export default function* rootSaga(): Generator<any> {
  return yield all([account]);
}
