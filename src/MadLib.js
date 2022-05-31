import './App.css';
import React from 'react';

/*
4. Create a component that generates a mad lib (custom written) using properties passed in.
        <MadLib name="Jane" place="Edmonton" food="soup" verb="running" feeling="sad" />
*/


class MadLib extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
			completed: false,
			name: {label: "nameField", value: ""},
			place: {label: "placeField", value: ""},
			food: {label: "foodField", value: ""},
			verb: {label: "verbField", value: ""},
			emotion: {label: "emotionField", value: ""}
        }
	    this.getWords = this.getWords.bind(this);
		this.selectText = this.selectText.bind(this);
		this.enter = this.enter.bind(this);
		this.clearField = this.clearField.bind(this);
		this.clearAll = this.clearAll.bind(this);
    }

    getWords() {
        /* alert(Object.values(this.state).length);	*/
		/* this.setState({completed: false}); */
		for (let property in this.state) {
			if (property !== "completed") {
    			let field = document.getElementById(this.state[property].label);
                let word = String(field.value).trim();
		        if (word === "") {
		            alert(property.toUpperCase() + " must be filled in");
		            field.focus();
    			    return false;
	    		} else {
					field.value = word.replace(/ {2,}/g, " ");
                    this.setState({[property]: {label: field.id, value: field.value}});
				}
			}
		}
		document.getElementById("output-paragraph").scrollIntoView({block:"center", inline:"nearest"});
        this.setState({completed: true});		
	}
	
	selectText(event) {
		event.target.select();
	}
	
	enter(event) {
		if (event.key==="Enter") {
			this.getWords();
		}
	}
	
	clearField(event) {
		this.setState({completed: false});
		let field = event.target;
		for (let property in this.state) {
			if (this.state[property].label === field.id) {
				field.value = "";
				this.setState({[property]: {label: field.id, value: field.value}});
			}
		}
	}
	
	clearAll() {
		this.setState({completed: false});
		for (let property in this.state) {
			if (property !== "completed") {
				let field = document.getElementById(this.state[property].label);
				field.value = "";
				this.setState({[property]: {label: field.id, value: field.value}});
			}
		}		
	}

    render() {
		let output = "";
		if (this.state.completed) {
			output = this.state.name.value + " was feeling " + this.state.emotion.value
			         + ", so they went to " + this.state.place.value + " to "
			         + this.state.verb.value + " their " + this.state.food.value + ".";
		}
        return (
            <div class="bottom-border">
			    <p>
				Give me a name:
				<br/>
				<input id={this.state.name.label} type="text" size="50" onFocus={this.selectText} onKeyDown={this.enter}></input>
				</p>
				
				<p>
				Tell me a place:
				<br/>
				<input id={this.state.place.label} type="text" size="50" onFocus={this.selectText} onKeyDown={this.enter}></input>
				</p>
				
				<p>
				Name a food:
				<br/>
	            <input id={this.state.food.label} type="text" size="50" onFocus={this.selectText} onKeyDown={this.enter}></input>
				</p>				
				
				<p>
				Enter a verb:
				<br/>
				<input id={this.state.verb.label} type="text" size="50" onFocus={this.selectText} onKeyDown={this.enter}></input>
				</p>				
				
				<p>
	            Type in a feeling:
				<br/>
				<input id={this.state.emotion.label} type="text" size="50" onFocus={this.selectText} onKeyDown={this.enter}></input>
				</p>
				
				<button onClick={this.getWords}>GET MADLIB</button>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<button onClick={this.clearAll}>CLEAR ALL</button>

     			<p id="output-paragraph">{output}</p>				
            </div>
        );
    }

}
export default MadLib;