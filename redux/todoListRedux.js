export const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  TOGGLE: 'TOGGLE',
  REMOVE_COMPLETED: 'REMOVE_COMPLETED'
}

export const actionCreators = {
  add: (item) => {
    return { type: types.ADD, payload: item }
  },
  remove: (index) => {
    return { type: types.REMOVE, payload: index }
  },
  toggle: (index) => {
    return { type: types.TOGGLE, payload: index }
  },
  removeCompleted: () => {
    return { type: types.REMOVE_COMPLETED }
  }
}

const initialState = {
  todos: [
    { text: 'Mow the grass', completed: false },
    { text: 'Walk the dogs', completed: false },
    { text: 'Do the laundry', completed: true }
  ]
}

export const reducer = (state = initialState, action) => {
  const { todos } = state
  const { type, payload } = action

  switch (type) {
    case types.ADD: {
      return {
        ...state,
        todos: [...todos, { text: payload, completed: false }]
      }
    }
    case types.REMOVE: {
      return {
        ...state,
        todos: todos.filter((todo, i) => i !== payload)
      }
    }
    case types.TOGGLE: {
      return {
        ...state,
        todos: todos.map((todo, i) => {
          if (i === payload) {
            return { text: todo.text, completed: !todo.completed }
          }
          return todo
        })
      }
    }
    case types.REMOVE_COMPLETED: {
      return {
        ...state,
        todos: todos.filter(todo => !todo.completed)
      }
    }
  }

  return state
}
