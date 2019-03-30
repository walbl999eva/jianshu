import {fromJS} from "immutable"
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  rotate: 0,
  articlePage: 1,
  showScrollTop: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: action.topicList,
    articleList: action.articleList,
    recommendList: action.recommendList,
    writerList: action.writerList,
    rotate: action.rotate
  })
}

const addHomeList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case actionTypes.ADD_HOME_LIST:
      return addHomeList(state, action)
    case actionTypes.SPINICON_ROTATE:
      return state.set('rotate', action.rotate + 360)
    case actionTypes.TOGGLE_SHOW_SCROLL_TOP:
      if (action.show !== state.set('showScrollTop')) {
        return state.set('showScrollTop', action.show)
      }
      break
    default:
      return state
  }
}
