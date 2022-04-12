import React, { Component } from 'react';

class Stopwatch extends Component {
    render() {
        return (
            <div class="stopwatch">
                <h2>Stopwatch</h2>
                <span class="stopwatch-time">0</span>
                <button>Start</button>
                <button>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;