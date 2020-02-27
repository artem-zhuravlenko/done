import React, { Component } from 'react'
import Todoitem from './Todoitem'

class Todos extends Component {
  render() {
    // return (<p>GG</p>)
    return this.props.todos.map((todo) => (
      <Todoitem todo= {todo}
                key = {todo.id}
                markComplete = {this.props.markComplete}/>
    ));
  }
}

export default Todos;