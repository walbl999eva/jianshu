import React, {PureComponent} from 'react'
import {RecommendList,RecommendItem} from '../style'
import {connect} from 'react-redux'


class Recommend extends PureComponent {
  render() {
    const {recommendList} = this.props
    return (
      <RecommendList>
        {
          recommendList.map(item=>(
            <RecommendItem key={item.get('id')}>
              <img
                className='recommend-pic'
                src={item.get('imgUrl')}
                alt=""/>
            </RecommendItem>
          ))
        }
      </RecommendList>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList'])
  }
}

export default connect(mapStateToProps, null)(Recommend)
