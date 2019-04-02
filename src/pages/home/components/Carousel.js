import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {Banner} from '../style'

class Carousel extends PureComponent {
  render() {
    const {carousel} = this.props
    return (
      <Banner>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              carousel.map((item, index) => (
                <div key={index} className="swiper-slide">
                  <img className='carousel-pic' src={item} alt=""/>
                </div>
              ))
            }
          </div>
          <div className='swiper-pagination'/>
          <div className='swiper-button-warp hide' ref={(buttonWarp) => {
            this.buttonWarp = buttonWarp
          }}>
            <div className="swiper-button-next swiper-button-white"/>
            <div className="swiper-button-prev swiper-button-white"/>
          </div>
        </div>
      </Banner>
    )
  }

  componentWillUnmount() {
    if (this.swiper) {
      this.swiper.detachEvents()
      this.swiper.destroy()
    }
  }

  componentDidUpdate() {
    this.initSwiper()
  }

  initSwiper() {
    if (this.swiper) {
      return this.swiper
    }
    this.swiper = new Swiper('.swiper-container', {
      width: 625,
      height: 270,
      speed: 900,
      loop: true,
      observer: true,
      observeParents: true,
      shortSwipes: false, //长滑才可滑动
      autoplay: {      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
        delay: 5500,
        disableOnInteraction: false,    //户操作swiper之后，是否禁止autoplay。默认为true：停止。
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,    // 允许点击跳转
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
    this.swiperHoverStop()
  }

  swiperHoverStop() {
    let swiper = this.swiper.$el[0]
    swiper.addEventListener('mouseenter', () => {
      this.swiper.autoplay.stop()
      this.buttonWarp.className = 'swiper-button-warp'
    })
    swiper.addEventListener('mouseleave', () => {
      this.swiper.autoplay.start()
      this.buttonWarp.className = 'swiper-button-warp hide'
    })
  }
}

const mapStateToProps = (state) => {
  return {
    carousel: state.getIn(['home', 'carousel'])
  }
}

export default connect(mapStateToProps, null)(Carousel)
