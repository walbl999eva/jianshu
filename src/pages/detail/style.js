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
export const DetailInfoWrapper = styled.div`
  margin-top: ${(props) => props.bottom ? 0 : '30px'};
  margin-bottom: ${(props) => props.bottom ? 0 : '40px'};
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
      :hover{
        background-color: #3db922;
      }
      ${(props) => props.bottom ? `
        position: absolute;
        top: 18px;
        right: 18px;
        width: 100px;
        margin-top: 4px;
        padding: 8px 0;
        font-size: 16px;
      ` : null};
      span{
        margin-left: 2px;
        display: inline;
        vertical-align: middle;
      }
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
        .iconfont{
          padding-right: 3px;
          font-size: 16px;
          vertical-align: baseline;
        }
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
export const Note = styled.div`
  position: fixed;
  top: 80px;
  right: 50%;
  margin-right: -560px;
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
  @media (max-width:992px){
    display:none;
  }
`
export const Support = styled.div`
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
    :hover{
      background-color: #ec6149;
    }
  }
`
export const BottomDetail = styled.div`
  position: relative;
  padding: 20px;
  background-color: hsla(0,0%,71%,.1);
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 12px;
  .signature{
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #e1e1e1;
    color: #969696;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
export const MetaBottomWrapper = styled.div`
  margin: 40px 0 80px;
  .like{
    display: inline-block;
    position: relative;
    padding: 20px 0;
    font-size: 0;
    border: 1px solid #EA6F5A;
    border-radius: 40px;
    color: #EA6F5A;
    :hover{
      background-color: rgba(236, 97, 73, 0.05);
    }
    .likeBtn{
      display: inline-block;
      font-size: 19px;
      padding-right: 32px;
      cursor:pointer;
      .iconfont{
        font-size: 20px;
        padding: 0 10px 0 20px;
      }
    }
    .likeNum{
      font-size: 18px;
      border-left: 1px solid rgba(236, 97, 73, 0.4);
      display: inline-block;
      margin-left: -15px;
      padding: 0 26px 0 18px;
    }
  }
  .shareList{
    float: right;
    margin-top: 6px;
    .shareItem{
      width: 50px;
      height: 50px;
      line-height: 50px;
      margin-left: 5px;
      text-align: center;
      border: 1px solid #dcdcdc;
      border-radius: 50%;
      vertical-align: middle;
      display: inline-block;
      position: relative;
      cursor:pointer;
      :hover{
        background-color: hsla(0,0%,71%,.1);
      }
      .iconfont{
        font-size: 30px;
        &.wechat{
          color: #00bb29;
        }
        &.weibo{
          color: #e05244;
        }
        &.pic{
          color: #9b9b9b;
          font-size: 24px;
        }
      }
      &.more{
        width: auto;
        padding: 4px 18px;
        font-size: 14px;
        color: #9b9b9b;
        line-height: 40px;
        border-radius: 50px;
        box-sizing:border-box;
      }
    }
  }
`
export const MetaTip = styled.div`
  position: absolute;
  left: 50%;
  top: -50%;
  width: max-content;
  padding: 8px 10px;
  line-height: 1;
  font-size: 14px;
  text-align: center;
  color:#fff;
  background:#000;
  border-radius: 5px;
  box-sizing:border-box;
  transform: translate3d(-50%,-50%,0);
  z-index: 1;
  .trangle{
    position: absolute;
    left: 50%;
    bottom: -10px;
    width: 20px;
    height: 20px;
    background:#000;
    transform: rotate(45deg) translate3d(-65%,0,0);
    border: 1px solid #000;
    box-sizing:border-box;
    z-index: -1;
  }
  ${(props) => props.img ? `
    transform: translate3d(-50%,-90%,0);
    color:#000;
    background:#fff;
    border: 1px solid #eee;
    padding-bottom: 0;
    img{
      width: 150px;
      height: 150px;
    }
    .text{
      background:#fff;
      padding-bottom: 10px;
    }
    .trangle{
      bottom: -18px;
      background:#fff;
      border: 1px solid #eee;
    }
  ` : null};
`
export const CommentsWrapper=styled.div`
  padding-top: 20px;
  .newComment{
    position: relative;
    margin-left: 48px;
    margin-bottom: 20px;
    .avatar{
      position: absolute;
      left: -48px;
      margin-right: 5px;
      width: 38px;
      height: 38px;
      vertical-align: middle;
      display: inline-block;
      cursor:pointer;
      img{
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
      }
    }
    .commentContainer{
      text-align: center;
      width: 100%;
      height: 80px;
      line-height: 80px;
      font-size: 13px;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
      background-color: hsla(0,0%,71%,.1);
      resize: none;
      display: inline-block;
      vertical-align: top;
      outline-style: none;
      box-sizing:border-box;
      .signBtn{
        width: 78px;
        margin: 11px 10px 0 0;
        padding: 7px 18px;
        font-size: 16px;
        border: none;
        border-radius: 20px;
        color: #fff;
        background-color: #3194d0;
        text-decoration: none;
        :hover{
          background-color: #187cb7;
        }
      }
      span{
        font-size: 14px;
      }
    }
  }
  .CommentList{
    margin-top: 30px;
    .listTitle{
      padding-bottom: 20px;
      font-size: 17px;
      font-weight: 700;
      border-bottom: 1px solid #f0f0f0;
      .titleItem{
        vertical-align: middle;
        &.authorOnly{
          margin-left: 10px;
          padding: 4px 8px;
          font-size: 12px;
          color: #969696;
          border: 1px solid #e1e1e1;
          border-radius: 12px;
          cursor:pointer;
        }
        &.right{
          float: right;
          margin-left: 10px;
          font-size: 12px;
          font-weight: 400;
          color: #969696;
          display: inline-block;
          cursor:pointer;
          &.active{
            color:#2f2f2f;;
          }
        }
      }
    }
    .commentItem{
      padding: 20px 0 30px;
      border-bottom: 1px solid #f0f0f0;
      .author{
        margin-bottom: 15px;
        .avatar{
          margin-right: 10px;
          width: 38px;
          height: 38px;
          vertical-align: middle;
          display: inline-block;
          box-sizing:border-box;
          cursor:pointer;
          img{
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
            box-sizing:border-box;
          }
        }
        .info{
          display: inline-block;
          vertical-align: middle;
          .name{
            font-size: 15px;
            color: #333;
            cursor:pointer;
          }
          .meta{
            margin-top: 8px;
            font-size: 12px;
            color: #969696;
            span{
              margin-right: 6px;
            }
          }
        }
      }
      .commentWrapper{
        box-sizing:border-box;
        p{
          margin: 10px 0;
          line-height: 1.5;
          font-size: 16px;
          word-break: break-word;
          color:#333;
        }
        .tool{
          box-sizing:border-box;
          .like,.reply{
            margin-right: 15px;
            font-size: 0;
            color: #969696;
            display: inline-block;
            cursor:pointer;
            :hover{
              color:#333;
            }
            &.active{
              color:#ea6f5a;
              :hover{
                color:#e24e34;
              }
            }
            span{
              vertical-align: middle;
              font-size: 14px;
            }
            .iconfont{
              font-size: 16px;
              padding-right: 3px;
              vertical-align: top;
              &.thumb{
                display: inline-block;
                vertical-align: bottom;
                transform: rotate(-10deg);
              }
            }
          }
        }
      }
      .subCommentList{
        margin-top: 20px;
        padding: 5px 0 5px 20px;
        border-left: 2px solid #d9d9d9;
        box-sizing:border-box;
        .content{
          color:#333;
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px dashed #f0f0f0;
          > div{
            margin: 0 0 5px;
            font-size: 14px;
            line-height: 1.5;
            .name{
              margin-right: 5px;
              display: inline-block;
              a{
                text-decoration: none;
                color: #3194d0;
              }
            }
            span{
              a{
                color: #3194d0;
                text-decoration: none;
                margin-right: 5px;
              }
            }
          }
          .subTool{
            font-size: 12px;
            color: #969696;
            .toolItem{
              margin-left: 10px;
              color: #969696;
              cursor:pointer;
              :hover{
                color:#333;
              }
              .iconfont{
                margin-right: 5px;
                font-size: 12px;
                vertical-align: middle;
              }
            }
          }
        }
        .moreSubComment{
          display: inline-block;
          font-size: 14px;
          color: #969696;
          :hover{
            color:#333;
          }
          .iconfont{
            margin-right: 5px;
          }
          .addComment{
            cursor: pointer;
          }
        }
      }
    }
  }
  .pagination{
    margin: 20px 0;
    text-align: center;
    padding-left: 0;
    border-radius: 4px;
    li{
      margin: 0 5px;
      display: inline-block;
      line-height: 20px;
      box-sizing:border-box;
      :first-child a{
        border-radius: 20px;
      }
      :last-child a{
        border-radius: 20px;
      }
      a{
        position: relative;
        float: left;
        padding: 6px 12px;
        text-decoration: none;
        font-size: 14px;
        background-color: #fff;
        color: #969696;
        border: 1px solid #ddd;
        border-radius: 20px;
        margin-left: -1px;
        line-height: 20px;
        box-sizing:border-box;
        :hover{
          background-color: #eee;
          border-color: #ddd;
        }
        &.active{
          font-weight: 700;
          border: none;
          pointer-events: none;
        }
      }
    }
  }
`
