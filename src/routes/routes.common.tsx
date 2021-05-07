import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Overview from '../pages/Overview';

export default function CommonRoutes() {
  return (
    <>
      <Route exact path="/" render={(props: any) => <Home {...props} />} />
      <Route exact path="/user" render={(props: any) => <p {...props}></p>} />
      <Route
        exact
        path="/overview"
        render={(props: any) => <Overview {...props} />}
      />
      <Route exact path="/stats" render={(props: any) => <p {...props}></p>} />
    </>
  );
}
