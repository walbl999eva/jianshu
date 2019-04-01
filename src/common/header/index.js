import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from "react-redux";
import {actionCreators} from './store'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {Link} from "react-router-dom";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style'

class Header extends Component {
  render() {
    const {focused, handleInputFocus, handleInputBlur, list, login,logout} = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Nav>
          <Link to='/'><NavItem className='left active'>首页</NavItem></Link>
          <NavItem className='left'>下载App</NavItem>
          {
            login ?
              <NavItem className='right' onClick={logout}>退出</NavItem> :
              <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
          }
          <NavItem className='right'>
            <span className="iconfont">&#xe600;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => {
                  handleInputFocus(list)
                }}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span
              className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
            >&#xe679;</span>
            {this.showListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='writing'>
              <span className="iconfont">&#xe616;</span>
              写文章
            </Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  showListArea() {
    const {focused, list, page, totalPage, mouseIn, rotate, HandleMouseEnter, HandleMouseLeave, HandleChangePage} = this.props
    const newList = list.toJS()
    const pageList = []

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={HandleMouseEnter}
          onMouseLeave={HandleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                HandleChangePage(page, totalPage, rotate)
              }}
              rotate={rotate}
            >
              <span
                className="iconfont spin"
              >&#xe680;</span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    rotate: state.getIn(['header', 'rotate']),
    login: state.getIn(['login', 'login']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    HandleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    HandleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    HandleChangePage(page, totalPage, rotate) {
      dispatch(actionCreators.spinIconRotate(rotate))

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    logout(){
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
