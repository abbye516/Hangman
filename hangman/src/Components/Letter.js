import React, { Component } from 'react';
//shows all letters for game
class Letter extends Component {
    render() {
        return (     
            <span>{this.props.letter}</span>
                
                )
    }
}

export default Letter