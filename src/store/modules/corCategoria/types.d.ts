import {
  SuccessCallback,
  FailedCallback,
} from '../../../@types/requests/requests-methods';

type CorCategoriaType = {
  cor: string;
  corId?: number;
};

export type CriarCorCategoriaPayload = {
  categoriaId: number;
  data: CorCategoriaType;
  onSuccess?: SuccessCallback;
  onFailed?: FailedCallback;
};

export type EditarCorCategoriaPayload = {
  categoriaId: number;
  data: CorCategoriaType;
  onSuccess?: SuccessCallback;
  onFailed?: FailedCallback;
};
