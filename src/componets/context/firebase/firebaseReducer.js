const handlers = {
  "ADD_TODO": (state, {payload}) => (
    [
      ...state,
      {
        id: Date.now(),
        title: payload.title,
        completed: false,
        bet: 0
      }
    ]
  ),

  DEFAULT: (state) => state
}

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}