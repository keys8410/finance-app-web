import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLeading } from 'redux-saga/effects';
import api, { formatError } from '../../../api';
import { LoginActions } from './actions/tryLogin';
import { TryLoginPayload } from './types';

function* tryLogin({
  payload,
}: PayloadAction<TryLoginPayload>): Generator<any> {
  const { login, password, onSuccess, onFailed } = payload;

  const postData = {
    email: login,
    senha: password,
  };
  try {
    const response: any = yield call(api.post, `/auth/sign-in`, postData);

    yield put(LoginActions.success(response.data));
    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (errors) {
    const allErrors = formatError(errors);
    yield put(LoginActions.failed(allErrors));
    if (onFailed) {
      onFailed(allErrors);
    }
  }
}

export default all([takeLeading(LoginActions.request.type, tryLogin)]);
