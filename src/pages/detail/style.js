import styled from "styled-components";

export const DetailWrapper = styled.div`
  width: 620px;
  margin: 0 auto;
  padding-bottom: 100px;
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
