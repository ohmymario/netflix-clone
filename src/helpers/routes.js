/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// user - object given when logged in from firebase
// redirect - path to redirect
// path - path that will trigger REDIRECT
// children - component to render if no USER found

const IsUserRedirect = (props) => {
  const { user, redirect, path, children, ...rest } = props;
  return (
    <Route
      {...rest}
      path={path}
      render={() => {
        if (!user) return children;
        if (user) return <Redirect to={{ pathname: redirect }} />;
        return null;
      }}
    />
  );
};

const ProtectedRoute = (props) => {
  const { user, path, redirect, children, ...rest } = props;
  return (
    <Route
      {...rest}
      path={path}
      render={(renderProps) => {
        const { location } = renderProps;
        if (user) return children;
        if (!user)
          return (
            <Redirect to={{ pathname: redirect, state: { from: location } }} />
          );
        return null;
      }}
    />
  );
};

export { IsUserRedirect, ProtectedRoute };
