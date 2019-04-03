import React, {PureComponent} from 'react'
import {actionCreators} from "../detail/store";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {DetailWrapper, Header, Content, Note, Support, BottomDetail} from "./style";
import ScrollToTop from '../../common/scrollToTop'
import DetailInfo from './components/DetailInfo'
import MetaBottom from './components/MetaBottom'
import Comments from './components/Comments'

class Detail extends PureComponent {
  render() {
    const {title, content} = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <DetailInfo bottom={false}/>
        <Content dangerouslySetInnerHTML={{__html: content}}/>
        <Support>
          <p>小礼物走一走，来简书关注我</p>
          <div className='btn'>赞赏支持</div>
        </Support>
        <BottomDetail>
          <DetailInfo bottom={true}/>
          <p className='signature'>
            对生活充满热爱、永远正能量的阳光小军嫂，喜欢美食、运动、易学。 微信号:yongjiu8752
          </p>
        </BottomDetail>
        <MetaBottom/>
        <Note>
          <div className='ad'>
            <span className='close'>X</span>
          </div>
          <div className='qrcode'/>
        </Note>
        <Comments/>
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
