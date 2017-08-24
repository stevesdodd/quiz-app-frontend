import React, {Component} from 'react'

import './QuizPageContainer.css';

class QuizzesPageContainer extends Component {

  constructor() {
    super();
    this.state = {
      quizzes: [],
      loaded: false
    }
  }

  render() {
    return (
      <div>
        {this.props.quizId}
      </div>
    )
  }
}

export default QuizzesPageContainer