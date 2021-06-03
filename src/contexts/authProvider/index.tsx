import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { AuthContextType, AuthProviderUser } from '../../@types/authProvider';
import { IProfileUser } from '../../@types/domain';
import {
  SuccessCallback,
  FailedCallback,
} from '../../@types/requests/requests-methods';
import api from '../../api';
import { usePersistedState } from '../../hooks/usePersistedState';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { LoginActions } from '../../store/modules/account/actions/tryLogin';
import Hydrating from './Hydrating';

const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  token: null,
  entrar: () => {},
  sair: () => {},
  loading: false,
  user: null,
  hydrating: false,
  reloadUser: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export const useAuthActions = () => {
  const dispatch = useDispatch();
  const { successPayload: user, isRequesting } = useTypedSelector(
    (states) => states.account.login
  );

  const login = useCallback(
    (
      username: string,
      password: string,
      onSuccess?: SuccessCallback,
      onFailed?: FailedCallback
    ) => {
      dispatch(
        LoginActions.request({ login: username, password, onSuccess, onFailed })
      );
    },
    [dispatch]
  );

  return { user, isRequesting, login };
};

export default function AuthProvider({ children }: PropsWithChildren<{}>) {
  const { login } = useAuthActions();
  const [isLoading, setIsLoading] = useState(false);
  const [hydrating, setHydrating] = useState(true);
  const [usuario, setUsuario] = usePersistedState<AuthProviderUser | null>(
    '@app/user',
    null
  );
  const [token, setToken] = usePersistedState<string | null>(
    '@app/userToken',
    null
  );

  const entrar = (nomeUsuario: string, senha: string) => {
    setIsLoading(true);
    login(
      nomeUsuario,
      senha,
      (data: { usuario: AuthProviderUser; token: string }) => {
        setUsuario(data.usuario);
        setToken(data.token);
        setIsLoading(false);
        window.location.replace(`${window.origin}/overview`);
      },
      (error) => {
        setIsLoading(false);
      }
    );
  };

  const sair = () => {
    window.location.replace(`${window.origin}/login`);
    setIsLoading(true);
    setUsuario(null);
    setToken(null);
    setIsLoading(false);
  };

  useEffect(() => {
    setHydrating(false);
  }, []);

  const reloadUser = async () => {
    const { data: user } = await api.get<IProfileUser>(`/auth/profile`);

    setUsuario({
      ...usuario,
      nome: user.nome,
      email: user.email,
      apelido: user.apelido,
    } as AuthProviderUser);
  };

  if (hydrating) {
    return <Hydrating />;
  } else
    return (
      <AuthContext.Provider
        value={{
          user: usuario,
          token,
          authenticated: !!usuario && !!token,
          entrar,
          sair,
          loading: isLoading,
          hydrating,
          reloadUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
}
