import * as actionTypes from './actionTypes'
import axios from 'axios'
import {fromJS} from "immutable";

const changeHomeInfo = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: fromJS(result.topicList),
  articleList: fromJS(result.articleList),
  recommendList: fromJS(result.recommendList),
  writerList: fromJS(result.writerList),
  carousel: fromJS(result.carousel),
  rotate: fromJS(result.rotate)
})
const addHomeList = (result, nextPage) => ({
  type: actionTypes.ADD_HOME_LIST,
  list: fromJS(result),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
      .then(res => {
        const result = res.data.data
        dispatch(changeHomeInfo(result))
      }).catch(err => {
      console.log(err)
    })
  }
}
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeMoreList.json?page=' + page)
      .then(res => {
        const result = res.data.data
        dispatch(addHomeList(result, page + 1))
      }).catch(err => {
      console.log(err)
    })
  }
}
export const toggleShowScrollTop = (show) => ({
  type: actionTypes.TOGGLE_SHOW_SCROLL_TOP,
  show
})
export const spinIconRotate = (rotate) => ({
  type: actionTypes.SPINICON_ROTATE,
  rotate
})
