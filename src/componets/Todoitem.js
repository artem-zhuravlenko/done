import React, { useContext } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { FirebaseContext } from './context/firebase/firebaseContext';

export default function Todoitem ({todo}) {
  const getStyle = () => {
    return{
      textDecoration: todo.completed ? 'line-through' : 'none'
    }
  }

  const {id, title} = todo;
  // console.log(id)
  const {markComplete, delTodo} = useContext(FirebaseContext)
  return (
    <div style = {getStyle()}>
      <p>
        <input type="checkbox" 
                onChange={() => markComplete(id)}/>
        {title}
        <button>
        <i className="fa fa-usd"></i>
        </button>
        <button onClick={ () => delTodo(id)}>
          <i className="fa fa-times"></i>
        </button>
      </p> 
    </div>
  )
}

