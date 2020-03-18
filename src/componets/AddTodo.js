import React, { useContext, useState } from 'react'
import { FirebaseContext } from './context/firebase/firebaseContext';

function AddTodo() {

  const {addTodo} = useContext(FirebaseContext)

  const [title, setTitle] = useState('');

  return (
    <div>
      <input 
        className="addTodo" 
        value = {title} 
        onChange = {e => setTitle(e.target.value)} 
        type="text"/>
      <button 
      className="submit"
      onClick ={() => {
        addTodo(title) 
        setTitle('')
      } }
      >Submit</button>
    </div>
  )
}

export default AddTodo;