import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {MetaBottomWrapper, MetaTip} from '../style'
import {actionCreators} from "../store";

class MetaBottom extends PureComponent {
  render() {
    const {metaList, handleMetaHover} = this.props
    return (
      <MetaBottomWrapper>
        <div className='like'>
          <div className='likeBtn'>
            <span className="iconfont">&#xe8ee;</span>
            喜欢
          </div>
          <div className='likeNum'>216</div>
        </div>
        <ul className='shareList'>
          {
            metaList.map(item => (
              <li className='shareItem' key={item.get('id')}
                  onMouseEnter={() => {
                    handleMetaHover(item.get('id'))
                  }}
                  onMouseLeave={() => {
                    handleMetaHover(item.get('id'))
                  }}
              >
                <span className={"iconfont " + item.get('className')}
                      dangerouslySetInnerHTML={{__html: item.get('code')}}
                />
                {this.showTips(item)}
              </li>
            ))
          }
          <li className='shareItem more'>
            更多分享
          </li>
        </ul>
      </MetaBottomWrapper>
    )
  }

  showTips(item) {
    if (item.getIn(['tips', 'show'])) {
      return (
        <MetaTip img={item.getIn(['tips', 'url'])}>
          {
            item.getIn(['tips', 'url']) ? <img src={item.getIn(['tips', 'url'])} alt=""/> : null
          }
          <div className='text'>{item.getIn(['tips', 'text'])}</div>
          <div className='trangle'/>
        </MetaTip>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    metaList: state.getIn(['detail', 'metaList'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleMetaHover(id) {
      dispatch(actionCreators.showMetaTip(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MetaBottom)
