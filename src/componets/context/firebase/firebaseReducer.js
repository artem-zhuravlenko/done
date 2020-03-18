import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from '../../../types'

const handlers = {
  [ADD_TODO]: (state, {title}) => [
    ...state,
    {
      title,
      completed: false,
      id: Date.now(),
      bet: 0
    }
  ],

  [TOGGLE_TODO]: (state, {id}) => (
    state.map(todo => {
      if(todo.id === id ){
        todo.completed = !todo.completed;
      }
      return todo;
    })
  ),

  [REMOVE_TODO]: (state, {id}) => (
    state.filter(todo => (todo.id !== id))
  ),

  DEFAULT: (state) => state
}

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}