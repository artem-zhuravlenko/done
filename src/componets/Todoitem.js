import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';

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
          <i className="fa fa-usd"></i>
          </button>
          <button onClick={this.props.delTodo.bind(this, id)}>
            <i className="fa fa-times"></i>
          </button>
        </p> 
      </div>
    )
  }
}
