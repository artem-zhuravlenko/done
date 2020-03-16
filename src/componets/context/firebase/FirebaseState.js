import React, {useState} from 'react'
import { FirebaseContext } from "./firebaseContext"


export const FirebaseState = ({children}) => {

  const todosArray = [
    {
      id: 1,
      title: "take out trash",
      completed: false,
      bet: 0
    },
    {
      id: 2,
      title: "listen music",
      completed: false,
      bet: 0
    },
    {
      id: 3,
      title: "Programming...",
      completed: false,
      bet: 0
    },
  ]

  const [todos, setTodos] = useState(todosArray);

  
  const markComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    )
  }
  
  const delTodo = id => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  };

  const addTodo = title => {
    setTodos(
      [
        ...todos,
        {
          id: Date.now(),
          title: title,
          completed: false,
          bet: 0
        }
      ]
    )
  }
  return(
    <FirebaseContext.Provider value = {{todos, markComplete, delTodo, addTodo}}>
      {children}
    </FirebaseContext.Provider>
  )
}
