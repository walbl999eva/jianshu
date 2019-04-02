import React, {PureComponent} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {WriteWrapper} from './style'

class Login extends PureComponent {
  render() {
    const {loginStatus} = this.props
    if (loginStatus) {
      return (
        <WriteWrapper>
          <div className='empty'>无文章</div>
        </WriteWrapper>
      )
    } else {
      return <Redirect to='/login'/>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}

export default connect(mapStateToProps, null)(Login)
