import React, {PureComponent} from 'react'
import {ListItem, ListInfo, LoadMore} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'

class List extends PureComponent {
  render() {
    const {articleList, articlePage, getMoreList} = this.props
    return (
      <div>
        {
          articleList.map((item, index) => (
            <ListItem key={index}>
              <img
                className='list-pic'
                alt=''
                src={item.get('url')}/>
              <ListInfo>
                <Link to={'/detail/' + item.get('id')}>
                  <h3 className='title'>{item.get('title')}</h3>
                </Link>
                <p className='desc'>{item.get('desc')}</p>
                <div className='meta'>
                  {
                    item.get('jsd') ?
                      <span className='jsd-meta'>
                          <span className="iconfont">&#xe61e;</span>
                        {item.get('jsd')}
                        </span> : null
                  }
                  <a href="/" className='nickname'>{item.get('nickname')}</a>
                  <a href="/" className='comments'>
                    <span className="iconfont">&#xe63f;</span>
                    {item.get('comments')}
                  </a>
                  <span className='likes'>
                      <span className="iconfont">&#xe601;</span>
                    {item.get('likes')}
                    </span>
                </div>
              </ListInfo>
            </ListItem>
          ))
        }
        <LoadMore onClick={() => {
          getMoreList(articlePage)
        }}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
