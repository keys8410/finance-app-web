export interface AuthProviderUser {
  id: string;
  nome: string;
  email: string;
}

export type AuthContextType = {
  user: AuthProviderUser | null;
  token: string | null;
  loading: boolean;
  authenticated: boolean;
  hydrating: boolean;
  entrar(usuario: string, senha: string): void;
  sair(): void;
};
