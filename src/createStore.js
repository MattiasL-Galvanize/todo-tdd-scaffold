import {createStore} from 'redux'
import reducer from './reducers'

export const initialState = {
  todos: []
}

export default createStore(reducer, initialState)

