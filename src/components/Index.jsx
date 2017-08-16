import React,{ Component } from 'react'
import RouterConfig from './Routes'
import NavLinkBar from './common/NavLinkBar'
class Index extends Component {
  render(){
    return (
      <div>
        <NavLinkBar />
        {RouterConfig}
      </div>
    )
  }
}

export default Index
