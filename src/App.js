import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Signin, Signup, Browse } from './pages';

import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.SIGNUP}>
          <Signup />
        </Route>
        <Route path={ROUTES.SIGNIN}>
          <Signin />
        </Route>
        <Route path={ROUTES.BROWSE}>
          <Browse />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
