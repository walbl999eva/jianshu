import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {DetailInfoWrapper} from "../style";

class DetailInfo extends PureComponent {
  render() {
    const {bottom, info} = this.props
    return (
      <DetailInfoWrapper bottom={bottom}>
        <a className="avatar" href="/">
          <img
            src={info.get('imgUrl')}
            alt=""/>
        </a>
        <div className="info">
            <span className="name">
              <a href="/">{info.get('name')}</a>
            </span>
          <img className="badge-icon"
               src={info.get('iconUrl')}
               alt=""/>
          <a className="btn btn-success follow" href="/">
            +<span>关注</span>
          </a>
          <div className="meta">
              <span className="jsd-meta">
                <span className="iconfont">&#xe61e;</span>{info.get('jsd')}
              </span>
            <span className="publish-time">{info.get('publishTime')}</span>
            <span className="wordage">字数 {info.get('wordage')}</span>
            <span className="views-count">阅读 {info.get('viewsCount')}</span>
            <span className="comments-count">评论 {info.get('commentsCount')}</span>
            <span className="likes-count">喜欢 {info.get('likesCount')}</span>
          </div>
        </div>
      </DetailInfoWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    info: state.getIn(['detail', 'info'])
  }
}

export default connect(mapStateToProps, null)(DetailInfo)
