import React from 'react';
import {connect} from 'react-redux'
import {addTodo} from './actions'


export const App = ({addTodo, todos = []}) => {
  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(event.target.todo.value)
  }

  const todoDisplay = todos.map((todo, i) => (
    <li className='todo' key={i}>{todo}</li>
  ))

  return (
    <div className="App">
      {todos.length > 0 ? null : <h3 id="no-todos">Congrats! You have nothing to do!</h3>}
      <ul>
        {todoDisplay}
      </ul>
      <form onSubmit={onSubmit}>
        <input name="todo" id="todo" />
        <button id="add-todo">Add Todo</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => dispatch(addTodo(todo))
})

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
