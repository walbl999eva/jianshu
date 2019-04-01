import * as actionTypes from './actionTypes'
import axios from 'axios'

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  result: true
})

export const logout = () => ({
  type: actionTypes.CHANGE_LOGOUT,
  result: false
})
export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password)
      .then(res => {
        const result = res.data.data
        if (result) {
          dispatch(changeLogin())
        } else {
          alert('登录失败')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
