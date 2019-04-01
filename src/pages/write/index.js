import React, {PureComponent} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class Login extends PureComponent {
  render() {
    const {loginStatus} = this.props
    if (loginStatus) {
      return (
        <div>写文章</div>
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
