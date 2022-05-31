import './App.css';
import React from 'react';

/* Replace "AppName" below with a name of your choice
   Add line to App.js: import AppName from './AppName.js';*/

class AppName extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
			key1: "property",
			key2: 100.0
            /* etc., for as many keys & properties as desired */
        }
		
	    this.myFunction = this.myFunction.bind(this);
    }

    myFunction() {
         /* normal javascript here, to define a method for AppName */
	}
	

    render() {
        return (
            <div class="bottom-border">
			    <p>
				App stuff will appear here.
				<br/>
				<input type="text" size="50"></input>
				</br>
				<button>A BUTTON</button>
				</p>				
            </div>
        );
    }

}

export default AppName;