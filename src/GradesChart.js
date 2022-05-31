import './App.css';
import React from 'react';

/*
5. Create a component that accepts a course name and grade percentage via inputs.
When submitted, it adds the values to a table (trimmed text). The table should have
headings and a running average at the bottom. All numeric values should be rounded
to the nearest tenth.

**BONUS:** Add a third field for weight / grade points, and factor that into the average calculation.

    | Course      | Grade       |
    | ----------- | ----------- |
    | English     | 86.5        |
    | Math        | 90.2        |
    | **Average** | 88.4        |
	
<GradeChart />
*/

class GradesChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           course: []
        }
		this.selectText = this.selectText.bind(this);
		this.enter = this.handleKeyDown.bind(this);
	    this.add = this.addCourse.bind(this);
		this.clear = this.clearAll.bind(this);
    }
	
	selectText(event) {
		event.target.select();
	}
	
	cleanFields() {
		let theField = document.getElementById("courseName")
		theField.value = theField.value.trim().replace(/ {2,}/g, " ");
		
		theField = document.getElementById("courseMark");
		theField.value = theField.value.trim().replace(/ {1,}/g, "");
		
		theField = document.getElementById("courseWeight");
		theField.value = theField.value.trim().replace(/ {1,}/g, "");		
	}

    handleKeyDown(event) {
		if (event.key==="Enter" || event.key==="Tab") {
			event.preventDefault();
			this.cleanFields();
			let fieldIDs = ["courseName", "courseMark", "courseWeight"];
			for (let theId of fieldIDs) {
		        let theField = document.getElementById(theId);
		        if (theField.value === "") {
				    theField.focus();
				    theField.scrollIntoView({block:"center", inline:"nearest"});
				    return false;
			    }
			}
			event.target.blur();
     	    this.addCourse(event);
		}
	}

    addCourse(event) {
		this.cleanFields();
		
		let courseField = document.getElementById("courseName");
        let newCourse = courseField.value;
		let markField = document.getElementById("courseMark")
		let newMark = markField.value;
		let weightField= document.getElementById("courseWeight")
		let newWeight = weightField.value;

	    if (newCourse==="") {
			alert("Course NAME must be filled in");
			courseField.focus();
		} else if (newMark === "") {
			alert("GRADE must be filled in");			
		    markField.focus();
		} else if (newWeight === "") {
			alert("Course WEIGHT must be filled in");
			weightField.focus();
		} else {
			if (isNaN(Number(newMark)) || Number(newMark) < 0 || Number(newMark)>100) {
				alert("Grade (percentage) must be a number between 0 and 100");
				markField.value = "";
				markField.focus();
			} else if (isNaN(Number(newWeight)) || Number(newWeight)<0 || Number(newWeight)>1) {
				alert("Weight must be a number between 0.0 and 1.0");
				weightField.value = "";
				weightField.focus();
			} else {
				newMark = Number(Math.round(newMark*10)/10);
				newWeight=Number(Math.round(newWeight*10)/10);
     			const currentCourses = this.state.course;
                this.setState({
                    course: [ ...currentCourses, {name: newCourse, mark: Number(newMark), weight: Number(newWeight)} ]
                });			
		    	courseField.value = "";
		        markField.value = "";
			    weightField.value = "";
			}
        }
		event.target.scrollIntoView({block:"center", inline:"nearest"});
	}
	
	clearAll(event) {
		this.setState({course: []});
		event.target.scrollIntoView({block:"center", inline:"nearest"});
	}

    render() {
		let average = -99;
		if (this.state.course.length > 0) {
			let sum = 0;
			let sumwt = 0;
			for (let item of this.state.course) {
				sum = sum + item.mark*item.weight;
				sumwt = sumwt + item.weight;
			}
            average = sum/sumwt;		
		}
		average = (Math.round(10*Number(average))/10);

		
        return (
            <div class="bottom-border">

            <table>
            <thead>
    			<tr>
                    <th>Course</th>
                    <th>Grade (%)</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody>
                {this.state.course.map(x =>
				    <tr>
					    <td>{x.name}</td>
					    <td>{x.mark.toFixed(1)}</td>
					    <td>{x.weight.toFixed(1)}</td>
					</tr>
				)}
				{average >= 0 ? <tr class="tr-average"><td>AVERAGE</td><td>{average.toFixed(1)}</td><td></td></tr> : <tr></tr>}
            </tbody>
            </table>

            <p>
			Course name:&nbsp;
			<input id="courseName" type="text" size="30" onFocus={this.selectText} onKeyDown={this.enter}></input>
			&nbsp;&nbsp;&nbsp;&nbsp;
			
			Grade (percentage):&nbsp;
			<input id="courseMark" type="text" size="5" onFocus={this.selectText} onKeyDown={this.enter}></input>
			&nbsp;&nbsp;&nbsp;&nbsp;
			
			Weight (0.0&thinsp;&ndash;&thinsp;1.0):&nbsp;
			<input id="courseWeight" type="text" size="5" onFocus={this.selectText} onKeyDown={this.enter}></input>
			</p>
			<button class="bottom-row" onClick={this.add}>ADD COURSE</button>
			&nbsp;&nbsp;
			<button class="bottom-row" onClick={this.clear}>CLEAR TABLE</button>
			
            </div>
        );
    }

}
export default GradesChart;