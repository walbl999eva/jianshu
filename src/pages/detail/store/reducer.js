import {fromJS} from "immutable"
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  title: '',
  info: {},
  content: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        info: action.info,
        content: action.content
      })
    default:
      return state
  }
}
