import React, { Component } from 'react';
import Letter from './Letter';
//import Letter component

class Solution extends Component {
    
    render() {
        let emptySpaces = "_ "
        let secretWord = this.props.solution.word.toUpperCase().split('')

        return (
            <div>
                <div>
                    <div>{secretWord.map(m => <Letter letter={this.props.letterStatus[m] === true ? <span>{m}</span> :
                        (<span>{emptySpaces}</span>)}  />)}
                    </div>
                    <div> {this.props.score <50 ?<em>Here's a hint:{this.props.solution.hint}</em> : null}</div>
                </div>


            </div>
        )
    }
}

export default Solution