import './App.css';
import React from 'react';

/*
2. Create a component with a simple adding machine. It will contain a paragraph (containing the text 0)
and 3 buttons (1, 10, 100). When one of the buttons is clicked, add that value to the number in the
paragraph. 
*HINT: For concise code (reused across buttons), reference ColourThingy.js.*

<AddingMachine />
*/


class AddingMachine extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
			sum: Number(props.sum),
		    numbers: [1, 10, 100]
        }
		
	    this.add = this.addNumbers.bind(this);
		this.zero = this.clearSum.bind(this);
    }

    addNumbers(event) {
       this.setState({sum: this.state.sum + this.state.numbers[Number(event.target.id)]});
	}
	
	clearSum() {
		this.setState({sum: Number(this.props.sum)});
	}

    render() {
        return (
            <div class="bottom-border">
	            <p>The current sum is: &nbsp; {this.state.sum}</p>
                <button id="0" class="bottom-row" onClick={this.add}>Add ONE</button>
				&nbsp;&nbsp;
                <button id="1" class="bottom-row" onClick={this.add}>Add TEN</button>
				&nbsp;&nbsp;
                <button id="2" class="bottom-row" onClick={this.add}>Add HUNDRED</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;
                <button id="reset" class="bottom-row" onClick={this.zero}>RESET</button>				
            </div>
        );
    }

}
export default AddingMachine;