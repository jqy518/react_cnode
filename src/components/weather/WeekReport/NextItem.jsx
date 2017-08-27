import React,{ Component } from 'react'
class NextItem extends Component {
  render(){
    return (
      <div className="other-report item">
          <p className="wr-b-info white">星期一</p>
          <p className="wr-b-info">08-28</p>
          <img className="weather-pic-sm" src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/aladdin/img/new_weath/bigicon/5.png" />
          <p className="wr-b-info">24℃~35℃</p>
          <p className="wr-b-info">晴</p>
          <p className="wr-b-info">东南风微风</p>
        </div>
    )
  }
}
export default NextItem