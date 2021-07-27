import React, { Component } from 'react';
import Home from './routes/home';
import Counter from './routes/counter';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav';
import { Provider } from 'react-redux';
import createStore from './store/index';
import reducers from './reducers';
const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Provider store={store}>
            <Route exact path="/" component={Home} />
            <Route path="/Counter" component={Counter} />
          </Provider>
        </Switch>
      </Router>
    );
  }
}

export default App;
