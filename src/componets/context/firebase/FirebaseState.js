import React, {useReducer} from 'react'
import { FirebaseContext } from "./firebaseContext"
import { firebaseReducer } from './firebaseReducer'
import { ADD_TODO, FETCH_TODOS, REMOVE_TODO, TOGGLE_TODO } from '../../../types'
import axios from 'axios'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {
  const initialState = {
    todos: [],
  }

  const [state, dispatch] = useReducer(firebaseReducer, initialState)
  
  const fetchTodos = async () => {
    const res = await axios.get(`${url}/todos.json`);

    const payload = Object.keys(res.data || '').map(key => {
      return ({
        ...res.data[key],
        id: key
      })
    })

    dispatch({type: FETCH_TODOS, payload})

  }


  const addTodo = async title => {
    const todo = {
      title,
      id: new Date().toJSON(),
      completed: false,
    }

    await axios.post(`${url}/todos.json`, todo);

    dispatch({
      type: ADD_TODO,
      todo,
    })
  }

  const delTodo = async id => {
    await axios.delete(`${url}/todos/${id}.json`)

    dispatch({
      type: REMOVE_TODO,
      payload: id
    })
  }

  const toggleTodo = async id => {    
    await axios.get(`${url}/todos/${id}.json`) 
    .then(async (res) => {
      await axios.patch(`${url}/todos/${id}.json`, {completed: !res.data.completed})
    })

    dispatch({
      type: TOGGLE_TODO,
      payload: id
    })
  }

  return(
    <FirebaseContext.Provider value = {{state, addTodo, fetchTodos, delTodo, toggleTodo}}>
      {children}
    </FirebaseContext.Provider>
  )
}

