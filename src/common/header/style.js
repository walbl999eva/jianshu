import styled from 'styled-components'
import logoPic from '../../statics/logo.png'


export const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`
export const HeaderWrapper = styled.div`
  position: relative;
  min-width: 768px;
  max-width: 1440px;
  height: 56px;
  margin: 0 auto;
  background:#fff;
  border-bottom: 1px solid #f0f0f0;
  > a{
    float:left;
  }
`

export const Logo = styled.div`
  display:block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  max-width: 960px;
  height: 100%;
  margin: 0 auto;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 15px;
  cursor:pointer;
  &.left{
    font-size: 17px;
    float:left;
    color:#333;
    &.download{
      :hover{
        background:#f5f5f5;
      }
    }
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color: #ea6f5a;
  }
  .iconfont{
    font-size: 18px;
    margin-right: 5px;
  }
  @media (max-width:992px){
    &.left{
      .text{
        display: none;
      }
      .iconfont{
        font-size: 20px;
        margin-right: 0;
      }
    }
  }
`
export const SearchWrapper = styled.div`
  position: relative;
  float:left;
  z-index: 1;
  .zoom{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    color:#696969;
    &.focused{
      background:#969696;
      color:#fff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  border: none;
  outline: none;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  border-radius: 19px;
  background:#eee;
  box-sizing:border-box;
  font-size: 14px;
  color:#666;
  &.slide-enter,
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 320px;
  }
  &.slide-exit-active{
    width: 240px;
  }
  &.focused{
    width: 320px;
  }
  &::placeholder{
    color:#999;
  }
  @media (max-width:992px){
    width: 160px;
    &.slide-enter-active{
      width: 240px;
    }
    &.slide-exit-active{
      width: 160px;
    }
    &.focused{
      width: 240px;
    }
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border-radius: 3px;
  background:#fff;
  &:before{
    content: '';
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    top: -5px;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    z-index: -1;
  }
  &:after{
    content: '';
    position: absolute;
    left: 20px;
    top: -20px;
    bottom: 99%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px;
    border-color: transparent transparent #fff transparent;
  }
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color:#969696;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor:pointer;
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
export const SearchInfoList = styled.div`
  overflow:hidden;
  margin-bottom: 10px;
`
export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color:#787878;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor:pointer;
`
export const Addition = styled.div`
  float: right;
  height: 56px;
  .avatar{
    position: relative;
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    width: 38px;
    height: 38px;
    background:#eee;
    border-radius: 50%;
    cursor: pointer;
    box-sizing:border-box;
    :hover{
      border: 1px solid #ec6149;
    }
  }
`
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 20px;
  border: 1px solid #ec6149;
  font-size: 15px;
  cursor:pointer;
  &.reg{
    color:#ec6149;
    :hover{
      background:rgba(236,97,73,.05);
    }
  }
  &.writing{
    color:#fff;
    background:#e24e34;
    :hover{
      background:#ec6149;
    }
    .iconfont{
      margin-right: 5px;
      font-size: 17px;
      vertical-align: middle;
    }
  }
`

