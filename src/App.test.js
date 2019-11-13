import React from 'react';
import {shallow} from 'enzyme'

import {App} from './App'

describe('App', () => {
  it('renders an h3 with the correct text', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('h3#no-todos').text()).toEqual('Congrats! You have nothing to do!')
  })

  it('does not render the no todos header when there are todos', () => {
    const wrapper = shallow(<App todos={[{name: 'some_name'}]}/>);

    expect(wrapper.find('h3#no-todos')).toHaveLength(0)
  })

  it('dispatches an action when the Add todo action form is submitted', () => {
    const mockAddTodo = jest.fn()
    const wrapper = shallow(<App addTodo={mockAddTodo}/>)
    const todo = 'some_todo'
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
      target: {
        todo: {
          value: todo
        }
      }
    })

    expect(mockAddTodo).toHaveBeenCalledWith(todo)
  })

  it('renders a todo input and button inside a form', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('form')).toHaveLength(1)
    expect(wrapper.find('input#todo')).toHaveLength(1)
    expect(wrapper.find('button#add-todo').text()).toEqual('Add Todo')
  })

  it('displays a todo for each todo passed in', () => {
    const todos = [
      {name: 'foo'},
      {name: 'bar'}
    ]

    const wrapper = shallow(<App todos={todos}/>)

    expect(wrapper.find('.todo')).toHaveLength(2)
  })
})
