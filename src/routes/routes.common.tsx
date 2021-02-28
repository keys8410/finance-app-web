import React from 'react';
import { Route } from 'react-router-dom';

export default function CommonRoutes() {
  return (
    <>
      <Route exact path="/" render={(props: any) => <p {...props}>Home </p>} />
    </>
  );
}
