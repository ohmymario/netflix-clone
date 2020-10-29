import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import jumboData from './fixtures/jumbo.json';
import Jumbotron from './components/jumbotron';

function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Jumbotron />
    //     </Route>
    //     <Route path="/signin">
    //       <p>Signin</p>
    //     </Route>
    //     <Route path="/signup">
    //       <p>Signup</p>
    //     </Route>
    //     <Route path="/browse">
    //       <p>Browse</p>
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
