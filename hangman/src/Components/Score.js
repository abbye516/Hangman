import React, { Component } from 'react';

class Score extends Component {
    render() {
        return (
            <div className="score">Score: <span className={this.props.score > 80 ? "highScore" : "lowScore"}>{this.props.score}</span></div>
        )
    }
}

export default Score