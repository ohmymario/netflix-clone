import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Jumbotron from './components/jumbotron';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Jumbotron />
        </Route>
        <Route path="/signin">
          <p>Signin</p>
        </Route>
        <Route path="/signup">
          <p>Signup</p>
        </Route>
        <Route path="/browse">
          <p>Browse</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
