import React,{ Component } from 'react'
class FirstItem extends Component {
  render(){
    return (
      <div className="today-report item">
          <img className="weather-pic" src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/aladdin/img/new_weath/bigicon/6.png" />
          <div className="temp-box">
            <strong>31</strong>
            <p className="right-info">
              ℃ <br/>
              多云（实时）
            </p>
          </div>
          <p className="wr-b-info">24℃~35℃</p>
          <p className="wr-b-info">晴</p>
          <p className="wr-b-info">东南风微风</p>
        </div>
    )
  }
}
export default FirstItem