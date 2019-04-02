import React, {PureComponent} from 'react'
import {actionCreators} from "../detail/store";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {DetailWrapper, Header, Content, DetailInfo,Note,Support,MetaBottom} from "./style";
import ScrollToTop from '../../common/scrollToTop'

class Detail extends PureComponent {
  render() {
    const {title, content,info} = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <DetailInfo>
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
              <span>+关注</span>
            </a>
            <div className="meta">
                <span className="jsd-meta">
                <span className="iconfont">&#xe616;</span>{info.get('jsd')}
              </span>
              <span className="publish-time">{info.get('publishTime')}</span>
              <span className="wordage">字数 {info.get('wordage')}</span>
              <span className="views-count">阅读 {info.get('viewsCount')}</span>
              <span className="comments-count">评论 {info.get('commentsCount')}</span>
              <span className="likes-count">喜欢 {info.get('likesCount')}</span>
            </div>
          </div>
        </DetailInfo>
        <Content dangerouslySetInnerHTML={{__html: content}}/>
        <Support>
          <p>小礼物走一走，来简书关注我</p>
          <div className='btn'>赞赏支持</div>
        </Support>
        <MetaBottom>
          <div className='like'>
            <div className='likeBtn'>喜欢</div>
            <div className='likeNum'>216</div>
          </div>
          <div className='share'>

          </div>
        </MetaBottom>
        <Note>
          <div className='ad'>
            <span className='close'>X</span>
          </div>
          <div className='qrcode'></div>
        </Note>
        <ScrollToTop/>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    info: state.getIn(['detail', 'info']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
