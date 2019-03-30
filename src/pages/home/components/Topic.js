import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {TopicWrapper, TopicItem} from '../style'

class Topic extends PureComponent {
  render() {
    const {topicList} = this.props
    return (
      <TopicWrapper>
        {
          topicList.map(item => (
            <TopicItem key={item.get('id')}>
              <img
                className='topic-pic'
                alt=''
                src={item.get('avatar')}
              />
              {item.get('title')}
            </TopicItem>
          ))
        }
        <div className='more-topic'>更多热门专题 ></div>
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}

export default connect(mapStateToProps, null)(Topic)
