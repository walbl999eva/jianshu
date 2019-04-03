import styled from "styled-components";

const multiline_ellipsis = (num) => `
  display:-webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${num};
  -webkit-box-orient: vertical;
  white-space: normal;
  word-wrap: break-word;
  overflow:hidden;
`


export const HomeWrapper = styled.div`
  width: 960px;
  margin: 56px auto 0;
  &:after{
    content: '';
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
  }
  @media (max-width:992px){
      width: 750px;
  }
`
export const HomeLeft = styled.div`
  padding-left: 15px;
  padding-top: 30px;
  //width: 625px;
  width: 66.66667%;
  float:left;
  box-sizing:border-box;
  .banner-img{
    width: 625px;
    height: 270px;
    border-radius: 5px;
  }
`
export const HomeRight = styled.div`
  //width: 280px;
  width: 29.16667%;
  margin-left: 4.16667%;
  padding-top: 30px;
  margin-top: -1px;
  float: right;
  box-sizing:border-box;
`
export const Banner = styled.div`
  width: 100%;
  //height: 270px;
  border-radius: 5px;
  overflow:hidden;
  .swiper-container{
    z-index: 0;
    .carousel-pic{
      display:block;
      width: 100%;
      height: 100%;
    }
    .swiper-button-warp{
      &.hide{
        opacity: 0;
      }
      .swiper-button-white{
        background-color:rgba(0,0,0,.3);
        background-size: 50% 50%;
      }
      .swiper-button-next{
        right: 0;
        border-radius: 8px 0 0 8px;
      }
      .swiper-button-prev{
        left: 0;
        border-radius: 0 8px 8px 0;
      }
    }
    .swiper-pagination{
      .swiper-pagination-bullet{
        width: 25px;
        height: 2px;
        border-radius: 2px;
        background-color: rgba(20,20,20,0.8);
      }
      .swiper-pagination-bullet-active{
        background: #ffffff;
      }
    }
  }
`
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow:hidden;
  margin-left: 0;
  border-bottom: 1px solid #dcdcdc;
  .more-topic{
    display:block;
    float:left;
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    margin-right: 18px;
    margin-bottom: 18px;
    color:#a0a0a0;
    cursor:pointer;
  }
`
export const TopicItem = styled.div`
  float:left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color:#000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-right: 18px;
  margin-bottom: 18px;
  overflow:hidden;
  cursor:pointer;
  .topic-pic{
    display:block;
    float:left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`
export const ListItem = styled.div`
  position: relative;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow:hidden;
  .list-pic{
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -50px;
    width: 150px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div`
  padding-right: 165px;
  float:left;
  a{
    text-decoration: none;
  }
  .title{
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color:#333;
  }
  .desc{
    font-size: 13px;
    line-height: 24px;
    color:#999;
    ${multiline_ellipsis(3)}
  }
  .meta{
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 8px;
    a{
      transition: .1s ease-in;
      margin-right: 10px;
      color: #b4b4b4;
      .iconfont{
        font-size: 13px;
        margin-right: 3px;
      }
    }
    .jsd-meta{
      color: #ea6f5a;
    }
    .likes{
      color:#b4b4b4;
    }
    .jsd-meta,.likes{
      margin-right: 10px;
      .iconfont{
        font-size: 13px;
        margin-right: 3px;
      }
    }
  }
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  text-align: center;
  line-height: 40px;
  background:#a5a5a5;
  border-radius: 20px;
  color:#fff;
  cursor:pointer;
`
export const RecommendList = styled.div`
  min-height: 228px;
  margin-top: -4px;
  padding-bottom: 18px;
`
export const RecommendItem = styled.div`
  .recommend-pic{
    width: 100%;
    height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
    vertical-align: middle;
    cursor:pointer;
  }
  @media (max-width:992px){
    .recommend-pic{
      height: 39px;
    }
  }
`
export const WriterList = styled.div`
  margin-bottom: 20px;
  width: 100%;
  padding-top: 0;
  font-size: 13px;
  text-align: center;
  a{
    text-decoration: none;
  }
  .more-writer{
    display:block;
    margin-top: 20px;
    padding: 7px 7px 7px 12px;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    line-height: 20px;
  }
`
export const WriterTitle = styled.div`
  text-align: left;
  .writer-title{
    font-size: 14px;
    color: #969696;
  }
`
export const WriterSwitch = styled.span`
  cursor:pointer;
  color:#969696;
  float: right;
  .spin{
    display:block;
    float: left;
    font-size: 12px;
    margin-right: 5px;
    transition: all .2s ease-in;
    transform: rotate(${props => props.rotate || 0}deg);
    transform-origin: center center;
  }
`
export const WriterItem = styled.div`
  margin-top: 15px;
  line-height: 20px;
  text-align:left;
  .avatar{
    width: 48px;
    height: 48px;
    float: left;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 50%;
    box-sizing:border-box;
    overflow:hidden;
    .writer-pic{
      width: 100%;
      height: 100%;
      cursor:pointer;
    }
  }
  .info-name{
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
    color:#333;
    cursor:pointer;
  }
  .info-desc{
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
  .sub{
    float: right;
    margin-top: 5px;
    font-size: 16px;
    color: #42c02e;
    cursor:pointer;
    span{
      font-size: 13px;
      vertical-align: middle;
    }
  }
`
export const BackTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #ccc;
  background:#fff;
  font-size: 14px;
  padding: 10px;
  letter-spacing: 2px;
  box-sizing:border-box;
  cursor:pointer;
`
export const FooterWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 25px 15px 0;
  .main{
    width: 70%;
    padding-left: 20px;
    font-size: 13px;
    color: #969696;
    a{
      color: #969696;
      display: inline-block;
      text-decoration: none;
      cursor:pointer;
    }
    .icp{
      line-height: 17.1428px;
      color: #c8c8c8;
      margin-top: 10px;
      font-size: 12px;
      img{
        height: 30px;
        vertical-align: middle;
      }
      a{
        display: inline-block;
        color: #c8c8c8;
        text-decoration: none;
        cursor:pointer;
      }
    }
  }
  @media (max-width:992px){
    width: 750px;
  }
`
