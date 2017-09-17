import React,{ Component } from 'react'
import PropTypes from 'prop-types';
class Reply extends Component{
    propTypes:{
      context:PropTypes.object
    }
    render(){
      return(
        <div className="reply-box">
          <img src={this.props.context.author.avatar_url} />
          <div className="reply-context">
              <div className="reply-context-top">
                  <div className="left">
                      <p>{this.props.context.author.loginname}</p>
                      <span>一小时前</span>
                  </div>
                  <div className="right">
                    <a href="#"><i className="iconfont icon-zan"></i>{this.props.context.ups.length}</a>
                  </div>
              </div>

              <div dangerouslySetInnerHTML = {{__html:this.props.context.content}}></div>
          </div>
        </div>
      )
    }
}
export default Reply;