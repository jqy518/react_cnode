import React,{ Component } from 'react'
class TopHeader extends Component {
    render(){
        return (
            <div className="top-header-main">
                <img className="top-header-avatar" src="https://avatars1.githubusercontent.com/u/10969445?v=4&s=120"/>
                <p className="top-header-info">未登陆</p>
            </div>
        );
    }
}
export default TopHeader;