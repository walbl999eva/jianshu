import React, {PureComponent} from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import ScrollToTop from '../../common/scrollToTop'
import HomeFooter from './components/HomeFooter'
import Carousel from './components/Carousel'
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
      <div>
        <HomeWrapper>
          <HomeLeft>
            <Carousel/>
            <Topic/>
            <List/>
          </HomeLeft>
          <HomeRight>
            <Recommend/>
            <Writer/>
          </HomeRight>
        </HomeWrapper>
        <HomeFooter/>
        <ScrollToTop/>
      </div>
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
