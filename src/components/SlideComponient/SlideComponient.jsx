import WrapperSliderStyle from 'react-slick';
import React from 'react'
import { Image } from 'antd';
const SlideComponient = ({ arrImage }) => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000

  };
  return (
    <WrapperSliderStyle {...settings}>
      {arrImage.map((image) => {
        return (

          <Image key={image} src={image} alt="Slider" preview={false} width="100%" height="300px" />

        )
      })}
    </WrapperSliderStyle>
  )
}

export default SlideComponient