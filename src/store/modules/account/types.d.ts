import {
  FailedCallback,
  SuccessCallback,
} from '../../../@types/requests/requests-methods';
import { ChangePass } from '../../../components/Modal/Contents/TrocarSenha';

export type TryLoginPayload = {
  login: string;
  password: string;
  onSuccess?: SuccessCallback;
  onFailed?: FailedCallback;
};

type SignUp = {
  nome: string;
  email: string;
  senha: string;
};
export type SignUpPayload = {
  data: SignUp;
  onSuccess?: SuccessCallback;
  onFailed?: FailedCallback;
};

export type ChangePasswordPayload = {
  data: ChangePass;
  onSuccess?: SuccessCallback;
  onFailed?: FailedCallback;
};

export type ResetPasswordPayload = {
  data: {
    email: string;
  };
  onSuccess?: SuccessCallback;
  onFailed?: FailedCallback;
};
