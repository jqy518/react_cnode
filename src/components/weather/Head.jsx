import React,{ Component } from 'react'
class Head extends Component {
  render(){
    return (
      <div className="weather-head">
        <p>8月27日 周日 农历七月初六 </p>
        <p>实时空气质量：<span className="air-report">38 优</span></p>
      </div>
    )
  }
}
export default Head