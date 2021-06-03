import { Route } from 'react-router-dom';
import Overview from '../pages/Overview';
import Profile from '../pages/Profile';
import Stats from '../pages/Stats';

export default function CommonRoutes() {
  return (
    <>
      <Route
        exact
        path="/user"
        render={(props: any) => <Profile {...props} />}
      />
      <Route
        exact
        path="/overview"
        render={(props: any) => <Overview {...props} />}
      />
      <Route
        exact
        path="/stats"
        render={(props: any) => <Stats {...props} />}
      />
    </>
  );
}
