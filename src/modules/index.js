import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import search from './search'

export default combineReducers({
  routing: routerReducer,
  counter,
  search
})
