import React, { Component } from 'react';
import Home from './routes/home';
import Counter from './routes/counter';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Counter" component={Counter} />
        </Switch>
      </Router>
    );
  }
}

export default App;
