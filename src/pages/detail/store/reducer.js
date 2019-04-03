import {fromJS} from "immutable"
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  title: '',
  info: {},
  content: '',
  metaList: [],
  comments: {}
})
const changeTipShow = (metaList, id) => {
  let newMetaList = metaList.toJS()
  newMetaList.forEach(item => {
    if (item.id === id) {
      item.tips.show = !item.tips.show
    }
  })
  return fromJS(newMetaList)
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        info: action.info,
        content: action.content,
        metaList: action.metaList,
        comments: action.comments
      })
    case actionTypes.SHOW_META_TIP:
      return state.set('metaList', changeTipShow(state.get('metaList'), action.id))
    default:
      return state
  }
}
