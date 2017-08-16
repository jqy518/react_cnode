import React, { Component } from 'react'
import { Tool } from '../../Tool'
import { Link } from 'react-router-dom'
class Article extends Component {
  render(){
    function goodTag(){

    }
    return (
      <li className="article-item">
        {
          this.props.good ? 
          <span className="article-tag good-tag"><i className="iconfont icon-jinghua1"></i></span> :
          ''
        }
        {
          this.props.top ?
          <span className="article-tag top-tag"><i className="iconfont icon-dfdabf"></i></span> :
          ''
        }
        
        <div className="container">
          <img className="avatar" src={this.props.author.avatar_url} />
          <div>
            <strong>{this.props.author.loginname}</strong>
            <div>
              <time className="time">{Tool.formatDate(this.props.create_at)}</time>
              <span className="share">#{Tool.formatTab(this.props.tab)}#</span>
            </div>
          </div>
        </div>
        <h3 className="title"><Link to={`/topic/${this.props.id}`}>{this.props.title}</Link></h3>
        <ul className='floor-box'>
          <li><i className="iconfont icon-kanguo"></i><span>{this.props.visit_count}</span></li>
          <li><i className="iconfont icon-pinglun"></i><span>{this.props.reply_count}</span></li>
          <li><i className="iconfont icon-safari"></i><span>{Tool.formatDate(this.props.last_reply_at)}</span></li>
        </ul>
      </li>
    )
  }
}

export default Article;