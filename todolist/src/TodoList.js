import React from 'react';
import List from './List.js';
import TodoResource from "./API";


class TodoList extends React.Component {
    state = { inputValue: '' };

    componentDidMount() {
        // fetchAllData()
        // .then(res => this.props.fetchData(res._embedded.todos));
        TodoResource.fetchAllData()
            .then(res => res.json())
            .then(res => this.props.refreshTodos(res._embedded.todos))
    }

    //    TodoResource.getAll()
    //    .then(res => res.json())
    //    .then(res => {
    //      console.log("todos res:", res._embedded.todos);
    //      this.props.refreshTodos( res._embedded.todos)
    //    })

    pushInput = () => {
        // this.state.todos.push({content: this.state.inputValue, status: false});
        if (this.state.inputValue !== '') {
            this.props.addNewtodo(this.state.inputValue, false);
        }
    }

    handleInput = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    render() {
        return (
            <div>
                <div>
                    <input className="input-text" type="text" onChange={this.handleInput} />
                    <button className="addButton" onClick={this.pushInput}>Add</button>
                </div>
                <ol>
                    <List todos={this.props.todos} />
                </ol>
            </div>
        );
    }
}




export default TodoList;