import './App.css';
import React from 'react';

/*
1. Create a component that contains a button. When the user clicks the button, the button's
colours will invert (white text on black background). When the user clicks the button again,
it will return to its normal form. 
*HINT: Use a CSS class to assign styles.*

<InvertingButton />
*/


class InvertingButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
			index: 0,
		    label: ["Normal State", "Inverted State"],
			color: ["black-on-white", "white-on-black"]
        }
		
	    this.change = this.changeClass.bind(this);
    }

    changeClass() {
	   let newIndex = this.state.index + 1;
	   if (newIndex > this.state.label.length-1) { newIndex = 0; }
	   this.setState({index: newIndex});
	}

    render() {
	    let theClass = "invert-button " + this.state.color[this.state.index];
        return (
            <div class="bottom-border">
	            <button className={theClass} onClick={this.change}>{this.state.label[this.state.index]}</button>				
            </div>
        );
    }

}
export default InvertingButton;