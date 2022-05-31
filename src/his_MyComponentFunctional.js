import './App.css';
import React, { useState, useEffect, useRef } from 'react';


// Functional components are more streamlined but allow less lifecycle control.
function MyComponentFunctional() {

    // State properties are initialized using useState in functional components.
    const [name, setName] = useState("World");
    // Using refs in functional components requires them to be initialized with useRef().
    // They are then assigned using ref={name}, and referenced using name.current.
    const inputField = useRef();
    
   function updateStateProp() {
        // State properties are updated using their individual methods in functional components.
        setName("Bob");
   }

    // Called immediately following rendering (the component's return).
    // Similar to componentDidMount and componentDidUpdate.
    useEffect(() => {

        // Called when the component unmounts.
        // Similar to componentWillUnmount.
        return () => {

        };
    });

    // There is no "nice" way to do shouldComponentUpdate or componentDidCatch in functional components.

    return (
        <main>
            <h2>Functional Component (his)</h2>
            <p>Hello, {name}!</p>
            <input id="functionalName" type="text" ref={inputField}></input>
            <button id="functionalButton" onClick={() => {setName(inputField.current.value);}}>Click Me!</button>
        </main>
    );
}

export default MyComponentFunctional;
