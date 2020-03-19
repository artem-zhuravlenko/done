import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
// import { FirebaseContext } from './context/firebase/firebaseContext';

export default function Todoitem ({todo}) {
  const getStyle = () => {
    return{
      textDecoration: todo.completed ? 'line-through' : 'none'
    }
  }

  const {id, title} = todo;
  // console.log(id)
  return (
    <div style = {getStyle()}>
      <p>
        <input type="checkbox" />
        {title}
        <button>
        <i className="fa fa-usd"></i>
        </button>
        <button >
          <i className="fa fa-times"></i>
        </button>
      </p> 
    </div>
  )
}

