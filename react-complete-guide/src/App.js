import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Ketul',age : 30},
      {name: 'Nil',age : 27},
      {name: 'Jiger',age : 31}
    ],
    otherState : 'Some other value'
  });

  console.log(personsState);

  const switchNameHandler = () => {
    //console.log("Was Clicked!");
    setPersonsState({
      persons: [
        {name: 'Ketulkumar',age : 30},
        {name: 'Nil',age : 27},
        {name: 'Jiger',age : 32}
      ]
    });
  }


  return(
    <div className="App">
      <h1>First ,React App</h1>
      <p> THis is really working.</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name= {personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies : Cricket</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
    //return React.createElement('div',{ className:'App'}, React.createElement('h1',null,'Element created using CreateElement'))
}
export default app;

