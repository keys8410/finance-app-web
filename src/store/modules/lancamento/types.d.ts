import { LancamentoType } from '../../../@types/lancamento';
import {
  SuccessCallback,
  FailedCallback,
} from '../../../@types/requests/requests-methods';

export type CriarLancamentoPayload = {
  data: LancamentoType;
  onSuccess?: SuccessCallback;
  onFailed?: FailedCallback;
};

export type EditarLancamentoPayload = {
  idLancamento: number;
  data: LancamentoType;
  onSuccess?: SuccessCallback;
  onFailed?: FailedCallback;
};
