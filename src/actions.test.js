import {addTodo} from './actions'

describe('actions', () => {
  it('addTodo', () => {
    const todo = 'do a thing'
    expect(addTodo(todo)).toEqual({
      type: 'ADD_TODO',
      todo
    })
  })
})