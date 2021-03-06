import * as actionTypes from './actionTypes'
import {fromJS} from "immutable"

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
  rotate: 0,
  searchInput: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    case actionTypes.SPINICON_ROTATE:
      return state.set('rotate', action.rotate + 360)
    case actionTypes.CHANGE_SEARCH_INPUT:
      return state.set('searchInput', action.searchWord)
    default:
      return state
  }
}
