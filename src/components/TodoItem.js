import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.css";

export class TodoItem extends Component {
    
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            brderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        const { id, title } = this.props.todo;
        return (
        <div style = {this.getStyle()}>
            <p> 
            <input type="checkbox" onChange= {this.props.markComplete.bind(this, id)} /> 
            {' '}
            {title}
            <button onClick={this.props.delTodo.bind(this, id)} style= {btnStyle}>x</button>                                            
            </p>
        </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
