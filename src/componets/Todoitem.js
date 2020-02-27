import React, { Component } from 'react'

export default class Todoitem extends Component {
  getStyle = () => {
    return{
      // color: "red",
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const {id, title} = this.props.todo;
    return (
      <div style = {this.getStyle()}>
        <p>
          <input type="checkbox" 
                 onChange={this.props.markComplete.bind(this, id)}/>
          {title}
          <button>
            $
          </button>
          <button onClick={this.props.delTodo.bind(this, id)}>
            x
          </button>
        </p> 
      </div>
    )
  }
}
