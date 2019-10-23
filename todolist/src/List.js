import React from 'react';
import ListElements from './ListElements.js';


class List extends React.Component{

    render(){
        const {todos} = this.props;
        return (    
            <div>
                {
            todos.map((todo) =>
            <ListElements content = {todo.content} 
            status = {todo.status}/>
            )}
            </div>

        );
    }
}

export default List;
