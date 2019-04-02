import React, {PureComponent} from 'react'
import {WriterList, WriterTitle, WriterSwitch, WriterItem} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'


class Writer extends PureComponent {
  render() {
    const {writerList, rotate, HandleChangeWriter} = this.props
    return (
      <WriterList>
        <WriterTitle>
          <span className='writer-title'>推荐作者</span>
          <WriterSwitch
            rotate={rotate}
            onClick={()=>{HandleChangeWriter(rotate)}}
          >
            <i className="iconfont spin">&#xe680;</i>
            换一批
          </WriterSwitch>
        </WriterTitle>
        {
          writerList.map(item => (
            <WriterItem key={item.get('id')}>
              <span className='avatar'>
                <img
                  src={item.get('avatar_source')}
                  className='writer-pic'
                  alt=''/>
              </span>
              <a className='sub' href='/'>+<span>关注</span></a>
              <a className='info-name' href='/'>{item.get('nickname')}</a>
              <p className='info-desc'>写了{Math.floor(item.get('total_wordage') / 100) / 10}k字
                · {Math.floor(item.get('total_likes_count') / 100) / 10}k喜欢</p>
            </WriterItem>
          ))
        }
        <a className='more-writer' href='/'>查看全部 ></a>
      </WriterList>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    writerList: state.getIn(['home', 'writerList']),
    rotate: state.getIn(['home', 'rotate'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    HandleChangeWriter(rotate) {
      dispatch(actionCreators.spinIconRotate(rotate))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer)
