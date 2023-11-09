import { Card } from "antd";
import styled from "styled-components";



export const WrappercardStyle = styled(Card)`
width:200px;
& img{
  height:200px;
  width:200px;
}

`

export const StyleNameProduct = styled.div`
font-weight:400;
font-size:12px;
line-height:16px;
color:rgb(56,56,61)
`
export const WrapperReport = styled.div`
font-size:11px;
color:rgb(128,128,137);
display:flex;
align-items:center;
`
export const WrapperPrice = styled.div`
color:red;
font-size:18px;
font-weight:500;
margin: 8px 0 3px;
`