import React, {Component} from 'react'

class QuizzesPageContainer extends Component {

  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    console.log('mounted');
    const main = this;
    fetch(`http://localhost:3000/quizzes`)
    .then( function(response) {
      console.log(response);
      return response;
    })
    .then(function(response) {
      setTimeout(function() {
        console.log('loaded');
      }, 300);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.error);
      }
    })
    .then( function(data) {
      console.log(data);

      const quizzes = []
      
      main.setState({
        name: data[0].name
      })
    })
    .catch( function(e) {
      console.log('errors', e)
    });
  }

  render() {
    return (
      <div>Quizzes page {this.state.name}</div>

    )
  }
}

export default QuizzesPageContainer