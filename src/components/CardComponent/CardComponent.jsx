import React from 'react'
import { StyleNameProduct, WrapperPrice, WrapperReport, WrappercardStyle } from './style'
import { StarFilled } from '@ant-design/icons';
import imageCard from '../../Imagess/Image1/Ip13.webp'
const CardComponent = () => {
  return (
    <WrappercardStyle
      hoverable
      headStyle={{ width: '200px', height: '200px' }}
      style={{ width: 240 }}
      bodyStyle={{ padding: '10px' }}
      cover={<img alt="Iphone" src={imageCard} />}
    >
      <StyleNameProduct> Iphone </StyleNameProduct>
      <WrapperReport>
        <span>
          <span>4.9</span> <StarFilled style={{ fontSize: '10px', color: 'yellow' }} />
        </span>
      </WrapperReport>
      <WrapperPrice>10,000,000 vnd</WrapperPrice>

    </WrappercardStyle>
  )
}

export default CardComponent