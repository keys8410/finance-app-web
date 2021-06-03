import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLeading } from 'redux-saga/effects';
import api, { formatError } from '../../../api';
import { EditarUsuarioActions } from './actions/editar';
import { EditarUsuarioPayload } from './types';

function* tryLogin({
  payload,
}: PayloadAction<EditarUsuarioPayload>): Generator<any> {
  const { data, onSuccess, onFailed } = payload;

  try {
    const response: any = yield call(api.patch, `/usuario`, data);

    yield put(EditarUsuarioActions.success(response.data));
    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (errors) {
    const allErrors = formatError(errors);
    yield put(EditarUsuarioActions.failed(allErrors));
    if (onFailed) {
      onFailed(allErrors);
    }
  }
}

export default all([takeLeading(EditarUsuarioActions.request.type, tryLogin)]);
