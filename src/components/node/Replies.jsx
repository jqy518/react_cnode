import React,{ Component } from 'react'
import Reply from './Reply'
import axios from 'axios'
import PropTypes from 'prop-types';
class Replies extends Component{
    propTypes:{
      list:PropTypes.array
    }
    state={
      id:null
    }
    render(){
      let replyList = this.props.list.map((item)=>{
        return (
          <Reply context= {item} />
        );
      });
      return(
        <div>
          {replyList}
        </div>
        
      );  
    }
}
export default Replies;