import React, {Component} from 'react'

import './QuizzesPageContainer.css';

const QuizzesGrid = ({quizzes}) => (
  <div>
    <Quiz quizData={quizzes[0]}/>
  </div>
)

const Quiz = ({quizData}) => (
  <div>
    <div>{quizData.name}</div>
    <div>{quizData.description}</div>
  </div>
)

class QuizzesPageContainer extends Component {

  constructor() {
    super();
    this.state = {
      quizzes: [],
      loaded: false
    }

    this.getQuizData.bind(this);
  }
  
  getQuizData() {
    const main = this;
    fetch(`http://localhost:3000/quizzes`)
    .then( function(response) {
      console.log(response);
      return response;
    })
    .then(function(response) {
      setTimeout(function() {
      }, 300);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.error);
      }
    })
    .then( function(data) {
      const quizzes = []
  
      data.map(item => {
        quizzes.push({
          name: item.name,
          description: item.description,
        })
        return quizzes;
      })
      console.log(quizzes);
      main.setState({
        quizzes: quizzes,
        loaded: true
      })
    })
    .catch( function(e) {
      console.log('errors', e)
    });
  }

  componentDidMount() {
    console.log('mounted');
    this.getQuizData();
  }

  render() {
    return (
      <div className='wrapper'>
        <div>Quizzes page</div>
        {this.state.loaded ? <QuizzesGrid quizzes={this.state.quizzes} loaded={this.state.loaded}/> : ''}
      </div>
    )
  }
}

export default QuizzesPageContainer