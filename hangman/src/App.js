import React, { Component } from 'react';
import Solution from './Components/Solution'
import './App.css';
import Score from './Components/Score';
import Letters from './Components/Letters';
import EndGame from './Components/EndGame';

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "cat",
        hint: "An animal"
      },
      score: 100
    }
  }
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
  selectLetter = (letter) => {
    let newLetterStatus = { ...this.state.letterStatus }
    newLetterStatus[letter] = true
    this.setState({ letterStatus: newLetterStatus })

  }
  updateScore = (letter) => {
    let wrongLetter = this.state.score - 10
    let secretWord = this.state.solution.word.toUpperCase().split('')
    let found = secretWord.find(f => f === letter)
    if (!found && this.state.score > 0) {
      this.setState({ score: wrongLetter })

    }
  }



  render() {
    return (
      <div>
        <Score score={this.state.score} />
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} score={this.state.score}/>
        <Letters letterStatus={this.state.letterStatus} method={this.selectLetter} scoreMethod={this.updateScore} />
        <EndGame score={this.state.score} />
      </div>
    );
  }
}

export default App;
