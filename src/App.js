import React, {Component} from 'react'; 
import Register from './page/Register';
import Login from './page/Login';
import Home from './page/Home';
import Header from '../src/comps/Header';
import Header2 from '../src/comps/Header2';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render () {
    return(
      <div>

      <Router>
        {/* <Header/> */}
        <Header2/>
        
        <div>
          <Switch>
          <Route path="/home">
              <Home/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
          <Route path="/home">
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
      </div>

    )
  }
}

export default App;