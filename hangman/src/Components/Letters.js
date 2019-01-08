import React, { Component } from 'react';
import Letter from './Letter'

class Letters extends Component {
    render() {
        const allLetters = this.props.letterStatus
        console.log(allLetters)
        return (
            <div>
                <div>Available letters:</div>
                <span>{Object.keys(allLetters).map(m => <Letter 
                letter={this.props.letterStatus[m] === true ?(<span className="true">{m}</span>) : 
                (<span className="false">{m}</span>) }
                />)}
                </span>
            </div>
        )
    }
}

export default Letters

