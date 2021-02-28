import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { AuthContextType, AuthProviderUser } from '../../@types/authProvider';
import {
  SuccessCallback,
  FailedCallback,
} from '../../@types/requests/requests-methods';
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

  function entrar(nomeUsuario: string, senha: string) {
    setIsLoading(true);
    login(
      nomeUsuario,
      senha,
      (data) => {
        console.log('data =>', data);
        setUsuario(data.usuario as AuthProviderUser);
        setToken(data.token);
        setIsLoading(false);
        window.location.replace(`${window.origin}`);
      },
      (error) => {
        setIsLoading(false);
      }
    );
  }

  function sair() {
    setIsLoading(true);
    setUsuario(null);
    setToken(null);
    setIsLoading(false);
  }

  useEffect(() => {
    setHydrating(false);
  }, []);

  if (hydrating) {
    return <Hydrating />;
  }

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
