import React,{ Component } from 'react'
import PropTypes from 'prop-types'
class Loading extends Component {
  static types={
    active:PropTypes.bool.isRequired
  }
  render(){
    return (
      <div className="loader-inner ball-pulse" style={{display:this.props.active ? 'block' : 'none'}}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
export default Loading;