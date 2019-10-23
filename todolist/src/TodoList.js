import React from 'react';
import List from './List.js';
import { connect } from "react-redux";


class TodoList extends React.Component{
    state = {inputValue : ''};    

    pushInput = () => {
        // this.state.todos.push({content: this.state.inputValue, status: false});
        if (this.state.inputValue !== ''){
            this.props.addNewTodo(this.state.inputValue , false);
        }
       
   }

   handleInput = (event) =>{
       
        this.setState({inputValue : event.target.value});
    }   

    render(){
        return (
    <div>
        <div>
            <input className="input-text" type="text" onChange ={this.handleInput} />
            <button className="addButton" onClick = {this.pushInput}>Add</button>
        </div>
        <ol>
            <List todos = {this.props.todos}/>
        </ol>
    </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
  });
  
  const mapStateToDispatch = dispatch => ({
    addNewTodo: (contentVal, status1) =>
    dispatch({
        type: "ADD_TODO",
        payload : {content: contentVal, status: status1}
    })
  });

  export default connect(mapStateToProps,mapStateToDispatch)(TodoList);