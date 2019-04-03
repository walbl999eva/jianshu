import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {CommentsWrapper} from "../style";
import {Link} from 'react-router-dom'

class Comments extends PureComponent {
  render() {
    const {comments} = this.props
    return (
      <CommentsWrapper>
        <div className='newComment'>
          <Link to="/login" className='avatar'>
            <img src="//cdn2.jianshu.io/assets/default_avatar/avatar_default-78d4d1f68984cd6d4379508dd94b4210.png"
                 alt=""/>
          </Link>
          <div className='commentContainer'>
            <Link to="/login" className='signBtn'>登录</Link>
            <span>后发表评论</span>
          </div>
        </div>
        <div className='CommentList'>
          <div className='listTitle'>
            <span className='titleItem'>{comments.get('allNum')}条评论</span>
            <span className='titleItem authorOnly'>只看作者</span>
            <span className='titleItem right'>按时间正序</span>
            <span className='titleItem right active'>按时间倒序</span>
          </div>
          {
            comments.size !== 0 ?
              comments.get('comments').map(item => (
                <div className='commentItem' key={item.get('id')}>
                  <div className='author'>
                    <div className='avatar'>
                      <img
                        src={item.getIn(['user', 'avatar'])}
                        alt=""/>
                    </div>
                    <div className='info'>
                      <span className='name'>{item.getIn(['user', 'nickname'])}</span>
                      <div className='meta'>
                        <span>{item.get('floor')}楼 · {this.transformTime(item.get('created_at'))}</span>
                      </div>
                    </div>
                  </div>
                  <div className='commentWrapper'>
                    <p>{item.get('compiled_content')}</p>
                    <div className='tool'>
                    <span className={item.get('likes_count') ? 'like active' : 'like'}>
                      <span className="iconfont thumb">&#xe606;</span>
                      <span>{item.get('likes_count') ? item.get('likes_count') : null} 赞</span>
                    </span>
                      <span className={item.get('children_count') ? 'reply active' : 'reply'}>
                        <span className="iconfont addReply">&#xe6cb;</span>
                        <span>{item.get('children_count') ? item.get('children_count') : null} 回复</span>
                    </span>
                    </div>
                  </div>
                  {this.showSubComment(item)}
                </div>
              )) : null
          }
          <ul className='pagination'>
            {this.showPagination(comments)}
          </ul>
        </div>
      </CommentsWrapper>
    )
  }

  transformTime(timeStr) {
    const timeArr = timeStr.split('T')
    timeArr[0] = timeArr[0].replace(/-/ig, '.')
    timeArr[1] = timeArr[1].slice(0,5)
    return timeArr.join(' ')
  }

  showSubComment(item) {
    if (item.get('children').size) {
      return (
        <div className='subCommentList'>
          {
            item.get('children').map(child => (
              <div className='content' key={child.get('id')}>
                <div>
                  <div className='name'><a href="/">{child.getIn(['user', 'nickname'])}</a>:</div>
                  <span dangerouslySetInnerHTML={{__html: child.get('compiled_content')}}/>
                </div>
                <div className='subTool'>
                  <span>{this.transformTime(child.get('created_at'))}</span>
                  <span className='toolItem'>
                <span className="iconfont">&#xe6cb;</span>
                <span>回复</span>
              </span>
                </div>
              </div>
            ))
          }
          <div className='moreSubComment'>
            <span className="iconfont">&#xe616;</span>
            <span className='addComment'>添加新评论</span>
          </div>
        </div>
      )
    } else {
      return null
    }
  }

  showPagination(comments) {
    const paginationList = []
    for (let i = 0; i < comments.get('total_pages'); i++) {
      paginationList.push(
        <li key={i}>
          {
            comments.get('page') - 1 === i ? <a href="/" className='active'>{i + 1}</a> : <a href="/">{i + 1}</a>
          }
        </li>
      )
    }
    if (comments.get('page') !== comments.get('total_pages')) {
      paginationList.push(
        <li key={"next"}>
          <a href="/">下一页</a>
        </li>
      )
    }
    if (comments.get('page') > 1) {
      paginationList.unshift(
        <li key={"prev"}>
          <a href="/">上一页</a>
        </li>
      )
    }
    return paginationList
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.getIn(['detail', 'comments'])
  }
}

export default connect(mapStateToProps, null)(Comments)
