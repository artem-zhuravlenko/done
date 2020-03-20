import React, {useContext} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { FirebaseContext } from './context/firebase/firebaseContext';

export default function Todoitem ({todo}) {
  const {delTodo, toggleTodo} = useContext(FirebaseContext);
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
        <input type="checkbox" 
          onChange = {() => toggleTodo(id)}
          checked = {todo.completed}/>
          
        {title}
        <button>
        <i className="fa fa-usd"></i>
        </button>
        <button >
          <i className="fa fa-times" onClick ={() => delTodo(id)}></i>
        </button>
      </p> 
    </div>
  )
}

