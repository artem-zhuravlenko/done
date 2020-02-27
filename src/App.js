import React, { Component } from 'react'
import Todos from './componets/Todos'
export default class App extends Component {

  state = {
    todos:[
      {
        id: 1,
        title: "take out trash",
        completed: false,
        bet: 0
      },
      {
        id: 2,
        title: "listen music",
        completed: false,
        bet: 0
      },
      {
        id: 3,
        title: "Programming...",
        completed: false,
        bet: 0
      },
      
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => 
        id !== todo.id
      )]
    })
  };

  render() {
    return (
      <div className="App">
        <Todos todos = {this.state.todos}
               markComplete = {this.markComplete}
               delTodo = {this.delTodo} />
      </div>
    );
  }
}
