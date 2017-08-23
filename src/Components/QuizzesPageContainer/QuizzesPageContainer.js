import React, {Component} from 'react'

class QuizzesPageContainer extends Component {

  componentDidMount() {
    console.log('mounted');

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
      console.log('data', data);
    })
    .catch( function(e) {
      console.log('errors', e)
    });
  }

  render() {
    return (
      <div>Quizzes page</div>
    )
  }
}

export default QuizzesPageContainer