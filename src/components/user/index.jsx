import React,{ Component } from 'react'
import TopHeader from './TopHeader'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class User extends Component {
  componentDidMount(){
    let keys = Object.keys(this.props.user);
    if(keys.length<1){
      this.props.history.push("/login");
    }
  }
  render(){
    return (
      <div>
        <TopHeader/>
      </div>
    )
  }
}
const mapStateToProps = (state,ownProps) => ({
  user:state.user
})

const mapDispatchToProps = dispatch => ({
  actions:bindActionCreators(actions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(User);