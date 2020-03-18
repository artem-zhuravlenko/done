import React, {useState, useReducer} from 'react'
import { FirebaseContext } from "./firebaseContext"
import { firebaseReducer } from './firebaseReducer'
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../../../types'

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
  
  
  const [state, dispatch] = useReducer(firebaseReducer, todosArray)
  
  const markComplete = (id) => {
    dispatch({
      type: TOGGLE_TODO,
      id: id
    })
  }
  
  const delTodo = id => {
    dispatch({
      type: REMOVE_TODO,
      id: id
    })
  };

  const addTodo = title => {
    dispatch({
      type: ADD_TODO,
      title,
    })
  }

  return(
    <FirebaseContext.Provider value = {{state, markComplete, delTodo, addTodo}}>
      {children}
    </FirebaseContext.Provider>
  )
}

