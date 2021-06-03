export interface AuthProviderUser {
  id: string;
  nome: string;
  email: string;
  apelido: string;
  dataNascimento: Date;
  ativo: boolean;
}

export type AuthContextType = {
  user: AuthProviderUser | null;
  token: string | null;
  loading: boolean;
  authenticated: boolean;
  hydrating: boolean;
  entrar(usuario: string, senha: string): void;
  sair(): void;
  reloadUser: () => void;
};
