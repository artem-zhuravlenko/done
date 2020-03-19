import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO, FETCH_TODOS} from '../../../types'

const handlers = {
  [ADD_TODO]: (state, todo) => {
    return {
      todos: [...state.todos, todo]
    }
  },

  [FETCH_TODOS]: (state, {payload}) => ({
    ...state, todos: payload
  }),

  DEFAULT: (state) => state
}

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}