import React, { Component } from 'react';
import Solution from './Components/Solution'
import './App.css';
import Score from './Components/Score';
import Letters from './Components/Letters';

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "cat",
        hint: "An animal"
      },
      score: 0
    }
  }
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  render() {
    return (
      <div>
        <Score score = {this.state.score}/>
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />
        <Letters letterStatus={this.state.letterStatus} />
      </div>
    );
  }
}

export default App;
