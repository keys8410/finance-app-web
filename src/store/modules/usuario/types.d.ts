import { IProfileUser } from '../../../@types/domain';
import {
  FailedCallback,
  SuccessCallback,
} from '../../../@types/requests/requests-methods';

export type EditarUsuarioPayload = {
  data: IProfileUser;
  onSuccess?: SuccessCallback;
  onFailed?: FailedCallback;
};
