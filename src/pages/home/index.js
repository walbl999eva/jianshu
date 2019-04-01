import React, {PureComponent} from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import ScrollToTop from '../../common/scrollToTop'
import {actionCreators} from './store'
import {connect} from 'react-redux'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from "./style";

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img'
               src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
               alt=""/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        <ScrollToTop/>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo())
    }
  }
}

export default connect(null, mapDispatchToProps)(Home)
