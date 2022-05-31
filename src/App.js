/* import logo from './logo.svg'; */
import './App.css';
import React, { useState } from 'react';
import MyComponentFunctional from './his_MyComponentFunctional';
import MyComponentClassBased from './his_MyComponentClassBased';
import StopwatchFunctional from './his_StopwatchFunctional';
import StopwatchClassBased from './StopwatchClassBased';
import ColourThingy from './his_ColourThingy';
import ToDo from './ToDo';
import InvertingButton from './InvertingButton';
import AddingMachine from './AddingMachine';
import GreetUser from './GreetUser.js';
import MadLib from './MadLib.js';
import GradesChart from './GradesChart.js';

// Whatever gets returned from this method (should probably be JSX) is what will get pushed into the "root" div in the HTML.
function App() {
  // In functional syntax, the below terms represent (in order): The name of the state property (testState), the method to change the state property (setTestState), the method call that incorporates it into state (useState), and the value that it will be initialized to (false).
  const [testState, setTestState] = useState(false);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Functional & Class-Based Components</h1>
      </header>
      <div className='flex'>
        <MyComponentFunctional />
        <MyComponentClassBased />
      </div>
	  <p></p>
	  <div class="bottom-border"></div>
	  <p></p>
      <div className='flex'>
        <StopwatchFunctional />
        <StopwatchClassBased />
      </div>
	  <p></p><p></p>
	  <div class="bottom-border"></div>
	  <p></p>
      <ColourThingy />
      <ToDo />
	  <InvertingButton />
	  <AddingMachine sum="666" />
	  <GreetUser salutation="Hey" name="loser" />
	  <MadLib />
	  <GradesChart />
	  <footer>
        <hr/>
      </footer>
    </div>
  );
}


export default App;
