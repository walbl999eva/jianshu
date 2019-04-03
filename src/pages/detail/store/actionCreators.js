import * as actionTypes from './actionTypes'
import axios from 'axios'
import {fromJS} from "immutable";

const changeDetail = (result) => ({
  type: actionTypes.CHANGE_DETAIL,
  title: result.title,
  info: fromJS(result.info),
  content: result.content,
  metaList: fromJS(result.metaList),
  comments: fromJS(result.comments)
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id)
      .then(res => {
        const result = res.data.data
        dispatch(changeDetail(result))
      })
  }
}
export const showMetaTip=(id)=>({
  type:actionTypes.SHOW_META_TIP,
  id
})
