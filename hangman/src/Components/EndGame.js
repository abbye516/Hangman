import React, { Component } from 'react';

class EndGame extends Component {
    render() {

        return (
            <div>
                {this.props.score === 0 ? <div>Game over!</div> : null}
            </div>
        )
    }
}

export default EndGame