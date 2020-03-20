import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO, FETCH_TODOS} from '../../../types'

const handlers = {
  [ADD_TODO]: (state, todo) => {
    return {
      todos: [...state.todos, todo]
    }
  },

  [FETCH_TODOS]: (state, {payload}) => ({
    ...state, 
    todos: payload
  }),

  [REMOVE_TODO]: (state, {payload}) =>{
    // console.log(payload)
    return ({
      ...state, 
      todos: state.todos.filter(todo => todo.id !== payload)
    })
  },

  [TOGGLE_TODO]: (state, {payload}) => {
    // console.log("hi")
    return ({
      // ...state,
      todos: state.todos.map(todo => {
        // console.log(todo.id + ": " + payload)
        if(todo.id === payload){
          // console.log(todo.id + ": " + todo.completed)
          todo.completed = !todo.completed;
        }
        return todo
      })
    })
  },


  // DEFAULT: (state) => state
}

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}