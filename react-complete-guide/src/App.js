import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Ketul',age : 30},
      {name: 'Nil',age : 27},
      {name: 'Jiger',age : 31}
    ],
    otherState : 'Other state',
    showPerson : false

  }

  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        {name: 'Ketul',age : 30},
        {name: event.target.value,age : 27},
        {name: 'Jiger',age : 32}
      ]
    });
  }

  togglePersonHandler = () => {

    const doesShow = this.state.showPerson;
    this.setState({showPerson : !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  render(){

    const style = {
      backgroundColor : 'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person,index) =>{
            return  <Person 
              click={()=> this.deletePersonHandler(index)}
              name= {person.name} 
              age={person.age}/>
          })}
        </div> 
      );
    }

    return(
      <div className="App">
        <h1>First ,React App</h1>
        <p> THis is really working.</p>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Switch Name</button>
        
        {persons}
        
      </div>
    );
    //return React.createElement('div',{ className:'App'}, React.createElement('h1',null,'Element created using CreateElement'))
  }
}
export default App;
