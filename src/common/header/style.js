import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  min-width: 768px;
  max-width: 1440px;
  height: 56px;
  margin: 0 auto;
  background:#fff;
  border-bottom: 1px solid #f0f0f0;
  z-index: 1;
  @media (max-width:1080px){
    padding-left: 100px;
    padding-right: 221px;
  }
`

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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
  //height: 56px;
  line-height: 56px;
  padding: 0 15px;
  font-size: 15px;
  cursor:pointer;
  &.left{
    font-size: 17px;
    float:left;
    color:#333;
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
  }
`
export const SearchWrapper = styled.div`
  position: relative;
  float:left;
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
  width: 160px;
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
    width: 240px;
  }
  &.slide-exit-active{
    width: 160px;
  }
  &.focused{
    width: 240px;
  }
  &::placeholder{
    color:#999;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background:#fff;
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
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 15px;
  &.reg{
    color:#ec6149;
  }
  &.writing{
    color:#fff;
    background:#ec6149;
    .iconfont{
      margin-right: 5px;
      font-size: 17px;
      vertical-align: middle;
    }
  }
`

