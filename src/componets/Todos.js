import React, { Component } from 'react'

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <h1>{ todo.text }</h1>
    ));
  }
}

export default Todos;