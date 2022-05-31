import './App.css';
import React from 'react';


// Class based components allow you to have more control over the component lifecycle in a more familiar (in some cases) syntax.
class MyComponentClassBased extends React.Component {
    // -------------------------
    // Initial Component Setup (Once)
    // -------------------------

    // 1. Gets called on inital setup (prior to the initial render).
    constructor() {
        // The React.Component constructor MUST be called.
        super();

        // State properties are initialized by assigning the state object in class-based components.
        this.state = {
            name: "World"
        };

        
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
        return (
            <main>
                <h2>Class-Based Component (his)</h2>
                {/* When we reference state in a class-based object, we must reference it through this.state */}
                <p>Hello, {this.state.name}!</p>
                { /* Using the ref attribute we can associate an element/node in JSX to a property of the class, allowing us to skip a lot of the querySelector-ing. */ }
                <input id="classBasedName" type="text" ref={thisNode => this.textField = thisNode}></input>
                {/* When we ask an HTML event to fire a method in a class-based React component, we have to do ".bind(this)" at the end in order to associate it with the component. */}
                <button id="classBasedButton" onClick={
                    (() => {this.setState({
                        name: this.textField.value
                    });}).bind(this)
                }>Click Me!</button>
            </main>
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
            name: "Bob"
        });
    }
}


export default MyComponentClassBased;
