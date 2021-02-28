import {
  FailedCallback,
  SuccessCallback,
} from '../../../@types/requests/requests-methods';

export type TryLoginPayload = {
  login: string;
  password: string;
  onSuccess?: SuccessCallback;
  onFailed?: FailedCallback;
};
