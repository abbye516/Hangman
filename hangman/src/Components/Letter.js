import React, { Component } from 'react';
//shows all letters for game
class Letter extends Component {
    selectLetter = () => {
        this.props.method(this.props.letter.props.children)
        this.props.scoreMethod(this.props.letter.props.children)
    }
    render() {
        return (

            <span onClick={this.selectLetter}>{this.props.letter}</span>
        )
    }
}

export default Letter