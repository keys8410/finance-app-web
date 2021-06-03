import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLeading } from 'redux-saga/effects';
import api, { formatError } from '../../../api';
import { ResetPassActions } from './actions/resetPassword';
import { SignUpActions } from './actions/signUp';
import { LoginActions } from './actions/tryLogin';
import { ResetPasswordPayload, SignUpPayload, TryLoginPayload } from './types';

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

function* signUp({ payload }: PayloadAction<SignUpPayload>): Generator<any> {
  const { data, onSuccess, onFailed } = payload;

  try {
    const response: any = yield call(api.post, `/auth/sign-up`, data);

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

function* resetPass({
  payload,
}: PayloadAction<ResetPasswordPayload>): Generator<any> {
  const { data, onSuccess, onFailed } = payload;

  try {
    const response: any = yield call(api.post, `/auth/reset-pass`, data);

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

export default all([
  takeLeading(LoginActions.request.type, tryLogin),
  takeLeading(SignUpActions.request.type, signUp),
  takeLeading(ResetPassActions.request.type, resetPass),
]);
