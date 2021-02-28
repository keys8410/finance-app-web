import { Route } from 'react-router-dom';

export default function CommonRoutes() {
  return (
    <>
      <Route exact path="/" render={(props: any) => <p {...props}></p>} />

      <Route exact path="/user" render={(props: any) => <p {...props}></p>} />
      <Route
        exact
        path="/overview"
        render={(props: any) => <p {...props}></p>}
      />
      <Route exact path="/stats" render={(props: any) => <p {...props}></p>} />
    </>
  );
}
