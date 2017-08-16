import React,{ Component } from 'react'
import NavBar from './NavBar'
import {Route} from 'react-router-dom'
import ArticleList from './ArticleList' 

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import Loading from '../common/Loading'


class Node extends Component {
  render(){
    return (
      <div className="main-container">
        <NavBar />
        <Route path='/home/node/:id' component={ ArticleList } />
        <Loading active={this.props.loading} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list:state.article,
  loading:state.loadState.nodeLoading
})

const mapDispatchToProps = dispatch => ({
  actions:bindActionCreators(actions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Node);