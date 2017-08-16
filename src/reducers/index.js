import { combineReducers } from 'redux'
import article from './article'
import loadState from './loadState'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
  article,
  loadState,
  routerReducer
})

export default rootReducer
 