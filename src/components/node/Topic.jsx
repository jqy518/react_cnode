import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tool } from '../../Tool'
import axios from 'axios'
import Loading from '../common/Loading'
import Replies from './Replies'
class Topic extends Component {
  state={
    id:null,
    topic:{},
    loading:false
  }
  componentDidMount(){
    this.setState({id:this.props.id},()=> {
      this.doAjax()
    });
  }
  doAjax(){
    this.setState({loading:true});
    axios.get(`https://cnodejs.org/api/v1/topic/${this.state.id}`)
    .then((res) =>{
      this.setState({topic:res.data.data});
      this.setState({loading:false});
    });
  }
  componentWillReceiveProps(nextProp){
    if(nextProp.id!==this.state.id){
      this.setState({id:nextProp.id},()=>{
        this.doAjax();
      });
    }
  }
  render(){
    return (
      <div className="topic-container">
        <Loading active={this.state.loading} />
        <div ><h3>{this.state.topic.title}</h3></div>
        <div className="topic-info">
          <img src= { this.state.topic.author ? this.state.topic.author.avatar_url : ''} />
          <div>
              <p className='loginname'>{this.state.topic.author ? this.state.topic.author.loginname : ''}</p>
              <span className='time'>{this.state.topic.create_at? Tool.formatDate(this.state.topic.create_at):''}</span>
          </div>
        </div>
        <div className="topic-content" dangerouslySetInnerHTML = {{__html:this.state.topic.content}} />

        <Replies />
      </div>
    ) 
  }
}

const mapStateToProps = (state,ownProps) => ({
  id:ownProps.match.params.id
})
export default connect(mapStateToProps)(Topic);