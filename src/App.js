import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';
import uuid from 'uuid';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todo: [
      {
        id: "1",
        title: 'Take out the trash',
        completed: false
      },
      {
        id: "2",
        title: 'Do project',
        completed: false
      },
      {
        id: "3",
        title: 'Drink wine',
        completed: false
      },
      {
        id: "4",
        title: 'Dinner with fiend',
        completed: false
      },
    ],
    newTodoValue: '',
  }

  onAddNewTodoValueChange = (e) => {
    this.setState({ newTodoValue: e.target.value })
  }
  
  delTodo = (id) => {
    const newTodoList = this.state.todo.filter(todo => todo.id !== id)
    this.setState({ todo: newTodoList })

  }

  markComplete = (id) => {
    const newTodoList = this.state.todo.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })

    this.setState({ todo: newTodoList })
  }

  onNewTodoAdd = () => {
    const newTodo = {
      id: uuid(),
      title: this.state.newTodoValue,
      completed: false
    }
    this.setState({ todo: [...this.state.todo, newTodo], newTodoValue: '' })
  }
    
  render() {
    console.log (this.state)
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
