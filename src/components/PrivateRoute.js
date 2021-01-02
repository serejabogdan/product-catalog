import React from 'react';
import {Redirect, Route} from 'react-router-dom';

export default function PrivateRoute({component: Component, isUserAuth, ...rest}) {
  return <Route {...rest} render={(props) => (isUserAuth ? <Component {...props} /> : <Redirect to="/" />)} />;
}
