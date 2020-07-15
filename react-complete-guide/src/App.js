import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Ketul',age : 30},
      {name: 'Nil',age : 27},
      {name: 'Jiger',age : 31}
    ],
    otherState : 'Other state'

  }

  switchNameHandler = (newName) => {
    //console.log("Was Clicked!");
    this.setState({
      persons: [
        {name: newName,age : 30},
        {name: 'Nil',age : 27},
        {name: 'Jiger',age : 32}
      ]
    });
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

  render(){

    const style = {
      backgroundColor : 'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

    return(
      <div className="App">
        <h1>First ,React App</h1>
        <p> THis is really working.</p>
        <button 
          style={style}
          onClick={(event) => this.switchNameHandler("Ketulkumar")}>Switch Name</button>
        <Person 
          name= {this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'ketul!!')}
          changed={this.nameChangeHandler} > My Hobbies : Cricket</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div',{ className:'App'}, React.createElement('h1',null,'Element created using CreateElement'))
  }
}
export default App;
