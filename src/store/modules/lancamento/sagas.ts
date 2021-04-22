import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLeading } from 'redux-saga/effects';
import api, { formatError } from '../../../api';
import { CriarLancamentoActions } from './actions/criar';
import { EditarLancamentoActions } from './actions/editar';
import { DeletarLancamentoActions } from './actions/deletar';
import {
  CriarLancamentoPayload,
  DeletarLancamentoPayload,
  EditarLancamentoPayload,
} from './types';

function* criarLancamento({
  payload,
}: PayloadAction<CriarLancamentoPayload>): Generator<any> {
  const { data, onSuccess, onFailed } = payload;

  try {
    const postData = {
      nome: data.nome,
      descricao: data.descricao,
      categoria: data.categoria,
      valor: data.valor.toString().replace('.', '').replace(',', '.'),
      data: data.data,
      gastou: data.gastou,
    };

    const response: any = yield call(api.post, `/lancamento`, postData);
    yield put(CriarLancamentoActions.success(response.data));

    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (errors) {
    const allErrors = formatError(errors);

    yield put(CriarLancamentoActions.failed(allErrors));
    if (onFailed) {
      onFailed(allErrors);
    }
  }
}

function* editarLancamento({
  payload,
}: PayloadAction<EditarLancamentoPayload>): Generator<any> {
  const { idLancamento, data, onSuccess, onFailed } = payload;

  try {
    const postData = {
      nome: data.nome,
      descricao: data.descricao,
      categoria: data.categoria,
      valor: data.valor.toString().replace('.', '').replace(',', '.'),
      data: data.data,
      gastou: data.gastou,
    };

    const response: any = yield call(
      api.patch,
      `/lancamento/${idLancamento}`,
      postData
    );
    yield put(CriarLancamentoActions.success(response.data));

    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (errors) {
    const allErrors = formatError(errors);

    yield put(CriarLancamentoActions.failed(allErrors));
    if (onFailed) {
      onFailed(allErrors);
    }
  }
}

function* deletarLancamento({
  payload,
}: PayloadAction<DeletarLancamentoPayload>): Generator<any> {
  const { idLancamento, onSuccess, onFailed } = payload;

  try {
    const response: any = yield call(api.delete, `/lancamento/${idLancamento}`);
    yield put(DeletarLancamentoActions.success(response.data));

    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (errors) {
    const allErrors = formatError(errors);

    yield put(DeletarLancamentoActions.failed(allErrors));
    if (onFailed) {
      onFailed(allErrors);
    }
  }
}

export default all([
  takeLeading(CriarLancamentoActions.request.type, criarLancamento),
  takeLeading(EditarLancamentoActions.request.type, editarLancamento),
  takeLeading(DeletarLancamentoActions.request.type, deletarLancamento),
]);
