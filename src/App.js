import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';
import uuid from 'uuid';
import AddTodo from './components/AddTodo';
import axios from 'axios';

const URL = 'https://3fearkr3qd.execute-api.eu-central-1.amazonaws.com/dev/todos';
class App extends Component {
  state = {
    todo: [],
    newTodoValue: '',
  }

  componentDidMount() {
    axios.get(URL)
      .then(response =>  {
        console.log(response.data);
        this.setState({todo: response.data})
      })      
  }

  onAddNewTodoValueChange = (e) => {
    this.setState({ newTodoValue: e.target.value })
  }

  delTodo = (id) => {
    const newTodoList = this.state.todo.filter(todo => todo.id !== id)
    this.setState({ todo: newTodoList })
    axios.delete(URL+ '/'+ id)
  }

  markComplete = (id) => {
    const newTodoList = this.state.todo.map(todo => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
        axios.put (URL+ '/'+ id, {
          text: todo.text,
          checked: todo.checked
        })
      }
      return todo;
    })   

    this.setState({ todo: newTodoList })
  }

  onNewTodoAdd = () => { 
    if (this.state.newTodoValue==='') {
      return false
    }
    const toNatalkaWysle = {
      text: this.state.newTodoValue
    }   
    axios.post (URL, toNatalkaWysle)
    .then(dupcia => {
      this.setState({ todo: [...this.state.todo, dupcia.data], newTodoValue: '' })
    })    
  }  
  
    render() {
    console.log(this.state)
    return (
      <div className="App">
        <Todo
          todoList={this.state.todo}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
          addNewTodoValue={this.addNewTodoValue}
        />
        <AddTodo
          onNewTodoAdd={this.onNewTodoAdd}
          onAddNewTodoValueChange={this.onAddNewTodoValueChange}
          inputValue={this.state.newTodoValue}
        />
      </div>
    );
    
  }

}



export default App;


  // delTodo = (id) => {
  //   const newTodoList = this.state.todo.filter(todo => {
  //     if (todo.id === id) {
  //       return false;
  //     }
  //     return true;    
  //   })
  //   this.setState({ todo: newTodoList})              

  // }
