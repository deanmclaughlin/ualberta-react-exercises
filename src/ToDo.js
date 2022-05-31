import './App.css';
import React from 'react';

/* 
To-Do To-Do's!
1. <DONE> Using the method shown in the ColourThingy component, bind the text field to a state property, and clear it after adding an item.
2. <DONE> Add a clear button.
3. <DONE> Add a sort button (alphabetical).
4. <DONE> Add checkboxes to each item.
5. <DONE> Add a completed list, and when an item is checked off, move it to the completed list, then disable the checkbox.
6. <DONE> Stop disabling the checkbox when moved, and allow the box to be unchecked to move it back to the pending list.
*/

class ToDo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
			textEntry: "",
            toDoItems: [],
			doneItems: []
        }
		
	    this.getInput = this.handleInput.bind(this);
		this.addToDo = this.addToDoList.bind(this);
		this.eraseLists = this.clearList.bind(this);
		this.sortLists = this.sorter.bind(this);
		this.toggleItem = this.handleCheck.bind(this);
    }

    handleInput(event) {
		this.setState({textEntry: event.target.value});
	}
	
	addToDoList() {
	    if (this.state.textEntry.trim() !== "") {
			const currentToDo = this.state.toDoItems;
            this.setState({
                toDoItems: [...currentToDo, this.state.textEntry.trim()],
			    textEntry: ""
            });
        }
		document.getElementById("input").scrollIntoView({block:"center", inline:"nearest"});
        document.getElementById("input").focus();	
	}

	clearList() {
		this.setState({toDoItems: []});
		this.setState({doneItems: []});
		
		document.getElementById("input").scrollIntoView({block:"center", inline:"nearest"});
		document.getElementById("input").focus();
	}
	
	sorter() {
		let newItems = this.state.toDoItems.sort();
		this.setState({toDoItems: newItems});
		
		newItems = this.state.doneItems.sort();
		this.setState({doneItems: newItems});
		
		document.getElementById("input").scrollIntoView({block:"center", inline:"nearest"});
		document.getElementById("input").focus();
	}
	
	handleCheck(event) {
		if (event.target.checked) {
			const newToDo = this.state.toDoItems.filter(function(value, index, arr) {
				return value!== event.target.value
			});
			this.setState({toDoItems: newToDo});
			
			const currentDone = this.state.doneItems;
			this.setState({doneItems: [...currentDone, event.target.value]});
		} else {
			const newDone = this.state.doneItems.filter(function(value, index, arr) {
				return value!== event.target.value
			});
			this.setState({doneItems: newDone});
			
			const currentToDo = this.state.toDoItems;
			this.setState({toDoItems: [...currentToDo, event.target.value]});
		}
	    
		document.getElementById("input").scrollIntoView({block:"center", inline:"nearest"});
		document.getElementById("input").focus();	
	}

    render() {
        return (
            <div>
			
                <div class="list-flex">
				<ul>
				    <h3>Tasks To Do</h3>
                    {this.state.toDoItems.map(x =>                    /* For each item in the toDoItems list, render a <ul> item. */
					    <li>
						<input type="checkbox" value={x} checked={false} onClick={this.toggleItem}/> &nbsp; {x}
						</li>
				    )}
                </ul>
				
				<ul>
				    <h3>Completed</h3>
					{this.state.doneItems.map(y =>                  /* For each item in the doneItems list, render a <ul> item. */
					    <li>
						{/* <input type="checkbox" value={y} checked={true} onClick={this.toggleItem} disabled={true}/> &nbsp; */}
						<input type="checkbox" value={y} checked={true} onClick={this.toggleItem}/> &nbsp; {y}
					</li>
				    )}
			    </ul>
		        </div>
				
				<div class="bottom-border">
                <input type="text" id="input" class="bottom-row" value={this.state.textEntry} onChange={this.getInput}></input>
				
				&nbsp;&nbsp;
                <button class="bottom-row" onClick={this.addToDo}>ADD TO-DO</button>
                
				&nbsp;&nbsp;
				<button class="bottom-row" onClick={this.eraseLists}>CLEAR</button>
				
				&nbsp;&nbsp;
	            <button class="bottom-row" onClick={this.sortLists}>SORT</button>
                </div>
				
            </div>
        );
    }

}
export default ToDo;