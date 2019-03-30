import React, {PureComponent} from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {actionCreators} from './store'
import {connect} from 'react-redux'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from "./style";

class Home extends PureComponent {
  render() {
    const {showScrollTop} = this.props
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
        {
          showScrollTop ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeShowScrollTop)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeShowScrollTop)
  }

  handleScrollTop() {
    let timer = setInterval(() => {
      let top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      if (top) {
        window.scrollTo(0, top - top / 2)
      } else {
        clearInterval(timer)
      }
    }, 20)
  }
}

const mapStateToProps = (state) => {
  return {
    showScrollTop: state.getIn(['home', 'showScrollTop'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo())
    },
    changeShowScrollTop() {
      let top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      if (top > 400) {
        dispatch(actionCreators.toggleShowScrollTop(true))
      } else {
        dispatch(actionCreators.toggleShowScrollTop(false))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
