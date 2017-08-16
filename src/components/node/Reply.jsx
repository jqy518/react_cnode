import React,{ Component } from 'react'

class Reply extends Component{
    render(){
      return(
        <div className="reply-box">
          <img src="https://avatars2.githubusercontent.com/u/15165848?v=3&s=120" />
          <div className="reply-context">
              <div className="reply-context-top">
                  <div className="left">
                      <p>刘天理</p>
                      <span>一小时前</span>
                  </div>
                  <div className="right">
                    <a href="#"><i className="iconfont icon-zan"></i>0</a>
                    <a href="#"><i className="iconfont icon-pinglun"></i>0</a>
                  </div>
              </div>
              <p>加上背景音乐完美……加上背景音乐完美……</p>
          </div>
        </div>
      )
    }
}
export default Reply;