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
        word: "apple",
        hint: "best fruit ever"
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
    // let endGame = secretWord.every(l => this.letterStatus[l])
    let found = secretWord.find(f => f === letter)
    if (!found && this.state.score > 0) {
      this.setState({ score: wrongLetter })

    }
  }

  render() {
    return (
      <div className="game">
      <h1>Hang Man</h1>
        <div className="solDiv"><Solution letterStatus={this.state.letterStatus} solution={this.state.solution} score={this.state.score} /> </div>
        <div className="letterDiv"><Letters letterStatus={this.state.letterStatus} method={this.selectLetter} scoreMethod={this.updateScore} /> </div>
        <div className="endGame"> <EndGame score={this.state.score} /> </div>
        <div className="scoreDiv"> <Score score={this.state.score} /></div>
      </div>
    );
  }
}

export default App;
