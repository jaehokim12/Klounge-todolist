import React ,{Component} from 'react';
import Home from './routes/home'
import Counter from './routes/counter'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component{
 
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Counter">
            <Counter />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
