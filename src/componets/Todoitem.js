import React, { Component } from 'react'

export default class Todoitem extends Component {
  render() {
    return (
      <div>
        <p>
          <input type="checkbox"/>
          {this.props.todo.title}
        </p> 
      </div>
    )
  }
}
