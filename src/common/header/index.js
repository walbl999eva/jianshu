import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from "react-redux";
import {actionCreators} from './store'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {Link} from "react-router-dom";
import {
  HeaderBox,
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
    const {focused, handleInputFocus, handleInputBlur, handleInputChange, list, login, logout, searchInput} = this.props
    return (
      <HeaderBox>
        <HeaderWrapper>
          <Link to='/'>
            <Logo/>
          </Link>
          <Addition>
            <Link to='/write'>
              <Button className='writing'>
                <span className="iconfont">&#xe616;</span>
                写文章
              </Button>
            </Link>
            {
              login ? <div className='avatar'/> : <Button className='reg'>注册</Button>
            }
          </Addition>
          <Nav>
            <Link to='/'>
              <NavItem className='left active'>
                <span className="iconfont">&#xe644;</span>
                <span className='text'>首页</span>
              </NavItem>
            </Link>
            <NavItem className='left download'>
              <span className="iconfont">&#xe602;</span>
              <span className='text'>下载App</span>
            </NavItem>
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
                  onChange={handleInputChange}
                  onKeyUp={this.handleInputSearch}
                  value={searchInput}
                />
              </CSSTransition>
              <span
                className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
              >&#xe679;</span>
              {this.showListArea()}
            </SearchWrapper>
          </Nav>
        </HeaderWrapper>
      </HeaderBox>
    )
  }

  showListArea() {
    const {focused, list, page, totalPage, mouseIn, rotate, HandleMouseEnter, HandleMouseLeave, HandleChangePage, HandleHotSearchClick} = this.props
    const newList = list.toJS()
    const pageList = []

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]} onClick={() => {
              HandleHotSearchClick(newList[i])
            }}>{newList[i]}</SearchInfoItem>
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

  handleInputSearch(e){
    if(e.keyCode===13){
      console.log(123)
      let searchWord=e.target.value
      window.location.href=`https://www.jianshu.com/search?utf8=%E2%9C%93&q=${searchWord}`
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
    searchInput: state.getIn(['header', 'searchInput']),
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
    handleInputChange(e) {
      dispatch(actionCreators.changeSearchInput(e.target.value))
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
    HandleHotSearchClick(searchWord) {
      window.location.href=`https://www.jianshu.com/search?utf8=%E2%9C%93&q=${searchWord}`
      dispatch(actionCreators.changeSearchInput(searchWord))
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
