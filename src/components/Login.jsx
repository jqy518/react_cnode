import React, { Component } from 'react';
import InputBox from './common/InputBox'
class Login extends Component {
  render() {
    return (
      <div className="LoginBox">
        <img className="logoImg" src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg"/>
        <div className="input-container">
          <InputBox />
          <InputBox />
        </div>
        <button className="submit-butn">登录</button>
      </div>
    );
  }
}

export default Login;