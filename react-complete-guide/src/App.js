import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id:'1',name: 'Ketul',age : 30},
      {id:'2',name: 'Nil',age : 27},
      {id:'3',name: 'Jiger',age : 31}
    ],
    otherState : 'Other state',
    showPerson : false

  }

  nameChangeHandler = (event,personId) =>{
    //const person = this.state.persons.find(personId);
    const personIndex = this.state.persons.findIndex(p =>{
        return p.id === personId;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    //const person = Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;


    this.setState({
      persons: persons
    });
  }

  togglePersonHandler = () => {

    const doesShow = this.state.showPerson;
    this.setState({showPerson : !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    //const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
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
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event,person.id)}/>
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
