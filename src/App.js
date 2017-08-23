import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QuizzesPageContainer from './QuizzesPageContainer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact path='/'
            component={() => <QuizzesPageContainer/>}>
          </Route>
          <Route render={function() {
            return <p>Not Found</p>
          }} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
