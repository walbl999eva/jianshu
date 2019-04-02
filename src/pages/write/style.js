import styled from "styled-components";

export const WriteWrapper = styled.div`
  width: 960px;
  margin: 56px auto 0;
  &:after{
    content: '';
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
  }
  .empty{
    padding-top: 40px;
    text-align: center;
    font-size: 30px;
    color:#ccc;
  }
`
