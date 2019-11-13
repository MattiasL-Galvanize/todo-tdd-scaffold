import reducer from './reducers'

describe('reducer', () => {
  it('returns default state', () => {
    const defaultState = {defaultState: true}
    expect(reducer(defaultState, {})).toEqual(defaultState)
  })

  it('adds a Todo', () => {
    const state = {
      todos: []
    }
    const action = {
      type: 'ADD_TODO',
      todo: {
        name: 'some_todo'
      }
    }

    expect(reducer(state, action)).toEqual({
      todos: [action.todo]
    })
  })

  it('allows me to switch view', () => {
    const state = {
      todos: []
    }
  })
})