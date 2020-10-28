import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
              <p>Home</p>
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
