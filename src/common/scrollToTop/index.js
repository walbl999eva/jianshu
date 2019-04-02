import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BackTop} from "../../pages/home/style";
import {actionCreators} from "../../pages/home/store";

class ScrollToTop extends Component {
  render() {
    const {showScrollTop} = this.props
    return (
      <div>
        {
          showScrollTop ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
        }
      </div>
    )
  }

  componentDidMount() {
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
        timer = null
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

export default connect(mapStateToProps, mapDispatchToProps)(ScrollToTop)
