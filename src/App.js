import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Signin, Signup, Browse } from './pages';
import * as ROUTES from './constants/routes';

import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

function App() {
  const user = null;

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          exact
          user={user}
          redirect={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          redirect={ROUTES.BROWSE}
          path={ROUTES.SIGNIN}
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          redirect={ROUTES.BROWSE}
          path={ROUTES.SIGNUP}
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute
          user={user}
          path={ROUTES.BROWSE}
          redirect={ROUTES.SIGNIN}
        >
          <Browse />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
