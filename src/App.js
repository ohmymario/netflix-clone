import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { JumbotronContainer } from './containers/jumbotron';
import { FooterContainer } from './containers/footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <>
            <JumbotronContainer />
            <FooterContainer />
          </>
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
