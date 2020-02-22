import React, { Component } from 'react'
import Todos from './componets/Todos'
export default class App extends Component {

  state = {
    todos:[
      {
        id: 1,
        text: "take out trash",
        completed: false
      },
      {
        id: 2,
        text: "listen music",
        completed: false
      },
      {
        id: 3,
        text: "Programming...",
        completed: false
      },
      
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos = {this.state.todos} />
      </div>
    );
  }
}
