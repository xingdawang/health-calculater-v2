import React, { Component } from 'react';
import Header from './header'
import HomeContent from './home-content'
import NotFound from './not-found'
import BMICalculater from '../containers/bmi-calculator'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {

    return (
      <div>
        <Header />
        <div className = "container">
          <Router>
            <Switch>
              <Route path = "/" exact component = { HomeContent } />
              <Route path = "/bmi" component = { BMICalculater } />
              <Route component = { NotFound } />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
