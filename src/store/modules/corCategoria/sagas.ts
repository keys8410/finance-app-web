import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLeading } from 'redux-saga/effects';
import api, { formatError } from '../../../api';
import { CriarCorCategoriaActions } from './actions/criar';
import { EditarCorCategoriaActions } from './actions/editar';
import { EditarCorCategoriaPayload, CriarCorCategoriaPayload } from './types';

function* criarCorCategoria({
  payload,
}: PayloadAction<CriarCorCategoriaPayload>): Generator<any> {
  const { categoriaId, data, onSuccess, onFailed } = payload;

  try {
    const response: any = yield call(
      api.post,
      `/categoria/${categoriaId}/cor`,
      data
    );
    yield put(CriarCorCategoriaActions.success(response.data));

    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (errors) {
    const allErrors = formatError(errors);

    yield put(CriarCorCategoriaActions.failed(allErrors));
    if (onFailed) {
      onFailed(allErrors);
    }
  }
}

function* editarCorCategoria({
  payload,
}: PayloadAction<EditarCorCategoriaPayload>): Generator<any> {
  const { categoriaId, data, onSuccess, onFailed } = payload;

  try {
    const response: any = yield call(
      api.patch,
      `/categoria/${categoriaId}/cor`,
      data
    );
    yield put(EditarCorCategoriaActions.success(response.data));

    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (errors) {
    const allErrors = formatError(errors);

    yield put(EditarCorCategoriaActions.failed(allErrors));
    if (onFailed) {
      onFailed(allErrors);
    }
  }
}

export default all([
  takeLeading(CriarCorCategoriaActions.request.type, criarCorCategoria),
  takeLeading(EditarCorCategoriaActions.request.type, editarCorCategoria),
]);
