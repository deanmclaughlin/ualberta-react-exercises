import './App.css';
import React from 'react';

class StopwatchClassBased extends React.Component {
    constructor(props) {
        super();
        // Example 1 Start
        this.state = {
            seconds: Number(props.start),
            timer: undefined
        };
        // Example 1 End

    }

    render() {
        return (
            <div>
                <p>H:M:S</p>
                <p>{String(Math.floor(this.state.seconds/3600)).padStart(2,"0")}:{String(Math.floor((this.state.seconds%3600)/60)).padStart(2,"0")}:{String(this.state.seconds%60).padStart(2,"0")}</p>
                <button onClick={() => {
                    if (this.state.timer === undefined)
                    {
                        // Example 2 Start
                        this.setState({ 
                            timer: setInterval(() => {
                                this.setState({
                                    seconds: this.state.seconds + 1}
                                );
                            }, 1000)
                        });
                    }
                    // Example 2 End
                }}>Start</button>
    
                <button onClick={() => {
                    clearInterval(this.state.timer);
                }}>Stop</button>
            </div>
        );
    }

}

export default StopwatchClassBased;