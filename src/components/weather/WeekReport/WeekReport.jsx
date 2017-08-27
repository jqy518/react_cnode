import React,{ Component } from 'react'
import FirstItem from './FirstItem'
import NextItem from './NextItem'
class WeekReport extends Component {
  render(){
    return (
      <div className="week-report-box">
        <FirstItem />
        <NextItem />
        <NextItem />
        <NextItem />
      </div>
    )
  }
}
export default WeekReport