import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useAuth } from '../contexts/authProvider';
import { useThemeToggle } from '../contexts/ThemeToggleProvider';
import Pages from '../pages';
import Login from '../pages/account/login';
import Page404 from '../pages/account/page404';
import Page500 from '../pages/account/page500';
import { GlobalStyles } from '../styles/global';
import dark from '../styles/theme/dark';
import light from '../styles/theme/light';

type Props = {
  onlyAuthenticated?: boolean;
};

export default function ModulesRoutes({ onlyAuthenticated = false }: Props) {
  const { scheme } = useThemeToggle();
  const { hydrating, loading, authenticated, user } = useAuth();
  if (onlyAuthenticated && (!hydrating || !loading) && !authenticated) {
    return (
      <Route exact path="*" render={(props: any) => <Login {...props} />} />
    );
  }

  return (
    <ThemeProvider theme={scheme === 'light' ? light : dark}>
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
}
