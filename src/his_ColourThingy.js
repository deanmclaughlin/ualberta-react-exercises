import './App.css';
import React from 'react';

class ColourThingy extends React.Component {
    constructor(props) {
        super(props);
        // Initialize state.
        this.state = {
            red: 0,
            green: 0,
            blue: 0
        }

        // React requires us to bind methods that are used with an event listener.
        this.handleColours = this.handleColours.bind(this);

        /*
        this.handleColourRed = this.handleColourRed.bind(this);
        this.handleColourGreen = this.handleColourGreen.bind(this);
        this.handleColourBlue = this.handleColourBlue.bind(this);
        */
    }
    // When the red field is changed, clamp the value between 0 and 255, and update the state.
    handleColours(event) {
        this.setState({
            red: event.target.id==="red"?Math.min(Math.max(event.target.value, 0), 255):this.state.red,
            green: event.target.id==="green"?Math.min(Math.max(event.target.value, 0), 255):this.state.green,
            blue: event.target.id==="blue"?Math.min(Math.max(event.target.value, 0), 255):this.state.blue
        });
    } 

    /*
    handleColourRed(event) {
        this.setState({
            red: Math.min(Math.max(event.target.value, 0), 255)
        });
    }
    // Repeat for green and blue.
    handleColourGreen(event) {
        this.setState({
            green: Math.min(Math.max(event.target.value, 0), 255)
        });
    }
    handleColourBlue(event) {
        this.setState({
            blue: Math.min(Math.max(event.target.value, 0), 255)
        });
    }
    */
    render() {
        // Mock up a CSS rule using our state for the box.
        let styleColours = {
            backgroundColor: `RGB(${this.state.red}, ${this.state.green}, ${this.state.blue})`
        }
        return (
            <div className='flex flexColumn'>
                {/* Apply the CSS rule to the box. */}
                <div id="colourBox" style={styleColours}>

                </div>
                <div className='flex'>
                    {/* Set up our inputs and link them to the event handlers. */}
                    <input id="red" className='colourInput' type="number" onChange={this.handleColours} value={this.state.red}></input>
                    <input id="green" className='colourInput' type="number" onChange={this.handleColours} value={this.state.green}></input>
                    <input id="blue" className='colourInput' type="number" onChange={this.handleColours}  value={this.state.blue}></input>
                </div>
            </div>

        );
    }

}
export default ColourThingy;