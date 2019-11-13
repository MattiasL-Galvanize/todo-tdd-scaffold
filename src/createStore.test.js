import {initialState} from './createStore'

describe('createStore', () => {
  it('has initial state', () => {
    expect(initialState).toEqual({
      todos: []
    })
  })
})