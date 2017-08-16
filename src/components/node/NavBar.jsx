import React,{ Component } from 'react'
import { NavLink } from 'react-router-dom'
class NavBar extends Component {
    constructor(){
      super();
      this.doClick = this.doClick.bind(this);
    }
    state = {
      navData:[
        {
          tab:'all',
          name:'全部'
        },
        {
          tab:'good',
          name:'精华'
        },
        {
          tab:'share',
          name:'分享'
        },
        {
          tab:'ask',
          name:'问答'
        },
      ]
    }
    doClick(e){
      console.log(this);
    }

    render(){
      let lis = this.state.navData.map((item,index) => (
          <li key={index}>
            <NavLink to={'/home/node/'+item.tab} activeClassName='a-active' >{item.name}</NavLink>
          </li>
      ));
      return (
      <ul className="tab-ul">
        {lis}
      </ul>
      );
    }
}

export default NavBar;