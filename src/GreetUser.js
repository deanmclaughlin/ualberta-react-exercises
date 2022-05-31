import './App.css';
import React from 'react';

/*
3. Create a component that will accept a property called name, and greet the user by their name.
     ... "Hello, xxx"
<GreetUser />
*/


class GreetUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
			salutation: props.salutation!==undefined ? props.salutation : "",
			name: props.name!==undefined ? props.name : "",
        }
		this.highlight = this.selectText.bind(this);
	    this.greet = this.getInput.bind(this);
		this.signoff = this.handleKeyDown.bind(this);
    }
	
	selectText(event) {
		event.target.select();
	}

    getInput(event) {
	    let theName = event.target.value.trim();
		theName = theName.replace(/ {2,}/g, " ");
		this.setState({salutation: "Hello", name: theName});
		document.getElementById("output-paragraph").scrollIntoView();
	}
	
	handleKeyDown(event) {
		if (event.key==="Enter") {
			this.setState({salutation: "Goodbye", name: this.state.name});
			event.target.value = this.state.name;
     		event.target.blur();
			document.getElementById("output-paragraph").scrollIntoView();
		}
	}

    render() {
		let output = "";
		if (this.state.salutation!=="" && this.state.name!=="") {
			output = this.state.salutation + ", " + this.state.name + ".";
		}
        return (
            <div class="bottom-border">
			    <p>
				Tell me your name:
				<br/>
				<input type="text" size="50" onFocus={this.highlight} onChange={this.greet} onKeyDown={this.signoff}></input>
				</p>
				<p id="output-paragraph">{output}</p>				
            </div>
        );
    }

}
export default GreetUser;