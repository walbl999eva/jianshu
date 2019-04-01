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
            <Link to={'/detail/' + item.get('id')} key={index}>
              <ListItem>
                <img
                  className='list-pic'
                  alt=''
                  src={item.get('url')}/>
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
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
