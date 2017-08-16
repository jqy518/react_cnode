import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class NavLinkBar extends Component {
  render(){
    return (
      <div className='nav-link'>
          <NavLink to="/home/node" className="nav-item" activeClassName="actived">
            <i className="iconfont icon-listview"></i>
            <p>nodejs</p>
          </NavLink>
          <NavLink to="/home/weather" className="nav-item" activeClassName="actived">
            <i className="iconfont icon-tianqi"></i>
            <p>天气</p>
          </NavLink>
          <NavLink to="/home/user" className="nav-item" activeClassName="actived">
            <i className="iconfont icon-geren"></i>
            <p>我</p>
          </NavLink>
      </div>
    )
  }
}

export default NavLinkBar