import Slider from 'react-slick';
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
    <Slider {...settings}>
      {arrImage.map((image) => {
        return (
          <center>
            <Image src={image} alt="Slider" preview={false} width="1000px" height="350px" />
          </center>
        )
      })}
    </Slider>
  )
}

export default SlideComponient