import { AuthProviderUser } from '../authProvider';

export interface IProfileUser extends Omit<AuthProviderUser, 'id'> {
  genero: number;
  orientacaoSexual: number;
}
