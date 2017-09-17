import 'whatwg-fetch'
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Index from './components/Index'
import Topic from './components/node/Topic'
import Login from './components/Login'
import { Provider } from 'react-redux'
import reducer from './reducers'

import { createStore,applyMiddleware,compose } from 'redux'
import {  ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Route,NavLink,Switch,Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

const history = createHistory();
const middleware = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-disable no-underscore-dangle */
let store = createStore(
  reducer,
  composeEnhancers(
  applyMiddleware(middleware)
));



/* eslint-enable */
ReactDOM.render(
  <Provider store={store}>
     <ConnectedRouter history={history}>
          <Switch>
            <Redirect from='/' exact to = '/home' />
            <Route path="/home"  component = {Index }></Route>
            <Route path="/topic/:id" component = { Topic }></Route>
            <Route path="/login" component = { Login }></Route>
          </Switch>
     </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();