import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QuizzesPageContainer from './Components/QuizzesPageContainer/QuizzesPageContainer';
import QuizPageContainer from './Components/QuizPageContainer/QuizPageContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact path='/'
            component={() => <QuizzesPageContainer/>}>
          </Route>
          <Route
            path='/quiz/:quizSlug'
            component={({match}) => <QuizPageContainer quizId={match.params.quizSlug}/>}>
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
