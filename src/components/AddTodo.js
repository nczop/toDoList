import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        console.log("tutaj", this.props)
        return (
            <React.Fragment>
                <input
                    type="text"
                    className="form-control"
                    placeholder="I should ..."   
                    onChange= {this.props.onAddNewTodoValueChange}
                    value= {this.props.inputValue}                                             
                />
                <button type="button" className="btn btn-success" onClick={this.props.onNewTodoAdd}> Confirm </button>                
            </React.Fragment>
        )
    }

    
}


