import React, { Component}  from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Node from './node'
import Weather from './weather'
import User from './user'
const config = [
  {
    path:'/home/node',
    exact:false,
    component:Node
  },
  {
    path:'/home/weather',
    exact:true,
    component:Weather
  },
  {
    path:'/home/user',
    exact:true,
    component:User
  },
];

const RouterConfig = (
  <Switch>
      <Redirect from='/home' exact to = '/home/node/all' /> /*精确匹配 /home 跳转到 //home/node/all */
      <Redirect from='/home/node' exact to = '/home/node/all' />
      {
        config.map((item,index) =>(
          <Route {...item} key={index} />
        ))
      }
  </Switch>
);
export default RouterConfig

