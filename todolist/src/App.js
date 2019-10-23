import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.js';

class App extends React.Component {

  render (){
    return (
      <div className="App-header">
        <div>
            <h2>React To Do List</h2>
        </div>
        <TodoList/>
    </div>
    );
  }

}

export default App;
