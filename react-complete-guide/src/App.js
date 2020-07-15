import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render(){
    return(
      <div className="App">
        <h1>First ,React App</h1>
        <p> THis is really working.</p>
        <Person name="Ketul" age="30"/>
        <Person name="Nil" age="27"> My Hobbies : Cricket</Person>
        <Person name="Jiger" age="31"/>
      </div>
    );
    //return React.createElement('div',{ className:'App'}, React.createElement('h1',null,'Element created using CreateElement'))
  }
}
export default App;
