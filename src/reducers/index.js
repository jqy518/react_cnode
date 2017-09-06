import { combineReducers } from 'redux'
import article from './article'
import loadState from './loadState'
import user from './user'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
  article,
  loadState,
  user,
  routerReducer
})

export default rootReducer