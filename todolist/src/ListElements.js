import React from 'react';


class ListElements extends React.Component{

    state =  { content : this.props.content,
                status : this.props.status};

    changeValue = () =>{
        this.setState({status : !this.state.status});
    }

    render(){
        
        return (
        <li className = {this.state.status ? 'doneTodo' : ''}>
            <input type="checkbox" onChange = {this.changeValue}/> {this.state.content} 
        </li>
        );
    }
}


export default ListElements;