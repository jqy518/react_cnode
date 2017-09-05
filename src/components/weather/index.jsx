import React,{ Component } from 'react'
import WeekReport from './WeekReport/WeekReport'
import Head from './Head'
import TpLine from './TpLine'
class Weather extends Component {
  render(){
    var watchID = navigator.geolocation.watchPosition(function(position) {
      console.log(position.coords.latitude+":"+position.coords.longitude);
    });
    return (
      <div className="weather-main">
        <Head />
        <WeekReport />
        <TpLine />
      </div>
    )
  }
}

export default Weather;