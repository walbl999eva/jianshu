import React, {PureComponent} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {LoginWrapper, LoginBox, Input, Button} from './style'
import {actionCreators} from './store'

class Login extends PureComponent {
  render() {
    const {loginStatus, login} = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={(input) => {
              this.account = input
            }}/>
            <Input placeholder='密码' type='password' ref={(input) => {
              this.password = input
            }}/>
            <Button onClick={() => {
              login(this.account, this.password)
            }}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'/>
    }
  }
}

const checkInput = (account, password) => {
  const accountReg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/
  const passwordReg = /^[a-zA-Z0-9]{4,10}$/
  if (accountReg.test(account) && passwordReg.test(password)) {
    return true
  } else {
    return false
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login(accountEl, passwordEl) {
      if (!checkInput(accountEl.value, passwordEl.value)) {
        return alert('用户名密码格式错误')
      }
      dispatch(actionCreators.login(accountEl.value, passwordEl.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
