import styled from "styled-components";

export const DetailWrapper = styled.div`
  width: 620px;
  margin: 56px auto 0;
  padding-bottom: 100px;
  overflow:hidden;
`
export const Header = styled.div`
  margin: 50px 0 20px 0;
  line-height: 44px;
  font-size: 34px;
  color: #333333;
  font-weight: bold;
`
export const DetailInfo = styled.div`
  margin: 30px 0 40px;
  .avatar{
    width: 48px;
    height: 48px;
    vertical-align: middle;
    display: inline-block;
    img{
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%; 
    }
  }
  .info{
    vertical-align: middle;
    display: inline-block;
    margin-left: 18px;
    .name{
      margin-right: 5px;
      font-size: 16px;
      vertical-align: middle;
      a{
        text-decoration: none; 
        color: #333333;
      }
    }
    img{
      vertical-align: middle;
      &.badge-icon{
        margin-right: 8px;
        width: 20px;
        height: 20px;
        border-radius: 0;
        border: 0;
      }
    }
    .btn{
      display: inline-block;
      margin-bottom: 0;
      font-weight: 400;
      text-align: center;
      vertical-align: middle;
      touch-action: manipulation;
      cursor: pointer;
      background-image: none;
      border: 1px solid transparent;
      white-space: nowrap;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857;
      border-radius: 4px;
      user-select: none;
    }
    .btn-success{
      border-radius: 40px;
      color: #fff;
      background-color: #42c02e;
      border-color: #42c02e;
    }
    .follow{
      font-weight: 400;
      line-height: normal;
      border-color: #42c02e;
      padding: 0 7px 0 5px;
      font-size: 12px;
      text-decoration: none;
      span{
        margin-left: 2px;
        display: inline;
      }
    }
    .iconfont{
      font-family: iconfont!important;
      font-size: inherit;
      font-style: normal;
      font-weight: 400!important;
      -webkit-font-smoothing: antialiased;
    }
    .meta{
      margin-top: 10px;
      font-size: 12px;
      color: #969696;
      span{
        padding-right: 8px;
      }
      .jsd-meta{
        color: #ea6f5a!important;
      }
    }
  }
`
export const Content = styled.div`
  color:#2f2f2f;
  img{
    width: 100%;
  }
  P{
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    margin: 25px 0;
  }
  b{
    font-weight: bold;
  }
`
export const Note=styled.div`
  position: fixed;
  top: 80px;
  right: 160px;
  width: 180px;
  .ad{
    width: 100%;
    height: 260px;
    background-image: url(//cdn2.jianshu.io/assets/web/web-note-ad-side-banner-22096669b4c4b91c3b9266894e951aef.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    margin-bottom: 15px;
    .close{
      display: block;
      width: 20px;
      height: 20px;
      color: #999;
      position: absolute;
      right: 10px;
      top: 10px;
      opacity: .2;
      cursor:pointer;
    }
  }
  .qrcode{
    border: 1px solid #e8e8e8;
    width: 180px;
    height: 180px;
    background: url("//cdn2.jianshu.io/assets/web/qingteng-08e20c9580206e7f8e337e0e0efd01c6.png") no-repeat;
    background-size: contain;
  }
`
export const Support=styled.div`
  min-height: 144px;
  padding: 20px 0;
  text-align: center;
  p{
    padding: 0 30px;
    margin-bottom: 20px;
    min-height: 24px;
    font-size: 17px;
    font-weight: 700;
    color: #969696;
  }
  .btn{
    display: inline-block;
    line-height: 1.42857;
    margin-bottom: 20px;
    padding: 8px 25px;
    font-size: 16px;
    color: #fff;
    background-color: #ea6f5a;
    border-radius: 20px;
    cursor: pointer;
  }
`
export const MetaBottom=styled.div`
  padding: 20px;
  background-color: hsla(0,0%,71%,.1);
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 12px;
`
