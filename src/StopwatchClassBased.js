import './App.css';
import React from 'react';


// Class based components allow you to have more control over the component lifecycle in a more familiar (in some cases) syntax.
class StopwatchClassBased extends React.Component {
    // -------------------------
    // Initial Component Setup (Once)
    // -------------------------

    // 1. Gets called on inital setup (prior to the initial render).
    constructor() {
        // The React.Component constructor MUST be called.
        super();

        // State properties are initialized by assigning the state object in class-based components.
        this.state = {
            seconds: 0,
			countStep: 0.1,
        };
    }
	
	count(numSeconds) {
	    this.setState({seconds: this.state.seconds + numSeconds});
    }
	
	clear() {
		this.setState({seconds: 0});
		delete this.jsInterval;
	}

    // 2. render gets called for the initial loading to the page.

    // 3. componentDidMount gets called on the initial render (after the render takes place).
    componentDidMount() {

    }
    
    // -------------------------
    // Component Refresh (Zero to Many Times)
    // -------------------------

    // 1. shouldComponentUpdate gets called once an update (or not) is determined for the component.
    /*
    shouldComponentUpdate() {

    }
    */
    // 2. Render gets called every time the component "refreshes" in the browser (typically due to a state change).
    render() {
		
		/*
		if (this.state.seconds > 10) {
			var newseconds = this.state.seconds - 10
		} else {
			newseconds = 0
		}
		*/
		let secStep = this.state.countStep;
		let msDelay = secStep * 1000;
		
        return (
            <div>
                <h2>Class-Based Stopwatch</h2>
				
                {/* When we reference state in a class-based object, we must reference it through this.state */}
				
                <p id="time">{((Math.floor(this.state.seconds/3600)).toFixed(0)).padStart(2,"0")}
				    &thinsp;:&thinsp;{((Math.floor((this.state.seconds%3600)/60)).toFixed(0)).padStart(2,"0")}
					&thinsp;:&thinsp;{((this.state.seconds%60).toFixed(1)).padStart(4,"0")}</p>
				
                { /* Using the ref attribute we can associate an element/node in JSX to a property of the class, allowing us to skip a lot of the querySelector-ing. */ }
                {/* When we ask an HTML event to fire a method in a class-based React component, we have to do ".bind(this)" at the end in order to associate it with the component. */}
				
				<button id="start" class="clock-button"
				        onClick={(
						            () => { if (this.jsInterval === undefined) {
									          this.jsInterval=setInterval(() => {this.count(secStep)}, msDelay);   /* this.setState({seconds: this.state.seconds+1});*/
									        }
									      }    
								)}> Start </button>
				
				<button id="stop" class="clock-button"
				        onClick={(
						           () => { clearInterval(this.jsInterval); delete this.jsInterval; }       /* this.setState({seconds: newseconds}); */ /* seconds: this.state.seconds>10 ? this.state.seconds-10 : 0 */
				                )}> Pause </button>
		  
				<button id="reset" class="clock-button"
				        onClick ={(
						             () => { clearInterval(this.jsInterval); this.clear(); }
						         )}> Reset </button>
            </div>
        );
    }

    // 3. componentDidUpdate gets called after a successful "refresh".
    componentDidUpdate() {

    }

    // -------------------------
    // Component Destruction (Once, or Tab Closes)
    // -------------------------

    // 1. componentWillUnmount gets called immediately before the component is "destroyed", IE removed from the page.
    componentWillUnmount() {

    }


    // componentDidCatch runs if there's an exception.
    componentDidCatch () {

    }

    updateStateProp() {
        // State properties are updated using setState in class-based components.
        this.setState({
            seconds: 0,
			countStep: 1,
        });
    }
}


export default StopwatchClassBased;
