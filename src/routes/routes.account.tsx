import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useThemeToggle } from '../contexts/ThemeToggleProvider';
import Pages from '../pages';
import Login from '../pages/account/login';
import Page404 from '../pages/account/page404';
import Page500 from '../pages/account/page500';
import { GlobalStyles } from '../styles/global';
import dark from '../styles/theme/dark';
import light from '../styles/theme/light';
import { useAuth } from '../contexts/authProvider';
import SignUp from '../pages/account/signUp';
import Modal from '../components/Modal';
import { CSSReset } from '../styles/reset';

type Props = {
  onlyAuthenticated?: boolean;
};

const ModulesRoutes = ({ onlyAuthenticated = false }: Props) => {
  const { scheme } = useThemeToggle();
  const { hydrating, loading, authenticated } = useAuth();
  if (onlyAuthenticated && (!hydrating || !loading) && !authenticated) {
    return (
      <>
        <Route
          exact
          path="/login"
          render={(props: any) => <Login {...props} />}
        />
        <Route
          exact
          path="/cadastrar"
          render={(props: any) => <SignUp {...props} />}
        />
      </>
    );
  }
  return (
    <ThemeProvider theme={scheme === 'light' ? light : dark}>
      <CSSReset />
      <GlobalStyles />

      <Switch>
        <Route
          exact
          path="/login"
          render={(props: any) => <Login {...props} />}
        />
        <Route
          exact
          path="/404"
          render={(props: any) => <Page404 {...props} />}
        />
        <Route
          exact
          path="/500"
          render={(props: any) => <Page500 {...props} />}
        />
        <Route path="/" render={(props: any) => <Pages {...props} />} />
      </Switch>
    </ThemeProvider>
  );
};

export default ModulesRoutes;
